"use client";
import React from "react";
import Container from "../Shared/Container";
import { motion } from "framer-motion";

interface Props {
  background: string;
  text: string;
  paragraph?: string;
}

const Hero = ({ background, text, paragraph }: Props) => {
  const url = background;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[65vh] lg:h-[90vh] relative max-h-[1200px] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#02201CB2] z-0" />

      <div className="relative z-10 h-full flex items-end">
        <Container className="w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
            }}
            className="w-full max-w-[900px] text-white space-y-4.5 mb-22"
          >
            <motion.h1
              variants={itemVariants}
              className="text-[36px] md:text-[40px] lg:text-[60px] leading-[1.2]"
            >
              {text}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="w-full max-w-[500px] text-base lg:text-lg"
            >
              {paragraph}
            </motion.p>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
