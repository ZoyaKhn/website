import fs from "node:fs";
import path from "node:path";
import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function localChatApi(): Plugin {
  let env: Record<string, string>;
  return {
    name: "local-chat-api",
    configResolved(config) {
      env = loadEnv(config.mode, process.cwd(), "");
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== "/api/chat" || req.method !== "POST") {
          next();
          return;
        }

        const apiKey = env.GEMINI_API_KEY;
        if (!apiKey) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Missing GEMINI_API_KEY" }));
          return;
        }

        const body = await new Promise<string>((resolve) => {
          let data = "";
          req.on("data", (chunk) => {
            data += chunk;
          });
          req.on("end", () => resolve(data));
        });

        const { message, history = [] } = JSON.parse(body || "{}") as {
          message?: string;
          history?: Array<{ role: "user" | "assistant"; content: string }>;
        };

        if (!message?.trim()) {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Message is required" }));
          return;
        }

        const knowledgePath = path.join(process.cwd(), "website-knowledge.md");
        const knowledgeBase = fs.readFileSync(knowledgePath, "utf8");
        const model = env.GEMINI_MODEL || "gemini-2.5-flash";
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: {
              parts: [
                {
                  text:
                    "You are the chatbot for Zoya Khan's portfolio website. Use the knowledge base below as the only source of truth.\n\n" +
                    knowledgeBase,
                },
              ],
            },
            contents: [
              ...history.map((entry) => ({
                role: entry.role === "assistant" ? "model" : "user",
                parts: [{ text: entry.content }],
              })),
              { role: "user", parts: [{ text: message }] },
            ],
            generationConfig: {
              temperature: 0.4,
              maxOutputTokens: 350,
            },
          }),
        });

        const payload: any = response.ok
          ? await response.json()
          : { error: "Gemini request failed", details: await response.text() };

        res.statusCode = response.ok ? 200 : response.status;
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({
            reply:
              payload?.candidates?.[0]?.content?.parts
                ?.map((part: { text?: string }) => part.text || "")
                .join("")
                .trim() || "I could not generate a response.",
            error: payload.error,
            details: payload.details,
          }),
        );
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), localChatApi()],
})
