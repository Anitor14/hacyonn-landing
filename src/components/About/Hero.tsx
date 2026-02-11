import React from "react";
import Container from "../Shared/Container";

const Hero = () => {
  const url = "/images/AboutHero.jpg";
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[65vh] lg:h-screen relative max-h-[1200px]"
    >
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="relative z-10 h-full flex items-end">
        <Container className="w-full">
          <div className="w-full max-w-[800px] text-white space-y-4.5 mb-22">
            <h1 className="font-bold text-5xl leading-[1.2]">
              Welcome to Hacyon
            </h1>
            <p className="w-full max-w-[500px] text-base lg:text-lg">
              Your partner for smart, scalable digital solutions.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
