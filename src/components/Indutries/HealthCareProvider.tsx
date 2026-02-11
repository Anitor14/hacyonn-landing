import React from "react";
import Container from "../Shared/Container";
import { StaticImageData } from "next/image";
import { healthCareData } from "@/lib/data";
import { Button } from "../ui/button";
import Image from "next/image";

const HealthCareCard = ({
  title,
  description,
  image,
  index,
}: {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  index: number;
}) => {
  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-[36px] md:gap-[76px] py-[24px] md:py-[48px]">
      <div
        className={`space-y-5.5 my-auto ${
          index % 2 === 0 ? "md:order-2" : "md:order-1"
        }`}
      >
        <h1 className="text-[#1C4540] text-[30px] font-bold">{title}</h1>
        <p className="text-[#1C4540] flex-1 text-[18px] font-medium">
          {description}
        </p>
        <Button className="bg-[#213B3C] w-[117px] h-[50px] hover:bg-[#213B3C]/80 cursor-pointer">
          Get Started
        </Button>
      </div>
      <div
        className={`w-full h-full rounded-[12px] overflow-hidden ${
          index % 2 === 0 ? "md:order-1" : "md:order-2"
        }`}
      >
        <Image src={image} className="w-full h-full object-cover" alt="image" />
      </div>
    </div>
  );
};

const HealthCareProvider = () => {
  return (
    <div className="bg-white pt-[64px] pb-[112px]">
      <Container className="space-y-4">
        <div className="space-y-1.5 md:space-y-2.5">
          <h1 className="text-[#213B3C] max-w-[535px] text-3xl md:text-[36px] font-bold">
            Comprehensive solutions for healthcare providers
          </h1>
          <div className="">
            {healthCareData.map((item) => (
              <HealthCareCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HealthCareProvider;
