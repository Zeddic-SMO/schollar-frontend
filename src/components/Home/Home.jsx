import ExperiencedConsultants from "../Consultants/ExperiencedConsultants";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import BookSession from "./BookSession";
import FAQ from "./FAQ/FAQ";
import HeroSection from "./HeroSection";
import SchollarFeaturesSection from "./SchollarFeaturesSection";
import SchollarVisionSection from "./SchollarVisionSection";
import TestimoniesSection from "./TestimoniesSection";
import TrustedPartnersSection from "./TrustedPartnersSection";

const Home = () => {
  return (
    <div className="bg-white">
      <Header />
      <HeroSection />
      <SchollarFeaturesSection />
      <SchollarVisionSection />
      <ExperiencedConsultants />
      <TestimoniesSection />
      <TrustedPartnersSection />
      <FAQ />
      <BookSession />
      <Footer />
    </div>
  );
};

export default Home;
