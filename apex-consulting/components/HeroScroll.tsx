"use client";

/**
 * Hero section using the 21st.dev ContainerScroll component.
 * The 3D card reveals a live dashboard mockup as the user scrolls.
 * Edit headline and sub-headline in content/site.config.ts → HERO
 */

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, TrendingDown, Activity, BarChart2 } from "lucide-react";
import { HERO, COMPANY, LEGAL } from "@/content/site.config";

// ── Mini dashboard rendered inside the 3D card ──────────────────────────────
const BARS  = [38, 52, 44, 61, 55, 73, 68, 82, 79, 94, 88, 100];
const MONTHS = ["J","F","M","A","M","J","J","A","S","O","N","D"];

const KPI = [
  { label: "Revenue",    value: "+127%",  up: true  },
  { label: "Margin",     value: "43.2%",  up: true  },
  { label: "Burn",       value: "0.47×",  up: false },
  { label: "CAC Eff.",   value: "+40%",   up: true  },
];

const FEED = [
  { dot: "bg-emerald-400", text: "Financial analysis complete — 3 opportunities flagged" },
  { dot: "bg-gold-400",    text: "Competitor pricing update detected in your sector"       },
  { dot: "bg-blue-400",    text: "Q3 market research report ready for review"              },
  { dot: "bg-emerald-400", text: "Cash-flow forecast updated with actuals"                 },
];

function DashboardMockup() {
  return (
    <div className="h-full w-full bg-[#0C0A09] rounded-xl flex flex-col p-4 md:p-6 gap-4 select-none">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-yellow-700 to-yellow-400 flex items-center justify-center">
            <span className="text-[9px] font-black text-black">A</span>
          </div>
          <span className="text-[12px] font-semibold text-white">{COMPANY.brandName} — Client Portal</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-stone-500">Live</span>
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-4 gap-2">
        {KPI.map(({ label, value, up }) => (
          <div key={label} className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3">
            <p className="text-[9px] text-stone-600 mb-1">{label}</p>
            <p className="text-[13px] font-bold text-white">{value}</p>
            <div className="flex items-center gap-1 mt-1">
              {up
                ? <TrendingUp   size={9} className="text-emerald-400" />
                : <TrendingDown size={9} className="text-red-400" />
              }
              <span className={`text-[9px] font-medium ${up ? "text-emerald-400" : "text-red-400"}`}>
                {up ? "Above target" : "Review needed"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart + feed */}
      <div className="flex-1 grid grid-cols-[1fr_180px] md:grid-cols-[1fr_220px] gap-3 min-h-0">
        {/* Bar chart */}
        <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-4 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-[10px] text-stone-500">Revenue vs Target</p>
              <p className="text-[13px] font-semibold text-white mt-0.5">FY 2025 — All Clients</p>
            </div>
            <BarChart2 size={14} className="text-stone-600" />
          </div>
          <div className="flex-1 flex items-end gap-1.5">
            {BARS.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-sm transition-all"
                  style={{
                    height: `${h}%`,
                    background:
                      i === BARS.length - 1
                        ? "linear-gradient(180deg,#F59E0B,#92400E)"
                        : `rgba(245,158,11,${0.15 + (i / BARS.length) * 0.4})`,
                  }}
                />
                <span className="text-[7px] text-stone-700">{MONTHS[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-4 flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-1">
            <Activity size={11} className="text-stone-600" />
            <p className="text-[10px] text-stone-500">Activity</p>
          </div>
          {FEED.map(({ dot, text }, i) => (
            <div key={i} className="flex gap-2.5">
              <div className={`w-1.5 h-1.5 rounded-full ${dot} mt-1 shrink-0`} />
              <p className="text-[10px] text-stone-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Hero title block ─────────────────────────────────────────────────────────
function TitleBlock() {
  return (
    <div className="space-y-6">
      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-[11px] font-semibold uppercase tracking-[0.22em] text-yellow-500"
      >
        {HERO.eyebrow}
      </motion.p>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-[clamp(2.8rem,6vw,5.5rem)] font-black leading-[0.93] tracking-[-0.04em] text-white"
      >
        {HERO.headlineLines.map((line, i) => (
          <span key={i} className="block">
            {i === 0 ? <span className="gold-shimmer">{line}</span> : line}
          </span>
        ))}
      </motion.h1>

      {/* Sub */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="text-[1rem] text-stone-400 leading-relaxed max-w-lg mx-auto"
      >
        {HERO.subheadline}
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap gap-3 justify-center"
      >
        <a href={LEGAL.bookingUrl} className="btn-gold flex items-center gap-2 text-[14px]">
          {HERO.primaryCta} <ArrowRight size={14} />
        </a>
        <a href="#services" className="btn-ghost text-[14px]">
          {HERO.secondaryCta}
        </a>
      </motion.div>
    </div>
  );
}

// ── Export ───────────────────────────────────────────────────────────────────
export default function HeroScroll() {
  return (
    <section className="relative bg-apex-deep overflow-hidden pt-16">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(180,83,9,0.12) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <ContainerScroll titleComponent={<TitleBlock />}>
        <DashboardMockup />
      </ContainerScroll>
    </section>
  );
}
