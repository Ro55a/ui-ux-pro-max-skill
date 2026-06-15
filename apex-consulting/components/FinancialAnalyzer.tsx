"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Upload, FileSpreadsheet, TrendingUp, TrendingDown, AlertCircle, CheckCircle, Loader2, ChevronRight } from "lucide-react";

const DEMO_REVENUE = [
  { month:"Jan", revenue:42000,  expenses:31000, profit:11000 },
  { month:"Feb", revenue:47000,  expenses:33000, profit:14000 },
  { month:"Mar", revenue:44000,  expenses:35000, profit:9000  },
  { month:"Apr", revenue:56000,  expenses:36000, profit:20000 },
  { month:"May", revenue:61000,  expenses:38000, profit:23000 },
  { month:"Jun", revenue:58000,  expenses:37000, profit:21000 },
  { month:"Jul", revenue:72000,  expenses:40000, profit:32000 },
  { month:"Aug", revenue:80000,  expenses:41000, profit:39000 },
  { month:"Sep", revenue:76000,  expenses:43000, profit:33000 },
  { month:"Oct", revenue:95000,  expenses:44000, profit:51000 },
  { month:"Nov", revenue:91000,  expenses:45000, profit:46000 },
  { month:"Dec", revenue:108000, expenses:47000, profit:61000 },
];

const DEMO_INSIGHTS = [
  { type:"positive", icon:TrendingUp,  text:"Revenue CAGR of 157% — significantly above SME median of 42%" },
  { type:"positive", icon:CheckCircle, text:"Gross margin improving: Q4 operating leverage evident in Dec spike" },
  { type:"warning",  icon:AlertCircle, text:"Expense growth (51%) outpacing industry benchmark — audit recommended" },
  { type:"positive", icon:TrendingUp,  text:"Profit-to-revenue ratio expanded from 26% → 56% over the period" },
];

const KPI = [
  { label:"Annual Revenue", value:"£830K",  delta:"+127%", up:true  },
  { label:"Net Profit",     value:"£359K",  delta:"+218%", up:true  },
  { label:"Avg Margin",     value:"43.2%",  delta:"+14pp", up:true  },
  { label:"Burn Multiple",  value:"0.47×",  delta:"−0.12", up:false },
];

