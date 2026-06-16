"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import {
  Upload, FileSpreadsheet, TrendingUp, AlertCircle,
  Loader2, ChevronRight,
} from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { DEMO_REVENUE, DEMO_KPI, DEMO_INSIGHTS } from "@/lib/site-content";

export default function FinancialAnalyzer() {
  const [data,     setData]     = useState(DEMO_REVENUE);
  const [loading,  setLoading]  = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [tab,      setTab]      = useState<"revenue" | "bar">("revenue");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(async (file: File) => {
    setLoading(true);
    setFileName(file.name);
    await new Promise((r) => setTimeout(r, 1600));
    // In production this calls a CSV/XLSX parse API route.
    setLoading(false);
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile],
  );

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
            Upload a spreadsheet.{" "}
            <span className="accent-shimmer">Get instant CFO-grade analysis.</span>
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed">
            Drop in a P&amp;L, cash-flow statement, or revenue sheet. Our engine
            surfaces margin trends, burn anomalies, and growth inflexion points in seconds.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-6">
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
                    <AreaChart data={data} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
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
                    <BarChart data={data} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
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
                        {data.map((_, i) => (
                          <rect
                            key={i}
                            fill={`rgba(245,158,11,${0.3 + (i / data.length) * 0.7})`}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* ── Right: upload + insights ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            {/* Drop zone */}
            <div
              onDrop={onDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => inputRef.current?.click()}
              className="glass-card p-8 flex flex-col items-center justify-center gap-4 cursor-pointer border-dashed border-2 border-white/10 hover:border-accent-400/25 transition-colors duration-300 min-h-[160px]"
            >
              <input
                ref={inputRef}
                type="file"
                accept=".csv,.xlsx,.xls"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              />
              {loading ? (
                <Loader2 size={28} className="text-accent-400 animate-spin" />
              ) : (
                <Upload size={28} className="text-stone-500" />
              )}
              <div className="text-center">
                <p className="text-[13px] font-semibold text-white">
                  {loading ? "Analysing…" : fileName ? fileName : "Drop your spreadsheet here"}
                </p>
                <p className="text-[11px] text-stone-500 mt-1">
                  {loading ? "Running CFO-grade analysis" : "CSV, XLSX, XLS · up to 50 MB"}
                </p>
              </div>
              {!loading && (
                <div className="flex items-center gap-1.5 text-[12px] font-semibold text-accent-500">
                  <FileSpreadsheet size={14} /> Browse files
                </div>
              )}
            </div>

            {/* Insights */}
            <div className="glass-card p-5 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 mb-4">
                AI Insights
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

              <LiquidButton
                size="md"
                className="mt-5 w-full"
                onClick={() => { window.location.hash = "#contact"; }}
              >
                Get full advisory report <ChevronRight size={13} />
              </LiquidButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
