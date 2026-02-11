import React from "react";
import SingleHero from "@/components/Indutries/SingleHero";
import Feat from "@/components/Shared/Feat";
import { aboutPageFeats } from "@/lib/data";
import Review from "@/components/Shared/Review";
import Container from "@/components/Shared/Container";
import ContactUs from "@/components/Services/ContactUs";
import HealthCareProvider from "@/components/Indutries/HealthCareProvider";

const page = () => {
  return (
    <>
      <SingleHero
        title="Empowering healthcare through smarter tech."
        description="We help healthcare providers, clinics, and health tech startups digitize workflows, enhance patient experiences, and stay compliant with industry regulations."
        imageUrl="/images/healthcare.jpg"
      />
      <HealthCareProvider />
      <Container className="py-20 bg-[#F2FBF9]">
        <Feat title="Numbers that drive success" data={aboutPageFeats} />
      </Container>
      <Review />
      <ContactUs />
    </>
  );
};

export default page;
