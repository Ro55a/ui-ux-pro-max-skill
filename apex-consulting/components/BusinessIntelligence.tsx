"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2, Building2, Globe, TrendingUp, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { MOCK_PROFILE } from "@/lib/site-content";

interface BusinessProfile {
  company:       string;
  industry:      string;
  employees:     string;
  founded:       string;
  estimatedRev:  string;
  fundingStage:  string;
  painPoints:    string[];
  opportunities: string[];
  score:         number;
  priority:      string;
}

export default function BusinessIntelligence() {
  const [query,   setQuery]   = useState("");
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<BusinessProfile | null>(null);

  const runAnalysis = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setProfile(null);
    await new Promise((r) => setTimeout(r, 2200));
    setProfile({ ...MOCK_PROFILE, company: query });
    setLoading(false);
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="glow-blob w-[600px] h-[400px] bg-white/[0.02] top-0 left-0 -translate-x-1/3" aria-hidden />

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
            Pre-Call Intelligence
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.035em] text-white mb-6 leading-[1.05]">
            Profile any business before{" "}
            <span className="accent-shimmer">you make the call.</span>
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed">
            Enter a company name or domain. We surface their likely pain points,
            growth stage, and the exact services they need — before you dial.
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10"
        >
          <div className="flex gap-3">
            <div className="flex-1 flex items-center gap-3 glass-card px-4 py-3 !rounded-xl border border-white/10 focus-within:border-accent-400/25 transition-colors">
              <Search size={16} className="text-stone-500 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && runAnalysis()}
                placeholder="Company name or website (e.g. Acme Digital)"
                className="bg-transparent flex-1 text-[14px] text-white placeholder:text-stone-600 outline-none"
              />
            </div>
            <LiquidButton
              size="md"
              onClick={runAnalysis}
              disabled={loading}
              className="whitespace-nowrap"
            >
              {loading ? <Loader2 size={14} className="animate-spin" /> : <Search size={14} />}
              Analyse
            </LiquidButton>
          </div>
          <p className="text-[11px] text-stone-600 mt-2 ml-1">
            Demo mode: any search returns a synthesised profile. Live version connects to Companies House, LinkedIn, and web sources.
          </p>
        </motion.div>

        {/* Result */}
        <AnimatePresence>
          {profile && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{    opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-3 gap-5"
            >
              {/* Company card */}
              <div className="glass-card p-6 lg:col-span-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-accent-400/12 flex items-center justify-center">
                    <Building2 size={20} className="text-accent-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-[16px]">{profile.company}</h3>
                    <p className="text-[12px] text-stone-500">{profile.industry}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Employees",     value: profile.employees    },
                    { label: "Founded",       value: profile.founded      },
                    { label: "Est. Revenue",  value: profile.estimatedRev },
                    { label: "Funding Stage", value: profile.fundingStage },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center py-2 border-b border-white/[0.04] last:border-0">
                      <span className="text-[12px] text-stone-500">{label}</span>
                      <span className="text-[12px] font-medium text-white">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Opportunity score */}
                <div className="mt-6 p-4 rounded-xl bg-accent-400/[0.06] border border-accent-400/12">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[12px] font-semibold text-accent-400">Opportunity Score</span>
                    <span className="text-lg font-black text-accent-400">{profile.score}/100</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${profile.score}%` }}
                      transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-gradient-to-r from-accent-700 to-accent-400 rounded-full"
                    />
                  </div>
                  <p className="text-[11px] text-stone-500 mt-2">Priority: <span className="text-emerald-400 font-semibold">{profile.priority}</span></p>
                </div>
              </div>

              {/* Pain points */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-5">
                  <AlertTriangle size={14} className="text-amber-400" />
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-400">Identified Pain Points</p>
                </div>
                <div className="space-y-3">
                  {profile.painPoints.map((p, i) => (
                    <motion.div
                      key={p}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="flex gap-3 p-3 rounded-xl bg-amber-500/5 border border-amber-500/10"
                    >
                      <span className="text-amber-400 text-[11px] font-bold mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-[12px] text-stone-400 leading-relaxed">{p}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Opportunities */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle size={14} className="text-emerald-400" />
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-400">Catalyst Opportunities</p>
                </div>
                <div className="space-y-3">
                  {profile.opportunities.map((o, i) => (
                    <motion.div
                      key={o}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="flex gap-3 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10"
                    >
                      <TrendingUp size={12} className="text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-[12px] text-stone-400 leading-relaxed">{o}</span>
                    </motion.div>
                  ))}
                </div>

                <LiquidButton
                  size="md"
                  className="mt-5 w-full"
                  onClick={() => { window.location.hash = "#contact"; }}
                >
                  Use this profile for outreach <ArrowRight size={12} />
                </LiquidButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!profile && !loading && (
          <div className="glass-card p-12 text-center max-w-xl mx-auto">
            <Globe size={36} className="text-stone-700 mx-auto mb-4" />
            <p className="text-stone-500 text-[14px]">Enter a company name above to generate a pre-call intelligence profile.</p>
          </div>
        )}

        {loading && (
          <div className="glass-card p-12 text-center max-w-xl mx-auto">
            <Loader2 size={32} className="text-accent-400 animate-spin mx-auto mb-4" />
            <p className="text-white font-semibold mb-2">Running intelligence scan…</p>
            <p className="text-stone-500 text-[13px]">Analysing company signals, funding data, and growth indicators</p>
          </div>
        )}
      </div>
    </section>
  );
}
