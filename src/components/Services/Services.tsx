"use client";
import React from "react";
import Container from "../Shared/Container";
import { servicesData } from "@/lib/data";
import ServiceCardTwo from "../Shared/ServiceCardTwo";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="py-24 bg-white dark:bg-[#0B2826] relative overflow-hidden">
      {/* Background Decorative Orb */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#4FBCAA]/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-[700px] space-y-8 mb-16"
        >
          <div className="flex items-center gap-4">
            <div className="h-[2px] bg-[#4FBCAA] w-[60px]"></div>
            <span className="text-xs font-black tracking-[0.3em] uppercase text-[#4FBCAA]">
              Our Offerings
            </span>
          </div>

          <h2 className="text-[40px] lg:text-[56px] font-black text-[#1C4540] dark:text-white leading-[1.1] tracking-tight">
            See how{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FBCAA] to-[#3BB7A3]">
              Hacyon
            </span>{" "}
            can help you stay ahead.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ServiceCardTwo
                data={{
                  id: service.id,
                  link: `/services/details?type=${service.type}`,
                  image: service.image,
                  title: service.title,
                }}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
