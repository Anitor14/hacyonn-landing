"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "../Shared/Container";

const MissionVision = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0B2826]">
      {/* Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] bg-[#4FBCAA]/10 rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-[25%] h-[25%] bg-[#3BB7A3]/10 rounded-full" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#4FBCAA]/30 bg-[#4FBCAA]/10 backdrop-blur-sm">
              <span className="text-xs font-black tracking-[0.3em] uppercase text-[#4FBCAA]">
                Our Vision
              </span>
            </div>
            <h2 className="text-[40px] lg:text-[64px] font-black text-white leading-[1.1] tracking-tight">
              To be the world’s premier{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FBCAA] to-[#3BB7A3]">
                Venture Architect
              </span>
            </h2>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="inline-block w-fit px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="text-xs font-black tracking-[0.3em] uppercase text-white/60">
                Our Mission
              </span>
            </div>
            <p className="text-2xl lg:text-3xl text-white/90 font-medium leading-relaxed italic border-l-4 border-[#4FBCAA] pl-8">
              &quot;Our mission is to provide Transcontinental Structural
              Support.&quot;
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default MissionVision;
