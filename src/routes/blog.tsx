import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Resources | Adnan Sami" },
      { name: "description", content: "Essays and resources on AI automation, cinematic direction and modern growth strategy." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    tag: "AI Automation",
    title: "The 5-Layer Stack of an AI-Native Business",
    excerpt: "From data capture to autonomous decision-making — a practical map for founders shipping AI inside their company.",
    date: "May 2026",
    read: "8 min",
  },
  {
    tag: "Creative Direction",
    title: "Why Cinematic Branding Beats Paid Ads in 2026",
    excerpt: "Attention is the asset. Here's how a single hero film can outperform six months of performance marketing.",
    date: "Apr 2026",
    read: "6 min",
  },
  {
    tag: "Growth",
    title: "Compounding Funnels: Build Once, Earn Forever",
    excerpt: "The four properties of a self-improving growth system — and a step-by-step way to install one this quarter.",
    date: "Mar 2026",
    read: "10 min",
  },
  {
    tag: "AI Automation",
    title: "AI Agents That Actually Save You Time",
    excerpt: "Most AI agents are toys. Here's the architecture pattern we use for agents that ship real business value.",
    date: "Mar 2026",
    read: "7 min",
  },
];

function BlogPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-primary mb-3">Resources</p>
        <h1 className="text-4xl md:text-6xl font-bold">
          Field notes on <span className="text-gradient">AI, design & growth.</span>
        </h1>
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <article
            key={p.title}
            className="glass rounded-3xl p-7 hover:shadow-glow hover:-translate-y-1 transition cursor-pointer group"
          >
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
              <span className="rounded-full bg-primary/15 text-primary px-3 py-1 font-semibold">{p.tag}</span>
              <span>{p.date} · {p.read}</span>
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-gradient">{p.title}</h2>
            <p className="text-sm text-muted-foreground">{p.excerpt}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
              Read article <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition" />
            </div>
          </article>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-muted-foreground">More essays coming weekly.</p>
    </div>
  );
}