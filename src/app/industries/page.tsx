import Hero from "@/components/Indutries/Hero";
import Indutries from "@/components/Indutries/Indutries";
import Achievements from "@/components/Services/Achievements";
import Review from "@/components/Shared/Review";
import { achievementsData } from "@/lib/data";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Indutries />
      <Achievements title="OUR TANGIBLE WINS" achievements={achievementsData} />
      <Review />
    </>
  );
};

export default page;
