import Achievements from "@/components/Services/Achievements";
import Hero from "@/components/Services/Hero";
import Services from "@/components/Services/Services";
import Review from "@/components/Shared/Review";

import { achievementsData } from "@/lib/data";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Services />
      <Achievements
        title="We have helped over 500+ companies build teams, launch faster and
            make money"
        achievements={achievementsData}
      />
      <Review />
    </>
  );
};

export default page;
