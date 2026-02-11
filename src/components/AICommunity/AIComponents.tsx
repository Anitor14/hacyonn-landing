"use client";
import React from "react";
import Container from "../Shared/Container";
import { AIComponentsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

const AIComponents = () => {
  return (
    <div className="py-24 bg-white dark:bg-[#0B2826] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-[#4FBCAA]/5 rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {AIComponentsData.map((datum, index) => (
            <motion.div
              key={datum.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative flex flex-col space-y-6 p-6 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-all duration-500"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <Image
                  src={datum.image}
                  alt={datum.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-black text-[#1C4540] dark:text-white tracking-tight leading-tight group-hover:text-[#4FBCAA] transition-colors">
                  {datum.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                  {datum.description}
                </p>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-8 right-8 w-2 h-2 bg-[#4FBCAA] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AIComponents;
