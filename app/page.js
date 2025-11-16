import Header from "@/components/custom/Header";
import Hero from "@/components/custom/Hero";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SecurityDashboardSection from "@/components/SecurityDashboardSection";
import FeatureSection from "@/components/FeatureSection";
import FAQSection from "@/components/FAQSection";
import BannerSection from "@/components/BannerSection";
import TestimonialSection from "@/components/TestimonialSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header></Header>
      <HeroSection></HeroSection>
      <StatsSection></StatsSection>
      <FeatureSection></FeatureSection>
      <SecurityDashboardSection></SecurityDashboardSection>
      <FAQSection></FAQSection>
      <TestimonialSection></TestimonialSection>
      <BannerSection></BannerSection>
      <FooterSection></FooterSection>
    </div>
  );
}