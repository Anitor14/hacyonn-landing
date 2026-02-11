import React from "react";
import MarqueeLogos from "@/components/Home/MarqueeLogos";
import SingleHero from "@/components/Indutries/SingleHero";
import Services from "@/components/Home/Services";
import Feat from "@/components/Shared/Feat";
import {
  aboutPageFeats,
  hospitalityProviders,
  hospitalityServices,
} from "@/lib/data";
import Review from "@/components/Shared/Review";
import Providers from "@/components/Indutries/Providers";
import Container from "@/components/Shared/Container";
import Faq from "@/components/Indutries/Faq";

const page = () => {
  return (
    <>
      <SingleHero
        title="Enhance guest experiences with smart hospitality solutions"
        description="Delivering personalized and seamless services through digital innovation."
        imageUrl="/images/hospitality.jpg"
      />
      <MarqueeLogos />
      <Services title="Services" services={hospitalityServices} />
      <Providers
        title="Comprehensive solutions for Policy providers"
        providers={hospitalityProviders}
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
