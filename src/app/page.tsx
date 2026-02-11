import Blog from "@/components/Home/Blog";
import Hero from "@/components/Home/Hero";
// import MarqueeLogos from "@/components/Home/MarqueeLogos";
import Projects from "@/components/Home/Projects";
import Service from "@/components/Home/Service";
// import Services from "@/components/Home/Services";
import Why from "@/components/Home/Why";
import Feat from "@/components/Shared/Feat";
import Review from "@/components/Shared/Review";
import { landingPageFeats } from "@/lib/data";
// import { landingPageServices } from "@/lib/data";

export default function Home() {
  //change
  return (
    <>
      <Hero />
      {/* <MarqueeLogos /> */}
      <Service />
      {/* <Services
        title="Our Services"
        description="Hacyon delivers technology-driven services designed to optimize operations, enhance efficiency, and drive growth."
        services={landingPageServices}
      /> */}
      <Projects />
      <Why />

      <Feat title="Numbers that drive success" data={landingPageFeats} />

      <Blog />
      <Review />
    </>
  );
}
