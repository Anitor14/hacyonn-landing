import React from "react";
import AboutServiceSection from "./AboutServiceSection";
import Services from "../Home/Services";
import DesignImage from "../../../public/images/designimg.png";
import Review from "../Shared/Review";
import Achievements from "./Achievements";
import { designAchievements, designServices } from "@/lib/data";

const Design = () => {
  return (
    <div>
      <AboutServiceSection
        title="DESIGN"
        subTitle="Design that connects and converts"
        description="Hacyon designs interfaces that look stunning, feel intuitive, and drive results. From branding to UX, every detail is backed by strategy and built for impact."
        image={DesignImage}
      />
      <Services title="Our Design Services" services={designServices} />
      <Achievements title="Case Studies" achievements={designAchievements} />
      <Review />
    </div>
  );
};

export default Design;
