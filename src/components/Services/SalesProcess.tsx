"use client";
import React from "react";
import Container from "../Shared/Container";
import { CircleCheck } from "lucide-react";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Image from "next/image";
import { salesProcessData } from "@/lib/data";

const ProcessSection = ({
  title,
  description,
  offers,
  image,
  index,
}: {
  title: string;
  description: string;
  offers: string[];
  image: StaticImageData;
  index: number;
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 py-20 lg:py-28 items-center">
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`space-y-10 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
      >
        <div className="space-y-6">
          <h3 className="text-[32px] lg:text-[44px] font-black text-[#1C4540] dark:text-white leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg lg:text-xl font-medium leading-relaxed">
            {description}
          </p>
        </div>

        {offers.length > 0 && (
          <div className="space-y-6">
            <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-[#4FBCAA]">
              What we offer
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {offers.map((offer) => (
                <div key={offer} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#4FBCAA]/10 flex items-center justify-center shrink-0">
                    <CircleCheck className="w-4 h-4 text-[#4FBCAA]" />
                  </div>
                  <p className="text-[#1C4540] dark:text-gray-300 text-lg font-bold leading-tight">
                    {offer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className={`relative ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="absolute inset-0 bg-[#4FBCAA]/10 -z-10 rounded-full" />
        <div className="relative rounded-3xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 group">
          <Image
            src={image}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt="image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02201C]/30 via-transparent to-transparent" />
        </div>
      </motion.div>
    </div>
  );
};

const SalesProcess = () => {
  return (
    <section className="bg-white dark:bg-[#0B2826] py-24 lg:py-32 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-[10%] left-0 w-[50%] h-[50%] bg-[#4FBCAA]/5 rounded-full pointer-events-none" />

      <Container>
        <div className="space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] bg-[#4FBCAA] w-[60px]"></div>
              <span className="text-xs font-black tracking-[0.3em] uppercase text-[#4FBCAA]">
                Our Methodology
              </span>
            </div>
            <h2 className="text-[40px] lg:text-[64px] font-black text-[#1C4540] dark:text-white leading-[1.1] tracking-tight">
              Our Sales{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FBCAA] to-[#3BB7A3]">
                Process
              </span>
            </h2>
          </motion.div>

          <div className="divide-y divide-black/5 dark:divide-white/5">
            {salesProcessData.map((item, i) => (
              <ProcessSection key={item.id} {...item} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SalesProcess;
