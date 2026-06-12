import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { getProject, projects, type Project } from "@/data/projects";
import { BeforeAfter } from "@/components/BeforeAfter";

export const Route = createFileRoute("/portfolio/$slug")({
  head: ({ params }) => {
    const p = getProject(params.slug);
    return {
      meta: [
        { title: p ? `${p.title} — Case Study | Adnan Sami` : "Case Study | Adnan Sami" },
        { name: "description", content: p?.summary ?? "Case study by Adnan Sami." },
        { property: "og:title", content: p?.title ?? "Case Study" },
        { property: "og:description", content: p?.summary ?? "" },
        ...(p?.cover ? [{ property: "og:image", content: p.cover }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const p = getProject(params.slug);
    if (!p) throw notFound();
    return { project: p };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:py-20">
      <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" /> All projects
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-sm uppercase tracking-widest text-primary mb-3">{p.tag}</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">{p.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{p.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <span className="glass rounded-full px-4 py-1.5"><span className="text-muted-foreground">Client:</span> <strong>{p.client}</strong></span>
          <span className="glass rounded-full px-4 py-1.5"><span className="text-muted-foreground">Duration:</span> <strong>{p.duration}</strong></span>
          <span className="rounded-full px-4 py-1.5 bg-primary/15 text-primary border border-primary/20 font-semibold">{p.metric}</span>
        </div>
      </motion.div>

      {/* Before / After */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mt-14"
      >
        <div className="flex items-end justify-between mb-5">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-2">Transformation</p>
            <h2 className="text-2xl md:text-3xl font-bold">Before vs After</h2>
          </div>
          <p className="hidden md:block text-xs text-muted-foreground">Drag the slider →</p>
        </div>
        <BeforeAfter before={p.before.img} after={p.after.img} />
        <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
          <div className="glass rounded-2xl p-4"><strong className="text-foreground">Before · </strong><span className="text-muted-foreground">{p.before.caption}</span></div>
          <div className="glass rounded-2xl p-4"><strong className="text-primary">After · </strong><span className="text-muted-foreground">{p.after.caption}</span></div>
        </div>
      </motion.section>

      {/* Results */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mt-16 grid md:grid-cols-3 gap-4"
      >
        {p.results.map((r) => (
          <div key={r.label} className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient">{r.value}</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{r.label}</div>
          </div>
        ))}
      </motion.section>

      {/* Challenge / Solution */}
      <section className="mt-16 grid md:grid-cols-2 gap-6">
        <div className="glass rounded-3xl p-8">
          <p className="text-xs uppercase tracking-widest text-primary mb-2">The challenge</p>
          <h3 className="text-2xl font-bold mb-3">What we faced</h3>
          <p className="text-muted-foreground leading-relaxed">{p.challenge}</p>
        </div>
        <div className="glass rounded-3xl p-8">
          <p className="text-xs uppercase tracking-widest text-primary mb-2">The solution</p>
          <h3 className="text-2xl font-bold mb-4">How we shipped it</h3>
          <ul className="space-y-3">
            {p.solution.map((s) => (
              <li key={s} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stack */}
      <section className="mt-12">
        <p className="text-xs uppercase tracking-widest text-primary mb-3">Stack used</p>
        <div className="flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="glass rounded-full px-4 py-1.5 text-sm">{s}</span>
          ))}
        </div>
      </section>

      {/* Next + CTA */}
      <section className="mt-20 grid md:grid-cols-2 gap-4">
        <Link
          to="/portfolio/$slug"
          params={{ slug: next.slug }}
          className="group glass rounded-3xl p-7 hover:shadow-glow transition-shadow"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Next project</p>
          <p className="mt-2 text-xl font-bold group-hover:text-primary transition-colors">{next.title}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm text-primary">View case study <ArrowRight className="h-3 w-3" /></span>
        </Link>
        <Link
          to="/contact"
          className="rounded-3xl p-7 bg-hero-gradient text-primary-foreground shadow-elegant hover:shadow-glow transition-all hover:scale-[1.01]"
        >
          <p className="text-xs uppercase tracking-widest opacity-80">Want results like this?</p>
          <p className="mt-2 text-xl font-bold">Book a strategy call</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm">Get in touch <ArrowRight className="h-3 w-3" /></span>
        </Link>
      </section>
    </div>
  );
}