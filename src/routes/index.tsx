import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import adnan from "@/assets/adnan.jpg";
import { Wand2, Bot, TrendingUp, ArrowRight, Sparkles, Star, Quote, Zap, Shield, Award } from "lucide-react";
import { ToolsStrip } from "@/components/ToolsStrip";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adnan Sami — AI Creative Director · Automation · Growth" },
      { name: "description", content: "AI Creative Director building cinematic AI-generated films, brand worlds and automation systems for ambitious brands." },
    ],
  }),
  component: HomePage,
});

const ease = [0.22, 1, 0.36, 1] as const;

function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[100px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-[100px]" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 pt-24 pb-32 md:pt-36 md:pb-44">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
              <Sparkles className="h-3 w-3 text-primary animate-pulse" /> AI Creative Director · Available for new projects
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-4xl tracking-tight"
          >
            I'm your{" "}
            <span className="text-gradient">AI Creative Director.</span> Cinematic brand films, generated.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            I direct cinematic AI-generated films, brand worlds and campaigns for founders and CEOs — at a fraction of
            the cost of a traditional shoot. Backed by AI automation and growth strategy for the full system.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-hero-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:shadow-glow transition-all hover:scale-105"
            >
              Book a Strategy Call <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold hover:bg-secondary/80 transition hover:scale-105"
            >
              View Work
            </Link>
          </motion.div>

          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease }}
            whileHover={{ y: -6 }}
            className="mt-20 grid md:grid-cols-[auto_1fr] gap-6 items-center max-w-3xl glass rounded-3xl p-6 shadow-elegant"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-hero-gradient rounded-2xl blur-xl opacity-60" />
              <img
                src={adnan}
                alt="Adnan Sami"
                className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover ring-2 ring-primary/40"
                width={144} height={144}
              />
            </div>
            <div>
              <div className="flex gap-1 text-[var(--gold)] mb-2">
                {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-current" />))}
              </div>
              <h3 className="font-display text-2xl font-bold">Adnan Sami</h3>
              <p className="text-sm text-muted-foreground">
                AI Creative Director · Automation Architect · Growth Strategist
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge icon={Award} text="Top 1% Provider" />
                <Badge icon={Shield} text="Verified" />
                <Badge icon={Zap} text="24h Response" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three pillars */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Three pillars. One outcome.</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">A complete system for modern brands</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl p-8 glass hover:shadow-glow transition-shadow duration-500"
            >
              <div className="absolute inset-0 rounded-3xl bg-hero-gradient opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-hero-gradient mb-5 shadow-glow group-hover:scale-110 transition-transform">
                  <p.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <Link to="/services" className="text-sm text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Tools */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">What I use</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Tools in my daily stack</h2>
          <p className="mt-3 text-muted-foreground">Battle-tested apps I trust to ship cinematic, automated, growth-ready work.</p>
        </div>
        <ToolsStrip />
        <div className="mt-8 text-center">
          <Link to="/tools" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            See the full stack <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Showcase */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Selected work</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Crafted with cinematic precision</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
            >
              <Link
                to="/portfolio/$slug"
                params={{ slug: s.slug }}
                className="group relative block overflow-hidden rounded-3xl glass aspect-[4/5] hover:shadow-glow transition-shadow"
              >
                <img src={s.cover} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-widest text-primary mb-1">{s.tag}</p>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 inline-flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    View case study <ArrowRight className="h-3 w-3" />
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            See full portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Stats */}
      <section className="container mx-auto max-w-7xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 glass rounded-3xl p-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-gradient">{s.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Trusted by founders</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Results that speak for themselves</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="glass rounded-3xl p-7 relative"
            >
              <Quote className="h-8 w-8 text-primary/40 mb-3" />
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="container mx-auto max-w-5xl px-4 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-hero-gradient p-10 md:p-16 text-center shadow-elegant"
        >
          <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover" }} />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground tracking-tight">Ready to scale, automate and dominate?</h2>
            <p className="mt-4 text-primary-foreground/90 max-w-xl mx-auto">
              Let's design the system that turns your brand into a category-defining force.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-8 py-3.5 text-sm font-semibold text-foreground shadow-xl hover:scale-105 transition"
            >
              Book a Discovery Call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="container mx-auto max-w-7xl px-4 py-20 md:py-24">{children}</section>;
}

function Badge({ icon: Icon, text }: { icon: typeof Award; text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs text-primary">
      <Icon className="h-3 w-3" /> {text}
    </span>
  );
}

const pillars = [
  { icon: Wand2, title: "AI Creative Direction", desc: "End-to-end AI-generated brand films, commercials & visual worlds. Hollywood quality, startup speed." },
  { icon: Bot, title: "AI-Driven Automation", desc: "Custom agents, workflows and systems that run your business while you sleep." },
  { icon: TrendingUp, title: "Scalable Growth Strategy", desc: "Funnels, positioning and growth loops engineered for compounding revenue." },
];

const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "40+", label: "Happy founders" },
  { value: "10x", label: "Avg. workflow speed" },
  { value: "24/7", label: "AI assistant" },
];

const testimonials = [
  { quote: "Adnan rebuilt our entire funnel with AI — 3x leads in 6 weeks. The creative direction is on another level.", name: "Sara K.", role: "Founder, Lumen Studio" },
  { quote: "His automation system replaced two full-time hires. Cinematic ads tripled our conversion rate.", name: "Mehedi R.", role: "CEO, Northstar SaaS" },
  { quote: "Working with Adnan feels like hiring a strategy team and a film studio in one. Unmatched ROI.", name: "Priya M.", role: "CMO, Aurora DTC" },
];
