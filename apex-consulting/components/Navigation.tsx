"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { COMPANY, LEGAL } from "@/content/site.config";

const LINKS = [
  { label: "Services",      href: "#services"     },
  { label: "Intelligence",  href: "#intelligence"  },
  { label: "Analytics",     href: "#analytics"     },
  { label: "Contact",       href: "#contact"       },
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
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0,    opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-apex-base/90 backdrop-blur-xl border-b border-white/[0.05]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-gold-700 to-gold-400 flex items-center justify-center">
              <span className="text-apex-base font-black text-[11px]">A</span>
            </div>
            <span className="font-bold text-white text-[14px] tracking-tight">
              {COMPANY.brandName}
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium text-stone-400 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={LEGAL.bookingUrl}
              className="btn-gold text-[13px] px-5 py-2.5"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-stone-400 hover:text-white cursor-pointer p-1"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{    opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-apex-base/97 backdrop-blur-xl flex flex-col lg:hidden"
          >
            <div className="h-16 border-b border-white/[0.05]" />
            <div className="flex-1 flex flex-col justify-center px-8 gap-7">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setMenuOpen(false)}
                  className="text-[2rem] font-black tracking-tight text-white hover:text-gold-400 transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                href={LEGAL.bookingUrl}
                onClick={() => setMenuOpen(false)}
                className="btn-gold mt-4 inline-block text-center"
              >
                Book a Call
              </motion.a>
            </div>
            <div className="px-8 pb-10">
              <div className="flex gap-5 text-[12px] text-stone-600">
                <Link href="/privacy" onClick={() => setMenuOpen(false)} className="hover:text-stone-400">Privacy</Link>
                <Link href="/terms"   onClick={() => setMenuOpen(false)} className="hover:text-stone-400">Terms</Link>
                <Link href="/cookies" onClick={() => setMenuOpen(false)} className="hover:text-stone-400">Cookies</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
