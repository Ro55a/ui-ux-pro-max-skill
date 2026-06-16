"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  ResponsiveContainer, Tooltip,
} from "recharts";
import { Search, Zap, Star, ChevronDown, ChevronUp } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { COMPETITORS, MARKET_STATS } from "@/lib/site-content";

const RADAR_DIMS = ["Product", "Price", "Brand", "Support", "Speed", "Data"];

const INDUSTRIES = ["SaaS / B2B Tech", "E-Commerce", "Professional Services", "HealthTech"];

export default function MarketResearch() {
  const [active,   setActive]   = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [industry, setIndustry] = useState(INDUSTRIES[0]);

  const selected = COMPETITORS[active];

  const radarData = RADAR_DIMS.map((dim) => ({
    dim,
    You:  COMPETITORS[0].radar[dim as keyof typeof COMPETITORS[0]["radar"]],
    Them: selected.radar[dim as keyof typeof selected["radar"]],
  }));

  return (
    <section id="intelligence" className="relative py-32 overflow-hidden">
      <div className="glow-blob w-[600px] h-[400px] bg-indigo-600/5 top-1/3 right-[-10%]" aria-hidden />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16"
        >
          <div className="section-divider" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 mb-4">
            Market Intelligence
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.035em] text-white mb-6 leading-[1.05]">
            Know your market.{" "}
            <span className="accent-shimmer">Own your position.</span>
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed">
            We build live competitor maps so you always know where you stand, what
            to charge, and which product gaps to close first.
          </p>
        </motion.div>

        {/* Market stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {MARKET_STATS.map(({ label, value, icon: Icon }) => (
            <div key={label} className="glass-card p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-accent-400/12 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-accent-400" />
              </div>
              <div>
                <p className="text-xl font-black text-white">{value}</p>
                <p className="text-[11px] text-stone-500 mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Industry selector */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          <span className="text-[12px] text-stone-500">Industry:</span>
          {INDUSTRIES.map((ind) => (
            <LiquidButton
              key={ind}
              size="sm"
              variant={industry === ind ? "default" : "ghost"}
              onClick={() => setIndustry(ind)}
              className="h-8 px-3 text-[11px]"
            >
              {ind}
            </LiquidButton>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-6">
          {/* ── Competitor cards ── */}
          <div className="space-y-3">
            {COMPETITORS.map((comp, i) => (
              <motion.div
                key={comp.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`glass-card p-5 cursor-pointer transition-all duration-300 ${
                  active === i ? "border-accent-400/25 bg-gold-500/[0.03]" : ""
                }`}
                onClick={() => { setActive(i); setExpanded(expanded === i ? null : i); }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[11px] font-bold"
                      style={{ background: `${comp.color}15`, color: comp.color, border: `1px solid ${comp.color}25` }}>
                      {comp.ticker}
                    </div>
                    <div>
                      <p className="font-bold text-white text-[14px]">{comp.name}</p>
                      <p className="text-[11px] text-stone-500">Market share: {comp.marketShare}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                      <p className="text-[12px] text-stone-400">{comp.pricing}</p>
                      <div className="flex items-center gap-1 justify-end mt-0.5">
                        <Star size={10} className="text-accent-400 fill-accent-400" />
                        <span className="text-[11px] text-stone-500">{comp.rating}</span>
                      </div>
                    </div>
                    <span className={`text-[13px] font-bold hidden sm:block ${
                      comp.growth.startsWith("+") ? "text-emerald-400" : "text-red-400"
                    }`}>
                      {comp.growth}
                    </span>
                    {expanded === i
                      ? <ChevronUp size={14} className="text-stone-500" />
                      : <ChevronDown size={14} className="text-stone-500" />}
                  </div>
                </div>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{    height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-white/[0.05] grid sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-emerald-500 mb-2">Strengths</p>
                          {comp.strengths.map((s) => (
                            <div key={s} className="flex items-center gap-2 mb-1.5">
                              <Zap size={10} className="text-emerald-400 shrink-0" />
                              <span className="text-[12px] text-stone-400">{s}</span>
                            </div>
                          ))}
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-red-500 mb-2">Weaknesses</p>
                          {comp.weaknesses.map((w) => (
                            <div key={w} className="flex items-center gap-2 mb-1.5">
                              <Search size={10} className="text-red-400 shrink-0" />
                              <span className="text-[12px] text-stone-400">{w}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* ── Radar chart ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 self-start sticky top-24"
          >
            <p className="text-[11px] text-stone-500 uppercase tracking-widest mb-1">Competitive Radar</p>
            <p className="font-semibold text-white text-[14px] mb-4">
              You vs{" "}
              <span style={{ color: selected.color }}>{selected.name}</span>
            </p>
            <ResponsiveContainer width="100%" height={240}>
              <RadarChart data={radarData} margin={{ top: 4, right: 20, bottom: 4, left: 20 }}>
                <PolarGrid stroke="rgba(255,255,255,0.06)" />
                <PolarAngleAxis dataKey="dim" tick={{ fill: "#A8A29E", fontSize: 11 }} />
                <Radar name="You"  dataKey="You"  stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.15} strokeWidth={2} />
                <Radar name="Them" dataKey="Them" stroke={selected.color} fill={selected.color} fillOpacity={0.08} strokeWidth={2} />
                <Tooltip
                  contentStyle={{ background: "#1C1917", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 8 }}
                  itemStyle={{ color: "#A8A29E" }}
                />
              </RadarChart>
            </ResponsiveContainer>

            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-gold-400 inline-block rounded" />
                <span className="text-[11px] text-stone-500">You</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 inline-block rounded" style={{ background: selected.color }} />
                <span className="text-[11px] text-stone-500">{selected.name}</span>
              </div>
            </div>

            <LiquidButton
              size="md"
              className="mt-5 w-full"
              onClick={() => { window.location.hash = "#contact"; }}
            >
              Request full competitor report
            </LiquidButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
