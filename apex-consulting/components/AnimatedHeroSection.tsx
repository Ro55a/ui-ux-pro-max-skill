"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { EXPERIENCE } from "@/lib/site-content";

const ROTATING_WORDS = [
  "Revenue",
  "Clarity",
  "Velocity",
  "Intelligence",
  "Advantage",
  "Momentum",
];

const FEATURES = [
  { num: "01", label: "Financial modelling & P&L forensics" },
  { num: "02", label: "Competitor intelligence & market sizing" },
  { num: "03", label: "Go-to-market strategy & execution" },
  { num: "04", label: "Investor readiness & capital strategy" },
];

export default function AnimatedHeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROTATING_WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);

  const exp = EXPERIENCE[0];

  return (
    <section className="relative py-32 overflow-hidden border-t border-white/[0.04]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(208,201,188,0.035) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — animated headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-divider" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accent-600 mb-6">
              Advisory · Strategy · Execution
            </p>

            <h2 className="text-[clamp(2.6rem,5.5vw,5rem)] font-black tracking-[-0.04em] leading-[0.95] mb-8">
              <span className="text-white/85">Unlock</span>
              <br />
              <span className="relative inline-flex items-baseline h-[1.05em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING_WORDS[index]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%",   opacity: 1 }}
                    exit={{    y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute accent-shimmer"
                  >
                    {ROTATING_WORDS[index]}
                  </motion.span>
                </AnimatePresence>
                <span className="invisible">Intelligence</span>
              </span>
              <br />
              <span className="text-white/85">at Scale</span>
            </h2>

            <p className="text-white/30 text-[16px] leading-relaxed font-light max-w-lg mb-10">
              Catalyst &amp; Co. plugs directly into your leadership team as a fractional
              advisory layer — bringing the rigour of a Big-4 firm with the speed and
              ownership mentality of a founding team.
            </p>

            <div className="flex flex-wrap gap-3">
              <LiquidButton size="lg" onClick={() => { window.location.hash = "#contact"; }}>
                Start the conversation <ArrowRight size={14} />
              </LiquidButton>
              <LiquidButton
                variant="outline"
                size="lg"
                onClick={() => { window.location.hash = "#services"; }}
              >
                View services
              </LiquidButton>
            </div>
          </motion.div>

          {/* Right — feature list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {FEATURES.map(({ num, label }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card px-6 py-5 flex items-center gap-5 group cursor-pointer"
                onClick={() => { window.location.hash = "#services"; }}
              >
                <span className="text-[11px] font-black text-accent-600 tracking-widest shrink-0">
                  {num}
                </span>
                <div className="w-px h-6 bg-white/[0.07] shrink-0" />
                <span className="text-[14px] text-white/60 font-medium group-hover:text-white/85 transition-colors duration-200 flex-1">
                  {label}
                </span>
                <ChevronRight
                  size={14}
                  className="text-white/15 group-hover:text-accent-500 group-hover:translate-x-1 transition-all duration-200"
                />
              </motion.div>
            ))}

            {/* Experience block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card px-6 py-5 mt-2"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-600 mb-2">
                Founder Background
              </p>
              <p className="text-[13px] font-bold text-white/70 mb-1">{exp.title}</p>
              <p className="text-[11px] text-accent-600 mb-3">{exp.company}</p>
              <p className="text-[12px] text-white/30 leading-relaxed">{exp.detail}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
