import portfolioCinema from "@/assets/portfolio-cinema.jpg";
import portfolioAutomation from "@/assets/portfolio-automation.jpg";
import portfolioGrowth from "@/assets/portfolio-growth.jpg";

export type Project = {
  slug: string;
  title: string;
  tag: string;
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

export const projects: Project[] = [
  {
    slug: "aurora-brand-film",
    title: "Aurora — Luxury Brand Film",
    tag: "Cinematic Direction",
    metric: "+312% engagement",
    summary:
      "A 90-second hero film for a premium fashion launch. Concept, direction and post led end-to-end. Drove a record-breaking launch week.",
    client: "Aurora Atelier",
    duration: "6 weeks",
    cover: portfolioCinema,
    before: {
      img: portfolioCinema,
      caption: "Flat product shots, no story, low engagement.",
    },
    after: {
      img: portfolioCinema,
      caption: "Cinematic hero film with editorial pacing & color grading.",
    },
    challenge:
      "The brand had a stunning product line but no visual identity that matched its price point. Launch content felt generic and underperformed paid campaigns.",
    solution: [
      "Built a full creative brief, mood board and shotlist informed by editorial fashion references.",
      "Directed a 2-day shoot with cinema lenses, motion control and a 4-person crew.",
      "Hand-graded every shot in DaVinci Resolve to a custom warm-noir LUT.",
      "Delivered hero film + 18 social cutdowns optimized per platform.",
    ],
    results: [
      { label: "Engagement", value: "+312%" },
      { label: "Launch week revenue", value: "4.1×" },
      { label: "Press features", value: "11" },
    ],
    stack: ["DaVinci Resolve", "Adobe Premiere Pro", "After Effects", "Photoshop"],
  },
  {
    slug: "operator-gpt",
    title: "Operator GPT — Internal AI Ops",
    tag: "AI Automation",
    metric: "−18 hrs / week saved",
    summary:
      "Custom AI agent connected to CRM, Notion and Slack. Auto-triages leads, drafts replies and reports daily.",
    client: "Northstar SaaS",
    duration: "4 weeks",
    cover: portfolioAutomation,
    before: {
      img: portfolioAutomation,
      caption: "Manual lead triage in spreadsheets, 6 hrs/day across the team.",
    },
    after: {
      img: portfolioAutomation,
      caption: "AI agent triages, drafts and reports — humans only approve.",
    },
    challenge:
      "The ops team was buried in repetitive lead qualification, CRM hygiene and Slack updates. Founders couldn't see pipeline in real time.",
    solution: [
      "Mapped every recurring ops task across 4 tools into a single workflow graph.",
      "Built a GPT-4 agent with custom tools for HubSpot, Notion and Slack.",
      "Wired n8n flows to trigger the agent on new leads, replies and meeting notes.",
      "Added a daily executive digest auto-posted to the founders' channel.",
    ],
    results: [
      { label: "Hours saved / week", value: "18+" },
      { label: "Lead response time", value: "−74%" },
      { label: "Ops headcount avoided", value: "2" },
    ],
    stack: ["OpenAI", "n8n", "Make", "Notion", "Zapier"],
  },
  {
    slug: "northwave-growth",
    title: "Northwave SaaS — Growth System",
    tag: "Growth Strategy",
    metric: "4.2× MRR in 6 months",
    summary:
      "Repositioned the offer, designed a 3-step funnel and built a retention loop. From plateau to 4.2× MRR in two quarters.",
    client: "Northwave",
    duration: "6 months",
    cover: portfolioGrowth,
    before: {
      img: portfolioGrowth,
      caption: "Flat MRR, generic positioning, 1.8% trial→paid conversion.",
    },
    after: {
      img: portfolioGrowth,
      caption: "Sharp positioning, segmented funnel, 7.4% trial→paid.",
    },
    challenge:
      "Strong product, weak narrative. The team was acquiring trials but losing them in onboarding, and the offer didn't differentiate from competitors.",
    solution: [
      "Ran 14 founder + customer interviews to rewrite positioning around a single sharp wedge.",
      "Designed a 3-step funnel: targeted ad → tailored landing → guided onboarding.",
      "Launched a referral + reactivation loop with lifecycle emails.",
      "Set up weekly growth review with North-Star metric dashboards.",
    ],
    results: [
      { label: "MRR growth", value: "4.2×" },
      { label: "Trial→paid", value: "1.8% → 7.4%" },
      { label: "CAC payback", value: "−43%" },
    ],
    stack: ["Figma", "Google Analytics", "Meta Ads", "Notion"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}