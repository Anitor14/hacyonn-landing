"use client";
import React from "react";
import Container from "../Shared/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import Community from "../../../public/images/Community.png";

const OpenAICommunity = () => {
  return (
    <div className="relative py-24 lg:py-32 bg-white dark:bg-[#0B2826] overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#4FBCAA]/10 rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[35%] h-[35%] bg-[#3BB7A3]/10 rounded-full" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] bg-[#4FBCAA] w-[60px]"></div>
              <span className="text-xs font-black tracking-[0.3em] uppercase text-[#4FBCAA]">
                Global Initiative
              </span>
            </div>

            <h2 className="text-[40px] lg:text-[64px] font-black text-[#1C4540] dark:text-white leading-[1.1] tracking-tight">
              The Open{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FBCAA] to-[#3BB7A3]">
                AI Community
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg lg:text-xl font-medium leading-relaxed">
              The AI Alliance is building and advancing open source AI agents,
              data, models, evaluation, safety, applications and advocacy to
              ensure everyone can benefit from the future of intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative group mr-2 md:mr-0"
          >
            <div className="absolute inset-0 bg-[#4FBCAA]/10 -z-10 rounded-full group-hover:scale-110 transition-transform duration-700" />
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 aspect-video">
              <Image
                src={Community}
                alt="Community"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#02201C]/60 via-transparent to-transparent group-hover:from-[#02201C]/40 transition-colors duration-500" />
            </div>

            {/* Glassmorphic Floating Element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:-right-10 px-6 py-4 bg-white dark:bg-[#1C4540] border border-black/5 dark:border-white/10 rounded-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-[#4FBCAA] rounded-full animate-pulse" />
                <span className="text-white font-black uppercase tracking-widest text-xs">
                  Live Interaction
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default OpenAICommunity;
