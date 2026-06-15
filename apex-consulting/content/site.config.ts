/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE CONFIGURATION — edit everything here.
 * No coding knowledge required. Save the file and the site updates instantly.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const COMPANY = {
  /** Your legal company name as registered at Companies House */
  name: "Catalyst & Co. Ltd",
  /** Short brand name used in the nav and logo */
  brandName: "Catalyst & Co.",
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
  videoSrc: "/hero.mp4",
  scrollLength: 3,
  eyebrow: "Independent Business Advisory",
  headlineLines: ["Clarity.", "Strategy.", "Growth."],
  subheadline:
    "We work with founders and management teams to fix the things that matter — finances, operations, and market position.",
  primaryCta: "Book a Free Strategy Call",
  secondaryCta: "What We Do",
};

export const STATS: { value: string; label: string }[] = [
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
];

export const SERVICES = [
  { label: "Growth Strategy",        sub: "Business Development",    desc: "Identifying your highest-leverage growth opportunities, building the roadmap, and stress-testing assumptions before you commit capital or headcount.",                        tags: ["Revenue model", "GTM strategy", "Growth loops"] },
  { label: "Financial Analysis",     sub: "CFO-Grade Advisory",       desc: "Reading your P&L, balance sheet, and cash flow with institutional rigour — surfacing inefficiencies, improving forecasting, and giving you a clear picture of unit economics.", tags: ["Cash flow", "Unit economics", "Scenario planning"] },
  { label: "Operations & Efficiency",sub: "Management Consulting",    desc: "Process mapping, bottleneck removal, and OKR design that turns complex execution into structured, measurable output.",                                                       tags: ["Process design", "OKRs", "Automation"] },
  { label: "Productivity Systems",   sub: "Team Performance",         desc: "Tool-stack recommendations and workflow architecture that increases team output without proportional headcount increases.",                                                        tags: ["Workflow design", "Tool stack", "Remote ops"] },
  { label: "Marketing Intelligence", sub: "Growth Marketing",         desc: "Channel analysis, attribution modelling, and campaign frameworks that reduce cost-per-acquisition and build compounding brand equity.",                                            tags: ["CAC/LTV", "Attribution", "Channel mix"] },
  { label: "Market Research",        sub: "Primary & Secondary",       desc: "Structured research programmes that validate positioning, reveal whitespace, and produce a defensible view of your addressable market.",                                           tags: ["TAM/SAM/SOM", "Surveys", "Segmentation"] },
  { label: "Competitor Analysis",    sub: "Competitive Intelligence",  desc: "360° profiling of your competitive set: pricing, messaging, product gaps, funding signals, and strategic intent.",                                                                  tags: ["SWOT", "Pricing intel", "Positioning"] },
  { label: "Investor Readiness",     sub: "Fundraising Support",       desc: "Financial model construction, pitch narrative, and due diligence preparation — positioning you as a credible, investable business.",                                               tags: ["Pitch deck", "Financial model", "Data room"] },
];

export const TESTIMONIALS: { quote: string; name: string; role: string; initials: string }[] = [];

export const FAQS: { q: string; a: string }[] = [
  { q: "Who do you work with?",                   a: "We work with founders and senior management teams at startups (pre-seed through Series B) and established SMEs typically generating between £500K and £20M in annual revenue." },
  { q: "How does an engagement typically work?",   a: "We start with a free 45-minute strategy call to understand your priorities. If there's a good fit, we agree a scoped engagement — usually a defined project or a retainer — with clear deliverables and timelines. No long-term lock-ins by default." },
  { q: "Do you offer ongoing retainer support?",   a: "Yes. Many clients choose a monthly retainer for ongoing financial oversight, market monitoring, or as a fractional advisory layer. Retainer terms are agreed individually based on scope." },
  { q: "What does the first session cover?",       a: "The free strategy call is diagnostic — we ask structured questions about your business, identify the highest-priority constraints, and give you an honest view of where we can and cannot add value. There is no sales pressure." },
  { q: "Are our financials and data kept confidential?", a: "Absolutely. We sign a mutual NDA before you share any sensitive information, and all data is handled in line with our Privacy Policy and UK GDPR obligations." },
];

export const LEGAL = {
  lastUpdated: "15 June 2025",
  governingLaw: "England and Wales",
  cookieConsentVersion: "1",
  usesGoogleAnalytics: false,
  usesHotjar: false,
  bookingUrl: "#contact",
};
