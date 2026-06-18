export type Tool = {
  name: string;
  slug: string; // stable id used for keys / fallback initials
  iconUrl: string; // full URL to an official brand asset (SVG/PNG)
  category: "Creative" | "AI" | "Automation" | "Growth" | "Design";
  description: string;
};

// Official brand assets sourced from:
//  - svgl.app (full-color official SVG logos for design/creative/SaaS brands)
//  - @lobehub/icons-static-png via jsDelivr (official AI brand marks)
//  - cdn.simpleicons.org (official monochrome marks where the brand only
//    publishes a single-color logomark)
// Lobe Hub ships PNGs in two folders:
//   /light  → black-on-transparent (use on light/white tiles)
//   /dark   → white-on-transparent (use on dark tiles)
// `*-color.png` variants live under /dark and are full-color (work anywhere).
const LOBE_MONO = "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-png@latest/light";
const LOBE_COLOR = "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-png@latest/dark";
const SVGL = "https://svgl.app/library";
const SI = "https://cdn.simpleicons.org";

export const tools: Tool[] = [
  // AI — primary focus
  { name: "ChatGPT",          slug: "chatgpt",       iconUrl: `${LOBE_MONO}/openai.png`,        category: "AI",         description: "Creative direction, copy & custom GPT agents." },
  { name: "Midjourney",       slug: "midjourney",    iconUrl: `${LOBE_MONO}/midjourney.png`,    category: "AI",         description: "Cinematic concept art & moodboards." },
  { name: "Runway",           slug: "runway",        iconUrl: `${LOBE_MONO}/runway.png`,        category: "AI",         description: "AI video generation & rotoscoping." },
  { name: "Sora",             slug: "sora",          iconUrl: `${LOBE_COLOR}/sora-color.png`,   category: "AI",         description: "Text-to-video for AI commercials." },
  { name: "Claude",           slug: "claude",        iconUrl: `${LOBE_COLOR}/claude-color.png`, category: "AI",         description: "Long-context reasoning & writing." },
  { name: "ElevenLabs",       slug: "elevenlabs",    iconUrl: `${LOBE_MONO}/elevenlabs.png`,    category: "AI",         description: "Voice cloning & cinematic VO." },
  { name: "Flux",             slug: "flux",          iconUrl: `${LOBE_MONO}/flux.png`,          category: "AI",         description: "State-of-the-art image generation." },
  { name: "Stable Diffusion", slug: "stability",     iconUrl: `${LOBE_COLOR}/stability-color.png`, category: "AI",      description: "Custom-trained image models." },

  // Creative
  { name: "Adobe Photoshop",  slug: "photoshop",     iconUrl: `${SVGL}/photoshop.svg`,        category: "Creative",   description: "Compositing, retouching, brand visuals." },
  { name: "Premiere Pro",     slug: "premiere",      iconUrl: `${SVGL}/premiere.svg`,         category: "Creative",   description: "Edit cinematic ad films & cutdowns." },
  { name: "After Effects",    slug: "after-effects", iconUrl: `${SVGL}/after-effects.svg`,    category: "Creative",   description: "Motion graphics, VFX, kinetic type." },
  { name: "DaVinci Resolve",  slug: "davinciresolve",iconUrl: `${SI}/davinciresolve`,         category: "Creative",   description: "Pro color grading & finishing." },
  { name: "CapCut",           slug: "capcut",        iconUrl: `${LOBE_MONO}/capcut.png`,       category: "Creative",   description: "Fast vertical-first social edits." },
  { name: "Adobe Illustrator",slug: "illustrator",   iconUrl: `${SVGL}/illustrator.svg`,      category: "Creative",   description: "Logos, vector & brand systems." },

  // Design
  { name: "Figma",            slug: "figma",         iconUrl: `${SVGL}/figma.svg`,            category: "Design",     description: "Brand systems, web UI & prototypes." },
  { name: "Canva",            slug: "canva",         iconUrl: `${SVGL}/canva.svg`,            category: "Design",     description: "Rapid social creative for clients." },
  { name: "Framer",           slug: "framer",        iconUrl: `${SVGL}/framer.svg`,           category: "Design",     description: "High-fidelity animated sites." },

  // Automation
  { name: "n8n",              slug: "n8n",           iconUrl: `${SVGL}/n8n.svg`,              category: "Automation", description: "Self-hosted workflow automation." },
  { name: "Make",             slug: "make",          iconUrl: `${SI}/make`,                   category: "Automation", description: "Visual scenario automations." },
  { name: "Zapier",           slug: "zapier",        iconUrl: `${SI}/zapier`,                 category: "Automation", description: "Connect 5k+ apps quickly." },
  { name: "Notion",           slug: "notion",        iconUrl: `${SVGL}/notion.svg`,           category: "Automation", description: "Operating system for clients." },
  { name: "Airtable",         slug: "airtable",      iconUrl: `${SI}/airtable`,               category: "Automation", description: "Lightweight ops databases." },

  // Growth
  { name: "Google Analytics", slug: "google-analytics", iconUrl: `${SVGL}/google-analytics.svg`, category: "Growth", description: "Funnel & cohort analysis." },
  { name: "Meta",             slug: "meta",          iconUrl: `${SVGL}/meta.svg`,             category: "Growth",     description: "Paid acquisition & retargeting." },
  { name: "Google Ads",       slug: "googleads",     iconUrl: `${SI}/googleads`,              category: "Growth",     description: "Search & performance campaigns." },
  { name: "HubSpot",          slug: "hubspot",       iconUrl: `${SI}/hubspot`,                category: "Growth",     description: "CRM + lifecycle automation." },
];

export function toolInitial(name: string) {
  return name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase();
}
