import { motion } from "framer-motion";
import { tools, toolIcon } from "@/data/tools";

export function ToolsStrip() {
  const shown = tools.slice(0, 12);
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
      {shown.map((t, i) => (
        <motion.div
          key={t.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04, duration: 0.5 }}
          whileHover={{ y: -4, scale: 1.04 }}
          className="group glass rounded-2xl p-4 flex flex-col items-center justify-center gap-2 aspect-square hover:shadow-glow transition-shadow"
        >
          <img
            src={toolIcon(t.slug, t.color)}
            alt={t.name}
            className="h-8 w-8 md:h-10 md:w-10 object-contain transition-transform group-hover:scale-110"
            loading="lazy"
          />
          <span className="text-[10px] md:text-xs text-muted-foreground text-center leading-tight">{t.name}</span>
        </motion.div>
      ))}
    </div>
  );
}