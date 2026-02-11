import React from "react";
import SingleHero from "@/components/Indutries/SingleHero";
import Feat from "@/components/Shared/Feat";
import { aboutPageFeats } from "@/lib/data";
import Review from "@/components/Shared/Review";
import Container from "@/components/Shared/Container";
import ContactUs from "@/components/Services/ContactUs";
import FinanceProvider from "@/components/Indutries/FinanceProvider";

const page = () => {
  return (
    <>
      <SingleHero
        title="Secure, Compliant Digital Solutions for Financial Institutions"
        description="From fintech startups to traditional firms, Hacyon powers agile, audit-ready systems that scale."
        imageUrl="/images/finance.jpg"
      />
      <FinanceProvider />
      <Container className="py-20 bg-[#F2FBF9]">
        <Feat title="Numbers that drive success" data={aboutPageFeats} />
      </Container>
      <Review />
      <ContactUs />
    </>
  );
};

export default page;
