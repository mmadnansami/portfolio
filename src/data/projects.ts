import portfolioCinema from "@/assets/portfolio-cinema.jpg";
import portfolioAutomation from "@/assets/portfolio-automation.jpg";
import portfolioGrowth from "@/assets/portfolio-growth.jpg";

export type Project = {
  slug: string;
  title: string;
  tag: "AI Creative Director" | "AI Automation" | "Growth Strategy";
  metric: string;
  summary: string;
  client: string;
  duration: string;
  cover: string;
  before: { img: string; caption: string };
  after: { img: string; caption: string };
  challenge: string;
  solution: string[];
  results: { label: string; value: string }[];
  stack: string[];
};

const cov = (i: number) => [portfolioCinema, portfolioAutomation, portfolioGrowth][i % 3];

export const projects: Project[] = [
  // ── 5 × AI Creative Director ─────────────────────────────────────────
  {
    slug: "lumen-ai-fashion-film",
    title: "Lumen — AI Fashion Film",
    tag: "AI Creative Director",
    metric: "+412% engagement",
    summary:
      "An entirely AI-generated 60-second hero film for a luxury fashion drop. Concept, direction, model-trained visuals and edit — solo.",
    client: "Lumen Atelier",
    duration: "3 weeks",
    cover: cov(0),
    before: { img: cov(0), caption: "Generic studio photos, zero brand story." },
    after: { img: cov(0), caption: "AI-directed cinematic film with custom-trained visual language." },
    challenge:
      "The brand needed a launch film at film-studio quality on a startup budget. Traditional production was 6× over budget.",
    solution: [
      "Trained a custom Midjourney style on the brand's archive and mood references.",
      "Storyboarded the film shot-by-shot, then generated each frame as AI imagery.",
      "Animated stills with Runway Gen-3 + After Effects camera moves.",
      "Graded everything in DaVinci to a custom warm-noir LUT for cohesion.",
    ],
    results: [
      { label: "Engagement", value: "+412%" },
      { label: "Launch revenue", value: "5.2×" },
      { label: "Production cost", value: "−84%" },
    ],
    stack: ["Midjourney", "Runway", "After Effects", "DaVinci Resolve", "ElevenLabs"],
  },
  {
    slug: "northwind-ai-commercial",
    title: "Northwind — AI Commercial Spot",
    tag: "AI Creative Director",
    metric: "2.4M organic views",
    summary:
      "A 30-second AI-generated commercial for a clean-energy startup. From script to delivery in 8 days, no shoot.",
    client: "Northwind Energy",
    duration: "8 days",
    cover: cov(2),
    before: { img: cov(2), caption: "Stock-footage explainer, indistinguishable from competitors." },
    after: { img: cov(2), caption: "Distinct, otherworldly AI-directed brand world." },
    challenge:
      "The team needed a launch commercial in under two weeks and refused to use stock footage. Live shoot was impossible.",
    solution: [
      "Wrote the script and storyboarded 24 shots in 48 hours.",
      "Generated every scene in Midjourney + Sora to a tight visual bible.",
      "Used Runway motion-brush + After Effects parallax for camera language.",
      "Layered ElevenLabs VO and a custom soundscape for cinema feel.",
    ],
    results: [
      { label: "Organic views", value: "2.4M" },
      { label: "Brand recall", value: "+3.1×" },
      { label: "Time to launch", value: "8 days" },
    ],
    stack: ["Midjourney", "Sora", "Runway", "After Effects", "ElevenLabs"],
  },
  {
    slug: "aurora-ai-brand-world",
    title: "Aurora — AI Brand Visual World",
    tag: "AI Creative Director",
    metric: "120+ assets in 5 days",
    summary:
      "Built an entire AI-generated visual identity — campaign imagery, social, web hero, OOH — for a perfume launch.",
    client: "Aurora Parfums",
    duration: "5 days",
    cover: cov(0),
    before: { img: cov(0), caption: "Inconsistent imagery, no recognizable visual world." },
    after: { img: cov(0), caption: "120+ on-brand AI visuals built around one trained style." },
    challenge:
      "Launch campaign across 6 channels needed one cohesive visual world. A photoshoot would take 6 weeks and 5× the budget.",
    solution: [
      "Trained a private style reference on the founder's mood inspiration.",
      "Generated 120+ on-brand stills, then upscaled with Magnific.",
      "Designed campaign layouts in Figma using the AI imagery.",
      "Delivered a brand-world guide so the team could keep generating.",
    ],
    results: [
      { label: "Assets shipped", value: "120+" },
      { label: "Time vs shoot", value: "−92%" },
      { label: "Campaign CTR", value: "+247%" },
    ],
    stack: ["Midjourney", "Magnific", "Figma", "Photoshop"],
  },
  {
    slug: "vela-ai-music-video",
    title: "Vela — AI-Directed Music Video",
    tag: "AI Creative Director",
    metric: "#3 trending music",
    summary:
      "A 3-minute fully AI-generated music video for an indie artist. Won a regional music video award.",
    client: "Vela (indie artist)",
    duration: "4 weeks",
    cover: cov(1),
    before: { img: cov(1), caption: "Lyric video on a $0 budget — no visual identity." },
    after: { img: cov(1), caption: "Cinematic AI music video, distinct surreal world." },
    challenge:
      "Artist wanted a high-budget look without a high-budget shoot, and a visual identity she could build a tour around.",
    solution: [
      "Translated lyrics into a 60-shot surreal storyboard.",
      "Generated each scene as AI stills, then animated in Runway Gen-3.",
      "Synced cuts to the beat with Premiere Pro and added VFX in After Effects.",
      "Color-graded in DaVinci for a consistent dreamlike palette.",
    ],
    results: [
      { label: "Trending position", value: "#3" },
      { label: "Award", value: "Best Visuals" },
      { label: "Streams uplift", value: "+186%" },
    ],
    stack: ["Midjourney", "Runway", "Premiere Pro", "After Effects", "DaVinci Resolve"],
  },
  {
    slug: "obsidian-ai-product-launch",
    title: "Obsidian — AI Product Launch Film",
    tag: "AI Creative Director",
    metric: "Sold out in 72h",
    summary:
      "Directed the AI launch film for a premium DTC drop. Sold the full inventory in 72 hours.",
    client: "Obsidian Co.",
    duration: "2 weeks",
    cover: cov(2),
    before: { img: cov(2), caption: "Founders' iPhone clip — no cinematic language." },
    after: { img: cov(2), caption: "Award-grade AI launch film at 1/10th the cost." },
    challenge:
      "Founders had product, no shoot budget and 2 weeks to launch. The film had to feel like a $50k production.",
    solution: [
      "Mood-locked the visual world with the founders in 48 hours.",
      "Generated hero shots in Midjourney + animated in Runway.",
      "Layered real product footage on top of AI environments.",
      "Cut a 60s hero + 12 vertical cutdowns for paid + organic.",
    ],
    results: [
      { label: "Time to sellout", value: "72h" },
      { label: "ROAS on launch", value: "8.4×" },
      { label: "Production cost", value: "−90%" },
    ],
    stack: ["Midjourney", "Runway", "After Effects", "DaVinci Resolve"],
  },

  // ── 3 × AI Automation ─────────────────────────────────────────────────
  {
    slug: "operator-gpt",
    title: "Operator GPT — Internal AI Ops",
    tag: "AI Automation",
    metric: "−18 hrs / week saved",
    summary:
      "Custom AI agent connected to CRM, Notion and Slack. Auto-triages leads, drafts replies and reports daily.",
    client: "Northstar SaaS",
    duration: "4 weeks",
    cover: cov(1),
    before: { img: cov(1), caption: "Manual lead triage, 6 hrs/day across the team." },
    after: { img: cov(1), caption: "AI agent triages, drafts and reports — humans only approve." },
    challenge:
      "Ops team was buried in lead qualification, CRM hygiene and Slack updates. Founders had no realtime pipeline view.",
    solution: [
      "Mapped recurring ops tasks across 4 tools into one workflow graph.",
      "Built a GPT-4 agent with custom tools for HubSpot, Notion and Slack.",
      "Wired n8n flows to trigger the agent on new leads and replies.",
      "Daily executive digest auto-posted to the founders' channel.",
    ],
    results: [
      { label: "Hours saved / week", value: "18+" },
      { label: "Lead response time", value: "−74%" },
      { label: "Ops hires avoided", value: "2" },
    ],
    stack: ["OpenAI", "n8n", "Notion", "HubSpot", "Slack"],
  },
  {
    slug: "studio-ai-client-engine",
    title: "Studio AI — Client Onboarding Engine",
    tag: "AI Automation",
    metric: "Onboarding: 5 days → 30 min",
    summary:
      "AI-powered onboarding for a creative agency. Intake form → brief → Notion workspace → kickoff email — all auto.",
    client: "Frame Studio",
    duration: "3 weeks",
    cover: cov(0),
    before: { img: cov(0), caption: "Onboarding took 5 days of manual back-and-forth." },
    after: { img: cov(0), caption: "Client signs intake → workspace ready in 30 minutes." },
    challenge:
      "Every new client took 5 days of manual setup before the team could even start the project.",
    solution: [
      "Built a GPT pipeline that turns intake answers into a project brief.",
      "Auto-created Notion workspace, Slack channel and Drive folders.",
      "Drafted a kickoff email tailored to the client's industry.",
      "Sent the founder a Slack digest with risks and recommended scope.",
    ],
    results: [
      { label: "Onboarding time", value: "5d → 30m" },
      { label: "Capacity unlocked", value: "2× clients" },
      { label: "Client NPS", value: "+38" },
    ],
    stack: ["OpenAI", "Make", "Notion", "Slack", "Google Workspace"],
  },
  {
    slug: "inboxzero-ai",
    title: "InboxZero AI — Executive Email Agent",
    tag: "AI Automation",
    metric: "92% of email auto-triaged",
    summary:
      "Private AI agent that triages, summarizes and drafts replies for a busy founder's inbox.",
    client: "Private founder",
    duration: "2 weeks",
    cover: cov(1),
    before: { img: cov(1), caption: "300+ emails/day, 2 hrs of triage every morning." },
    after: { img: cov(1), caption: "AI agent triages, drafts and surfaces only what matters." },
    challenge:
      "Founder lost 2 hours a day to email triage and missed important investor threads.",
    solution: [
      "Built a Gmail-connected agent that labels, summarizes and drafts replies.",
      "Trained the writing voice on 6 months of the founder's sent items.",
      "Surfaced a single 'priority' digest twice a day.",
      "Wired urgent-investor alerts to push notifications.",
    ],
    results: [
      { label: "Auto-triaged", value: "92%" },
      { label: "Time saved", value: "2 hrs / day" },
      { label: "Missed threads", value: "0" },
    ],
    stack: ["OpenAI", "n8n", "Gmail API", "Notion"],
  },

  // ── 2 × Growth ────────────────────────────────────────────────────────
  {
    slug: "northwave-growth",
    title: "Northwave SaaS — Growth System",
    tag: "Growth Strategy",
    metric: "4.2× MRR in 6 months",
    summary:
      "Repositioned the offer, designed a 3-step funnel and built a retention loop. Plateau → 4.2× MRR in two quarters.",
    client: "Northwave",
    duration: "6 months",
    cover: cov(2),
    before: { img: cov(2), caption: "Flat MRR, generic positioning, 1.8% trial→paid conversion." },
    after: { img: cov(2), caption: "Sharp positioning, segmented funnel, 7.4% trial→paid." },
    challenge:
      "Strong product, weak narrative. Trials were acquired but lost in onboarding.",
    solution: [
      "Ran 14 founder + customer interviews to rewrite positioning around one sharp wedge.",
      "Designed a 3-step funnel: targeted ad → tailored landing → guided onboarding.",
      "Launched a referral + reactivation loop with lifecycle emails.",
      "Set up weekly growth review with North-Star dashboards.",
    ],
    results: [
      { label: "MRR growth", value: "4.2×" },
      { label: "Trial → paid", value: "1.8% → 7.4%" },
      { label: "CAC payback", value: "−43%" },
    ],
    stack: ["Figma", "Google Analytics", "Meta Ads", "Notion"],
  },
  {
    slug: "halo-dtc-growth",
    title: "Halo DTC — Paid + Creative System",
    tag: "Growth Strategy",
    metric: "ROAS 1.4× → 4.8×",
    summary:
      "Rebuilt the entire paid acquisition system for a DTC skincare brand: creative pipeline, funnel, and retention loop.",
    client: "Halo Skincare",
    duration: "4 months",
    cover: cov(0),
    before: { img: cov(0), caption: "ROAS 1.4×, creative fatigue every 10 days." },
    after: { img: cov(0), caption: "ROAS 4.8×, 30+ creatives/month from one repeatable system." },
    challenge:
      "Paid ads worked, then broke. No system for fresh creative, no retention beyond first order.",
    solution: [
      "Built an AI-assisted creative pipeline pumping 30+ ad variants / month.",
      "Restructured ad accounts around 3 tested winning angles.",
      "Designed a post-purchase flow with personalized routine emails.",
      "Layered a subscription loop with smart pause/skip logic.",
    ],
    results: [
      { label: "ROAS", value: "1.4× → 4.8×" },
      { label: "LTV uplift", value: "+62%" },
      { label: "Creatives / month", value: "30+" },
    ],
    stack: ["Meta Ads", "Midjourney", "Figma", "HubSpot"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
