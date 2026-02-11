"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "../Shared/Container";
import { Cpu, Users, GraduationCap, Zap } from "lucide-react";

const pillars = [
  {
    title: "Structural Engineering",
    subTitle: "Software Development",
    description:
      "We build Synaptic Systems software that acts as the nervous system of your business.",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-[#4FBCAA] to-[#1C4540]",
  },
  {
    title: "Human Capital Orchestration",
    subTitle: "Recruitment & BPO",
    description: "We don't just fill seats; we source Venture-Critical talent.",
    icon: <Users className="w-8 h-8" />,
    color: "from-[#3BB7A3] to-[#0B2826]",
  },
  {
    title: "Venture Pedagogy",
    subTitle: "Training & Entrepreneurship",
    description:
      "Through our partnership with Mercury X, we engage in Skilled Knowledge Dissemination. We train the next generation of engineers and entrepreneurs, ensuring the Scaffolding we provide is replaced by a highly skilled, permanent local workforce.",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "from-[#1A786F] to-[#0B2826]",
  },
  {
    title: "FIF",
    subTitle: "Frugal Innovation Framework",
    description:
      "Our methodology is a combination of TRIZ AND design science. We provide beautiful and sleek solutions optimized for resource efficiency.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-[#4FBCAA] to-[#3BB7A3]",
  },
];

const OperationPillars = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#0B2826] overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#4FBCAA] font-black uppercase tracking-[0.3em] text-xs"
          >
            How We Operate
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] lg:text-[56px] font-black tracking-tight text-[#1C4540] dark:text-white leading-[1.1]"
          >
            Operational Pillars
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 transition-all duration-500 overflow-hidden"
            >
              {/* Background Glow */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500`}
              />

              <div className="relative z-10 space-y-6">
                <div
                  className={`w-16 h-16 rounded-[20px] bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500`}
                >
                  {pillar.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-[#1C4540] dark:text-white tracking-tighter">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#4FBCAA]">
                    {pillar.subTitle}
                  </p>
                </div>

                <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed group-hover:text-[#1C4540] dark:group-hover:text-white transition-colors">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OperationPillars;
