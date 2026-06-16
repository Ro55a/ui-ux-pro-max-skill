"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { TrendingUp, AlertCircle, ArrowRight } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { DEMO_REVENUE, DEMO_KPI, DEMO_INSIGHTS } from "@/lib/site-content";

const HOW_IT_WORKS = [
  { num: "01", text: "Send us your P&L, cash-flow statement, or revenue sheet — any format works." },
  { num: "02", text: "Our team runs a full CFO-grade analysis, typically within 24 hours." },
  { num: "03", text: "You receive a clear breakdown: margin trends, burn anomalies, and priority actions." },
];

export default function FinancialAnalyzer() {
  const [tab, setTab] = useState<"revenue" | "bar">("revenue");

  return (
    <section id="analytics" className="relative py-32 overflow-hidden">
      <div className="glow-blob w-[500px] h-[500px] bg-white/[0.03] bottom-0 right-0 translate-x-1/3" aria-hidden />

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
            Financial Intelligence
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.035em] text-white mb-6 leading-[1.05]">
            Send us your numbers.{" "}
            <span className="accent-shimmer">We do the rest.</span>
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed">
            Share your financial data and our team delivers institutional-grade analysis —
            margin trends, burn anomalies, and growth inflexion points — straight to your inbox.
            Here’s the kind of insight we surface.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-6">
          {/* ── Left: chart panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6"
          >
            {/* KPI row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {DEMO_KPI.map(({ label, value, delta, up }) => (
                <div key={label} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <p className="text-[11px] text-stone-500 mb-1">{label}</p>
                  <p className="text-lg font-bold text-white">{value}</p>
                  <p className={`text-[11px] font-semibold mt-0.5 ${up ? "text-emerald-400" : "text-red-400"}`}>
                    {delta}
                  </p>
                </div>
              ))}
            </div>

            {/* Tab toggle */}
            <div className="flex gap-2 mb-5">
              {(["revenue", "bar"] as const).map((t) => (
                <LiquidButton
                  key={t}
                  size="sm"
                  variant={tab === t ? "default" : "ghost"}
                  onClick={() => setTab(t)}
                  className="h-8 px-4 text-[11px]"
                >
                  {t === "revenue" ? "Revenue vs Expenses" : "Monthly Profit"}
                </LiquidButton>
              ))}
            </div>

            {/* Chart */}
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{    opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-64"
              >
                <ResponsiveContainer width="100%" height="100%">
                  {tab === "revenue" ? (
                    <AreaChart data={DEMO_REVENUE} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
                      <defs>
                        <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.3} />
                          <stop offset="100%" stopColor="#F59E0B" stopOpacity={0}  />
                        </linearGradient>
                        <linearGradient id="exp" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#EF4444" stopOpacity={0.2} />
                          <stop offset="100%" stopColor="#EF4444" stopOpacity={0}  />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                      <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `£${v / 1000}k`} />
                      <Tooltip
                        formatter={(v: number, n: string) => [`£${v.toLocaleString()}`, n]}
                        contentStyle={{ background: "#1C1917", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 8 }}
                        labelStyle={{ color: "#FAFAF9", fontWeight: 600 }}
                        itemStyle={{ color: "#A8A29E" }}
                      />
                      <Area type="monotone" dataKey="revenue"  stroke="#F59E0B" fill="url(#rev)" strokeWidth={2} dot={false} />
                      <Area type="monotone" dataKey="expenses" stroke="#EF4444" fill="url(#exp)" strokeWidth={2} dot={false} />
                    </AreaChart>
                  ) : (
                    <BarChart data={DEMO_REVENUE} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                      <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `£${v / 1000}k`} />
                      <Tooltip
                        formatter={(v: number) => [`£${v.toLocaleString()}`, "Net Profit"]}
                        contentStyle={{ background: "#1C1917", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 8 }}
                        labelStyle={{ color: "#FAFAF9", fontWeight: 600 }}
                        itemStyle={{ color: "#A8A29E" }}
                      />
                      <Bar dataKey="profit" radius={[4, 4, 0, 0]}>
                        {DEMO_REVENUE.map((_, i) => (
                          <rect
                            key={i}
                            fill={`rgba(245,158,11,${0.3 + (i / DEMO_REVENUE.length) * 0.7})`}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </motion.div>
            </AnimatePresence>

            <p className="text-[11px] text-stone-600 mt-4 text-center">
              Example output — based on a real client engagement. Your report will reflect your actual data.
            </p>
          </motion.div>

          {/* ── Right: how it works + insights ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            {/* How it works */}
            <div className="glass-card p-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 mb-5">
                How it works
              </p>
              <div className="space-y-4">
                {HOW_IT_WORKS.map(({ num, text }) => (
                  <div key={num} className="flex gap-4">
                    <span className="text-[11px] font-black text-accent-600 tracking-widest shrink-0 mt-0.5">{num}</span>
                    <div className="w-px bg-white/[0.06] shrink-0" />
                    <p className="text-[13px] text-stone-400 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <LiquidButton
                size="md"
                className="mt-6 w-full"
                onClick={() => { window.location.hash = "#contact"; }}
              >
                Send us your financials <ArrowRight size={13} />
              </LiquidButton>
            </div>

            {/* Insights */}
            <div className="glass-card p-5 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 mb-4">
                Example insights we surface
              </p>
              <div className="space-y-3">
                {DEMO_INSIGHTS.map(({ type, insight }) => (
                  <div
                    key={insight}
                    className={`flex gap-3 p-3 rounded-xl text-[12px] leading-relaxed ${
                      type === "positive"
                        ? "bg-emerald-500/5 border border-emerald-500/10"
                        : "bg-amber-500/5 border border-amber-500/15"
                    }`}
                  >
                    {type === "positive" ? (
                      <TrendingUp size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                    ) : (
                      <AlertCircle size={14} className="mt-0.5 shrink-0 text-amber-400" />
                    )}
                    <span className="text-stone-400">{insight}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
