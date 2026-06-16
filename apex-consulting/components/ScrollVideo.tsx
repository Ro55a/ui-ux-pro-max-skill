"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { HERO, COMPANY, LEGAL } from "@/content/site.config";

/**
 * Apple-style scroll-driven video hero.
 * The video's currentTime advances proportionally as the user scrolls
 * through a tall sticky section (HERO.scrollLength × 100vh).
 *
 * TO ADD YOUR VIDEO:
 *   1. Drop a .mp4 file at apex-consulting/public/hero.mp4
 *   2. Set HERO.videoSrc = "/hero.mp4" in content/site.config.ts
 *   Free sources: pexels.com/videos · coverr.co · mixkit.co
 */
export default function ScrollVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target:  sectionRef,
    offset:  ["start start", "end end"],
  });

  // Advance video with scroll
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !HERO.videoSrc) return;

    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (video.duration && isFinite(video.duration)) {
        video.currentTime = v * video.duration;
      }
    });
    return unsubscribe;
  }, [scrollYProgress]);

  // Overlaid text fades: eyebrow+headline stay, scroll cue fades out early
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [1, 1, 0, 0]);
  const headlineY       = useTransform(scrollYProgress, [0, 0.3],            [0, -60]);
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.08],          [1, 0]);
  const overlayOpacity  = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.55, 0.4, 0.5, 0.7]);

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ height: `${HERO.scrollLength * 100}vh` }}
      aria-label="Hero section with scroll-driven video background"
    >
      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ── Video / gradient background ── */}
        {HERO.videoSrc ? (
          <video
            ref={videoRef}
            src={HERO.videoSrc}
            muted
            playsInline
            preload="auto"
            onCanPlay={() => setReady(true)}
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden
          />
        ) : (
          /* Gradient fallback when no video is configured */
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, #0C0A09 0%, #1a1208 40%, #0C0A09 70%, #080705 100%)",
            }}
            aria-hidden
          />
        )}

        {/* Dark overlay — adjusts with scroll */}
        <motion.div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
          aria-hidden
        />

        {/* Subtle vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(0,0,0,0.6) 0%, transparent 60%)",
          }}
          aria-hidden
        />

        {/* ── Text overlay ── */}
        <motion.div
          style={{ opacity: headlineOpacity, y: headlineY }}
          className="absolute inset-0 flex flex-col items-start justify-center max-w-7xl mx-auto px-6 lg:px-8 pt-16"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-400 mb-8"
          >
            {HERO.eyebrow}
          </motion.p>

          {/* Headline */}
          <div className="overflow-hidden">
            {HERO.headlineLines.map((line, i) => (
              <motion.h1
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.92] tracking-[-0.04em] text-white"
              >
                {i === 0 ? <span className="gold-shimmer">{line}</span> : line}
              </motion.h1>
            ))}
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl text-[1.05rem] text-stone-300 leading-relaxed font-light"
          >
            {HERO.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href={LEGAL.bookingUrl}
              className="btn-gold flex items-center gap-2 text-[14px]"
            >
              {HERO.primaryCta} <ArrowRight size={15} />
            </a>
            <a href="#services" className="btn-ghost text-[14px]">
              {HERO.secondaryCta}
            </a>
          </motion.div>
        </motion.div>

        {/* ── Scroll cue ── */}
        <motion.div
          style={{ opacity: scrollCueOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown size={14} className="text-stone-500" />
          </motion.div>
        </motion.div>

        {/* Company name — bottom left, always visible */}
        <div className="absolute bottom-10 left-6 lg:left-8">
          <p className="text-[11px] font-semibold text-stone-600 uppercase tracking-widest">
            {COMPANY.brandName}
          </p>
        </div>
      </div>
    </div>
  );
}
