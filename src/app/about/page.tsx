import Intro from "@/components/About/Intro";
import MissionVision from "@/components/About/MissionVision";
import OperationPillars from "@/components/About/OperationPillars";
import Story from "@/components/About/Story";
import Team from "@/components/About/Team";
import Why from "@/components/About/Why";
import Services from "@/components/Home/Services";
import Feat from "@/components/Shared/Feat";
import Hero from "@/components/Shared/Hero";
import { aboutPageFeats, coreValuesData } from "@/lib/data";
import React from "react";

const page = () => {
  const url = "/images/AboutBg.jpg";
  return (
    <>
      <Hero
        background={url}
        text="Experience Hacyon"
        paragraph="We are Venture Architects, building the transcontinental infrastructure for the digital future."
      />
      <Intro />
      <MissionVision />
      <Story />
      <OperationPillars />
      <Why />
      <Services title="Core Values" services={coreValuesData} />
      <div className="py-20 bg-[#F2FBF9] dark:bg-white/5">
        <Feat title="Global impact in numbers" data={aboutPageFeats} />
      </div>
      <Team />
    </>
  );
};

export default page;
