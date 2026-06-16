"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LogoIntro() {
  const [visible, setVisible] = useState(true);
  const [bodyLocked, setBodyLocked] = useState(true);

  useEffect(() => {
    // Lock scroll while intro plays
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  const handleExitComplete = () => {
    document.body.style.overflow = "";
    setBodyLocked(false);
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="logo-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050403]"
          style={{ perspective: "1200px" }}
        >
          {/* Subtle radial glow behind logo */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(208,201,188,0.06) 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial={{ rotateY: -90, opacity: 0, scale: 0.92 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
            transition={{
              rotateY: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
              opacity:  { duration: 0.6, ease: "easeOut" },
              scale:    { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Idle slow rock after spin lands */}
            <motion.div
              animate={{ rotateY: [0, 6, -6, 0] }}
              transition={{
                rotateY: {
                  delay: 1.2,
                  duration: 2.0,
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
                style={{ filter: "drop-shadow(0 0 48px rgba(208,201,188,0.12))" }}
              />
            </motion.div>
          </motion.div>

          {/* Bottom fade line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-24 h-px bg-accent-600/40 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
