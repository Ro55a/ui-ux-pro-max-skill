import Navigation           from "@/components/Navigation";
import HeroSection          from "@/components/HeroSection";
import HeroScroll           from "@/components/HeroScroll";
import DisplayCards         from "@/components/DisplayCards";
import AnimatedHeroSection  from "@/components/AnimatedHeroSection";
import ServicesSection      from "@/components/ServicesSection";
import FinancialAnalyzer    from "@/components/FinancialAnalyzer";
import MarketResearch       from "@/components/MarketResearch";
import StatsSection         from "@/components/StatsSection";
import CTASection           from "@/components/CTASection";
import Footer               from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-catalyst-deep min-h-screen">
      <Navigation />
      <HeroSection />
      <HeroScroll />
      <DisplayCards />
      <AnimatedHeroSection />
      {/* #services */}
      <ServicesSection />
      {/* #analytics */}
      <FinancialAnalyzer />
      {/* #intelligence */}
      <MarketResearch />
      {/* #results */}
      <StatsSection />
      {/* #contact */}
      <CTASection />
      <Footer />
    </main>
  );
}
