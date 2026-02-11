"use client";
import React from "react";
import Container from "../Shared/Container";
import { Button } from "../ui/button";
import Image from "next/image";
import Robot from "../../../public/images/robot-small.svg";
import Hacyon from "../../../public/images/hacyon.svg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const url = "/images/Hero-2.png";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a more "premium" feel
      },
    },
  };

  return (
    <div className="h-[75vh] lg:h-screen relative max-h-[1200px] overflow-hidden bg-[#0B2826]">
      {/* Dynamic Background Image with subtle parallax/scale effect */}
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
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#3BB7A3]/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] bg-[#1A786F]/30 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-[25%] h-[25%] bg-[#4FBCAA]/15 blur-[90px] rounded-full"
        />
      </div>

      <motion.div
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Container className="pt-[20vh] md:pt-[32vh]">
          <div className="w-full max-w-[950px] text-white space-y-8">
            <motion.h1
              variants={itemVariants}
              className="text-[40px] lg:text-[84px] leading-[1.1] font-black tracking-tight"
            >
              Innovating the digital landscape with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FBCAA] to-[#3BB7A3]">
                AI
              </span>
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="w-full max-w-[600px]"
            >
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed font-medium">
                Hacyon is a forward-thinking digital company that powers a suite
                of cutting-edge products designed to transform industries.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="pt-4">
              <Button className="bg-[#4FBCAA] text-[#0B2826] font-bold text-lg w-[180px] sm:w-[220px] h-[60px] hover:bg-white hover:text-[#0B2826] transition-all duration-500 rounded-full cursor-pointer border-none group px-8">
                Get in touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </motion.div>
      <div className="z-[20] absolute bottom-0 right-0 flex flex-col items-stretch">
        <div className="relative overflow-hidden">
          <div
            className="bg-white flex items-start cursor-pointer justify-center py-4
                      transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Image
              src={Hacyon}
              alt="Hacyon"
              className=" object-contain ml-2 mt-3"
            />
            <Image
              src={Robot}
              alt="Robot"
              className="w-[90px] h-[100px] object-contain"
            />
          </div>
        </div>

        <div className="w-full flex flex-wrap p-4 items-center justify-center bg-[#1A786F54] text-white py-4">
          <div className="space-y-5 flex flex-col items-start">
            <h1>
              Hacyon Guide <br /> to AI Agent
            </h1>
            <div className="flex items-center gap-1 justify-center">
              <p className="text-sm sm:text-base font-regular">GET YOURS</p>
              <ArrowRight size={12} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
