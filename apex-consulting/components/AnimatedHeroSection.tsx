"use client";

/**
 * Rotating-word animated hero section.
 * Words cycle every 2 seconds — edit them in the component below or
 * move them to site.config.ts if you want no-code editing.
 */

import { Hero } from "@/components/ui/animated-hero";

export default function AnimatedHeroSection() {
  return (
    <section className="relative bg-apex-deep border-b border-white/[0.04]">
      <Hero />
    </section>
  );
}
