import React from "react";
import MarqueeLogos from "@/components/Home/MarqueeLogos";
import SingleHero from "@/components/Indutries/SingleHero";
import Services from "@/components/Home/Services";
import Feat from "@/components/Shared/Feat";
import { aboutPageFeats, salesProviders, salesServices } from "@/lib/data";
import Review from "@/components/Shared/Review";
import Providers from "@/components/Indutries/Providers";
import Container from "@/components/Shared/Container";
import Faq from "@/components/Indutries/Faq";

const page = () => {
  return (
    <>
      <SingleHero
        title="Revolutionize retail experiences with digital precision"
        description="Empowering retailers to deliver seamless, personalized shopping across all channels."
        imageUrl="/images/sales-hero.jpg"
      />
      <MarqueeLogos />
      <Services title="Services" services={salesServices} />
      <Providers
        title="Comprehensive solutions for Direct sales providers"
        providers={salesProviders}
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
