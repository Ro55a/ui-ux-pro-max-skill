"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services",     href: "#services"     },
  { label: "Intelligence", href: "#intelligence"  },
  { label: "Analytics",    href: "#analytics"     },
  { label: "Results",      href: "#results"       },
  { label: "Contact",      href: "#contact"       },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-apex-base/90 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center shadow-gold-sm">
              <span className="text-apex-base font-black text-sm">A</span>
            </div>
            <span className="font-bold text-white text-[15px] tracking-tight">
              Apex <span className="text-gold-400">Advisory</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[13px] font-medium text-stone-400 hover:text-white transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="text-[13px] font-medium text-stone-400 hover:text-white transition-colors">Sign in</a>
            <a href="#contact" className="btn-gold text-sm px-5 py-2.5">Book a Call</a>
          </div>

          <button className="lg:hidden text-stone-400 hover:text-white cursor-pointer" onClick={() => setMenuOpen((p) => !p)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-apex-base/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-2xl font-semibold text-white hover:text-gold-400 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-gold mt-4" onClick={() => setMenuOpen(false)}>Book a Call</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
