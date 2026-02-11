import React from "react";
import MarqueeLogos from "@/components/Home/MarqueeLogos";
import SingleHero from "@/components/Indutries/SingleHero";
import Services from "@/components/Home/Services";
import Feat from "@/components/Shared/Feat";
import {
  aboutPageFeats,
  transportationProviders,
  transportationServices,
} from "@/lib/data";
import Review from "@/components/Shared/Review";
import Providers from "@/components/Indutries/Providers";
import Container from "@/components/Shared/Container";
import Faq from "@/components/Indutries/Faq";

const page = () => {
  return (
    <>
      <SingleHero
        title="Drive efficiency and visibility in logistics operations"
        description="Streamlining supply chains with intelligent, real-time logistics solutions."
        imageUrl="/images/transportation-hero.jpg"
      />
      <MarqueeLogos />
      <Services title="Services" services={transportationServices} />
      <Providers
        title="Comprehensive solutions for Logistics providers"
        providers={transportationProviders}
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
