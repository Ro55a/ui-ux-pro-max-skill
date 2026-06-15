import Navigation          from "@/components/Navigation";
import HeroScroll          from "@/components/HeroScroll";
import AnimatedHeroSection from "@/components/AnimatedHeroSection";
import ServicesSection     from "@/components/ServicesSection";
import SectionMockups      from "@/components/SectionMockups";
import ProcessTimeline     from "@/components/ProcessTimeline";
import FinancialAnalyzer   from "@/components/FinancialAnalyzer";
import MarketResearch      from "@/components/MarketResearch";
import BusinessIntelligence from "@/components/BusinessIntelligence";
import StatsSection        from "@/components/StatsSection";
import CTASection          from "@/components/CTASection";
import Footer              from "@/components/Footer";
import CookieConsent       from "@/components/CookieConsent";

export default function Home() {
  return (
    <main className="bg-catalyst-deep min-h-screen">
      <Navigation />

      {/* ── Hero stack ── */}
      <HeroScroll />          {/* 3D scroll-driven card */}

      {/* Clear visual break before rotating-word hero */}
      <div className="border-t border-white/[0.05]" />
      <AnimatedHeroSection /> {/* Rotating word hero */}

      {/* ── Services ── */}
      <ServicesSection />

      {/* ── Platform showcase ── */}
      <SectionMockups />

      {/* ── Process ── */}
      <ProcessTimeline />

      {/* ── Tools ── */}
      <FinancialAnalyzer />
      <MarketResearch />
      <BusinessIntelligence />

      {/* ── Social proof + CTA ── */}
      <StatsSection />
      <CTASection />

      <Footer />
      <CookieConsent />
    </main>
  );
}
