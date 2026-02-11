"use client";
import React from "react";
import Container from "../Shared/Container";
import { WhyData } from "@/lib/data";
import { motion } from "framer-motion";

const Why = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-24 relative overflow-hidden bg-[#D4F3EC96] dark:bg-[#1C4540]">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-[#3BB7A3]/10 blur-[100px] rounded-full pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-[2px] bg-[#4FBCAA] w-[60px]"></div>
            <span className="text-xs font-black tracking-[0.3em] uppercase text-[#4FBCAA]">
              Values
            </span>
          </div>

          <h2 className="text-[40px] lg:text-[56px] font-black text-[#1C4540] dark:text-white leading-[1.1] tracking-tight">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FBCAA] to-[#3BB7A3]">
              Hacyon?
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20"
        >
          {WhyData.map((why, index) => (
            <motion.div
              key={why.id}
              variants={itemVariants}
              className="group flex flex-col gap-6 p-6 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white group transition-all duration-500"
            >
              <span className="font-black text-[#4FBCAA] text-5xl group-hover:scale-110 transition-transform block">
                {why.id < 10 ? `0${why.id}` : why.id}
              </span>
              <div className="space-y-4">
                <h3 className="text-[#1C4540] dark:text-white text-2xl font-black tracking-tight">
                  {why.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                  {why.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default Why;
