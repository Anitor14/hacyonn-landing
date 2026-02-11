"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "../Shared/Container";
import Image from "next/image";
import Ring from "../../../public/images/Ring.png";
import Ring2 from "../../../public/images/Ring-Right.png";
import BlurRing from "../../../public/images/BlurRing.png";
import Search from "../../../public/images/Search.png";
import Target from "../../../public/images/Target.png";
import Solution from "../../../public/images/Solution.png";
import Delivery from "../../../public/images/Delivery.png";

const Routine = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white dark:bg-[#0B2826] overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute -top-20 left-0 opacity-20 dark:opacity-10 pointer-events-none scale-150 origin-top-left">
        <Image src={Ring} alt="Ring" />
      </div>
      <div className="absolute -bottom-20 right-0 opacity-20 dark:opacity-10 pointer-events-none scale-150 origin-bottom-right">
        <Image src={Ring2} alt="Ring" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-3xl"
        >
          <div className="flex items-center gap-4">
            <div className="h-[2px] bg-[#4FBCAA] w-[60px]"></div>
            <span className="text-xs font-black tracking-[0.3em] uppercase text-[#4FBCAA]">
              Transformation Experts
            </span>
          </div>

          <h2 className="text-[40px] lg:text-[76px] font-black text-[#1C4540] dark:text-white leading-[1.1] tracking-tight">
            Change is our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FBCAA] to-[#3BB7A3]">
              routine.
            </span>
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-lg lg:text-xl font-medium leading-relaxed">
            We are transformation experts with a focus on sustainability,
            innovation, and agility. Our strength lies in our experience as
            founders and consultants in dealing with constant change processes
            in various industries.
          </p>
        </motion.div>

        {/* Modern Process Diagram */}
        <div className="mt-32 relative">
          {/* Main Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[4px] bg-gradient-to-r from-[#20655D] via-[#40E5CF] to-[#213B3C] rounded-full -translate-y-1/2 opacity-30" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-24 lg:gap-0">
            {/* Step 1: Exploration & Synthesis */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-20 group"
            >
              <div className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 p-8 rounded-3xl transition-all duration-500 group-hover:scale-105">
                <div className="flex items-center gap-12">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#4FBCAA]/10 flex items-center justify-center text-[#4FBCAA] mb-2 group-hover:scale-110 transition-transform">
                      <Image src={Search} alt="Search" />
                    </div>
                    <span className="text-xl font-black text-[#1C4540] dark:text-white">
                      Exploration
                    </span>
                  </div>

                  <div className="h-20 w-[1px] border-l border-dashed border-gray-300 dark:border-white/20" />

                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#3BB7A3]/10 flex items-center justify-center text-[#3BB7A3] mb-2 group-hover:scale-110 transition-transform">
                      <Image src={Target} alt="Target" />
                    </div>
                    <span className="text-xl font-black text-[#1C4540] dark:text-white">
                      Synthesis
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#20655D] text-white text-sm font-black rounded-full tracking-widest uppercase">
                Phase One
              </div>
            </motion.div>

            {/* Step 2: Solution & Delivery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-20 group"
            >
              <div className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 p-8 rounded-3xl transition-all duration-500 group-hover:scale-105">
                <div className="flex items-center gap-12">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#3BB7A3]/10 flex items-center justify-center text-[#3BB7A3] mb-2 group-hover:scale-110 transition-transform">
                      <Image src={Solution} alt="Solution" />
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-black text-[#1C4540] dark:text-white">
                        Solution
                      </p>
                      <p className="text-sm font-bold text-[#4FBCAA] uppercase tracking-tighter">
                        Development
                      </p>
                    </div>
                  </div>

                  <div className="h-20 w-[1px] border-l border-dashed border-gray-300 dark:border-white/20" />

                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#213B3C]/10 flex items-center justify-center text-[#213B3C] mb-2 group-hover:scale-110 transition-transform dark:bg-white/10 dark:text-white">
                      <Image src={Delivery} alt="Delivery" />
                    </div>
                    <span className="text-xl font-black text-[#1C4540] dark:text-white">
                      Delivery
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#213B3C] dark:bg-[#40E5CF] dark:text-[#0B2826] text-white text-sm font-black rounded-full tracking-widest uppercase">
                Phase Two
              </div>
            </motion.div>
          </div>

          {/* Legend / Info Bars */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 bg-[#20655D]/5 rounded-3xl border border-[#20655D]/10">
              <div className="w-12 h-12 rounded-2xl bg-[#20655D] flex items-center justify-center shrink-0">
                <Image src={BlurRing} alt="Ring" className="w-6 h-6" />
              </div>
              <p className="text-sm font-black text-[#1C4540] dark:text-white uppercase tracking-tight">
                Introduction to project goal
              </p>
            </div>

            <div className="flex items-center gap-4 p-6 bg-[#40E5CF]/5 rounded-3xl border border-[#40E5CF]/10">
              <div className="w-12 h-12 rounded-2xl bg-[#40E5CF] flex items-center justify-center shrink-0">
                <div className="w-6 h-6 rounded-full bg-white opacity-20" />
              </div>
              <p className="text-sm font-black text-[#1C4540] dark:text-white uppercase tracking-tight">
                Practical Development & Implementation
              </p>
            </div>

            <div className="flex items-center gap-4 p-6 bg-[#213B3C]/5 rounded-3xl border border-[#213B3C]/10">
              <div className="w-12 h-12 rounded-2xl bg-[#213B3C] flex items-center justify-center shrink-0">
                <Image
                  src={BlurRing}
                  alt="Ring"
                  className="w-6 h-6 rotate-180"
                />
              </div>
              <p className="text-sm font-black text-[#1C4540] dark:text-white uppercase tracking-tight">
                reflection and next steps.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Routine;
