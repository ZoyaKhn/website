import fs from "node:fs";
import path from "node:path";

type RequestBody = {
  message?: string;
  history?: Array<{ role: "user" | "assistant"; content: string }>;
};

const knowledgePath = path.join(process.cwd(), "website-knowledge.md");
const knowledgeBase = fs.readFileSync(knowledgePath, "utf8");

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Missing GEMINI_API_KEY" });
    return;
  }

  const { message, history = [] } = req.body as RequestBody;
  if (!message?.trim()) {
    res.status(400).json({ error: "Message is required" });
    return;
  }

  const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";
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

  if (!response.ok) {
    const errorText = await response.text();
    res.status(response.status).json({ error: "Gemini request failed", details: errorText });
    return;
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts
    ?.map((part: { text?: string }) => part.text || "")
    .join("")
    .trim();

  res.status(200).json({
    reply: text || "I could not generate a response.",
  });
}
