"use client";
import React from "react";
import Container from "../Shared/Container";
import ProjectsCard from "../Shared/ProjectsCard";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  achievements: {
    id: string;
    title: string;
    description: string;
    image: StaticImageData;
  }[];
};

const Achievements = ({ title, achievements }: Props) => {
  return (
    <div className="py-24 bg-[#0B2826] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#4FBCAA]/10 rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[35%] bg-[#3BB7A3]/10 rounded-full pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-[850px] space-y-8 mb-16"
        >
          <div className="flex items-center gap-4">
            <div className="h-[2px] bg-[#4FBCAA] w-[60px]"></div>
            <span className="text-xs font-black tracking-[0.3em] uppercase text-[#4FBCAA]">
              Our Impact
            </span>
          </div>

          <h2 className="text-[40px] lg:text-[56px] font-black text-white leading-[1.1] tracking-tight">
            We have helped over{" "}
            <span className="text-[#4FBCAA]">500+ companies</span> build teams,
            launch faster and make money.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-3 overflow-hidden hover:bg-white/10 transition-all duration-500">
                <ProjectsCard data={achievement} textClassName="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Achievements;
