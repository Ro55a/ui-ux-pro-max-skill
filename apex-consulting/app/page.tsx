import Navigation            from "@/components/Navigation";
import HeroScroll           from "@/components/HeroScroll";
import AnimatedHeroSection  from "@/components/AnimatedHeroSection";
import DisplayCardsHero     from "@/components/DisplayCardsHero";
import ServicesSection      from "@/components/ServicesSection";
import SectionMockups       from "@/components/SectionMockups";
import ProcessTimeline      from "@/components/ProcessTimeline";
import FinancialAnalyzer    from "@/components/FinancialAnalyzer";
import MarketResearch       from "@/components/MarketResearch";
import BusinessIntelligence from "@/components/BusinessIntelligence";
import StatsSection         from "@/components/StatsSection";
import CTASection           from "@/components/CTASection";
import Footer               from "@/components/Footer";
import CookieConsent        from "@/components/CookieConsent";

export default function Home() {
  return (
    <main className="bg-apex-deep min-h-screen">
      <Navigation />

      {/* ── Hero stack ── */}
      <HeroScroll />          {/* 3D scroll-driven card */}
      <AnimatedHeroSection /> {/* Rotating word hero */}
      <DisplayCardsHero />    {/* 3 stacked skewed cards */}

      {/* ── Services ── */}
      <ServicesSection />

      {/* ── Platform showcase ── */}
      <SectionMockups />      {/* 2× split layout with parallax images */}

      {/* ── Process ── */}
      <ProcessTimeline />     {/* Radial orbital timeline */}

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
