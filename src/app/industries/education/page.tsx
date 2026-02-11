import React from "react";
import SingleHero from "@/components/Indutries/SingleHero";
import Feat from "@/components/Shared/Feat";
import { aboutPageFeats } from "@/lib/data";
import Review from "@/components/Shared/Review";
import Container from "@/components/Shared/Container";
import ContactUs from "@/components/Services/ContactUs";
import EducationProvider from "@/components/Indutries/EducationProvider";

const page = () => {
  return (
    <>
      <SingleHero
        title="Empowering schools and edtech teams to scale smarter"
        description="Hacyon helps educational institutions and platforms deliver accessible, compliant, and data-driven learning experiences."
        imageUrl="/images/education-hero.jpg"
      />
      <EducationProvider />
      <Container className="py-20 bg-[#F2FBF9]">
        <Feat title="Numbers that drive success" data={aboutPageFeats} />
      </Container>
      <Review />
      <ContactUs />
    </>
  );
};

export default page;
