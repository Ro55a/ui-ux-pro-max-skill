// ─────────────────────────────────────────────────────────────────────────────
// SITE CONTENT — edit everything in this file to customise the website.
// All placeholder data, testimonials, stats, and demo figures live here.
// ─────────────────────────────────────────────────────────────────────────────

import { TrendingUp, Shield, Zap, Globe, Users, DollarSign } from "lucide-react";

// ── Company details ───────────────────────────────────────────────────────────

export const COMPANY = {
  name:      "Catalyst & Co.",
  tagline:   "Elite Business Advisory",
  phone:     "+44 (0) 20 7946 0321",
  email:     "advisory@catalyst.co.uk",
  office:    "Canary Wharf, London",
  guarantee: `If we don't identify at least three actionable growth opportunities in our
              first session, the call is on us — no obligations, no pressure.`,
};

// ── Hero section badges ───────────────────────────────────────────────────────

export const HERO_BADGES = [
  { icon: TrendingUp, label: "Average +340% revenue growth" },
  { icon: Shield,     label: "Fortune-500 grade analysis"   },
  { icon: Zap,        label: "Results in 30 days"           },
];

// ── Stats / Results section ───────────────────────────────────────────────────
// Replace these with your real figures.

export const STATS = [
  { value: 340, suffix: "%", label: "Average revenue growth within 12 months",   prefix: "+" },
  { value: 127, suffix: "+", label: "Startups and SMEs advised across Europe",    prefix: ""  },
  { value: 30,  suffix: "d", label: "Time to first measurable result",             prefix: ""  },
  { value: 4.9, suffix: "",  label: "Average client satisfaction score out of 5", prefix: ""  },
];

// ── Testimonials ──────────────────────────────────────────────────────────────
// Replace name/role/quote with real client testimonials.

export const TESTIMONIALS = [
  {
    initials: "SK",
    name:     "Sarah K.",
    role:     "CEO, FlowStack (Series A, £4M)",
    quote:    `"Catalyst identified a pricing flaw costing us £180K/yr in the first week.
               Six months later we'd tripled MRR and closed our Series A."`,
  },
  {
    initials: "JM",
    name:     "James M.",
    role:     "CTO, Meridian Labs (Series B, £12M)",
    quote:    `"Catalyst compressed 18 months of strategic planning into 6 weeks
               and gave us the clarity to close our Series B with confidence."`,
  },
];

// ── Dashboard demo metrics (HeroScroll / live platform mockup) ────────────────
// These numbers are shown inside the ContainerScroll dashboard animation.

export const DASHBOARD_METRICS = [
  { label: "MRR",        value: "£108K", delta: "+23%",  up: true  },
  { label: "CAC",        value: "£412",  delta: "-8%",   up: false },
  { label: "Net Margin", value: "56.4%", delta: "+14pp", up: true  },
  { label: "Runway",     value: "18 mo", delta: "Safe",  up: true  },
];

export const DASHBOARD_SPARKLINE = [30, 45, 38, 55, 49, 68, 72, 80, 76, 95, 88, 108];

export const DASHBOARD_PIPELINE = [
  { stage: "Awareness",   pct: 100, count: 840 },
  { stage: "Qualified",   pct: 62,  count: 521 },
  { stage: "Proposal",    pct: 34,  count: 285 },
  { stage: "Negotiation", pct: 18,  count: 151 },
  { stage: "Closed Won",  pct: 9,   count: 76  },
];

export const DASHBOARD_INSIGHT =
  "December MRR spike driven by Q4 enterprise deals — retention programme needed to sustain growth trajectory.";

// ── Financial Analyzer demo data ──────────────────────────────────────────────
// Shown before a user uploads their own spreadsheet.

export const DEMO_REVENUE = [
  { month: "Jan", revenue: 42000,  expenses: 31000, profit: 11000 },
  { month: "Feb", revenue: 47000,  expenses: 33000, profit: 14000 },
  { month: "Mar", revenue: 44000,  expenses: 35000, profit:  9000 },
  { month: "Apr", revenue: 56000,  expenses: 36000, profit: 20000 },
  { month: "May", revenue: 61000,  expenses: 38000, profit: 23000 },
  { month: "Jun", revenue: 58000,  expenses: 37000, profit: 21000 },
  { month: "Jul", revenue: 72000,  expenses: 40000, profit: 32000 },
  { month: "Aug", revenue: 80000,  expenses: 41000, profit: 39000 },
  { month: "Sep", revenue: 76000,  expenses: 43000, profit: 33000 },
  { month: "Oct", revenue: 95000,  expenses: 44000, profit: 51000 },
  { month: "Nov", revenue: 91000,  expenses: 45000, profit: 46000 },
  { month: "Dec", revenue: 108000, expenses: 47000, profit: 61000 },
];

