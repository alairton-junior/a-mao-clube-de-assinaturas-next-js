import { HowItWorksSection } from "./sections/how-it-works-section";
import { HeroSection } from "./sections/hero-section";
import { TargetAudienceSection } from "./sections/target-audience-section";
import { PlansCatalogSection } from "./sections/plans-catalog-section";

export const LandingPage = () => {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <HowItWorksSection />
      <TargetAudienceSection />
      <PlansCatalogSection />
    </article>
  );
};
