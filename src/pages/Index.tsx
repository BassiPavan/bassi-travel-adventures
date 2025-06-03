
import { Hero } from "@/components/Hero";
import { PopularDestinations } from "@/components/PopularDestinations";
import { TravelServices } from "@/components/TravelServices";
import { FeaturedDeals } from "@/components/FeaturedDeals";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Hero />
      <PopularDestinations />
      <TravelServices />
      <FeaturedDeals />
      <Footer />
    </div>
  );
};

export default Index;
