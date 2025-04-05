
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DashboardPreview from "@/components/DashboardPreview";
import RecognitionSection from "@/components/RecognitionSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <DashboardPreview />
        <RecognitionSection />
        <AnalyticsSection />
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
