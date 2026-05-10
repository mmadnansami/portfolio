import { createFileRoute, Link } from "@tanstack/react-router";
import adnan from "@/assets/adnan.jpg";
import { Sparkles, Target, Eye, Zap } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Vision | Adnan Sami" },
      { name: "description", content: "Adnan Sami — building the next generation of cinematic, AI-native, growth-engineered brands." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-[auto_1fr] gap-10 items-center">
        <img
          src={adnan}
          alt="Adnan Sami"
          loading="lazy"
          width={320}
          height={320}
          className="w-56 md:w-72 aspect-square rounded-3xl object-cover ring-2 ring-primary/40 shadow-glow"
        />
        <div>
          <p className="text-sm uppercase tracking-widest text-primary mb-3">About</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-gradient">Adnan Sami.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            I help ambitious founders and brands fuse cinematic storytelling, AI automation and growth
            engineering into one compounding system. My work sits at the intersection of art and intelligence —
            built for the next decade, not the last one.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-hero-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant"
          >
            Work with me
          </Link>
        </div>
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-6">
        {values.map((v) => (
          <div key={v.title} className="glass rounded-2xl p-6">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-hero-gradient mb-4">
              <v.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-lg mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 glass rounded-3xl p-10">
        <p className="text-sm uppercase tracking-widest text-primary mb-3">Vision</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Changing the industry standard.</h2>
        <p className="text-muted-foreground max-w-3xl">
          Most agencies pick a lane — design, tech, or marketing. The next generation of brands needs all three,
          working as one engine. My mission is to set a new standard: studios that ship cinematic creative,
          intelligent automation and measurable growth — under one roof, at premium quality.
        </p>
      </div>
    </div>
  );
}

const values = [
  { icon: Sparkles, title: "Premium craft", body: "Every pixel, prompt and pipeline is engineered like a flagship product." },
  { icon: Target, title: "Outcome obsessed", body: "We measure work by revenue, retention and reach — not deliverables." },
  { icon: Zap, title: "Built for speed", body: "AI-native workflows let us ship in days what teams ship in months." },
];