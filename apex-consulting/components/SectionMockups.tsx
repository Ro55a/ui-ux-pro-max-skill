"use client";

/**
 * Two SectionWithMockup blocks showcasing:
 *  1. Financial analysis platform (default layout)
 *  2. Market intelligence tools (reversed layout)
 *
 * Images: Unsplash stock photos — swap URLs in site.config.ts or here
 * if you have branded screenshots.
 */

import SectionWithMockup from "@/components/ui/section-with-mockup";

const SECTIONS = [
  {
    title: (
      <>
        Financial clarity,
        <br />
        in minutes.
      </>
    ),
    description:
      "Upload any spreadsheet — P&L, cash-flow statement, or revenue export — and receive an instant read of your margins, burn trajectory, and growth rate against industry benchmarks. No manual formatting. No waiting.",
    primaryImageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    secondaryImageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    reverseLayout: false,
  },
  {
    title: (
      <>
        Know your competitors
        <br />
        before they know you.
      </>
    ),
    description:
      "We map your competitive landscape — pricing, positioning, funding signals, and product gaps — so you can move first. Updated continuously, not just at the start of an engagement.",
    primaryImageSrc:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
    secondaryImageSrc:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
    reverseLayout: true,
  },
];

export default function SectionMockups() {
  return (
    <>
      {SECTIONS.map((s, i) => (
        <SectionWithMockup key={i} {...s} />
      ))}
    </>
  );
}
