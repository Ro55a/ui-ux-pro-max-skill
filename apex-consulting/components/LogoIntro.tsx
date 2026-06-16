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

          {/* Video — mix-blend-mode:screen makes black transparent */}
          <div className="relative z-10 flex flex-col items-center gap-12">
            <video
              ref={videoRef}
              src="/logo-intro.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-[min(540px,85vw)] object-contain"
              style={{
                mixBlendMode: "screen",
                filter: "drop-shadow(0 0 40px rgba(208,201,188,0.15))",
              }}
            />

            {/* Click to enter prompt */}
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

          {/* Thin bottom line */}
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
