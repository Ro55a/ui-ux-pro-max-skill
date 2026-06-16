"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { COMPANY, EXPERIENCE } from "@/lib/site-content";

const SERVICES_LIST = [
  "Growth Strategy",
  "Financial Analysis",
  "Market Research",
  "Competitor Analysis",
  "Operations Consulting",
  "Investor Readiness",
];

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [selected,  setSelected]  = useState<string[]>([]);
  const [form,      setForm]      = useState({ name: "", email: "", company: "", message: "" });

  const toggle = (s: string) =>
    setSelected((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSubmitted(true);
  };

  const exp = EXPERIENCE[1];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-catalyst-base to-catalyst-deep" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="section-divider mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(208,201,188,0.4), transparent)" }} />
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-600 mb-4">Get Started</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.035em] text-white/90 mb-6 leading-[1.05]">
            Ready to{" "}
            <span className="accent-shimmer">accelerate?</span>
          </h2>
          <p className="text-white/30 text-[17px] leading-relaxed font-light">
            Book a free 45-minute strategy call. We&apos;ll identify your highest-impact growth levers before we agree a single scope of work.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="glass-card p-12 text-center">
                <CheckCircle size={40} className="text-emerald-400/70 mx-auto mb-5" />
                <h3 className="text-xl font-bold text-white/80 mb-2">You&apos;re booked in.</h3>
                <p className="text-white/30 text-[14px] leading-relaxed">
                  Expect a calendar invite within 2 business hours. We&apos;ll do our homework on your business before we speak.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id: "name",    label: "Full Name",    placeholder: "Jane Smith",       type: "text"  },
                    { id: "email",   label: "Work Email",   placeholder: "jane@company.com", type: "email" },
                    { id: "company", label: "Company Name", placeholder: "Acme Ltd",          type: "text"  },
                  ].map(({ id, label, placeholder, type }) => (
                    <div key={id} className={id === "company" ? "sm:col-span-2" : ""}>
                      <label htmlFor={id} className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25 mb-2">
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        required
                        placeholder={placeholder}
                        value={form[id as keyof typeof form]}
                        onChange={(e) => setForm((p) => ({ ...p, [id]: e.target.value }))}
                        className="w-full bg-white/[0.025] border border-white/[0.07] rounded-xl px-4 py-3 text-[13px] text-white/80 placeholder:text-white/15 outline-none focus:border-accent-500/30 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25 mb-3">
                    Services of Interest
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES_LIST.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggle(s)}
                        className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-200 cursor-pointer tracking-wide ${
                          selected.includes(s)
                            ? "bg-accent-400/10 text-accent-400 border border-accent-400/25"
                            : "bg-white/[0.025] text-white/25 border border-white/[0.06] hover:text-white/50"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25 mb-2">
                    Brief Context (optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us your biggest growth challenge right now…"
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    className="w-full bg-white/[0.025] border border-white/[0.07] rounded-xl px-4 py-3 text-[13px] text-white/80 placeholder:text-white/15 outline-none focus:border-accent-500/30 transition-colors resize-none"
                  />
                </div>

                <LiquidButton type="submit" disabled={loading} size="xl" className="w-full">
                  {loading ? (
                    <><Loader2 size={15} className="animate-spin" /> Submitting…</>
                  ) : (
                    <>Book My Free Strategy Call</>
                  )}
                </LiquidButton>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            {[
              { icon: Phone, label: "Call Us", value: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s/g, "")}` },
              { icon: Mail,  label: "Email",   value: COMPANY.email, href: `mailto:${COMPANY.email}`                },
              { icon: MapPin,label: "Office",  value: COMPANY.office, href: undefined                               },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass-card p-5 flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-accent-500" />
                </div>
                <div>
                  <p className="text-[10px] text-white/25 uppercase tracking-[0.15em]">{label}</p>
                  {href ? (
                    <a href={href} className="text-[13px] font-medium text-white/70 mt-0.5 hover:text-accent-400 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-[13px] font-medium text-white/70 mt-0.5">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="glass-card p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-600 mb-3">Our Guarantee</p>
              <p className="text-[13px] text-white/30 leading-relaxed">{COMPANY.guarantee}</p>
            </div>

            {/* Experience card */}
            <div className="glass-card p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-600 mb-3">
                Founder Background
              </p>
              <p className="text-[13px] font-bold text-white/70 mb-1">{exp.title}</p>
              <p className="text-[11px] text-accent-600 mb-3">{exp.company}</p>
              <p className="text-[12px] text-white/30 leading-relaxed">{exp.detail}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
