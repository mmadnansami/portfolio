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
// Lobe Hub /light assets are visible on white logo tiles; `*-color.png`
// entries are official full-color brand marks when the brand provides them.
const LOBE = "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-png@latest/light";
const SVGL = "https://svgl.app/library";
const SI = "https://cdn.simpleicons.org";

export const tools: Tool[] = [
  // AI — primary focus
  { name: "ChatGPT",          slug: "chatgpt",       iconUrl: `${LOBE}/openai.png`,             category: "AI",         description: "Creative direction, copy & custom GPT agents." },
  { name: "Midjourney",       slug: "midjourney",    iconUrl: `${LOBE}/midjourney.png`,         category: "AI",         description: "Cinematic concept art & moodboards." },
  { name: "Runway",           slug: "runway",        iconUrl: `${LOBE}/runway.png`,             category: "AI",         description: "AI video generation & rotoscoping." },
  { name: "Sora",             slug: "sora",          iconUrl: `${LOBE}/sora-color.png`,         category: "AI",         description: "Text-to-video for AI commercials." },
  { name: "Claude",           slug: "claude",        iconUrl: `${LOBE}/claude-color.png`,       category: "AI",         description: "Long-context reasoning & writing." },
  { name: "ElevenLabs",       slug: "elevenlabs",    iconUrl: `${LOBE}/elevenlabs.png`,         category: "AI",         description: "Voice cloning & cinematic VO." },
  { name: "Flux",             slug: "flux",          iconUrl: `${LOBE}/flux.png`,               category: "AI",         description: "State-of-the-art image generation." },
  { name: "Stable Diffusion", slug: "stability",     iconUrl: `${LOBE}/stability-color.png`,    category: "AI",         description: "Custom-trained image models." },

  // Creative
  { name: "Adobe Photoshop",  slug: "photoshop",     iconUrl: `${SVGL}/photoshop.svg`,        category: "Creative",   description: "Compositing, retouching, brand visuals." },
  { name: "Premiere Pro",     slug: "premiere",      iconUrl: `${SVGL}/premiere.svg`,         category: "Creative",   description: "Edit cinematic ad films & cutdowns." },
  { name: "After Effects",    slug: "after-effects", iconUrl: `${SVGL}/after-effects.svg`,    category: "Creative",   description: "Motion graphics, VFX, kinetic type." },
  { name: "DaVinci Resolve",  slug: "davinciresolve",iconUrl: `${SI}/davinciresolve`,         category: "Creative",   description: "Pro color grading & finishing." },
  { name: "CapCut",           slug: "capcut",        iconUrl: `${LOBE}/capcut.png`,             category: "Creative",   description: "Fast vertical-first social edits." },
  { name: "Adobe Illustrator",slug: "illustrator",   iconUrl: `${SVGL}/illustrator.svg`,      category: "Creative",   description: "Logos, vector & brand systems." },

  // Design
  { name: "Figma",            slug: "figma",         iconUrl: `${LOBE}/figma-color.png`,       category: "Design",     description: "Brand systems, web UI & prototypes." },
  { name: "Canva",            slug: "canva",         iconUrl: `${SVGL}/canva.svg`,            category: "Design",     description: "Rapid social creative for clients." },
  { name: "Framer",           slug: "framer",        iconUrl: `${SI}/framer`,                 category: "Design",     description: "High-fidelity animated sites." },

  // Automation
  { name: "n8n",              slug: "n8n",           iconUrl: `${LOBE}/n8n-color.png`,         category: "Automation", description: "Self-hosted workflow automation." },
  { name: "Make",             slug: "make",          iconUrl: `${LOBE}/make-color.png`,        category: "Automation", description: "Visual scenario automations." },
  { name: "Zapier",           slug: "zapier",        iconUrl: `${LOBE}/zapier-color.png`,      category: "Automation", description: "Connect 5k+ apps quickly." },
  { name: "Notion",           slug: "notion",        iconUrl: `${SVGL}/notion.svg`,           category: "Automation", description: "Operating system for clients." },
  { name: "Airtable",         slug: "airtable",      iconUrl: `${SI}/airtable`,               category: "Automation", description: "Lightweight ops databases." },

  // Growth
  { name: "Google Analytics", slug: "google-analytics", iconUrl: `${SVGL}/google-analytics.svg`, category: "Growth", description: "Funnel & cohort analysis." },
  { name: "Meta",             slug: "meta",          iconUrl: `${LOBE}/meta-color.png`,        category: "Growth",     description: "Paid acquisition & retargeting." },
  { name: "Google Ads",       slug: "googleads",     iconUrl: `${SI}/googleads`,              category: "Growth",     description: "Search & performance campaigns." },
  { name: "HubSpot",          slug: "hubspot",       iconUrl: `${SI}/hubspot`,                category: "Growth",     description: "CRM + lifecycle automation." },
];

export function toolInitial(name: string) {
  return name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase();
}
