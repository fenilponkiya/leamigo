import { LayoutContainer } from "@/sections/container";
import { HeroSection } from "@/sections/heroSection";
import { TourHeroSection } from "@/sections/tourHeroSection";

const Tour = () => {
  return (
    <LayoutContainer>
      <HeroSection isBadge />
      <TourHeroSection />
    </LayoutContainer>
  );
};
export default Tour;
