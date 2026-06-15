export type Tool = {
  name: string;
  slug: string; // simpleicons slug
  color?: string; // brand hex without #, undefined = white
  category: "Creative" | "AI" | "Automation" | "Growth" | "Design";
  description: string;
};

// All tools rendered in white by default for visibility on dark theme.
// Brand colors only where they shine on dark.
// Official logos via Simple Icons CDN (brand-default colors, full color SVG).
// `slug` must match the official simpleicons slug exactly.
export const tools: Tool[] = [
  // AI — primary focus
  { name: "ChatGPT", slug: "openai", category: "AI", description: "Creative direction, copy & custom GPT agents." },
  { name: "Midjourney", slug: "midjourney", category: "AI", description: "Cinematic concept art & moodboards." },
  { name: "Runway", slug: "runway", category: "AI", description: "AI video generation & rotoscoping." },
  { name: "Sora", slug: "openai", category: "AI", description: "Text-to-video for AI commercials." },
  { name: "Claude", slug: "anthropic", category: "AI", description: "Long-context reasoning & writing." },
  { name: "ElevenLabs", slug: "elevenlabs", category: "AI", description: "Voice cloning & cinematic VO." },
  { name: "Leonardo AI", slug: "leonardoai", category: "AI", description: "Brand-consistent image generation." },
  { name: "Stable Diffusion", slug: "stablediffusion", category: "AI", description: "Custom-trained image models." },

  // Creative
  { name: "Adobe Photoshop", slug: "adobephotoshop", category: "Creative", description: "Compositing, retouching, brand visuals." },
  { name: "Premiere Pro", slug: "adobepremierepro", category: "Creative", description: "Edit cinematic ad films & cutdowns." },
  { name: "After Effects", slug: "adobeaftereffects", category: "Creative", description: "Motion graphics, VFX, kinetic type." },
  { name: "DaVinci Resolve", slug: "davinciresolve", category: "Creative", description: "Pro color grading & finishing." },
  { name: "CapCut", slug: "capcut", category: "Creative", description: "Fast vertical-first social edits." },
  { name: "Adobe Illustrator", slug: "adobeillustrator", category: "Creative", description: "Logos, vector & brand systems." },

  // Design
  { name: "Figma", slug: "figma", category: "Design", description: "Brand systems, web UI & prototypes." },
  { name: "Canva", slug: "canva", category: "Design", description: "Rapid social creative for clients." },
  { name: "Framer", slug: "framer", category: "Design", description: "High-fidelity animated sites." },

  // Automation
  { name: "n8n", slug: "n8n", category: "Automation", description: "Self-hosted workflow automation." },
  { name: "Make", slug: "make", category: "Automation", description: "Visual scenario automations." },
  { name: "Zapier", slug: "zapier", category: "Automation", description: "Connect 5k+ apps quickly." },
  { name: "Notion", slug: "notion", category: "Automation", description: "Operating system for clients." },
  { name: "Airtable", slug: "airtable", category: "Automation", description: "Lightweight ops databases." },

  // Growth
  { name: "Google Analytics", slug: "googleanalytics", category: "Growth", description: "Funnel & cohort analysis." },
  { name: "Meta", slug: "meta", category: "Growth", description: "Paid acquisition & retargeting." },
  { name: "Google Ads", slug: "googleads", category: "Growth", description: "Search & performance campaigns." },
  { name: "HubSpot", slug: "hubspot", category: "Growth", description: "CRM + lifecycle automation." },
];

// Default = official brand color from Simple Icons (no `/COLOR` suffix).
export function toolIcon(slug: string, color?: string) {
  return color
    ? `https://cdn.simpleicons.org/${slug}/${color}`
    : `https://cdn.simpleicons.org/${slug}`;
}

export function toolInitial(name: string) {
  return name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase();
}
