"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

const TICKER_ITEMS = [
  "Revenue Growth", "Market Expansion", "Financial Clarity", "Competitor Intel",
  "Operational Velocity", "Strategic Advisory", "Cash Flow Mastery", "Investor Readiness",
  "Brand Authority", "Revenue Growth", "Market Expansion", "Financial Clarity",
  "Competitor Intel", "Operational Velocity", "Strategic Advisory", "Cash Flow Mastery",
  "Investor Readiness", "Brand Authority",
];

const BADGES = [
  { icon: TrendingUp, label: "Average +340% revenue growth" },
  { icon: Shield,     label: "Fortune-500 grade analysis"   },
  { icon: Zap,        label: "Results in 30 days"           },
];

export default function HeroSection() {
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
  const item = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden noise">
      <div className="glow-blob w-[700px] h-[400px] bg-gold-600/10 top-[-10%] left-[-5%]" aria-hidden />
      <div className="glow-blob w-[500px] h-[500px] bg-gold-500/8  top-[20%] right-[-10%]" aria-hidden />
      <div className="glow-blob w-[400px] h-[300px] bg-amber-700/6 bottom-0 left-[30%]" aria-hidden />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        aria-hidden
      />

      <div className="relative z-10 flex-1 flex items-center pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
            <motion.div variants={item} className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-glow-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Elite Business Advisory</span>
            </motion.div>

            <motion.h1 variants={item} className="text-[clamp(3rem,7vw,6rem)] font-black leading-[0.95] tracking-[-0.04em] mb-8">
              <span className="text-white">Scale Your</span><br />
              <span className="gold-shimmer">Business</span><br />
              <span className="text-white">Without Limits</span>
            </motion.h1>

            <motion.p variants={item} className="text-lg text-stone-400 leading-relaxed max-w-2xl mb-12 font-light">
              Apex Advisory delivers Fortune-500 grade intelligence to startups and SMEs —
              financial precision, competitor-grade market research, and operational
              transformation that generates measurable results within 30 days.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
              <a href="#contact" className="btn-gold flex items-center gap-2 text-[15px]">
                Start Today <ArrowRight size={16} />
              </a>
              <a href="#services" className="btn-ghost text-[15px]">Explore Services</a>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-6">
              {BADGES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                    <Icon size={14} className="text-gold-400" />
                  </div>
                  <span className="text-[13px] text-stone-400 font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 hidden xl:block w-[340px]"
          >
            <FloatingDashboard />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/[0.06] overflow-hidden py-4">
        <div className="flex whitespace-nowrap animate-ticker">
          {TICKER_ITEMS.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-8 text-[13px] font-medium text-stone-500">
              <span className="w-1 h-1 rounded-full bg-gold-600 inline-block" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingDashboard() {
  return (
    <div className="glass-card p-5 animate-border-glow animate-float shadow-dark-lg">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[11px] font-medium text-stone-500 uppercase tracking-widest">Live Dashboard</p>
          <p className="text-white font-semibold mt-0.5">Portfolio Overview</p>
        </div>
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      </div>
      <div className="space-y-3 mb-5">
        {[
          { label: "Revenue",   value: "+127%", up: true  },
          { label: "Burn Rate", value: "-8.1%",  up: false },
          { label: "CAC Eff.",  value: "+40%",   up: true  },
        ].map(({ label, value, up }) => (
          <div key={label} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            <span className="text-[12px] text-stone-400">{label}</span>
            <span className={`text-[13px] font-semibold ${up ? "text-emerald-400" : "text-red-400"}`}>{value}</span>
          </div>
        ))}
      </div>
      <div>
        <p className="text-[11px] text-stone-500 mb-2">Revenue Trend</p>
        <div className="flex items-end gap-1 h-12">
          {[30,45,38,55,49,68,72,80,76,95,88,100].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm"
              style={{ height: `${h}%`, background: i===11 ? "linear-gradient(180deg,#F59E0B,#B45309)" : "rgba(245,158,11,0.2)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
