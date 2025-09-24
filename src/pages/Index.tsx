import RestaurantHeader from "@/components/RestaurantHeader";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import RestaurantFooter from "@/components/RestaurantFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <RestaurantHeader />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <RestaurantFooter />
    </div>
  );
};

export default Index;
