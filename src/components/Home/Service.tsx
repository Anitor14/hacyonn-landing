"use client";
import React, { useState } from "react";
import Container from "../Shared/Container";
import { landingPageNewServices } from "@/lib/data";
import Image from "next/image";
// import Robot from "../../../public/images/services-robot.png";
import Robot from "../../../public/images/hacyon-mascot.png";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Cpu,
  BarChart3,
  ShieldCheck,
  Palette,
  DollarSign,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

const Service = () => {
  const router = useRouter();
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Map icons to service titles (since data comes from lib/data)
  const getIconForService = (title: string) => {
    if (title.toLowerCase().includes("sales")) return <BarChart3 />;
    if (title.toLowerCase().includes("human")) return <Users />;
    if (title.toLowerCase().includes("software")) return <Cpu />;
    if (title.toLowerCase().includes("cyber")) return <ShieldCheck />;
    if (title.toLowerCase().includes("design")) return <Palette />;
    if (title.toLowerCase().includes("finance")) return <DollarSign />;
    return <Layers />;
  };

  const Users = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#4FBCAA]/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-[#3BB7A3]/10 rounded-full blur-[80px]" />
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side: Sticky Content */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-[#4FBCAA] font-bold uppercase tracking-widest text-xs">
                <span className="w-8 h-[2px] bg-[#4FBCAA]"></span>
                Our Services
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0B2826] leading-[1.1]">
                Comprehensive <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FBCAA] to-[#3BB7A3]">
                  Digital Solutions
                </span>
              </h2>
              <p className="text-[#0B2826]/70 text-lg leading-relaxed">
                Hacyon delivers brand-focused, tech-powered services that
                optimize performance, boost efficiency, and drive sustainable
                growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block relative p-8 bg-[#F2FBF9] rounded-3xl border border-[#4FBCAA]/20"
            >
              <Image
                src={Robot}
                alt="Services Robot"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-sm">
                <p className="text-sm font-bold text-[#0B2826]">
                  Ready to transform?
                </p>
                <div
                  className="flex items-center gap-2 text-[#4FBCAA] text-xs font-bold mt-1 cursor-pointer hover:underline"
                  onClick={() => router.push("/contact")}
                >
                  GET A CUSTOM QUOTE <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>

            <Button
              onClick={() => router.push("/services")}
              className="bg-[#0B2826] text-white hover:bg-[#4FBCAA] transition-colors rounded-full px-8 py-6 text-lg font-bold group"
            >
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Side: Bento Grid of Services */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {landingPageNewServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group relative p-8 rounded-[32px] border transition-all duration-500 cursor-pointer overflow-hidden
                            ${hoveredService === index ? "bg-[#0B2826] border-[#0B2826] shadow-2xl scale-[1.02]" : "bg-white border-black/5 hover:border-[#4FBCAA]/30"}
                        `}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500
                             ${hoveredService === index ? "bg-white/10 text-[#4FBCAA]" : "bg-[#F2FBF9] text-[#0B2826]"}
                        `}
                >
                  {getIconForService(service.title)}
                </div>

                <h3
                  className={`text-2xl font-bold mb-3 transition-colors duration-500 ${hoveredService === index ? "text-white" : "text-[#0B2826]"}`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-base leading-relaxed mb-8 transition-colors duration-500 ${hoveredService === index ? "text-white/70" : "text-[#0B2826]/60"}`}
                >
                  {service.description}
                </p>

                <div
                  className={`flex items-center gap-2 text-sm font-bold transition-colors duration-500
                            ${hoveredService === index ? "text-[#4FBCAA]" : "text-[#0B2826]"}
                        `}
                >
                  LEARN MORE{" "}
                  <ArrowRight
                    size={16}
                    className={`transition-transform duration-300 ${hoveredService === index ? "translate-x-1" : ""}`}
                  />
                </div>

                {/* Decorative Circle on Hover */}
                <div
                  className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100 bg-[#4FBCAA]/20 pointer-events-none`}
                />
              </motion.div>
            ))}

            {/* Special Card for 'See More' on Mobile/Tablet if odd number, or just extra visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => router.push("/services")}
              className="md:col-span-2 p-8 rounded-[32px] bg-gradient-to-r from-[#4FBCAA] to-[#3BB7A3] flex items-center justify-between text-[#0B2826] cursor-pointer hover:scale-[1.01] transition-transform shadow-lg group"
            >
              <div>
                <h3 className="text-2xl font-black">
                  View Full Service Catalog
                </h3>
                <p className="font-medium opacity-80">
                  Explore detailed breakdowns of all our offerings
                </p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-[#4FBCAA] transition-all">
                <ArrowUpRight size={24} />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Service;
