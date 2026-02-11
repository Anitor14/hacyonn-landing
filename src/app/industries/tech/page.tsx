import React from "react";
import MarqueeLogos from "@/components/Home/MarqueeLogos";
import SingleHero from "@/components/Indutries/SingleHero";
import Services from "@/components/Home/Services";
import Feat from "@/components/Shared/Feat";
import { aboutPageFeats, techProviders, techServices } from "@/lib/data";
import Review from "@/components/Shared/Review";
import Providers from "@/components/Indutries/Providers";
import Container from "@/components/Shared/Container";
import Faq from "@/components/Indutries/Faq";

const page = () => {
  return (
    <>
      <SingleHero
        title="Innovate without Limits: Hacyon for the technology industry"
        description="From agile development to scalable infrastructure—Hacyon powers the future of tech."
        imageUrl="/images/tech-hero.jpg"
      />
      <MarqueeLogos />
      <Services title="Services" services={techServices} />
      <Providers
        title="Comprehensive solutions for Technology providers"
        providers={techProviders}
      />
      <Container className="py-20 bg-[#F2FBF9]">
        <Feat title="Numbers that drive success" data={aboutPageFeats} />
      </Container>
      <Review />
      <Faq />
    </>
  );
};

export default page;
