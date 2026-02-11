"use client";
import React from "react";
import Container from "@/components/Shared/Container";
import ServiceCard from "./ServiceCard";
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-32 bg-[#0B2826] overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-[#3BB7A3]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#4FBCAA]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20 space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-16 h-[2px] bg-gradient-to-r from-[#3BB7A3] to-transparent" />
            <span className="text-[#3BB7A3] font-medium tracking-[0.2em] uppercase text-sm">
              Our Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-none tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl border-l border-white/10 pl-6">
              {description}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="h-full"
            >
              <ServiceCard data={service} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;
