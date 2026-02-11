import React from "react";
import AboutServiceSection from "./AboutServiceSection";
import Services from "../Home/Services";
import SoftwareDevelopmentImage from "../../../public/images/DevImg.png";
import Review from "../Shared/Review";
import Achievements from "./Achievements";
import { projectsData, softwareDevelopmentServices } from "@/lib/data";

const SoftwareDevelopment = () => {
  return (
    <div>
      <AboutServiceSection
        title="SOFTWARE DEVELOPMENT"
        subTitle="Build Smart. Scale Fast."
        description="With Haycon, you move from MVPs to full-scale platforms. We turn ideas into seamless, scalable tech: mobile apps, SaaS products, or internal tools. We build what works."
        image={SoftwareDevelopmentImage}
      />
      <Services title="What we do" services={softwareDevelopmentServices} />
      <Achievements title="Projects" achievements={projectsData} />
      <Review />
    </div>
  );
};

export default SoftwareDevelopment;
