import { LayoutContainer } from "@/sections/container";
import { HeroSection } from "@/sections/heroSection";
import { Tours } from "@/sections/Main/tours";

export default function Home() {
  return (
    <LayoutContainer>
      <HeroSection />
      <Tours />
    </LayoutContainer>
  );
}
