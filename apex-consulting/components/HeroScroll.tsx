"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { TrendingUp, TrendingDown, Activity, BarChart2, ArrowUpRight } from "lucide-react";
import {
  DASHBOARD_METRICS,
  DASHBOARD_SPARKLINE,
  DASHBOARD_PIPELINE,
  DASHBOARD_INSIGHT,
} from "@/lib/site-content";

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
          {DASHBOARD_METRICS.map(({ label, value, delta, up }) => (
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
              {DASHBOARD_SPARKLINE.map((h, i) => {
                const maxH = Math.max(...DASHBOARD_SPARKLINE);
                return (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all"
                    style={{
                      height: `${(h / maxH) * 100}%`,
                      background:
                        i === DASHBOARD_SPARKLINE.length - 1
                          ? "rgba(208,201,188,0.7)"
                          : `rgba(208,201,188,${0.08 + (i / DASHBOARD_SPARKLINE.length) * 0.18})`,
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
              {DASHBOARD_PIPELINE.map(({ stage, pct, count }) => (
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
            {DASHBOARD_INSIGHT}
          </p>
        </div>
      </div>
    </ContainerScroll>
  );
}
