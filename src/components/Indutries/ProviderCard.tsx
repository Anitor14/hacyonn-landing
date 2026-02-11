import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Button } from "../ui/button";

type Props = {
  title: string;
  description: string;
  image: StaticImageData;
};

const ProviderCard = ({ title, description, image }: Props) => {
  return (
    <div className="bg-white w-full pb-[48px] py-6 shadow-sm space-y-6 px-3 rounded-[6px]">
      <div className=" w-full rounded-[4px] overflow-hidden max-h-[410px]">
        <Image
          src={image}
          className=" object-cover w-full h-full"
          alt="image"
        />
      </div>
      <h3 className="text-[20px] text-[#1C4540] font-bold">{title}</h3>
      <p className="text-lg text-[#1C4540] font-medium">{description}</p>
      <Button className="bg-[#1C4540] h-[50px] cursor-pointer font-medium hover:bg-[#213B3C]/90 w-full text-white">
        Get Started
      </Button>
    </div>
  );
};

export default ProviderCard;
