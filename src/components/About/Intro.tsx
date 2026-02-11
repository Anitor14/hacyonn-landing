"use client";
import React from "react";
import Container from "../Shared/Container";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="py-24 relative overflow-hidden bg-white dark:bg-[#0B2826]">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-[#4FBCAA]/5 rounded-full pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8 w-full max-w-[700px]"
        >
          <div className="flex items-center gap-4">
            <div className="h-[2px] bg-[#4FBCAA] w-[60px]"></div>
            <span className="text-xs font-black tracking-[0.3em] uppercase text-[#4FBCAA]">
              Introduction
            </span>
          </div>

          <h1 className="text-[#1C4540] dark:text-white font-black text-4xl lg:text-5xl leading-[1.1] tracking-tight">
            Building Smarter Solutions for a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FBCAA] to-[#3BB7A3]">
              Faster World
            </span>
          </h1>

          <p className="text-gray-500 dark:text-gray-400 text-lg lg:text-xl font-medium leading-relaxed">
            We’re a digital company dedicated to helping startups, enterprises,
            and teams unlock efficiency, scale faster, and stay ahead of the
            curve. From product development to people operations, we build
            tailored solutions that solve real-world challenges.
          </p>
        </motion.div>
      </Container>
    </div>
  );
};

export default Intro;
