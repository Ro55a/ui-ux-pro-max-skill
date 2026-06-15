"use client";

import { motion } from "framer-motion";
import { TrendingUp, PieChart, Settings, Rocket, BarChart2, Target, Search, Users, ArrowRight } from "lucide-react";

const SERVICES = [
  { icon: TrendingUp, label: "Growth Strategy",      sub: "Business Development",   desc: "Bespoke growth roadmaps that identify your highest-leverage opportunities, compress timelines, and de-risk expansion into new markets.",                                tags: ["Revenue models","GTM strategy","Growth loops"] },
  { icon: PieChart,   label: "Financial Analysis",   sub: "CFO-Grade Intelligence",  desc: "We parse your P&L, balance sheet, and cash flow statements to surface hidden inefficiencies and forecast with institutional precision.",                              tags: ["Cash flow","Unit economics","Scenario planning"] },
  { icon: Settings,   label: "Operations & Efficiency", sub: "Management Consulting", desc: "Process mapping, bottleneck elimination, and OKR frameworks that turn execution chaos into disciplined, measurable output.",                                          tags: ["Process design","OKRs","Automation"] },
  { icon: Rocket,     label: "Productivity Systems", sub: "Team Performance",        desc: "Custom tooling recommendations and workflow architectures that multiply output without scaling headcount proportionally.",                                               tags: ["Workflow design","Tool stack","Remote ops"] },
  { icon: BarChart2,  label: "Marketing Intelligence", sub: "Growth Marketing",      desc: "Data-driven channel analysis, attribution modelling, and campaign frameworks that reduce CAC and compound brand equity.",                                               tags: ["CAC/LTV","Attribution","Channel mix"] },
  { icon: Target,     label: "Market Research",      sub: "Primary & Secondary",     desc: "Quantitative and qualitative research programmes that validate your positioning, reveal whitespace, and size your real addressable market.",                           tags: ["TAM/SAM/SOM","Surveys","Segmentation"] },
  { icon: Search,     label: "Competitor Analysis",  sub: "Competitive Intelligence",desc: "360° competitor profiling: pricing, messaging, product gaps, funding signals, and strategic intent — so you always move first.",                                       tags: ["SWOT","Pricing intel","Positioning map"] },
  { icon: Users,      label: "Investor Readiness",   sub: "Fundraising Support",     desc: "Financial model construction, pitch deck narrative, and due diligence prep that puts you in the strongest possible position to raise.",                                tags: ["Pitch deck","Financial model","Data room"] },
];

const card      = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="glow-blob w-[600px] h-[400px] bg-gold-600/6 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.7,ease:[0.16,1,0.3,1] }} className="max-w-2xl mb-20">
          <div className="section-divider" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 mb-4">What We Do</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.035em] text-white mb-6 leading-[1.05]">
            Every discipline your <span className="gold-shimmer">business needs</span> to accelerate.
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed">
            We embed as a senior advisory layer — no junior consultants, no cookie-cutter frameworks. Every engagement is built around your specific growth constraints.
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-100px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map(({ icon:Icon, label, sub, desc, tags }) => (
            <motion.div key={label} variants={card} className="glass-card p-6 flex flex-col gap-5 group cursor-pointer">
              <div>
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/15 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors duration-300">
                  <Icon size={18} className="text-gold-400" />
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-600 mb-1">{sub}</p>
                <h3 className="text-white font-bold text-[15px] leading-tight mb-3">{label}</h3>
                <p className="text-[13px] text-stone-500 leading-relaxed">{desc}</p>
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tags.map((t) => (
                    <span key={t} className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-stone-400">{t}</span>
                  ))}
                </div>
                <a href="#contact" className="flex items-center gap-1.5 text-[12px] font-semibold text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn more <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
