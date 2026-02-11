import React from "react";
import AboutServiceSection from "./AboutServiceSection";
import Services from "../Home/Services";
import EntrepreneurshipImage from "../../../public/images/entrepreneur.png";
import Review from "../Shared/Review";
import Achievements from "./Achievements";
import {
  entrepreneurshipAchievements,
  entrepreneurshipServices,
} from "@/lib/data";

const Entrepreneurship = () => {
  return (
    <div>
      <AboutServiceSection
        title="AI ENTREPRENEURSHIP"
        subTitle="From Idea to Impact. Faster."
        description="Whether you're validating, launching, or scaling, Hacyon gives founders the tools, tech, and support to build businesses that last."
        image={EntrepreneurshipImage}
      />
      <Services
        title="Our Startup Services"
        services={entrepreneurshipServices}
      />
      <Achievements
        title="Case Studies"
        achievements={entrepreneurshipAchievements}
      />
      <Review />
    </div>
  );
};

export default Entrepreneurship;
