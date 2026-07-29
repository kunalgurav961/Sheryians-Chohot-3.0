import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import StatsSection from "../components/StatsSection";

const Home = () => {
  return (
    <div className="bg-[#111111]">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <CategorySection />
      <FeaturedProducts />
      <FeaturesSection />
    </div>
  );
};

export default Home;