import { useState, useRef, useEffect } from "react";
import { useServerFn } from "@tanstack/react-start";
import { aiChat } from "@/lib/contact.functions";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Adnan's AI assistant. Ask me anything about cinematic direction, AI automation, or growth strategy — in any language. 🌍",
    },
  ]);
  const chatFn = useServerFn(aiChat);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await chatFn({ data: { messages: next } });
      setMessages([...next, { role: "assistant", content: res.reply ?? "(no reply)" }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Sorry, something went wrong." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open AI Assistant"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-hero-gradient shadow-glow animate-glow-pulse hover:scale-105 transition-transform"
      >
        {open ? <X className="h-6 w-6 text-primary-foreground" /> : <MessageCircle className="h-6 w-6 text-primary-foreground" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[min(380px,calc(100vw-3rem))] h-[520px] flex flex-col rounded-2xl glass shadow-elegant overflow-hidden animate-fade-up">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/60">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-hero-gradient">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <div>
              <div className="text-sm font-semibold">AI Assistant</div>
              <div className="text-xs text-muted-foreground">Replies in your language</div>
            </div>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm whitespace-pre-wrap ${
                  m.role === "user"
                    ? "ml-auto bg-hero-gradient text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="bg-secondary text-secondary-foreground rounded-2xl px-3 py-2 text-sm w-16">
                <span className="inline-block animate-pulse">●●●</span>
              </div>
            )}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="border-t border-border p-3 flex gap-2 bg-card/60"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type in any language..."
              className="flex-1 rounded-full bg-input px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="grid h-9 w-9 place-items-center rounded-full bg-hero-gradient text-primary-foreground disabled:opacity-50"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}