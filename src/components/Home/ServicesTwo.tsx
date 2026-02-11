import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  service: {
    id: number;
    image: StaticImageData;
    title: string;
    description: string;
  };
}

const ServicesTwo = ({ service }: Props) => {
  return (
    <div className="bg-[#F2FBF9] border border[#237E724D] rounded-xl p-6 md:p-8 h-full">
      <div className="flex flex-col gap-8 h-full">
        <div className="bg-white rounded-full self-start p-1 shadow-[0_4px_12px_#2E9E8D4F]">
          <div className="w-10 h-10">
            <Image
              src={service.image}
              width={40}
              height={40}
              alt={service.title}
              className="object-contain"
            />
          </div>
        </div>

        <div className="space-y-2 text-left">
          <h2 className="text-lg text-[#20655D]">{service.title}</h2>

          <p className="text-sm text-[#213B3C] leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesTwo;
