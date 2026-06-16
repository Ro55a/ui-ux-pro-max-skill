"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LogoIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleExitComplete = () => {
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="logo-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            perspective: "1200px",
            // Gradient that starts as deep site tone and stays cohesive
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, #161412 0%, #0F0E0C 45%, #0A0908 100%)",
          }}
        >
          {/* Warm accent glow that matches site palette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 55% 35% at 50% 50%, rgba(208,201,188,0.07) 0%, transparent 65%)",
            }}
          />

          {/* Vignette edges to soften into the site bg */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(10,9,8,0.85) 100%)",
            }}
          />

          {/* Full 360° rotation — one complete spin then holds */}
          <motion.div
            initial={{ rotateY: 0, opacity: 0, scale: 0.88 }}
            animate={{ rotateY: 360, opacity: 1, scale: 1 }}
            transition={{
              rotateY: { duration: 1.8, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.5, ease: "easeOut" },
              scale:   { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Slow idle rock after spin completes */}
            <motion.div
              animate={{ rotateY: [0, 5, -5, 0] }}
              transition={{
                rotateY: {
                  delay: 1.9,
                  duration: 2.4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/logo.jpg"
                alt="Catalyst & Co."
                width={520}
                height={220}
                priority
                className="object-contain select-none"
                style={{
                  filter:
                    "drop-shadow(0 0 60px rgba(208,201,188,0.14)) drop-shadow(0 0 20px rgba(208,201,188,0.08))",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Thin accent line fades in after spin */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-24 h-px origin-left"
            style={{ background: "rgba(208,201,188,0.25)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
