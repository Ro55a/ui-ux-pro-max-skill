import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COMPANY } from "@/content/site.config";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-apex-deep">
      {/* Top bar */}
      <div className="border-b border-white/[0.05] py-4 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[13px] text-stone-500 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} /> Back to site
          </Link>
          <span className="text-[13px] font-semibold text-white">
            {COMPANY.brandName}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-[2.5rem] font-black tracking-[-0.03em] text-white mb-3">
          {title}
        </h1>
        <p className="text-[13px] text-stone-500 mb-12">
          Last updated: {lastUpdated}
        </p>
        <div className="prose prose-invert prose-stone max-w-none legal-prose">
          {children}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.05] py-8 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 text-[12px] text-stone-600">
          <Link href="/privacy" className="hover:text-stone-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms"   className="hover:text-stone-400 transition-colors">Terms of Service</Link>
          <Link href="/cookies" className="hover:text-stone-400 transition-colors">Cookie Policy</Link>
          <span>{COMPANY.name} · Registered in England & Wales · {COMPANY.registrationNumber}</span>
        </div>
      </div>
    </div>
  );
}
