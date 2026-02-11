import React from "react";
import AboutServiceSection from "./AboutServiceSection";
import Services from "../Home/Services";
import HumanResourcesImage from "../../../public/images/HRImg.png";
import Review from "../Shared/Review";
import Achievements from "./Achievements";
import { achievementsData, humanResourcesServices } from "@/lib/data";

const HumanResources = () => {
  return (
    <div>
      <AboutServiceSection
        title="HUMAN RESOURCES"
        subTitle="HR That Puts People First and Teams Ahead"
        description="With Hacyon, we automate your HR tasks, onboarding, payroll, reviews and compliance from hiring to retirement, so your people and processes thrive."
        image={HumanResourcesImage}
      />
      <Services
        title="Our HR Services"
        // description="Our HR solutions help you manage your team efficiently—from recruitment to retirement. Hacyon automates key HR processes like onboarding, payroll, and performance reviews while improving employee engagement and compliance."
        services={humanResourcesServices}
      />
      <Achievements title="Case Studies" achievements={achievementsData} />
      <Review />
    </div>
  );
};

export default HumanResources;
