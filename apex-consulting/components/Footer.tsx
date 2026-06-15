import Link from "next/link";
import { COMPANY } from "@/content/site.config";

const NAV_LINKS = [
  { label: "Services",     href: "/#services"    },
  { label: "Intelligence", href: "/#intelligence" },
  { label: "Analytics",   href: "/#analytics"    },
  { label: "Contact",     href: "/#contact"      },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy",   href: "/privacy" },
  { label: "Terms of Service", href: "/terms"   },
  { label: "Cookie Policy",    href: "/cookies" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-accent-700 to-accent-400 flex items-center justify-center">
                <span className="text-catalyst-deep font-black text-[11px]">C</span>
              </div>
              <span className="text-[14px] font-bold text-white tracking-tight">{COMPANY.brandName}</span>
            </div>
            <p className="text-[12px] text-stone-600 leading-relaxed max-w-[220px]">
              Independent business advisory for founders and management teams.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-600 mb-4">Site</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-[13px] text-stone-500 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-600 mb-4">Legal</p>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-[13px] text-stone-500 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
            {COMPANY.linkedin && (
              <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-5 text-[12px] text-stone-600 hover:text-white transition-colors">
                LinkedIn
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[11px] text-stone-700">© {year} {COMPANY.name}. All rights reserved.</p>
          <p className="text-[11px] text-stone-700">
            Registered in England &amp; Wales · Co. No. {COMPANY.registrationNumber}
            {COMPANY.vatNumber ? ` · VAT ${COMPANY.vatNumber}` : ""}
          </p>
        </div>
      </div>
    </footer>
  );
}
