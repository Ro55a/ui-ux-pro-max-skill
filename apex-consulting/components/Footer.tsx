export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-3" aria-label="Catalyst & Co. home">
          <svg width="24" height="24" viewBox="0 0 36 36" fill="none" aria-hidden>
            <path
              d="M 25 8 A 11.5 11.5 0 1 0 25 28"
              stroke="#9E9890"
              strokeWidth="1.1"
              fill="none"
              strokeLinecap="round"
            />
            <path d="M 27 18 L 25 15.8 L 23 18 L 25 20.2 Z" fill="#9E9890" />
            <line x1="27" y1="18" x2="35" y2="18" stroke="#9E9890" strokeWidth="0.7" strokeLinecap="round" />
          </svg>
          <span className="text-[11px] font-light tracking-[0.22em] uppercase text-accent-700">
            Catalyst &amp; Co.
          </span>
        </a>

        <p className="text-[11px] text-white/15 tracking-wide">
          © {new Date().getFullYear()} Catalyst &amp; Co. Ltd. All rights reserved. Registered in England &amp; Wales.
        </p>

        <div className="flex gap-6">
          {["Privacy", "Terms", "Cookies"].map((l) => (
            <a key={l} href="#" className="text-[11px] text-white/15 hover:text-white/40 transition-colors tracking-wide">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
