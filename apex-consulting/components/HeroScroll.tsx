"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { TrendingUp, TrendingDown, Activity, BarChart2, ArrowUpRight } from "lucide-react";

const METRICS = [
  { label: "MRR",        value: "£108K", delta: "+23%",  up: true  },
  { label: "CAC",        value: "£412",  delta: "-8%",   up: false },
  { label: "Net Margin", value: "56.4%",  delta: "+14pp", up: true  },
  { label: "Runway",     value: "18 mo",  delta: "Safe",  up: true  },
];

const SPARKLINE = [30, 45, 38, 55, 49, 68, 72, 80, 76, 95, 88, 108];

const PIPELINE = [
  { stage: "Awareness",   pct: 100, count: 840 },
  { stage: "Qualified",   pct: 62,  count: 521 },
  { stage: "Proposal",    pct: 34,  count: 285 },
  { stage: "Negotiation", pct: 18,  count: 151 },
  { stage: "Closed Won",  pct: 9,   count: 76  },
];

export default function HeroScroll() {
  return (
    <ContainerScroll
      titleComponent={
        <div className="mb-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accent-600 mb-3">
            Live Intelligence Platform
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-black tracking-[-0.04em] text-white/90 leading-[1.02]">
            Your entire business,<br />
            <span className="accent-shimmer">visible in one view.</span>
          </h2>
        </div>
      }
    >
      {/* Dashboard mockup */}
      <div className="h-full w-full p-4 md:p-6 flex flex-col gap-4 bg-catalyst-surface select-none">

        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-white/40 font-medium tracking-wide">Portfolio · Live</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-white/20">
            <Activity size={11} />
            <span>Updated just now</span>
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {METRICS.map(({ label, value, delta, up }) => (
            <div key={label} className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3">
              <p className="text-[10px] text-white/30 mb-1 tracking-wide">{label}</p>
              <p className="text-[18px] font-black text-white/85 leading-none">{value}</p>
              <div className={`flex items-center gap-1 mt-1.5 ${up ? "text-emerald-400" : "text-red-400"}`}>
                {up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                <span className="text-[10px] font-semibold">{delta}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid md:grid-cols-2 gap-3 flex-1 min-h-0">

          {/* Revenue sparkline */}
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] text-white/35 font-medium tracking-wide">Revenue Trend</p>
              <div className="flex items-center gap-1 text-accent-400 text-[10px] font-semibold">
                <span>+127% YoY</span>
                <ArrowUpRight size={10} />
              </div>
            </div>
            <div className="flex-1 flex items-end gap-1">
              {SPARKLINE.map((h, i) => {
                const maxH = Math.max(...SPARKLINE);
                return (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${(h / maxH) * 100}%`,
                      background:
                        i === SPARKLINE.length - 1
                          ? "rgba(208,201,188,0.7)"
                          : `rgba(208,201,188,${0.08 + (i / SPARKLINE.length) * 0.18})`,
                    }}
                  />
                );
              })}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[9px] text-white/15">Jan</span>
              <span className="text-[9px] text-white/15">Dec</span>
            </div>
          </div>

          {/* Sales pipeline */}
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] text-white/35 font-medium tracking-wide">Sales Pipeline</p>
              <BarChart2 size={12} className="text-white/20" />
            </div>
            <div className="flex flex-col gap-2 flex-1 justify-center">
              {PIPELINE.map(({ stage, pct, count }) => (
                <div key={stage} className="flex items-center gap-3">
                  <span className="text-[10px] text-white/25 w-20 shrink-0">{stage}</span>
                  <div className="flex-1 h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent-700/60 to-accent-400/70"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-white/20 w-8 text-right">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom insight strip */}
        <div className="rounded-xl bg-accent-400/[0.05] border border-accent-400/[0.1] px-4 py-2.5 flex items-center gap-3">
          <TrendingUp size={12} className="text-accent-500 shrink-0" />
          <p className="text-[11px] text-white/35 leading-relaxed">
            <span className="text-accent-400 font-semibold">AI Insight: </span>
            December MRR spike driven by Q4 enterprise deals — retention programme needed to sustain growth trajectory.
          </p>
        </div>
      </div>
    </ContainerScroll>
  );
}
