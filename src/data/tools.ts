export type Tool = {
  name: string;
  slug: string; // simpleicons slug
  color?: string; // brand hex without #
  category: "Creative" | "AI" | "Automation" | "Growth" | "Design";
  description: string;
};

export const tools: Tool[] = [
  { name: "Adobe Photoshop", slug: "adobephotoshop", color: "31A8FF", category: "Creative", description: "Photo retouching, compositing, brand visuals." },
  { name: "Premiere Pro", slug: "adobepremierepro", color: "9999FF", category: "Creative", description: "Edit cinematic ad films & social cutdowns." },
  { name: "After Effects", slug: "adobeaftereffects", color: "9999FF", category: "Creative", description: "Motion graphics, VFX, kinetic typography." },
  { name: "DaVinci Resolve", slug: "davinciresolve", color: "233A51", category: "Creative", description: "Pro color grading & finishing." },
  { name: "CapCut", slug: "capcut", color: "000000", category: "Creative", description: "Fast vertical-first social edits." },
  { name: "Figma", slug: "figma", color: "F24E1E", category: "Design", description: "Brand systems, web UI & prototypes." },
  { name: "Canva", slug: "canva", color: "00C4CC", category: "Design", description: "Rapid social creative for clients." },
  { name: "ChatGPT", slug: "openai", color: "412991", category: "AI", description: "Strategy, copy & custom GPT agents." },
  { name: "Claude", slug: "anthropic", color: "D97757", category: "AI", description: "Long-context reasoning & writing." },
  { name: "Midjourney", slug: "midjourney", color: "000000", category: "AI", description: "Concept art & moodboards." },
  { name: "n8n", slug: "n8n", color: "EA4B71", category: "Automation", description: "Self-hosted workflow automation." },
  { name: "Make", slug: "make", color: "6D00CC", category: "Automation", description: "Visual scenario automations." },
  { name: "Zapier", slug: "zapier", color: "FF4A00", category: "Automation", description: "Connect 5k+ apps quickly." },
  { name: "Notion", slug: "notion", color: "000000", category: "Automation", description: "Operating system for clients." },
  { name: "Google Analytics", slug: "googleanalytics", color: "E37400", category: "Growth", description: "Funnel & cohort analysis." },
  { name: "Meta Ads", slug: "meta", color: "0467DF", category: "Growth", description: "Paid acquisition & retargeting." },
  { name: "Google Ads", slug: "googleads", color: "4285F4", category: "Growth", description: "Search & performance campaigns." },
  { name: "HubSpot", slug: "hubspot", color: "FF7A59", category: "Growth", description: "CRM + lifecycle automation." },
];

export function toolIcon(slug: string, color?: string) {
  return `https://cdn.simpleicons.org/${slug}/${color ?? "FFFFFF"}`;
}