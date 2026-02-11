"use client";

import React from "react";
import Container from "../Shared/Container";
import { industriesData } from "@/lib/data";
import Link from "next/link";
import ServiceCardTwo from "../Shared/ServiceCardTwo";
import { motion } from "framer-motion";

const Indutries = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="py-20 lg:py-32 bg-white dark:bg-[#0B2826] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4FBCAA]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#213B3C]/5 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[800px] mb-16 space-y-4"
        >
          <span className="text-[#4FBCAA] font-bold tracking-widest uppercase text-sm">
            Our Focus Areas
          </span>
          <h1 className="text-[#213B3C] dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-tight">
            STAY AHEAD IN YOUR <br />
            <span className="text-[#4FBCAA]">INDUSTRY WITH HACYON</span>
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industriesData.map((industry, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Link href={industry.link} className="block h-full group">
                <ServiceCardTwo data={industry} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default Indutries;
