import ExperiencedConsultants from "../Consultants/ExperiencedConsultants";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";
import SchollarFeaturesSection from "./SchollarFeaturesSection";
import SchollarVisionSection from "./SchollarVisionSection";
import TestimoniesSection from "./TestimoniesSection";
import TrustedPartnersSection from "./TrustedPartnersSection";

const Home = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <SchollarFeaturesSection />
      <SchollarVisionSection />
      <ExperiencedConsultants />
      <TestimoniesSection />
      <TrustedPartnersSection />
      <FAQ />
    </div>
  );
};

export default Home;
