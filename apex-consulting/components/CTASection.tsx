"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { COMPANY, SERVICES, LEGAL } from "@/content/site.config";

const SERVICE_LABELS = SERVICES.map((s) => s.label);

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [selected,  setSelected]  = useState<string[]>([]);
  const [consent,   setConsent]   = useState(false);
  const [form,      setForm]      = useState({ name: "", email: "", company: "", message: "" });
  const [errors,    setErrors]    = useState<Partial<typeof form & { consent: string }>>({}); 

  const toggle = (s: string) => setSelected((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s]);

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim())    e.name    = "Full name is required.";
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) e.email = "A valid email address is required.";
    if (!form.company.trim()) e.company = "Company name is required.";
    if (!consent)             e.consent = "Please confirm you have read the Privacy Policy.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1600));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.7,ease:[0.16,1,0.3,1] }} className="text-center max-w-xl mx-auto mb-16">
          <div className="section-divider mx-auto" style={{ background: "linear-gradient(90deg, transparent, #14B8A6, transparent)" }} />
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-400 mb-4">Get in Touch</p>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-black tracking-[-0.035em] text-white mb-5 leading-[1.05]">Book a free strategy call.</h2>
          <p className="text-stone-400 text-[1rem] leading-relaxed">
            45 minutes, no obligation. We&apos;ll give you an honest assessment of where you are and what we&apos;d recommend — whether we work together or not.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-8 max-w-5xl mx-auto">
          <motion.div initial={{ opacity:0,x:-30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.7,ease:[0.16,1,0.3,1] }}>
            {submitted ? (
              <div className="glass-card p-12 text-center">
                <CheckCircle size={40} className="text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Message received.</h3>
                <p className="text-stone-400 text-[14px] leading-relaxed">We&apos;ll be in touch within one business day to confirm your call time.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="glass-card p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {([{ id:"name",label:"Full Name *",placeholder:"Jane Smith",type:"text" },{ id:"email",label:"Work Email *",placeholder:"jane@company.com",type:"email" }] as const).map(({ id,label,placeholder,type }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-[11px] font-semibold uppercase tracking-widest text-stone-500 mb-2">{label}</label>
                      <input id={id} type={type} autoComplete={id==="email"?"email":"name"} placeholder={placeholder} value={form[id]} onChange={(e) => setForm((p) => ({ ...p, [id]: e.target.value }))} aria-describedby={errors[id]?`${id}-error`:undefined}
                        className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-stone-600 outline-none transition-colors ${ errors[id] ? "border-red-500/50 focus:border-red-400" : "border-white/[0.08] focus:border-accent-500/40" }`} />
                      {errors[id] && <p id={`${id}-error`} role="alert" className="text-[11px] text-red-400 mt-1">{errors[id]}</p>}
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="company" className="block text-[11px] font-semibold uppercase tracking-widest text-stone-500 mb-2">Company *</label>
                  <input id="company" type="text" autoComplete="organization" placeholder="Acme Ltd" value={form.company} onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                    className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-stone-600 outline-none transition-colors ${ errors.company ? "border-red-500/50" : "border-white/[0.08] focus:border-accent-500/40" }`} />
                  {errors.company && <p role="alert" className="text-[11px] text-red-400 mt-1">{errors.company}</p>}
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 mb-3">Areas of interest</p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_LABELS.map((s) => (
                      <button key={s} type="button" onClick={() => toggle(s)} aria-pressed={selected.includes(s)}
                        className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-200 cursor-pointer ${ selected.includes(s) ? "bg-accent-500/15 text-accent-400 border border-accent-500/30" : "bg-white/[0.03] text-stone-500 border border-white/[0.07] hover:text-white" }`}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-semibold uppercase tracking-widest text-stone-500 mb-2">What&apos;s your biggest challenge right now?</label>
                  <textarea id="message" rows={4} placeholder="Brief description of your situation or goals…" value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-stone-600 outline-none focus:border-accent-500/40 transition-colors resize-none" />
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <button type="button" role="checkbox" aria-checked={consent} onClick={() => setConsent((p) => !p)}
                      className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors cursor-pointer ${ consent ? "bg-accent-500 border-accent-500" : errors.consent ? "border-red-500" : "border-white/20 bg-white/[0.03]" }`}>
                      {consent && <svg width="9" height="7" viewBox="0 0 9 7" fill="none" aria-hidden><path d="M1 3.5L3.5 6L8 1" stroke="#020B0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </button>
                    <span className="text-[12px] text-stone-500 leading-relaxed">
                      I have read and understood the{" "}
                      <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline">Privacy Policy</a>{" "}
                      and consent to {COMPANY.name} contacting me about my enquiry.
                    </span>
                  </label>
                  {errors.consent && <p role="alert" className="text-[11px] text-red-400 mt-2">{errors.consent}</p>}
                </div>

                <button type="submit" disabled={loading} className="btn-accent w-full flex items-center justify-center gap-2 text-[14px] cursor-pointer disabled:opacity-60">
                  {loading ? <><Loader2 size={15} className="animate-spin" /> Sending…</> : <><Send size={15} /> Send Enquiry</>}
                </button>
                <p className="text-[10px] text-stone-600 text-center leading-relaxed">
                  Your data is processed in accordance with our{" "}
                  <a href="/privacy" className="text-stone-500 hover:text-stone-400">Privacy Policy</a>. We will never sell your data.
                </p>
              </form>
            )}
          </motion.div>

          <motion.div initial={{ opacity:0,x:30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.7,ease:[0.16,1,0.3,1] }} className="flex flex-col gap-4">
            {[
              { icon:Phone,  label:"Phone",  value:COMPANY.phone,         href:`tel:${COMPANY.phone.replace(/\s/g,"")}` },
              { icon:Mail,   label:"Email",  value:COMPANY.email,         href:`mailto:${COMPANY.email}` },
              { icon:MapPin, label:"Office", value:COMPANY.officeAddress, href:undefined },
            ].map(({ icon:Icon,label,value,href }) => (
              <div key={label} className="glass-card p-5 flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-accent-500/8 border border-accent-500/12 flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-accent-400" />
                </div>
                <div>
                  <p className="text-[10px] text-stone-600 uppercase tracking-wider">{label}</p>
                  {href ? <a href={href} className="text-[13px] font-medium text-white hover:text-accent-400 transition-colors mt-0.5 block">{value}</a> : <p className="text-[13px] font-medium text-white mt-0.5">{value}</p>}
                </div>
              </div>
            ))}

            <div className="glass-card p-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-accent-400 mb-3">What happens next</p>
              <ol className="space-y-3">
                {[
                  "We review your enquiry and confirm a call time within one business day.",
                  "Before the call, we research your business and sector.",
                  "45-minute call: diagnostic, honest, no pressure.",
                  "You receive a summary email with our observations and suggested next steps.",
                ].map((step,i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent-500/10 border border-accent-500/15 flex items-center justify-center text-[10px] font-bold text-accent-400 shrink-0 mt-0.5">{i+1}</span>
                    <span className="text-[12px] text-stone-500 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
