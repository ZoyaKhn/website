import { useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Ask me anything about Zoya's portfolio, experience, projects, or skills.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    const message = input.trim();
    if (!message || loading) return;

    const nextMessages = [...messages, { role: "user", content: message }] as ChatMessage[];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          history: nextMessages.slice(0, -1).slice(-6),
        }),
      });

      const data = await response.json();
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.reply || "I could not answer that right now.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: "The chatbot is unavailable right now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[92vw] max-w-sm">
      {open ? (
        <div className="overflow-hidden rounded-3xl border border-cream/10 bg-navy/95 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-cream/10 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-cream">Portfolio Chat</p>
              <p className="text-xs text-cream/60">Powered by Gemini</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full px-3 py-1 text-sm text-cream/70 hover:bg-cream/10 hover:text-cream"
            >
              Close
            </button>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "ml-auto bg-rose-light text-navy"
                    : "bg-cream/8 text-cream"
                }`}
              >
                {message.content}
              </div>
            ))}
            {loading ? <div className="text-sm text-cream/50">Thinking...</div> : null}
          </div>

          <div className="border-t border-cream/10 p-3">
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  void sendMessage();
                }
              }}
              rows={3}
              placeholder="Ask about projects, experience, or skills..."
              className="w-full resize-none rounded-2xl border border-cream/10 bg-cream/5 px-3 py-2 text-sm text-cream outline-none placeholder:text-cream/35"
            />
            <div className="mt-3 flex justify-end">
              <button
                type="button"
                onClick={() => void sendMessage()}
                disabled={loading}
                className="rounded-full bg-rose-light px-4 py-2 text-sm font-medium text-navy transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="ml-auto mt-3 block rounded-full bg-rose-light px-5 py-3 text-sm font-semibold text-navy shadow-lg shadow-rose-light/20"
      >
        {open ? "Hide chat" : "Ask Zoya's AI"}
      </button>
    </div>
  );
}
