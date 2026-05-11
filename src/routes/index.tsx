import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import adnan from "@/assets/adnan.jpg";
import portfolioCinema from "@/assets/portfolio-cinema.jpg";
import portfolioAutomation from "@/assets/portfolio-automation.jpg";
import portfolioGrowth from "@/assets/portfolio-growth.jpg";
import { Film, Bot, TrendingUp, ArrowRight, Sparkles, Star, Quote, Zap, Shield, Award } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adnan Sami — Cinematic · AI Automation · Growth" },
      { name: "description", content: "Transform your brand with cinematic direction, AI-driven automation and scalable growth strategy." },
    ],
  }),
  component: HomePage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/30 blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/30 blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto max-w-7xl px-4 pt-24 pb-32 md:pt-36 md:pb-44">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
              <Sparkles className="h-3 w-3 text-primary animate-pulse" /> High-Value Solution Provider
            </span>
          </motion.div>
          <motion.h1
            initial="hidden" animate="show" custom={1} variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-4xl tracking-tight"
          >
            Make your brand{" "}
            <span className="text-gradient">cinematic, automated</span> and built to scale.
          </motion.h1>
          <motion.p initial="hidden" animate="show" custom={2} variants={fadeUp} className="mt-6 max-w-2xl text-lg text-muted-foreground">
            I combine high-end creative direction, AI-driven systems and proven growth strategy to turn modern
            businesses into category leaders.
          </motion.p>
          <motion.div initial="hidden" animate="show" custom={3} variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
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
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
                Creative Director · AI Automation Architect · Growth Strategist
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
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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

      {/* Showcase */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Selected work</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Crafted with cinematic precision</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {showcase.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group relative overflow-hidden rounded-3xl glass aspect-[4/5]"
            >
              <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs uppercase tracking-widest text-primary mb-1">{s.tag}</p>
                <h3 className="text-xl font-bold">{s.title}</h3>
              </div>
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
  { icon: Film, title: "Cinematic Creative Direction", desc: "Story-driven visuals, ad films and brand worlds that move people and markets." },
  { icon: Bot, title: "AI-Driven Automation", desc: "Custom workflows, agents and systems that run your business while you sleep." },
  { icon: TrendingUp, title: "Scalable Growth Strategy", desc: "Funnels, positioning and growth loops engineered for compounding revenue." },
];

const showcase = [
  { img: portfolioCinema, title: "Cinematic Brand Film", tag: "Creative Direction" },
  { img: portfolioAutomation, title: "AI Sales Engine", tag: "Automation" },
  { img: portfolioGrowth, title: "10x Growth Funnel", tag: "Strategy" },
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
