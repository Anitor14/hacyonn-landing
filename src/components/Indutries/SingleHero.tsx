import React from "react";
import Container from "../Shared/Container";
import { Button } from "../ui/button";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

const SingleHero = ({ title, description, imageUrl }: Props) => {
  const url = imageUrl;
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

      <div className="relative z-10">
        <Container className="pt-[25vh]">
          <div className="w-full max-w-[750px] text-white space-y-4.5">
            <h1 className="font-bold text-[32px] lg:text-5xl leading-[1.2]">
              {title}
            </h1>
            <p className="w-full max-w-[500px] text-base lg:text-lg">
              {description}
            </p>
            <Button className="bg-[#213B3C] w-[117px] h-[50px] hover:bg-[#213B3C]/80 cursor-pointer">
              Get in touch
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SingleHero;
