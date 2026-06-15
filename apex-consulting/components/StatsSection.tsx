"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { STATS } from "@/content/site.config";

const visibleStats = STATS.filter((s) => s.value && s.label);

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (visibleStats.length === 0) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTriggered(true); obs.disconnect(); } },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  if (visibleStats.length === 0) return null;

  return (
    <section id="results" className="relative py-20 border-y border-white/[0.05] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(15,118,110,0.06) 0%, transparent 70%)" }}
        aria-hidden
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className={`grid gap-12 ${ visibleStats.length === 4 ? "grid-cols-2 lg:grid-cols-4" : visibleStats.length === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2" }`}>
          {visibleStats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={triggered ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tight leading-none accent-shimmer mb-3">{value}</p>
              <p className="text-[13px] text-stone-500 leading-relaxed max-w-[180px] mx-auto">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
