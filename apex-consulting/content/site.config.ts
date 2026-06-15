/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE CONFIGURATION — edit everything here.
 * No coding knowledge required. Save the file and the site updates instantly.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const COMPANY = {
  /** Your legal company name as registered at Companies House */
  name: "Apex Advisory Ltd",
  /** Short brand name used in the nav and logo */
  brandName: "Apex Advisory",
  /** One-line description for SEO */
  tagline: "Elite business consulting for startups and SMEs.",
  /** Displayed in the footer and legal pages */
  registrationNumber: "YOUR-COMPANIES-HOUSE-NUMBER",
  vatNumber: "YOUR-VAT-NUMBER",
  registeredAddress: "YOUR REGISTERED ADDRESS, London, UK",
  /** Office address shown in the Contact section */
  officeAddress: "Canary Wharf, London, EC2",
  phone: "+44 (0) 20 XXXX XXXX",
  email: "hello@yourdomain.co.uk",
  privacyEmail: "privacy@yourdomain.co.uk",
  /** Name or title of your Data Protection Officer (required for GDPR) */
  dpo: "The Data Protection Officer",
  /** Social links — leave blank to hide */
  linkedin: "https://linkedin.com/company/your-company",
  twitter: "",
};

export const HERO = {
  /**
   * Scroll-driven background video.
   * Drop your file at:  apex-consulting/public/hero.mp4
   * Recommended: 15–30 second cinematic loop, 1080p minimum.
   * Free sources: pexels.com/videos  coverr.co  mixkit.co
   * Leave as "" to show the gradient fallback instead.
   */
  videoSrc: "/hero.mp4",
  /** How many viewport-heights the scroll video section lasts (3 = 3× screen height of scrolling) */
  scrollLength: 3,
  eyebrow: "Independent Business Advisory",
  headlineLines: ["Clarity.", "Strategy.", "Growth."],
  subheadline:
    "We work with founders and management teams to fix the things that matter — finances, operations, and market position.",
  primaryCta: "Book a Free Strategy Call",
  secondaryCta: "What We Do",
};

/**
 * Statistics shown in the banner strip.
 * IMPORTANT: only include figures you can verify and stand behind.
 * Leave value as "" to hide that stat.
 */
export const STATS: { value: string; label: string }[] = [
  { value: "",    label: "" }, // e.g. { value: "£2.4M", label: "Additional revenue unlocked for clients" }
  { value: "",    label: "" }, // e.g. { value: "38",    label: "Engagements completed" }
  { value: "",    label: "" }, // e.g. { value: "4.9",   label: "Average client satisfaction score" }
  { value: "",    label: "" }, // e.g. { value: "30d",   label: "Average time to first result" }
];

export const SERVICES = [
  {
    label: "Growth Strategy",
    sub: "Business Development",
    desc: "Identifying your highest-leverage growth opportunities, building the roadmap, and stress-testing assumptions before you commit capital or headcount.",
    tags: ["Revenue model", "GTM strategy", "Growth loops"],
  },
  {
    label: "Financial Analysis",
    sub: "CFO-Grade Advisory",
    desc: "Reading your P&L, balance sheet, and cash flow with institutional rigour — surfacing inefficiencies, improving forecasting, and giving you a clear picture of unit economics.",
    tags: ["Cash flow", "Unit economics", "Scenario planning"],
  },
  {
    label: "Operations & Efficiency",
    sub: "Management Consulting",
    desc: "Process mapping, bottleneck removal, and OKR design that turns complex execution into structured, measurable output.",
    tags: ["Process design", "OKRs", "Automation"],
  },
  {
    label: "Productivity Systems",
    sub: "Team Performance",
    desc: "Tool-stack recommendations and workflow architecture that increases team output without proportional headcount increases.",
    tags: ["Workflow design", "Tool stack", "Remote ops"],
  },
  {
    label: "Marketing Intelligence",
    sub: "Growth Marketing",
    desc: "Channel analysis, attribution modelling, and campaign frameworks that reduce cost-per-acquisition and build compounding brand equity.",
    tags: ["CAC/LTV", "Attribution", "Channel mix"],
  },
  {
    label: "Market Research",
    sub: "Primary & Secondary Research",
    desc: "Structured research programmes that validate positioning, reveal whitespace, and produce a defensible view of your addressable market.",
    tags: ["TAM/SAM/SOM", "Surveys", "Segmentation"],
  },
  {
    label: "Competitor Analysis",
    sub: "Competitive Intelligence",
    desc: "360° profiling of your competitive set: pricing, messaging, product gaps, funding signals, and strategic intent.",
    tags: ["SWOT", "Pricing intel", "Positioning"],
  },
  {
    label: "Investor Readiness",
    sub: "Fundraising Support",
    desc: "Financial model construction, pitch narrative, and due diligence preparation — positioning you as a credible, investable business.",
    tags: ["Pitch deck", "Financial model", "Data room"],
  },
];

export const TESTIMONIALS: {
  quote: string;
  name: string;
  role: string;
  initials: string;
}[] = [
  // Add real client testimonials here. Only include with written permission.
  // Example:
  // {
  //   quote: "Working with Apex gave us the financial clarity we needed to raise our Series A with confidence.",
  //   name: "Jane Smith",
  //   role: "CEO, Acme SaaS",
  //   initials: "JS",
  // },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Who do you work with?",
    a: "We work with founders and senior management teams at startups (pre-seed through Series B) and established SMEs typically generating between £500K and £20M in annual revenue.",
  },
  {
    q: "How does an engagement typically work?",
    a: "We start with a free 45-minute strategy call to understand your priorities. If there's a good fit, we agree a scoped engagement — usually a defined project or a retainer — with clear deliverables and timelines. No long-term lock-ins by default.",
  },
  {
    q: "Do you offer ongoing retainer support?",
    a: "Yes. Many clients choose a monthly retainer for ongoing financial oversight, market monitoring, or as a fractional advisory layer. Retainer terms are agreed individually based on scope.",
  },
  {
    q: "What does the first session cover?",
    a: "The free strategy call is diagnostic — we ask structured questions about your business, identify the highest-priority constraints, and give you an honest view of where we can and cannot add value. There is no sales pressure.",
  },
  {
    q: "Are our financials and data kept confidential?",
    a: "Absolutely. We sign a mutual NDA before you share any sensitive information, and all data is handled in line with our Privacy Policy and UK GDPR obligations.",
  },
];

export const LEGAL = {
  /** ISO date of last policy update — update whenever you change the policies */
  lastUpdated: "15 June 2025",
  governingLaw: "England and Wales",
  cookieConsentVersion: "1",
  /**
   * Analytics — set to true only if you have implemented the relevant tool
   * and have disclosed it in the Cookie Policy.
   */
  usesGoogleAnalytics: false,
  usesHotjar: false,
  /**
   * If you use a third-party booking tool (Calendly, HubSpot, etc.),
   * enter the URL here. The "Book a Call" button will link to it.
   * Leave as "#contact" to scroll to the contact form instead.
   */
  bookingUrl: "#contact",
};
