import Navigation from "@/components/navigation";
import HeroCarousel from "@/components/hero-carousel";
import BusinessShowcase from "@/components/business-showcase";
import LegacySection from "@/components/legacy-section";
import InnovationSection from "@/components/innovation-section";
import CommunitySection from "@/components/community-section";
import CareersSection from "@/components/careers-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroCarousel />
        <BusinessShowcase />
        <LegacySection />
        <InnovationSection />
        <CommunitySection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 rounded-full w-12 h-12 p-0 bg-ab-maroon hover:bg-ab-maroon-dark transition-all duration-300 ${
          showScrollTop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  );
}
