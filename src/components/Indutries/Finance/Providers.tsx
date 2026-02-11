"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Container from "@/components/Shared/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  providers: {
    id: string;
    title: string;
    description: string;
    image: StaticImageData;
  }[];
};

const Providers = ({ title, providers }: Props) => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-28"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-8 leading-tight tracking-tight">
            {title}
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#3B82F6] to-[#0EA5E9] mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-32">
          {providers.map((provider, index) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative group perspective-1000">
                <div className="absolute inset-0 bg-[#3B82F6] rounded-[2rem] transform translate-x-3 translate-y-3 lg:translate-x-5 lg:translate-y-5 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 opacity-20" />
                <div className="absolute inset-0 bg-[#0F172A] rounded-[2rem] transform -translate-x-3 -translate-y-3 lg:-translate-x-5 lg:-translate-y-5 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2 opacity-5" />

                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] transform transition-transform duration-700 group-hover:scale-[1.01]">
                  <Image
                    src={provider.image}
                    alt={provider.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight">
                  {provider.title}
                </h3>
                <p className="text-xl text-[#0F172A]/70 leading-relaxed font-light">
                  {provider.description}
                </p>
                <Button className="bg-transparent text-[#3B82F6] hover:text-[#2563EB] hover:bg-transparent p-0 flex items-center gap-3 text-lg font-semibold group cursor-pointer">
                  <span className="border-b-2 border-[#3B82F6]/30 group-hover:border-[#3B82F6] transition-colors pb-1">
                    View financial solution
                  </span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Providers;
