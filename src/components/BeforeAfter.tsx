import { useRef, useState } from "react";

export function BeforeAfter({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl select-none touch-none cursor-ew-resize glass"
      onMouseDown={(e) => { dragging.current = true; update(e.clientX); }}
      onMouseMove={(e) => dragging.current && update(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => { dragging.current = true; update(e.touches[0].clientX); }}
      onTouchMove={(e) => dragging.current && update(e.touches[0].clientX)}
      onTouchEnd={() => (dragging.current = false)}
    >
      {/* After (base) */}
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <span className="absolute top-3 right-3 rounded-full bg-primary/90 text-primary-foreground text-[10px] uppercase tracking-widest px-2.5 py-1 backdrop-blur">{afterLabel}</span>

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt="Before" className="absolute inset-0 h-full w-full object-cover grayscale contrast-75 brightness-75" style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }} draggable={false} />
        <span className="absolute top-3 left-3 rounded-full bg-background/80 text-foreground text-[10px] uppercase tracking-widest px-2.5 py-1 backdrop-blur border border-border">{beforeLabel}</span>
      </div>

      {/* Divider */}
      <div className="absolute top-0 bottom-0" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
        <div className="h-full w-0.5 bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white text-background shadow-xl">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 15 12 9 6" transform="translate(6 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
}