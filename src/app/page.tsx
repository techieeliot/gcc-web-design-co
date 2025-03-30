import FeaturesSection from "components/FeaturesSection";
import ValueProposition from "components/ValueProposition";
import ProjectShowcase from "components/ProjectShowcase";
import BannerSection from "components/BannerSection";

export default function HomeRoute() {
  return (
    <div className="container mx-auto px-4">
      <BannerSection />
      <div className="py-8">
        <FeaturesSection />
      </div>
      <div className="py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          <div className="md:col-span-1 lg:col-span-4">
            <ProjectShowcase />
          </div>
          <div className="md:col-span-1 lg:col-span-8">
            <ValueProposition />
          </div>
        </div>
      </div>
    </div>
  );
}
