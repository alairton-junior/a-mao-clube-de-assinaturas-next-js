import { HowItWorksSection } from "./sections/how-it-works-section";
import { HeroSection } from "./sections/hero-section";
import { TargetAudienceSection } from "./sections/target-audience-section";
import { PlansCatalogSection } from "./sections/plans-catalog-section";
import { KitAMao } from "./sections/kit-a-mao";
import { Team } from "./sections/team-section";
import { TutorialsSection } from "./sections/tutorials-section";

export const LandingPage = () => {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <HowItWorksSection />
      <TargetAudienceSection />

      <KitAMao />
      <TutorialsSection />
      <PlansCatalogSection />
      <Team />
    </article>
  );
};
