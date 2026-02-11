"use client";
import React from "react";
import Container from "../Shared/Container";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subTitle: string;
  description: string;
  image: StaticImageData;
  button?: string;
};

const AboutServiceSection = ({
  title,
  subTitle,
  description,
  image,
  button,
}: Props) => {
  return (
    <div className="py-24 lg:py-32 bg-white dark:bg-[#0B2826] relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#4FBCAA]/10 rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[35%] bg-[#3BB7A3]/10 rounded-full" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
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
                {title}
              </span>
            </div>

            <h2 className="text-[40px] lg:text-[64px] font-black text-[#1C4540] dark:text-white leading-[1.1] tracking-tight">
              {subTitle.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={
                    i % 2 !== 0
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#4FBCAA] to-[#3BB7A3]"
                      : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg lg:text-xl font-medium leading-relaxed">
              {description}
            </p>

            {button && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-[#213B3C] text-white font-black tracking-widest uppercase rounded-full transition-all"
              >
                {button}
              </motion.button>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative group lg:mr-[-100px]"
          >
            <div className="absolute inset-0 bg-[#4FBCAA]/10 -z-10 rounded-full group-hover:scale-110 transition-transform duration-700" />
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
              <Image
                src={image}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                alt="image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02201C]/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default AboutServiceSection;
