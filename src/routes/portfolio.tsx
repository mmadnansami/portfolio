import { createFileRoute } from "@tanstack/react-router";
import cinema from "@/assets/portfolio-cinema.jpg";
import automation from "@/assets/portfolio-automation.jpg";
import growth from "@/assets/portfolio-growth.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies | Adnan Sami" },
      { name: "description", content: "Selected work across cinematic direction, AI automation systems and growth campaigns." },
    ],
  }),
  component: PortfolioPage,
});

const cases = [
  {
    img: cinema,
    tag: "Cinematic Direction",
    title: "Aurora — Luxury Brand Film",
    metric: "+312% engagement",
    body: "A 90-second hero film for a premium fashion launch. Concept, direction and post led end-to-end. Drove a record-breaking launch week.",
  },
  {
    img: automation,
    tag: "AI Automation",
    title: "Operator GPT — Internal AI Ops",
    metric: "−18 hrs / week",
    body: "Custom AI agent connected to CRM, Notion and Slack. Auto-triages leads, drafts replies and reports daily. Cut ops load by 60%.",
  },
  {
    img: growth,
    tag: "Growth Strategy",
    title: "Northwave SaaS — Growth System",
    metric: "4.2× MRR in 6 months",
    body: "Repositioned the offer, designed a 3-step funnel and built a retention loop. From plateau to 4.2× MRR in two quarters.",
  },
];

function PortfolioPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-primary mb-3">Selected Work</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Work that <span className="text-gradient">moves brands forward.</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          A snapshot of recent projects across film, AI and growth — measurable outcomes, premium craft.
        </p>
      </div>

      <div className="mt-16 space-y-10">
        {cases.map((c, i) => (
          <article
            key={c.title}
            className={`grid md:grid-cols-2 gap-8 items-center glass rounded-3xl overflow-hidden hover:shadow-glow transition ${
              i % 2 ? "md:[direction:rtl]" : ""
            }`}
          >
            <div className="md:[direction:ltr] aspect-[16/10] overflow-hidden">
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                width={1280}
                height={800}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="md:[direction:ltr] p-8 md:p-10">
              <p className="text-xs uppercase tracking-widest text-primary mb-2">{c.tag}</p>
              <h2 className="text-2xl md:text-3xl font-bold">{c.title}</h2>
              <div className="mt-3 inline-flex rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-semibold">
                {c.metric}
              </div>
              <p className="mt-4 text-muted-foreground">{c.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}