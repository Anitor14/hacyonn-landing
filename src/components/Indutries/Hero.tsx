"use client";

import React from "react";
import Container from "../Shared/Container";
import { motion } from "framer-motion";

const Hero = () => {
  const url = "/images/IndustriesHero.jpg";
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[80vh] lg:h-screen relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-0" />

      {/* Animated background blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4FBCAA] rounded-full blur-[150px] opacity-20 z-0 pointer-events-none"
      />

      <div className="relative z-10 h-full flex items-center justify-center lg:items-end pb-20 lg:pb-32">
        <Container className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[900px] text-white space-y-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[4px] bg-[#4FBCAA]"
              />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm lg:text-base font-black tracking-[0.3em] uppercase text-[#4FBCAA]"
              >
                Our Expertise
              </motion.span>
            </div>

            <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
              TAILORED SOLUTIONS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FBCAA] to-white">
                INDUSTRY BY INDUSTRY
              </span>
            </h1>

            <p className="w-full max-w-[600px] text-lg lg:text-2xl font-medium text-gray-200 leading-relaxed border-l-4 border-[#4FBCAA]/50 pl-6">
              No two industries are the same, so we don’t treat them that way.
              We craft solutions that fit enough to help you grow smarter,
              faster, and better.
            </p>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
