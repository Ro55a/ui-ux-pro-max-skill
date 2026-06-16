"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LogoIntro() {
  const [entered, setEntered] = useState(false);
  const [ready,   setReady]   = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setReady(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const handleEnter = () => {
    if (!ready) return;
    setEntered(true);
  };

  const handleExitComplete = () => {
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!entered && (
        <motion.div
          key="entry"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          onClick={handleEnter}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center cursor-pointer select-none"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, #161412 0%, #0F0E0C 45%, #0A0908 100%)",
          }}
        >
          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 35%, rgba(10,9,8,0.9) 100%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-12">
            {/*
              Two-pass technique to cleanly remove the dark halo:
              1. contrast(3) pushes near-black glow to pure black, keeps whites white
              2. mix-blend-mode:screen then makes pure black fully transparent
              brightness(0.95) prevents the whites from burning out before contrast is applied
            */}
            <video
              ref={videoRef}
              src="/logo-intro.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-[min(560px,88vw)] object-contain"
              style={{
                mixBlendMode: "screen",
                filter: "contrast(3) brightness(0.95)",
              }}
            />

            <AnimatePresence>
              {ready && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="flex flex-col items-center gap-3"
                >
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1 h-1 rounded-full bg-accent-500"
                  />
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/25">
                    Click anywhere to enter
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-20 h-px origin-left"
            style={{ background: "rgba(208,201,188,0.2)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
