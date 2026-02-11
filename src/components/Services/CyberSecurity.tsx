import React from "react";
import AboutServiceSection from "./AboutServiceSection";
import Services from "../Home/Services";
import CyberSecurityImage from "../../../public/images/cyber.png";
import Review from "../Shared/Review";
import Achievements from "./Achievements";
import { cyberSecurityAchievements, cyberSecurityServices } from "@/lib/data";

const CyberSecurity = () => {
  return (
    <div>
      <AboutServiceSection
        title="CYBER SECURITY"
        subTitle="Secure From the Inside Out."
        description="At Hacyon, we protect your business with proactive, modern security from audits to response plans. Stay safe, stay ready"
        image={CyberSecurityImage}
      />
      <Services title="Our CyberSecurity Services" services={cyberSecurityServices} />
      <Achievements
        title="Case Studies"
        achievements={cyberSecurityAchievements}
      />
      <Review />
    </div>
  );
};

export default CyberSecurity;
