import { createFileRoute, Link } from "@tanstack/react-router";
import { Film, Bot, TrendingUp, Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Cinematic, AI Automation & Growth | Adnan Sami" },
      { name: "description", content: "Three integrated services: cinematic creative direction, AI-driven business automation, and scalable growth strategy." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Film,
    title: "Cinematic Creative Direction",
    tag: "Brand films · Ads · Visual identity",
    body: "I design story-driven worlds for your brand — concept, art direction, shot design, post — engineered to feel premium on every screen.",
    deliverables: ["Concept & treatment", "Storyboards & shot lists", "Direction on set", "Color & post supervision", "Hero brand films & ads"],
  },
  {
    icon: Bot,
    title: "AI-Driven Business Automation",
    tag: "Agents · Workflows · Integrations",
    body: "Custom AI agents and automation pipelines that handle support, sales ops, content, and reporting — connected to the tools you already use.",
    deliverables: ["AI strategy audit", "Custom agents (chat, voice, email)", "End-to-end workflow automation", "CRM / analytics integration", "Internal AI assistants"],
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth Strategy",
    tag: "Positioning · Funnels · Growth loops",
    body: "Sharp positioning + tested funnels + compounding growth loops. We don't chase tactics — we engineer systems that pay back month after month.",
    deliverables: ["Positioning & messaging", "Offer & funnel design", "Paid + organic growth plan", "Retention & lifecycle systems", "Quarterly growth roadmap"],
  },
];

function ServicesPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-primary mb-3">Services</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Design, intelligence and growth — <span className="text-gradient">working as one system.</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Three pillars that compound. Used together, they turn good businesses into iconic ones.
        </p>
      </div>

      <div className="mt-16 space-y-8">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="grid md:grid-cols-[auto_1fr_auto] gap-8 items-start glass rounded-3xl p-8 md:p-10 hover:shadow-glow transition"
          >
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-hero-gradient shadow-glow">
              <s.icon className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-primary mb-1">0{i + 1} · {s.tag}</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{s.title}</h2>
              <p className="text-muted-foreground mb-5 max-w-2xl">{s.body}</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/20 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/contact"
              className="self-end md:self-center inline-flex items-center gap-2 rounded-full bg-hero-gradient px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-elegant whitespace-nowrap"
            >
              Start <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}