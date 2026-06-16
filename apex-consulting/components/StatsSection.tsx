"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/site-content";

export default function StatsSection() {
  return (
    <section id="results" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02]" aria-hidden />
      <div className="absolute inset-0 border-y border-white/[0.05]" aria-hidden />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 mb-4">Our Credentials</p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.03em] text-white">
            Built on real experience.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-black tracking-tight leading-tight accent-shimmer mb-3">
                {value}
              </div>
              <p className="text-[13px] text-stone-500 leading-relaxed max-w-[160px] mx-auto">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
