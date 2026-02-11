"use client";
import React from "react";
import Container from "../Shared/Container";
import ServicesCard from "../Shared/ServicesCard";
import Image from "next/image";
import RadialBg from "../../../public/images/ReviewBg.png";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description?: string;
  services: {
    id: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logo: any;
    title: string;
    description: string;
  }[];
};

const Services = ({ title, description, services }: Props) => {
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
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative bg-white py-20 overflow-hidden">
      <Image src={RadialBg} alt="Radial-bg" className="absolute -bottom-5" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 w-full max-w-[500px]"
        >
          <div className="w-[34px] h-[1px] bg-[#2E9E8D]"></div>
          <h1 className="text-[#213B3C] font-bold text-4xl">{title}</h1>
          {description && (
            <p className="text-[#213B3C] text-lg font-medium">{description}</p>
          )}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={itemVariants}>
              <ServicesCard data={service} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default Services;
