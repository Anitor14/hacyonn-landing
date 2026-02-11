"use client";
import React from "react";
import Container from "../Shared/Container";
import { motion } from "framer-motion";

const Hero = () => {
  const url = "/images/services-hero.jpg";
  return (
    <div className="h-[65vh] lg:h-screen relative max-h-[1200px] overflow-hidden bg-[#0B2826]">
      {/* Dynamic Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Primary Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2826]/80 via-transparent to-transparent z-[1]" />

      {/* Ambient Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-5%] w-[45%] h-[45%] bg-[#4FBCAA]/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-5%] w-[35%] h-[35%] bg-[#3BB7A3]/15 blur-[100px] rounded-full"
        />
      </div>

      <div className="relative z-10 h-full">
        <Container className="pt-[35vh] md:pt-[55vh]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="w-full max-w-[900px] text-white space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] bg-[#4FBCAA] w-[60px]"></div>
              <span className="text-xs font-black tracking-[0.3em] uppercase text-[#4FBCAA]">
                Expert Solutions
              </span>
            </div>

            <h1 className="font-black text-[40px] lg:text-[76px] leading-[1] tracking-tight">
              Expert-driven services to build, manage, and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FBCAA] to-[#3BB7A3] drop-shadow-[0_0_20px_rgba(79,188,170,0.3)]">
                scale your business.
              </span>
            </h1>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