export const DEMO_KPI = [
  { label: "Annual Revenue", value: "£830K", delta: "+127%", up: true  },
  { label: "Net Profit",     value: "£359K", delta: "+218%", up: true  },
  { label: "Avg Margin",     value: "43.2%", delta: "+14pp", up: true  },
  { label: "Burn Multiple",  value: "0.47×", delta: "−0.12", up: false },
];

export const DEMO_INSIGHTS = [
  { type: "positive" as const, insight: "Revenue CAGR of 157% — significantly above SME median of 42%" },
  { type: "positive" as const, insight: "Gross margin improving: Q4 operating leverage evident in Dec spike" },
  { type: "warning"  as const, insight: "Expense growth (51%) outpacing industry benchmark — audit recommended" },
  { type: "positive" as const, insight: "Profit-to-revenue ratio expanded from 26% → 56% over the period" },
];

// ── Market Research demo data ─────────────────────────────────────────────────

export const MARKET_STATS = [
  { label: "Total Addressable Market", value: "£4.2B", icon: Globe      },
  { label: "YoY Market Growth",        value: "+23%",  icon: TrendingUp },
  { label: "Active Buyers (UK)",        value: "142K",  icon: Users      },
  { label: "Avg. Contract Value",       value: "£8.4K", icon: DollarSign },
];

export const COMPETITORS = [
  {
    name: "Your Business",
    ticker: "YOU",
    color: "#F59E0B",
    pricing: "£299/mo",
    marketShare: "3%",
    rating: 4.7,
    growth: "+127%",
    strengths:  ["Product quality", "Customer service", "Agility"],
    weaknesses: ["Brand awareness", "Marketing budget"],
    radar: { Product: 88, Price: 72, Brand: 45, Support: 90, Speed: 95, Data: 70 },
  },
  {
    name: "Competitor A",
    ticker: "CMP-A",
    color: "#6366F1",
    pricing: "£499/mo",
    marketShare: "28%",
    rating: 3.9,
    growth: "+14%",
    strengths:  ["Brand recognition", "Enterprise sales", "Funding"],
    weaknesses: ["Slow iterations", "Poor support NPS"],
    radar: { Product: 70, Price: 40, Brand: 92, Support: 55, Speed: 40, Data: 80 },
  },
  {
    name: "Competitor B",
    ticker: "CMP-B",
    color: "#10B981",
    pricing: "£199/mo",
    marketShare: "18%",
    rating: 4.1,
    growth: "+62%",
    strengths:  ["Pricing", "SME focus", "Community"],
    weaknesses: ["Feature depth", "Integrations"],
    radar: { Product: 60, Price: 88, Brand: 58, Support: 70, Speed: 75, Data: 50 },
  },
  {
    name: "Competitor C",
    ticker: "CMP-C",
    color: "#EF4444",
    pricing: "£399/mo",
    marketShare: "12%",
    rating: 4.3,
    growth: "+38%",
    strengths:  ["Analytics suite", "Enterprise integrations"],
    weaknesses: ["UX complexity", "Onboarding"],
    radar: { Product: 82, Price: 50, Brand: 68, Support: 60, Speed: 55, Data: 92 },
  },
];

// ── Business Intelligence mock profile ────────────────────────────────────────
// Shown as a demo result when a user searches a company name.

export const MOCK_PROFILE = {
  industry:     "SaaS / B2B Software",
  employees:    "45–90",
  founded:      "2019",
  estimatedRev: "£1.2M – £3.4M ARR",
  fundingStage: "Seed / Pre-Series A",
  painPoints: [
    "No dedicated CFO — financial decisions made without unit-economics visibility",
    "CAC increasing 22% QoQ with no clear attribution model",
    "Churn rate 6.8% vs SaaS benchmark 4.5% — retention lever untapped",
    "Headcount doubled in 12 months, no OKR or productivity framework in place",
  ],
  opportunities: [
    "CFO-as-a-service engagement — immediate runway clarity",
    "Marketing attribution audit — potential 30–40% reduction in wasted spend",
    "Retention programme design — 1pp churn reduction ≈ £120K ARR impact",
    "OKR implementation to align 90-person org with growth targets",
  ],
  score:    87,
  priority: "High",
};
