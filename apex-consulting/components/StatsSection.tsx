"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { STATS } from "@/lib/site-content";

function CountUp({ target, prefix, suffix, trigger }: {
  target: number; prefix: string; suffix: string; trigger: boolean;
}) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const duration = 2200;
    const isDecimal = !Number.isInteger(target);

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = isDecimal
        ? parseFloat((eased * target).toFixed(1))
        : Math.round(eased * target);
      setCount(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [trigger, target]);

  return <span>{prefix}{count}{suffix}</span>;
}

export default function StatsSection() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); } },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="results" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02]" aria-hidden />
      <div className="absolute inset-0 border-y border-white/[0.05]" aria-hidden />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 mb-4">By the Numbers</p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.03em] text-white">
            The evidence speaks for itself.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map(({ value, suffix, label, prefix }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-[clamp(3rem,6vw,5rem)] font-black tracking-tight leading-none accent-shimmer mb-3">
                <CountUp target={value} prefix={prefix} suffix={suffix} trigger={triggered} />
              </div>
              <p className="text-[13px] text-stone-500 leading-relaxed max-w-[160px] mx-auto">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
