"use client";

/**
 * "How We Work" section using the RadialOrbitalTimeline.
 * Click any node to expand the detail card.
 * The orbit auto-rotates and pauses when a node is selected.
 */

import { motion } from "framer-motion";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import {
  Search,
  BarChart2,
  Globe,
  Lightbulb,
  Rocket,
  CheckCircle,
} from "lucide-react";

const PROCESS = [
  {
    id: 1,
    title: "Discovery",
    date: "Week 1",
    content:
      "A structured diagnostic session covering your business model, financials, market position, and the constraints limiting growth. We arrive prepared — we research your sector before we meet.",
    category: "Onboarding",
    icon: Search,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Financial Audit",
    date: "Week 1–2",
    content:
      "Deep analysis of your P&L, cash flow, and unit economics. We identify margin leaks, pricing gaps, and the three to five numbers that actually determine your trajectory.",
    category: "Finance",
    icon: BarChart2,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Market Analysis",
    date: "Week 2–3",
    content:
      "Competitor profiling, TAM sizing, and positioning assessment. We map where you sit in the market and where the whitespace is — backed by primary and secondary research.",
    category: "Research",
    icon: Globe,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 4,
    title: "Strategy",
    date: "Week 3–4",
    content:
      "A clear, prioritised growth plan with defined outcomes, timelines, and ownership. No generic frameworks — every recommendation is specific to your business and validated against your financials.",
    category: "Planning",
    icon: Lightbulb,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 5,
    title: "Implementation",
    date: "Month 2+",
    content:
      "We work alongside your team to execute — whether that means building the financial model, running the market research programme, or designing the operational framework.",
    category: "Execution",
    icon: Rocket,
    relatedIds: [4, 6],
    status: "pending" as const,
    energy: 35,
  },
  {
    id: 6,
    title: "Review",
    date: "Ongoing",
    content:
      "Regular progress reviews against agreed KPIs. We adjust the plan as conditions change and hold ourselves accountable to the same outcomes we committed to at the outset.",
    category: "Governance",
    icon: CheckCircle,
    relatedIds: [5],
    status: "pending" as const,
    energy: 15,
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Header — sits above the orbital canvas */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-16 pb-6 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-yellow-500 mb-3">
            Our Process
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.03em] text-white">
            How an engagement works.
          </h2>
          <p className="text-stone-500 text-[14px] mt-3 max-w-md mx-auto leading-relaxed">
            Click any node to see what happens at each stage.
          </p>
        </motion.div>
      </div>

      {/* Orbital canvas */}
      <RadialOrbitalTimeline timelineData={PROCESS} />
    </section>
  );
}
