import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies | Adnan Sami" },
      { name: "description", content: "Selected work across cinematic direction, AI automation systems and growth campaigns." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-primary mb-3">Selected Work</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Work that <span className="text-gradient">moves brands forward.</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Click any project to open the full case study — challenge, before/after, solution & measurable results.
        </p>
      </div>

      <div className="mt-16 space-y-10">
        {projects.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 0.7 }}
          >
            <Link
              to="/portfolio/$slug"
              params={{ slug: c.slug }}
              className={`group grid md:grid-cols-2 gap-8 items-center glass rounded-3xl overflow-hidden hover:shadow-glow transition-all hover:scale-[1.01] ${
                i % 2 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="md:[direction:ltr] aspect-[16/10] overflow-hidden">
                <img
                  src={c.cover}
                  alt={c.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:[direction:ltr] p-8 md:p-10">
                <p className="text-xs uppercase tracking-widest text-primary mb-2">{c.tag}</p>
                <h2 className="text-2xl md:text-3xl font-bold">{c.title}</h2>
                <div className="mt-3 inline-flex rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-semibold">
                  {c.metric}
                </div>
                <p className="mt-4 text-muted-foreground">{c.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  View full case study <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}