export default function FinancialAnalyzer() {
  const [data,     setData]     = useState(DEMO_REVENUE);
  const [loading,  setLoading]  = useState(false);
  const [fileName, setFileName] = useState<string|null>(null);
  const [tab,      setTab]      = useState<"revenue"|"bar">("revenue");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(async (file: File) => {
    setLoading(true); setFileName(file.name);
    await new Promise((r) => setTimeout(r, 1600));
    setLoading(false);
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  return (
    <section id="analytics" className="relative py-32 overflow-hidden">
      <div className="glow-blob w-[500px] h-[500px] bg-gold-600/8 bottom-0 right-0 translate-x-1/3" aria-hidden />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.7,ease:[0.16,1,0.3,1] }} className="max-w-2xl mb-16">
          <div className="section-divider" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 mb-4">Financial Intelligence</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.035em] text-white mb-6 leading-[1.05]">
            Upload a spreadsheet. <span className="gold-shimmer">Get instant CFO-grade analysis.</span>
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed">
            Drop in a P&amp;L, cash-flow statement, or revenue sheet. Our engine surfaces margin trends, burn anomalies, and growth inflexion points in seconds.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-6">
          <motion.div initial={{ opacity:0,x:-40 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.7,ease:[0.16,1,0.3,1] }} className="glass-card p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {KPI.map(({ label,value,delta,up }) => (
                <div key={label} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <p className="text-[11px] text-stone-500 mb-1">{label}</p>
                  <p className="text-lg font-bold text-white">{value}</p>
                  <p className={`text-[11px] font-semibold mt-0.5 ${up?"text-emerald-400":"text-red-400"}`}>{delta}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mb-5">
              {(["revenue","bar"] as const).map((t) => (
                <button key={t} onClick={() => setTab(t)} className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-200 cursor-pointer ${ tab===t ? "bg-gold-500/15 text-gold-400 border border-gold-500/25" : "text-stone-500 hover:text-white" }`}>
                  {t==="revenue" ? "Revenue vs Expenses" : "Monthly Profit"}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={tab} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.3 }} className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  {tab==="revenue" ? (
                    <AreaChart data={data} margin={{ top:4,right:4,left:-16,bottom:0 }}>
                      <defs>
                        <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F59E0B" stopOpacity={0.3}/><stop offset="100%" stopColor="#F59E0B" stopOpacity={0}/></linearGradient>
                        <linearGradient id="exp" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#EF4444" stopOpacity={0.2}/><stop offset="100%" stopColor="#EF4444" stopOpacity={0}/></linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" tick={{ fontSize:11 }} />
                      <YAxis tick={{ fontSize:11 }} tickFormatter={(v) => `£${v/1000}k`} />
                      <Tooltip formatter={(v:number,n:string)=>[`£${v.toLocaleString()}`,n]} contentStyle={{ background:"#1C1917",border:"1px solid rgba(245,158,11,0.2)",borderRadius:8 }} labelStyle={{ color:"#FAFAF9",fontWeight:600 }} itemStyle={{ color:"#A8A29E" }} />
                      <Area type="monotone" dataKey="revenue"  stroke="#F59E0B" fill="url(#rev)" strokeWidth={2} dot={false} />
                      <Area type="monotone" dataKey="expenses" stroke="#EF4444" fill="url(#exp)" strokeWidth={2} dot={false} />
                    </AreaChart>
                  ) : (
                    <BarChart data={data} margin={{ top:4,right:4,left:-16,bottom:0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" tick={{ fontSize:11 }} />
                      <YAxis tick={{ fontSize:11 }} tickFormatter={(v) => `£${v/1000}k`} />
                      <Tooltip formatter={(v:number)=>[`£${v.toLocaleString()}`,"Net Profit"]} contentStyle={{ background:"#1C1917",border:"1px solid rgba(245,158,11,0.2)",borderRadius:8 }} labelStyle={{ color:"#FAFAF9",fontWeight:600 }} itemStyle={{ color:"#A8A29E" }} />
                      <Bar dataKey="profit" radius={[4,4,0,0]} fill="#F59E0B" fillOpacity={0.7} />
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div initial={{ opacity:0,x:40 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.7,ease:[0.16,1,0.3,1] }} className="flex flex-col gap-4">
            <div onDrop={onDrop} onDragOver={(e)=>e.preventDefault()} onClick={()=>inputRef.current?.click()} className="glass-card p-8 flex flex-col items-center justify-center gap-4 cursor-pointer border-dashed border-2 border-white/10 hover:border-gold-500/30 transition-colors duration-300 min-h-[160px]">
              <input ref={inputRef} type="file" accept=".csv,.xlsx,.xls" className="hidden" onChange={(e)=>e.target.files?.[0]&&handleFile(e.target.files[0])} />
              {loading ? <Loader2 size={28} className="text-gold-400 animate-spin" /> : <Upload size={28} className="text-stone-500" />}
              <div className="text-center">
                <p className="text-[13px] font-semibold text-white">{loading?"Analysing…":fileName?fileName:"Drop your spreadsheet here"}</p>
                <p className="text-[11px] text-stone-500 mt-1">{loading?"Running CFO-grade analysis":"CSV, XLSX, XLS · up to 50 MB"}</p>
              </div>
              {!loading && <div className="flex items-center gap-1.5 text-[12px] font-semibold text-gold-500"><FileSpreadsheet size={14} /> Browse files</div>}
            </div>

            <div className="glass-card p-5 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 mb-4">AI Insights</p>
              <div className="space-y-3">
                {DEMO_INSIGHTS.map(({ type,icon:Icon,text }) => (
                  <div key={text} className={`flex gap-3 p-3 rounded-xl text-[12px] leading-relaxed ${ type==="positive" ? "bg-emerald-500/5 border border-emerald-500/10" : "bg-amber-500/5 border border-amber-500/15" }`}>
                    <Icon size={14} className={`mt-0.5 shrink-0 ${type==="positive"?"text-emerald-400":"text-amber-400"}`} />
                    <span className="text-stone-400">{text}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="mt-5 flex items-center justify-between w-full p-3 rounded-xl bg-gold-500/8 border border-gold-500/15 hover:bg-gold-500/15 transition-colors duration-200 group cursor-pointer">
                <span className="text-[12px] font-semibold text-gold-400">Get full advisory report</span>
                <ChevronRight size={14} className="text-gold-500 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
