import CompanyOverview from "@/components/CompanyOverview";
import Herosection from "@/components/HeroSection";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="w-full">
      <Herosection />
      <CompanyOverview />
      <Products />
      <Testimonials />
    </div>

  );
}
