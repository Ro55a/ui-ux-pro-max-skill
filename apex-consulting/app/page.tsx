import Navigation          from "@/components/Navigation";
import HeroScroll          from "@/components/HeroScroll";
import AnimatedHeroSection from "@/components/AnimatedHeroSection";
import ServicesSection     from "@/components/ServicesSection";
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

      <HeroScroll />

      <div className="border-t border-white/[0.04]" />
      <AnimatedHeroSection />

      <ServicesSection />
      <ProcessTimeline />

      <FinancialAnalyzer />
      <MarketResearch />
      <BusinessIntelligence />

      <StatsSection />
      <CTASection />

      <Footer />
      <CookieConsent />
    </main>
  );
}
