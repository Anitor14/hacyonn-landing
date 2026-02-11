import React from "react";
import AboutServiceSection from "./AboutServiceSection";
import SalesProcess from "./SalesProcess";
import Services from "../Home/Services";
import SalesImage from "../../../public/images/salesImg.png";
import Review from "../Shared/Review";
import { landingPageServices } from "@/lib/data";

const SalesEnablement = () => {
  return (
    <div>
      <AboutServiceSection
        title="Sales Enablement"
        subTitle="Accelerate Growth with Smarter Sales Tools"
        description="Empower your sales teams with tools built for speed, insights, and results. Hacyon provides sales automation platforms, CRM integration, and performance tracking systems that streamline workflows and unlock revenue growth."
        image={SalesImage}
      />
      <Services title="Our Services" services={landingPageServices} />
      <SalesProcess />
      <Review />
    </div>
  );
};

export default SalesEnablement;
