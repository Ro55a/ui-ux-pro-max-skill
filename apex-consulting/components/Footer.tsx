export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center">
            <span className="text-apex-base font-black text-[10px]">A</span>
          </div>
          <span className="text-[13px] font-semibold text-stone-400">Apex <span className="text-gold-400">Advisory</span></span>
        </div>
        <p className="text-[12px] text-stone-600">© {new Date().getFullYear()} Apex Advisory Ltd. All rights reserved. Registered in England & Wales.</p>
        <div className="flex gap-6">{["Privacy","Terms","Cookies"].map((l)=>(<a key={l} href="#" className="text-[12px] text-stone-600 hover:text-stone-400 transition-colors">{l}</a>))}</div>
      </div>
    </footer>
  );
}
