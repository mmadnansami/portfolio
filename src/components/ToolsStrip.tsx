import { motion } from "framer-motion";
import { useState } from "react";
import { tools, toolIcon, toolInitial } from "@/data/tools";

export function ToolsStrip() {
  const shown = tools.slice(0, 12);
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
      {shown.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04, duration: 0.5 }}
          whileHover={{ y: -4, scale: 1.04 }}
          className="group glass rounded-2xl p-4 flex flex-col items-center justify-center gap-2 aspect-square hover:shadow-glow transition-shadow"
        >
          <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-white shadow-md grid place-items-center p-2">
            <ToolLogo name={t.name} slug={t.slug} color={t.color} className="h-full w-full" />
          </div>
          <span className="text-[10px] md:text-xs text-foreground/80 text-center leading-tight">{t.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

export function ToolLogo({
  name,
  slug,
  color,
  className = "h-7 w-7",
}: { name: string; slug: string; color?: string; className?: string }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div
        className={`${className} grid place-items-center rounded-lg bg-primary/20 text-primary text-[10px] font-bold`}
      >
        {toolInitial(name)}
      </div>
    );
  }
  return (
    <img
      src={toolIcon(slug, color)}
      alt={name}
      loading="lazy"
      onError={() => setErr(true)}
      className={`${className} object-contain transition-transform group-hover:scale-110`}
    />
  );
}
