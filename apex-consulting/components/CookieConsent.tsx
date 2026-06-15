"use client";

/**
 * GDPR-compliant cookie consent banner.
 * - Necessary cookies cannot be rejected (always on).
 * - Analytics and Marketing are opt-in (off by default).
 * - Preference is stored in localStorage under "apex_cookie_consent".
 * - Update COOKIE_CATEGORIES if you add new tracking tools.
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { LEGAL, COMPANY } from "@/content/site.config";

const STORAGE_KEY = `apex_cookie_consent_v${LEGAL.cookieConsentVersion}`;

interface Prefs {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
}

const DEFAULT_PREFS: Prefs = { necessary: true, analytics: false, marketing: false };

export function getCookiePrefs(): Prefs | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Prefs) : null;
  } catch {
    return null;
  }
}

function savePrefs(prefs: Prefs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...prefs, timestamp: Date.now() }));
}

export default function CookieConsent() {
  const [visible,  setVisible]  = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs,    setPrefs]    = useState<Prefs>(DEFAULT_PREFS);

  useEffect(() => {
    if (!getCookiePrefs()) setVisible(true);
  }, []);

  const accept = (all: boolean) => {
    const saved: Prefs = all
      ? { necessary: true, analytics: true, marketing: true }
      : prefs;
    savePrefs(saved);
    setVisible(false);
  };

  const toggle = (key: keyof Omit<Prefs, "necessary">) =>
    setPrefs((p) => ({ ...p, [key]: !p[key] }));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{    opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-label="Cookie preferences"
          aria-modal="false"
          className="fixed bottom-5 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-[200] glass-card p-5 shadow-dark-lg"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <p className="text-[13px] font-semibold text-white leading-snug">
              We use cookies
            </p>
            <button
              onClick={() => { savePrefs(DEFAULT_PREFS); setVisible(false); }}
              className="text-stone-500 hover:text-white transition-colors shrink-0 cursor-pointer"
              aria-label="Reject non-essential cookies and close"
            >
              <X size={14} />
            </button>
          </div>

          <p className="text-[12px] text-stone-500 leading-relaxed mb-4">
            We use necessary cookies to operate this site. With your consent we
            may also use analytics cookies to understand usage. We do not sell
            your data. See our{" "}
            <a href="/cookies" className="text-gold-500 hover:underline">Cookie Policy</a>{" "}
            and{" "}
            <a href="/privacy" className="text-gold-500 hover:underline">Privacy Policy</a>.
          </p>

          {/* Expandable category toggles */}
          <button
            onClick={() => setExpanded((p) => !p)}
            className="flex items-center gap-1.5 text-[11px] text-stone-500 hover:text-white transition-colors mb-3 cursor-pointer"
          >
            Manage preferences
            {expanded ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{    height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden mb-3 space-y-2"
              >
                {([
                  { key: "necessary" as const, label: "Necessary",  desc: "Session, security, and preference cookies. Cannot be disabled.",        locked: true  },
                  { key: "analytics" as const, label: "Analytics",  desc: "Anonymous usage data to help us improve the site (e.g. page views).",  locked: false },
                  { key: "marketing" as const, label: "Marketing",  desc: "Used to measure the effectiveness of advertising campaigns.",           locked: false },
                ] as const).map(({ key, label, desc, locked }) => (
                  <div key={key} className="flex items-start gap-3 p-2.5 rounded-lg bg-white/[0.03]">
                    <div className="flex-1">
                      <p className="text-[11px] font-semibold text-white">{label}</p>
                      <p className="text-[10px] text-stone-500 mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                    <button
                      disabled={locked}
                      onClick={() => !locked && toggle(key as keyof Omit<Prefs, "necessary">)}
                      aria-pressed={prefs[key]}
                      aria-label={`${label} cookies ${prefs[key] ? "enabled" : "disabled"}`}
                      className={`shrink-0 mt-0.5 w-8 h-4.5 rounded-full transition-colors duration-200 relative ${locked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${ prefs[key] ? "bg-gold-500" : "bg-white/10" }`}
                      style={{ minWidth: 32, height: 18 }}
                    >
                      <span
                        className="absolute top-0.5 left-0.5 w-3.5 h-3.5 bg-white rounded-full transition-transform duration-200"
                        style={{ transform: prefs[key] ? "translateX(14px)" : "translateX(0)", width:14, height:14 }}
                      />
                    </button>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex gap-2">
            <button
              onClick={() => accept(false)}
              className="btn-ghost flex-1 text-[12px] px-3 py-2 cursor-pointer"
            >
              {expanded ? "Save preferences" : "Necessary only"}
            </button>
            <button
              onClick={() => accept(true)}
              className="btn-gold flex-1 text-[12px] px-3 py-2 cursor-pointer"
            >
              Accept all
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
