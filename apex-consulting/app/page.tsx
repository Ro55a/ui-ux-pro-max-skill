import Navigation            from "@/components/Navigation";
import HeroScroll           from "@/components/HeroScroll";
import DisplayCardsHero     from "@/components/DisplayCardsHero";
import ServicesSection      from "@/components/ServicesSection";
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
      <HeroScroll />
      <DisplayCardsHero />
      <ServicesSection />
      <StatsSection />
      <FinancialAnalyzer />
      <MarketResearch />
      <BusinessIntelligence />
      <CTASection />
      <Footer />
      <CookieConsent />
    </main>
  );
}
