import Image from "next/image";
import React from "react";

interface Props {
  data: {
    id: string;
    logo: string;
    title: string;
    head?: string;
    description: string;
  };
}

const ServicesCard = ({ data }: Props) => {
  return (
    <div className="bg-white border border-[#D1D1D1] rounded-xl p-6 md:p-8 h-full lg:h-[360px]">
      <div className="flex flex-col gap-6 h-full">
        <div className="w-10 h-10">
          <Image
            src={data.logo}
            width={40}
            height={40}
            alt={data.title}
            className="object-contain"
          />
        </div>

        <div className="space-y-2 text-left">
          <h2 className="text-xl font-bold text-[#000000]">{data.title}</h2>

          {data.head && (
            <h3 className="text-sm text-[#0B2826] font-medium">{data.head}</h3>
          )}

          <p className="text-sm text-[#213B3C] leading-relaxed">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
