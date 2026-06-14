export type Tool = {
  name: string;
  slug: string; // simpleicons slug
  color?: string; // brand hex without #, undefined = white
  category: "Creative" | "AI" | "Automation" | "Growth" | "Design";
  description: string;
};

// All tools rendered in white by default for visibility on dark theme.
// Brand colors only where they shine on dark.
export const tools: Tool[] = [
  // AI — primary focus
  { name: "ChatGPT", slug: "openai", category: "AI", description: "Creative direction, copy & custom GPT agents." },
  { name: "Midjourney", slug: "midjourney", category: "AI", description: "Cinematic concept art & moodboards." },
  { name: "Runway", slug: "runway", category: "AI", description: "AI video generation & rotoscoping." },
  { name: "Sora", slug: "openai", category: "AI", description: "Text-to-video for AI commercials." },
  { name: "Claude", slug: "anthropic", category: "AI", description: "Long-context reasoning & writing." },
  { name: "ElevenLabs", slug: "elevenlabs", category: "AI", description: "Voice cloning & cinematic VO." },
  { name: "Leonardo AI", slug: "leonardoai", category: "AI", description: "Brand-consistent image generation." },
  { name: "Stable Diffusion", slug: "stablediffusion", color: "FFD966", category: "AI", description: "Custom-trained image models." },

  // Creative
  { name: "Adobe Photoshop", slug: "adobephotoshop", color: "31A8FF", category: "Creative", description: "Compositing, retouching, brand visuals." },
  { name: "Premiere Pro", slug: "adobepremierepro", color: "9999FF", category: "Creative", description: "Edit cinematic ad films & cutdowns." },
  { name: "After Effects", slug: "adobeaftereffects", color: "D291FF", category: "Creative", description: "Motion graphics, VFX, kinetic type." },
  { name: "DaVinci Resolve", slug: "davinciresolve", color: "FF6B6B", category: "Creative", description: "Pro color grading & finishing." },
  { name: "CapCut", slug: "capcut", category: "Creative", description: "Fast vertical-first social edits." },
  { name: "Adobe Illustrator", slug: "adobeillustrator", color: "FF9A00", category: "Creative", description: "Logos, vector & brand systems." },

  // Design
  { name: "Figma", slug: "figma", color: "F24E1E", category: "Design", description: "Brand systems, web UI & prototypes." },
  { name: "Canva", slug: "canva", color: "00C4CC", category: "Design", description: "Rapid social creative for clients." },
  { name: "Framer", slug: "framer", category: "Design", description: "High-fidelity animated sites." },

  // Automation
  { name: "n8n", slug: "n8n", color: "EA4B71", category: "Automation", description: "Self-hosted workflow automation." },
  { name: "Make", slug: "make", color: "C77DFF", category: "Automation", description: "Visual scenario automations." },
  { name: "Zapier", slug: "zapier", color: "FF8A4A", category: "Automation", description: "Connect 5k+ apps quickly." },
  { name: "Notion", slug: "notion", category: "Automation", description: "Operating system for clients." },
  { name: "Airtable", slug: "airtable", color: "FFB400", category: "Automation", description: "Lightweight ops databases." },

  // Growth
  { name: "Google Analytics", slug: "googleanalytics", color: "FFB35E", category: "Growth", description: "Funnel & cohort analysis." },
  { name: "Meta Ads", slug: "meta", color: "5A9DFF", category: "Growth", description: "Paid acquisition & retargeting." },
  { name: "Google Ads", slug: "googleads", color: "6FA8FF", category: "Growth", description: "Search & performance campaigns." },
  { name: "HubSpot", slug: "hubspot", color: "FF8A65", category: "Growth", description: "CRM + lifecycle automation." },
];

export function toolIcon(slug: string, color?: string) {
  return `https://cdn.simpleicons.org/${slug}/${color ?? "FFFFFF"}`;
}

export function toolInitial(name: string) {
  return name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase();
}
