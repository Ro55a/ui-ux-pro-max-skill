"use client";

/**
 * Second hero section using the DisplayCards component from 21st.dev.
 * Shows three stacked, skewed cards representing Apex Advisory's core offerings.
 * Cards reveal on hover — works as a visual bridge between the scroll hero and services.
 */

import { motion } from "framer-motion";
import DisplayCards from "@/components/ui/display-cards";
import { TrendingUp, BarChart2, Search, ArrowRight } from "lucide-react";
import { LEGAL } from "@/content/site.config";

const CARDS = [
  {
    icon: <BarChart2 className="size-4 text-yellow-400" />,
    title: "Financial Analysis",
    description: "CFO-grade insight, delivered fast",
    date: "P&L · Cash flow · Unit economics",
    titleClassName: "text-yellow-400",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-full before:rounded-xl before:h-full before:content-[''] before:bg-apex-deep/70 before:left-0 before:top-0 grayscale-[70%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0",
  },
  {
    icon: <Search className="size-4 text-yellow-400" />,
    title: "Market Intelligence",
    description: "Know your market before competitors do",
    date: "TAM · Competitor maps · Positioning",
    titleClassName: "text-yellow-400",
    className:
      "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-full before:rounded-xl before:h-full before:content-[''] before:bg-apex-deep/70 before:left-0 before:top-0 grayscale-[70%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0",
  },
  {
    icon: <TrendingUp className="size-4 text-yellow-400" />,
    title: "Growth Strategy",
    description: "From bottleneck to breakthrough",
    date: "GTM · OKRs · Revenue models",
    titleClassName: "text-yellow-400",
    className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
  },
];

export default function DisplayCardsHero() {
  return (
    <section className="relative py-28 overflow-hidden border-y border-white/[0.04]">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(120,53,15,0.07) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-divider" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-yellow-500 mb-4">
              Three pillars
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.4rem)] font-black tracking-[-0.035em] text-white leading-[1.05] mb-6">
              Everything a growing
              <br />
              <span className="gold-shimmer">business needs.</span>
            </h2>
            <p className="text-stone-400 text-[1rem] leading-relaxed mb-8 max-w-md">
              We cover the three areas that determine whether an ambitious business
              scales or stalls — financial clarity, market knowledge, and a strategy
              that actually holds up under pressure.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#services" className="btn-gold flex items-center gap-2 text-[13px]">
                See all services <ArrowRight size={13} />
              </a>
              <a href={LEGAL.bookingUrl} className="btn-ghost text-[13px]">
                Book a call
              </a>
            </div>
          </motion.div>

          {/* Right — stacked cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center py-12 lg:py-0"
          >
            <DisplayCards cards={CARDS} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
