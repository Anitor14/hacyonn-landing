import React from "react";
import Marquee from "react-fast-marquee";
// import Netspice from "../../../public/images/netspice_logo.png";
import BooteYatchen from "../../../public/images/boote-yatche.png";
import Yatchall from "../../../public/images/yatchall.png";
import Happy_Charter from "../../../public/images/happy-charter.png";
import Image from "next/image";

const MarqueeLogos = () => {
  const logos = [
    // {
    //   image: Walmart,
    // },
    // {
    //   image: Google,
    // },
    // {
    //   image: Airbnb,
    // },
    // {
    //   image: Netspice,
    // },
    {
      image: BooteYatchen,
    },
    {
      image: Yatchall,
    },
    {
      image: Happy_Charter,
    },
  ];
  return (
    <div className="relative w-full lg:w-[70%] mx-auto overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

      <Marquee className="py-4">
        <div className="flex items-center gap-20">
          {logos.map((logo, i) => (
            <Image
              key={i}
              src={logo.image}
              alt={`logo-${i}`}
              className="w-[120px] h-[120px] object-contain"
            />
          ))}
        </div>
      </Marquee>

      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default MarqueeLogos;
