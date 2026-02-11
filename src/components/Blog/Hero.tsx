import React from "react";
import Container from "../Shared/Container";

const Hero = () => {
  return (
    <div className="h-[65vh] relative max-h-[1200px]">
      <div className="relative z-10 h-full">
        <Container className="pt-[5vh] flex items-center h-full">
          <div className="w-full max-w-[700px] text-[#1C4540] space-y-4.5">
            <h1 className="font-bold text-5xl leading-[1.2]">
              Insights to Power Smarter Business Decisions
            </h1>
            <p className="w-full max-w-[500px] text-base lg:text-lg">
              Ideas, trends, and practical advice for scaling your business with
              technology, strategy, and innovation.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
