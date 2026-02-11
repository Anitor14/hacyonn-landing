"use client";
import React from "react";
import Container from "../Shared/Container";
import storyImg from "../../../public/images/Countries.jpg";
import RingBottom from "../../../public/images/RingBottom.png";
import Image from "next/image";
import { motion } from "framer-motion";

import AboutRing from "../../../public/images/AboutRing.png";
import Rings from "../../../public/images/Rings.png";

const Story = () => {
  return (
    <div className="py-24 relative overflow-hidden bg-white dark:bg-[#0B2826]">
      <div className="absolute top-0 right-0 pointer-events-none opacity-20 dark:opacity-10 scale-150 origin-top-right">
        <Image src={AboutRing} alt="Ring" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-20 dark:opacity-10 scale-150 origin-bottom-left">
        <Image src={RingBottom} alt="RingBottom" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col gap-y-32">
          {/* Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#4FBCAA]/10 -z-10 rounded-full" />
              <Image
                src={storyImg}
                alt="Story"
                className="w-full rounded-3xl ring-1 ring-black/5 dark:ring-white/10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-[40px] h-[2px] bg-[#4FBCAA]"></div>
                <span className="text-[#4FBCAA] font-black uppercase tracking-[0.3em] text-xs">
                  Our Store
                </span>
              </div>

              <h2 className="text-[40px] lg:text-[56px] font-black text-[#1C4540] dark:text-white leading-[1.1] tracking-tight">
                Entering the European Market Via{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FBCAA] to-[#3BB7A3]">
                  Germany
                </span>
              </h2>

              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed font-medium">
                Europe is one of the biggest markets for African products. And
                it is also not that easy to enter: there are legal, cultural and
                logistical burdens. But together with you we can overcome this
                burdens for your products. Our European office is in Dusseldorf,
                Germany. The CEO of our company is a German lawyer – so we know
                how tricky law can be. Some of our employees are Salesman with
                over 20 years of working-experience in the German market, so we
                also know how to sell in Germany.
              </p>
            </motion.div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8 order-2 md:order-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-[40px] h-[2px] bg-[#4FBCAA]"></div>
                <span className="text-[#4FBCAA] font-black uppercase tracking-[0.3em] text-xs">
                  What We Do
                </span>
              </div>

              <h2 className="text-[40px] lg:text-[56px] font-black text-[#1C4540] dark:text-white leading-[1.1] tracking-tight">
                Holistic Venture Building
              </h2>

              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed font-medium">
                We bring together experts from development, HR, sales,
                logistics, finance, and design to offer flexible, end-to-end
                services under one roof. Whether you&apos;re launching a new
                venture or scaling operations, Hacyon helps you do it better—with
                clarity, speed, and confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="order-1 md:order-2"
            >
              <div className="relative group p-4">
                <div className="absolute inset-0 bg-[#4FBCAA]/5 rounded-full transition-transform duration-700" />
                <Image src={Rings} alt="Rings" className="relative z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Story;
