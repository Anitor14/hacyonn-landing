import React from "react";
import MarqueeLogos from "@/components/Home/MarqueeLogos";
import SingleHero from "@/components/Indutries/SingleHero";
import Services from "@/components/Home/Services";
import Feat from "@/components/Shared/Feat";
import {
  aboutPageFeats,
  govermentProviders,
  govermentServices,
} from "@/lib/data";
import Review from "@/components/Shared/Review";
import Providers from "@/components/Indutries/Providers";
import Container from "@/components/Shared/Container";
import Faq from "@/components/Indutries/Faq";

const page = () => {
  return (
    <>
      <SingleHero
        title="Transform public services with digital innovation"
        description="Enhancing citizen engagement and operational efficiency through technology."
        imageUrl="/images/goverment.jpg"
      />
      <MarqueeLogos />
      <Services title="Services" services={govermentServices} />
      <Providers
        title="Comprehensive solutions for Cyber security providers"
        providers={govermentProviders}
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
