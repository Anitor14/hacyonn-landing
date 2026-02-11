"use client";
import React, { useState } from "react";
import Container from "../Shared/Container";
import { whyChooseUs } from "@/lib/data";
import Image from "next/image";
import stat from "../../../public/images/Stat.png";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check, TrendingUp, Users, Shield } from "lucide-react";

const Why = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Dynamic icon selection based on title keywords
  const getIcon = (title: string, isActive: boolean) => {
    const className = `w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-[#4FBCAA]"}`;
    if (title.toLowerCase().includes("efficiency"))
      return <TrendingUp className={className} />;
    if (title.toLowerCase().includes("expert"))
      return <Users className={className} />;
    if (title.toLowerCase().includes("lasting"))
      return <Shield className={className} />;
    return <Check className={className} />;
  };

  return (
    <section className="py-24 bg-[#F2FBF9] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4FBCAA]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3BB7A3]/5 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side: Text & Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#4FBCAA]/20 shadow-sm w-fit">
              <Sparkles className="w-4 h-4 text-[#4FBCAA]" />
              <span className="text-sm font-bold text-[#0B2826] uppercase tracking-wide">
                Why Choose Hacyon?
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-[#0B2826] leading-[1.1]">
              Empowering Your <br className="hidden lg:block" />
              <span className="text-[#4FBCAA]">Digital Growth</span>
            </h2>

            <p className="text-[#0B2826]/70 text-lg leading-relaxed max-w-lg">
              We strive to foster efficiency and scalability, enabling your
              business to thrive. Our team of skilled developers and industry
              experts works closely with you to understand your challenges and
              objectives.
            </p>

            {/* Dynamic Image Display based on Active Tab */}
            <div className="relative h-[400px] w-full bg-white rounded-[32px] p-2 border border-[#4FBCAA]/10 shadow-xl overflow-hidden mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full rounded-[24px] overflow-hidden bg-[#0B2826]"
                >
                  {/* In a real scenario, map images to whyChooseUs data. Using 'stat' placeholder for now but applying filters/gradients */}
                  <Image
                    src={stat}
                    alt="Why Choose Us Visual"
                    fill
                    className="object-cover opacity-80 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2826] to-transparent opacity-90" />

                  <div className="absolute bottom-8 left-8 right-8">
                    <h4 className="text-2xl font-bold text-white mb-2">
                      {whyChooseUs[activeTab].title}
                    </h4>
                    <p className="text-white/70 text-sm">
                      Experience the difference with our dedicated approach to{" "}
                      {whyChooseUs[activeTab].title.toLowerCase()}.
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Side: Interactive List */}
          <div className="lg:w-1/2 flex flex-col gap-4 mt-8 lg:mt-0">
            {whyChooseUs.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer rounded-[24px] p-6 transition-all duration-300 border
                                ${
                                  isActive
                                    ? "bg-[#0B2826] border-[#0B2826] shadow-xl translate-x-4"
                                    : "bg-white border-transparent hover:border-[#4FBCAA]/20 hover:bg-white/60"
                                }
                            `}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isActive ? "bg-[#4FBCAA]" : "bg-[#e0f5f1]"}`}
                    >
                      {getIcon(item.title, isActive)}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-bold mb-2 transition-colors duration-300 ${isActive ? "text-white" : "text-[#0B2826]"}`}
                      >
                        {item.title}
                      </h3>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="text-white/70 leading-relaxed overflow-hidden"
                          >
                            {item.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                      {!isActive && (
                        <p className="text-[#0B2826]/60 leading-relaxed line-clamp-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Why;
