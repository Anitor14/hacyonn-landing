"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  data: {
    id: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logo: any;
    title: string;
    head?: string;
    description: string;
  };
}

const ServiceCard = ({ data }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group h-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-[#3BB7A3]/50 hover:shadow-[0_20px_40px_-10px_rgba(59,183,163,0.15)] flex flex-col relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#3BB7A3]/10 to-transparent rounded-bl-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150 group-hover:from-[#3BB7A3]/20" />

      <div className="mb-8 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3BB7A3]/20 to-[#4FBCAA]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/5 shadow-inner">
          <Image
            src={data.logo}
            width={36}
            height={36}
            alt={data.title}
            className="object-contain brightness-[100] group-hover:brightness-0 opacity-80 group-hover:opacity-100 transition-all duration-300"
            style={{ filter: "invert(1) brightness(2)" }}
          />
        </div>
      </div>

      <div className="space-y-4 flex-grow relative z-10">
        <h3 className="text-2xl font-bold text-white group-hover:text-[#3BB7A3] transition-colors duration-300">
          {data.title}
        </h3>

        {data.head && (
          <p className="text-[#3BB7A3] font-medium text-xs uppercase tracking-widest">
            {data.head}
          </p>
        )}

        <p className="text-white/60 leading-relaxed group-hover:text-white/90 transition-colors duration-300 text-base">
          {data.description}
        </p>
      </div>

      <div className="pt-8 mt-4 relative z-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <span className="text-[#3BB7A3] text-sm font-semibold">Learn more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3BB7A3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
