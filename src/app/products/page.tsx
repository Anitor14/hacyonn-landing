import ProjectCard from "@/components/InnovationHub/ProjectCard";
import Hero from "@/components/Shared/Hero";
import React from "react";

const page = () => {
  const url = "/images/InnHub.png";
  return (
    <div className="bg-white dark:bg-[#0B2826]">
      <Hero
        background={url}
        text="Creating Change Through Technology"
        paragraph="We build innovative products that solve real-world problems. From ticketing to security and delivery, Hacyon's ecosystem is designed to empower businesses and individuals."
      />
      <div className="relative overflow-hidden">
        <ProjectCard />
      </div>
    </div>
  );
};

export default page;
