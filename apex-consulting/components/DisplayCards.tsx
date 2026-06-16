"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TrendingUp, Shield, Zap, BarChart2, Target, Users } from "lucide-react";
import { useRef } from "react";

const CARDS = [
  {
    icon:    TrendingUp,
    title:   "+340% Revenue",
    sub:     "Average client growth",
    color:   "from-accent-700/20 to-accent-500/10",
    border:  "border-accent-400/15",
    rotate:  -8,
    x:       -60,
    y:       20,
    z:       0,
  },
  {
    icon:    Shield,
    title:   "Fortune-500",
    sub:     "Grade intelligence",
    color:   "from-white/[0.06] to-white/[0.02]",
    border:  "border-white/[0.09]",
    rotate:  0,
    x:       0,
    y:       0,
    z:       1,
  },
  {
    icon:    Zap,
    title:   "30 Days",
    sub:     "To first result",
    color:   "from-accent-700/20 to-accent-500/10",
    border:  "border-accent-400/15",
    rotate:  8,
    x:       60,
    y:       20,
    z:       0,
  },
  {
    icon:    BarChart2,
    title:   "127+ Clients",
    sub:     "Across Europe",
    color:   "from-white/[0.04] to-white/[0.01]",
    border:  "border-white/[0.07]",
    rotate:  -14,
    x:       -110,
    y:       50,
    z:       -1,
  },
  {
    icon:    Target,
    title:   "CFO-Grade",
    sub:     "Financial analysis",
    color:   "from-white/[0.04] to-white/[0.01]",
    border:  "border-white/[0.07]",
    rotate:  14,
    x:       110,
    y:       50,
    z:       -1,
  },
];

function TiltCard({ card, index }: { card: typeof CARDS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });
  const Icon = card.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 60, rotate: card.rotate }}
      whileInView={{ opacity: 1, y: card.y, rotate: card.rotate, x: card.x }}
      whileHover={{ y: card.y - 18, scale: 1.06, zIndex: 10 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        rotateX,
        rotateY,
        zIndex: card.z + 2,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      className={`absolute w-[160px] cursor-pointer`}
    >
      <div
        className={`
          glass-card p-5 bg-gradient-to-br ${card.color} ${card.border}
          shadow-dark-lg transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]
        `}
      >
        <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-4">
          <Icon size={16} className="text-accent-400" />
        </div>
        <p className="text-white/85 font-bold text-[15px] leading-tight">{card.title}</p>
        <p className="text-white/30 text-[11px] mt-1 tracking-wide">{card.sub}</p>
      </div>
    </motion.div>
  );
}

export default function DisplayCards() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(208,201,188,0.03) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-[45%] shrink-0"
          >
            <div className="section-divider" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-600 mb-4">
              Why Catalyst
            </p>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-black tracking-[-0.035em] text-white/90 mb-6 leading-[1.08]">
              Intelligence that moves<br />
              <span className="accent-shimmer">as fast as you do.</span>
            </h2>
            <p className="text-white/30 text-[16px] leading-relaxed font-light max-w-md">
              Our senior advisory team embeds directly into your business — no middlemen,
              no slide decks that gather dust. We run the analysis, build the frameworks,
              and sit in the room when decisions get made.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { label: "Avg engagement", value: "6 weeks" },
                { label: "NPS score",      value: "78"      },
                { label: "Repeat clients", value: "91%"     },
              ].map(({ label, value }) => (
                <div key={label} className="glass-card px-4 py-3 flex items-center gap-3">
                  <span className="text-[16px] font-black text-accent-400">{value}</span>
                  <span className="text-[11px] text-white/25 tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cards fan */}
          <div className="relative flex-1 hidden lg:block" style={{ height: 280 }}>
            {CARDS.map((card, i) => (
              <TiltCard key={card.title} card={card} index={i} />
            ))}
          </div>

          {/* Mobile: simple grid */}
          <div className="grid grid-cols-2 gap-3 w-full lg:hidden">
            {CARDS.slice(0, 4).map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  className="glass-card p-4"
                  whileHover={{ y: -10, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Icon size={14} className="text-accent-400 mb-3" />
                  <p className="text-white/80 font-bold text-[13px]">{card.title}</p>
                  <p className="text-white/25 text-[10px] mt-0.5">{card.sub}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
