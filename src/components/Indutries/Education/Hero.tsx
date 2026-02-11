"use client";
import React from "react";
import Container from "@/components/Shared/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

const Hero = ({ title, description, imageUrl }: Props) => {
  return (
    <div className="relative h-[85vh] lg:h-screen min-h-[600px] overflow-hidden flex items-center justify-center bg-[#0B2826]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-overlay"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#4FBCAA] rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#3BB7A3] rounded-full blur-[150px] mix-blend-screen"
        />
      </div>

      <Container className="relative z-10 pt-20">
        <div className="max-w-[850px] mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="font-bold text-5xl lg:text-7xl leading-[1.1] text-white tracking-tight drop-shadow-lg">
              {title}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-[700px] mx-auto font-light drop-shadow-md"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-8"
          >
            <Button className="bg-[#3BB7A3] text-[#0B2826] hover:bg-[#2E9E8D] text-lg font-semibold h-14 px-10 rounded-full shadow-[0_0_25px_rgba(59,183,163,0.5)] hover:shadow-[0_0_40px_rgba(59,183,163,0.7)] hover:scale-105 transition-all duration-300">
              Get Started Now
            </Button>
            <Button
              variant="outline"
              className="border-white/40 text-[#0B2826] hover:bg-white/10 text-lg font-medium h-14 px-10 rounded-full backdrop-blur-md hover:border-white transition-all duration-300"
            >
              Explore Solutions
            </Button>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
