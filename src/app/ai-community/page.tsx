import AIComponents from "@/components/AICommunity/AIComponents";
import OpenAICommunity from "@/components/AICommunity/OpenAICommunity";
import Routine from "@/components/AICommunity/Routine";
import Hero from "@/components/Shared/Hero";
import React from "react";

const page = () => {
  const url = "/images/AICommunityHero.png";
  return (
    <div>
      <Hero
        background={url}
        text="AI does not replace you. It replaces the person who refuses to learn how to use it."
      />
      <OpenAICommunity />
      <AIComponents />
      <Routine />
    </div>
  );
};

export default page;
