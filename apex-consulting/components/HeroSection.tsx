"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { HERO_BADGES } from "@/lib/site-content";

const TICKER_ITEMS = [
  "Revenue Growth", "Market Expansion", "Financial Clarity",
  "Competitor Intel", "Operational Velocity", "Strategic Advisory",
  "Cash Flow Mastery", "Investor Readiness", "Brand Authority",
  "Revenue Growth", "Market Expansion", "Financial Clarity",
  "Competitor Intel", "Operational Velocity", "Strategic Advisory",
  "Cash Flow Mastery", "Investor Readiness", "Brand Authority",
];

export default function HeroSection() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    show:   { opacity: 1, y: 0,  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(208,201,188,0.04) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex-1 flex items-center pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.div variants={item} className="flex items-center gap-3 mb-10">
              <div className="w-1 h-1 rounded-full bg-accent-500" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accent-600">
                Elite Business Advisory
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-[clamp(2.8rem,6.5vw,5.5rem)] font-black leading-[0.95] tracking-[-0.04em] mb-10"
            >
              <span className="text-white/90">Scale Your</span>
              <br />
              <span className="accent-shimmer">Business</span>
              <br />
              <span className="text-white/90">Without Limits</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-[17px] text-white/35 leading-relaxed max-w-xl mb-14 font-light"
            >
              Catalyst &amp; Co. delivers institutional-grade intelligence to ambitious
              startups and SMEs — financial precision, market research, and operational
              transformation that generates measurable results within 30 days.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-16">
              <LiquidButton size="lg" onClick={() => { window.location.hash = "#contact"; }}>
                Start Today <ArrowRight size={15} />
              </LiquidButton>
              <LiquidButton
                variant="ghost"
                size="lg"
                onClick={() => { window.location.hash = "#services"; }}
              >
                Explore Services
              </LiquidButton>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-6">
              {HERO_BADGES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center">
                    <Icon size={13} className="text-accent-500" />
                  </div>
                  <span className="text-[12px] text-white/30 font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, y: 20 }}
            animate={{ opacity: 1, x: 0,  y: 0  }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 hidden xl:block w-[320px]"
          >
            <FloatingDashboard />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/[0.04] overflow-hidden py-4">
        <div className="flex whitespace-nowrap animate-ticker">
          {TICKER_ITEMS.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-8 text-[11px] font-medium text-white/20 tracking-[0.1em] uppercase">
              <span className="w-0.5 h-0.5 rounded-full bg-accent-600 inline-block" />
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
          <p className="text-[10px] font-medium text-white/25 uppercase tracking-[0.15em]">Live Dashboard</p>
          <p className="text-white/80 font-medium text-[14px] mt-0.5">Portfolio Overview</p>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/70 animate-pulse" />
      </div>

      <div className="space-y-2.5 mb-5">
        {[
          { label: "Revenue",   value: "+127%", up: true  },
          { label: "Burn Rate", value: "-8.1%", up: false },
          { label: "CAC Eff.", value: "+40%",  up: true  },
        ].map(({ label, value, up }) => (
          <div key={label} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.025] border border-white/[0.04]">
            <span className="text-[11px] text-white/30">{label}</span>
            <span className={`text-[12px] font-semibold ${up ? "text-emerald-400/80" : "text-red-400/80"}`}>
              {value}
            </span>
          </div>
        ))}
      </div>

      <div>
        <p className="text-[10px] text-white/20 mb-2 tracking-[0.1em] uppercase">Revenue Trend</p>
        <div className="flex items-end gap-1 h-10">
          {[30, 45, 38, 55, 49, 68, 72, 80, 76, 95, 88, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background:
                  i === 11
                    ? "rgba(208,201,188,0.7)"
                    : "rgba(208,201,188,0.1)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
