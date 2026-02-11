import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  data: {
    id: string;
    link: string;
    image: StaticImageData;
    title?: string;
    heading?: string;
    description?: string;
  };
}

const ServiceCardTwo = ({ data }: Props) => {
  return (
    <div className="group transition-all duration-300 rounded-[12px] overflow-hidden border border-[#213B3C0F]/90">
      <Link href={data.link}>
        <Image
          src={data.image}
          alt={data.title || ""}
          className="w-full transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
        />
      </Link>
      <div className="bg-[#FFFFFF] py-6 px-4 space-y-6">
        <h1 className="text-[#213B3C] font-bold text-xl">{data.title}</h1>
        <div className="space-y-2">
          <h2>{data.heading}</h2>
          <p>{data.description}</p>
        </div>
        <Link href={data.link}>
          <Button className="bg-[#213B3C] rounded-[4px] h-[50px] w-[110px] hover:bg-[#213B3C]/80 transition-colors duration-300 cursor-pointer">
            Learn more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCardTwo;
