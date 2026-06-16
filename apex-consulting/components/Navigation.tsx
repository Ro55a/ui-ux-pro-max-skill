"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export default function Navigation() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Logo header bar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? "bg-catalyst-base/90 backdrop-blur-2xl border-b border-white/[0.05]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo mark + wordmark */}
          <a href="#" className="flex items-center gap-4 group" aria-label="Catalyst & Co. home">
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden>
              {/* Thin C arc */}
              <path
                d="M 25 8 A 11.5 11.5 0 1 0 25 28"
                stroke="#D0C9BC"
                strokeWidth="1.1"
                fill="none"
                strokeLinecap="round"
              />
              {/* Diamond accent */}
              <path d="M 27 18 L 25 15.8 L 23 18 L 25 20.2 Z" fill="#D0C9BC" />
              {/* Short horizontal line */}
              <line x1="27" y1="18" x2="35" y2="18" stroke="#D0C9BC" strokeWidth="0.7" strokeLinecap="round" />
            </svg>

            <div className="leading-none">
              <span className="block text-[13px] font-light tracking-[0.28em] uppercase text-accent-400">
                CATALYST
              </span>
              <span className="block text-[9px] font-normal tracking-[0.22em] uppercase text-accent-600 mt-0.5">
                &amp; Co. Consulting
              </span>
            </div>
          </a>

          {/* Right side: CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <LiquidButton
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => { window.location.hash = "#contact"; }}
            >
              Book a Call
            </LiquidButton>
            <button
              className="text-white/30 hover:text-white/70 transition-colors cursor-pointer"
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── TubelightNavbar — floating pill below header on desktop, bottom on mobile ── */}
      <NavBar />

      {/* ── Mobile fullscreen menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-45 bg-catalyst-base/96 backdrop-blur-2xl flex flex-col items-center justify-center gap-7"
          >
            {[
              { label: "Services",    href: "#services"   },
              { label: "Analytics",   href: "#analytics"  },
              { label: "Results",     href: "#results"    },
              { label: "Contact",     href: "#contact"    },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-light tracking-[0.12em] uppercase text-white/60 hover:text-accent-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <LiquidButton
              size="md"
              className="mt-6"
              onClick={() => { setMenuOpen(false); window.location.hash = "#contact"; }}
            >
              Book a Call
            </LiquidButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
