import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import adnan from "@/assets/adnan.jpg";
import { Film, Bot, TrendingUp, ArrowRight, Sparkles, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adnan Sami — Cinematic · AI Automation · Growth" },
      { name: "description", content: "Transform your brand with cinematic direction, AI-driven automation and scalable growth strategy." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 pt-20 pb-28 md:pt-32 md:pb-40">
          <div className="flex items-center gap-2 mb-6 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
              <Sparkles className="h-3 w-3 text-primary" /> High-Value Solution Provider
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl animate-fade-up">
            Make your brand{" "}
            <span className="text-gradient">cinematic, automated</span> and built to scale.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
            I combine high-end creative direction, AI-driven systems and proven growth strategy to turn modern
            businesses into category leaders.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-hero-gradient px-7 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 transition"
            >
              Book a Strategy Call <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3 text-sm font-semibold hover:bg-secondary/80 transition"
            >
              View Work
            </Link>
          </div>

          {/* Floating profile card */}
          <div className="mt-20 grid md:grid-cols-[auto_1fr] gap-6 items-center max-w-3xl glass rounded-3xl p-6 shadow-elegant animate-float">
            <img
              src={adnan}
              alt="Adnan Sami"
              className="w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover ring-2 ring-primary/40 shadow-glow"
              width={144}
              height={144}
            />
            <div>
              <div className="flex gap-1 text-[var(--gold)] mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <h3 className="font-display text-2xl font-bold">Adnan Sami</h3>
              <p className="text-sm text-muted-foreground">
                Creative Director · AI Automation Architect · Growth Strategist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="container mx-auto max-w-7xl px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Three pillars. One outcome.</p>
          <h2 className="text-3xl md:text-5xl font-bold">A complete system for modern brands</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-3xl p-8 glass hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-hero-gradient mb-5 shadow-glow">
                <p.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <Link to="/services" className="text-sm text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 glass rounded-3xl p-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">{s.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto max-w-5xl px-4 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-10 md:p-16 text-center shadow-elegant">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover" }} />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">Ready to scale, automate and dominate?</h2>
            <p className="mt-4 text-primary-foreground/90 max-w-xl mx-auto">
              Let's design the system that turns your brand into a category-defining force.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-8 py-3 text-sm font-semibold text-foreground shadow-xl hover:scale-105 transition"
            >
              Book a Discovery Call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const pillars = [
  { icon: Film, title: "Cinematic Creative Direction", desc: "Story-driven visuals, ad films and brand worlds that move people and markets." },
  { icon: Bot, title: "AI-Driven Automation", desc: "Custom workflows, agents and systems that run your business while you sleep." },
  { icon: TrendingUp, title: "Scalable Growth Strategy", desc: "Funnels, positioning and growth loops engineered for compounding revenue." },
];

const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "40+", label: "Happy founders" },
  { value: "10x", label: "Avg. workflow speed" },
  { value: "24/7", label: "AI assistant" },
];