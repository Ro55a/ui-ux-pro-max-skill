import Navigation           from "@/components/Navigation";
import HeroSection          from "@/components/HeroSection";
import DisplayCards         from "@/components/DisplayCards";
import ServicesSection      from "@/components/ServicesSection";
import FinancialAnalyzer    from "@/components/FinancialAnalyzer";
import MarketResearch       from "@/components/MarketResearch";
import BusinessIntelligence from "@/components/BusinessIntelligence";
import StatsSection         from "@/components/StatsSection";
import CTASection           from "@/components/CTASection";
import Footer               from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-catalyst-deep min-h-screen">
      <Navigation />
      {/* Home */}
      <HeroSection />
      <DisplayCards />
      {/* #services */}
      <ServicesSection />
      {/* #analytics */}
      <FinancialAnalyzer />
      {/* #intelligence */}
      <MarketResearch />
      <BusinessIntelligence />
      {/* #results */}
      <StatsSection />
      {/* #contact */}
      <CTASection />
      <Footer />
    </main>
  );
}
