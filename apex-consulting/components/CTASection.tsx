"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Phone, Mail, MapPin, Loader2 } from "lucide-react";

const SERVICES_LIST = ["Growth Strategy","Financial Analysis","Market Research","Competitor Analysis","Operations Consulting","Investor Readiness"];

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [selected,  setSelected]  = useState<string[]>([]);
  const [form,      setForm]      = useState({ name:"", email:"", company:"", message:"" });

  const toggle = (s: string) => setSelected((p) => p.includes(s) ? p.filter((x)=>x!==s) : [...p,s]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false); setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-apex-base to-apex-deep" aria-hidden />
      <div className="glow-blob w-[700px] h-[500px] bg-gold-600/10 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3" aria-hidden />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.7,ease:[0.16,1,0.3,1] }} className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-divider mx-auto" style={{ background:"linear-gradient(90deg, transparent, #F59E0B, transparent)" }} />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 mb-4">Get Started</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.035em] text-white mb-6 leading-[1.05]">Ready to <span className="gold-shimmer">accelerate?</span></h2>
          <p className="text-stone-400 text-lg leading-relaxed">Book a free 45-minute strategy call. We&apos;ll identify your highest-impact growth levers before we agree a single scope of work.</p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 max-w-5xl mx-auto">
          <motion.div initial={{ opacity:0,x:-40 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.7,ease:[0.16,1,0.3,1] }}>
            {submitted ? (
              <div className="glass-card p-12 text-center"><CheckCircle size={48} className="text-emerald-400 mx-auto mb-4" /><h3 className="text-xl font-bold text-white mb-2">You&apos;re booked in.</h3><p className="text-stone-400 text-[14px]">Expect a calendar invite within 2 business hours. We&apos;ll do our homework on your business before we speak.</p></div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[{id:"name",label:"Full Name",placeholder:"Jane Smith",type:"text"},{id:"email",label:"Work Email",placeholder:"jane@company.com",type:"email"},{id:"company",label:"Company Name",placeholder:"Acme Ltd",type:"text"}].map(({id,label,placeholder,type})=>(
                    <div key={id} className={id==="company"?"sm:col-span-2":""}>
                      <label htmlFor={id} className="block text-[11px] font-semibold uppercase tracking-widest text-stone-500 mb-2">{label}</label>
                      <input id={id} type={type} required placeholder={placeholder} value={form[id as keyof typeof form]} onChange={(e)=>setForm((p)=>({...p,[id]:e.target.value}))} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-stone-600 outline-none focus:border-gold-500/40 transition-colors" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 mb-3">Services of Interest</p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES_LIST.map((s)=>(<button key={s} type="button" onClick={()=>toggle(s)} className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-200 cursor-pointer ${selected.includes(s)?"bg-gold-500/15 text-gold-400 border border-gold-500/30":"bg-white/[0.03] text-stone-500 border border-white/[0.07] hover:text-white"}`}>{s}</button>))}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[11px] font-semibold uppercase tracking-widest text-stone-500 mb-2">Brief Context (optional)</label>
                  <textarea id="message" rows={4} placeholder="Tell us your biggest growth challenge right now…" value={form.message} onChange={(e)=>setForm((p)=>({...p,message:e.target.value}))} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-stone-600 outline-none focus:border-gold-500/40 transition-colors resize-none" />
                </div>
                <button type="submit" disabled={loading} className="btn-gold w-full flex items-center justify-center gap-2 text-[15px] cursor-pointer disabled:opacity-60">
                  {loading ? <><Loader2 size={16} className="animate-spin" /> Submitting…</> : <><Send size={16} /> Book My Free Strategy Call</>}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div initial={{ opacity:0,x:40 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.7,ease:[0.16,1,0.3,1] }} className="flex flex-col gap-5">
            {[{icon:Phone,label:"Call Us",value:"+44 (0) 20 7946 0321"},{icon:Mail,label:"Email",value:"advisory@apex.co.uk"},{icon:MapPin,label:"Office",value:"Canary Wharf, London"}].map(({icon:Icon,label,value})=>(
              <div key={label} className="glass-card p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/15 flex items-center justify-center shrink-0"><Icon size={16} className="text-gold-400" /></div>
                <div><p className="text-[11px] text-stone-500 uppercase tracking-wider">{label}</p><p className="text-[14px] font-medium text-white mt-0.5">{value}</p></div>
              </div>
            ))}
            <div className="glass-card p-6 border-gold-500/15 bg-gold-500/[0.03]">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-gold-400 mb-3">Our Guarantee</p>
              <p className="text-[13px] text-stone-400 leading-relaxed">If we don&apos;t identify at least three actionable growth opportunities in our first session, the call is on us — no obligations, no pressure.</p>
            </div>
            <div className="glass-card p-6">
              <div className="flex gap-1 mb-3">{Array.from({length:5}).map((_,i)=>(<span key={i} className="text-gold-400 text-sm">★</span>))}</div>
              <p className="text-[13px] text-stone-400 italic leading-relaxed mb-4">&quot;Apex identified a pricing flaw costing us £180K/yr in the first week. Six months later we&apos;d tripled MRR and closed our Series A.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center text-[11px] font-bold text-apex-base">SK</div>
                <div><p className="text-[12px] font-semibold text-white">Sarah K.</p><p className="text-[11px] text-stone-600">CEO, FlowStack (Series A, £4M)</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
