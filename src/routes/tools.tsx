import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { tools, type Tool } from "@/data/tools";
import { ToolLogo } from "@/components/ToolsStrip";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "My Toolstack — Tools I Use Daily | Adnan Sami" },
      { name: "description", content: "The creative, AI, automation and growth tools Adnan Sami uses to ship premium client work." },
      { property: "og:title", content: "My Toolstack — Adnan Sami" },
      { property: "og:description", content: "Battle-tested creative, AI, automation & growth tools." },
    ],
  }),
  component: ToolsPage,
});

const categories: Tool["category"][] = ["Creative", "Design", "AI", "Automation", "Growth"];

function ToolsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-primary mb-3">My Toolstack</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          Tools I <span className="text-gradient">live in</span> every day.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          By the grace of Allah, I'm comfortable in every tool on this page — these are the apps I trust to deliver cinematic, automated and growth-ready work for clients.
        </p>
      </div>

      <div className="mt-14 space-y-14">
        {categories.map((cat) => {
          const list = tools.filter((t) => t.category === cat);
          if (!list.length) return null;
          return (
            <section key={cat}>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">{cat}</h2>
                <span className="h-px flex-1 bg-border" />
                <span className="text-xs text-muted-foreground">{list.length} tools</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {list.map((t, i) => (
                  <motion.div
                    key={t.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    whileHover={{ y: -6 }}
                    className="group glass rounded-2xl p-5 hover:shadow-glow transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-background/40 border border-border">
                        <ToolLogo name={t.name} slug={t.slug} color={t.color} className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-semibold leading-tight">{t.name}</h3>
                        <p className="text-[11px] uppercase tracking-widest text-primary">{t.category}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{t.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}