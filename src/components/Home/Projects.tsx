"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { landingPageProjects } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";

const Projects = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#0B2826]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Background Text */}
        <div className="absolute top-20 left-10 pointer-events-none z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] font-black text-white/5 leading-none"
          >
            SELECTED WORK
          </motion.h2>
        </div>

        <motion.div
          style={{ x }}
          className="flex gap-16 px-10 md:px-20 relative z-20"
        >
          {/* Intro Card */}
          <div className="flex flex-col justify-center min-w-[400px] md:min-w-[500px] space-y-6">
            <div className="flex items-center gap-2 text-[#4FBCAA] font-bold uppercase tracking-widest text-xs">
              <span className="w-8 h-[2px] bg-[#4FBCAA]"></span>
              Our Projects
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-white leading-[1.1]">
              Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FBCAA] to-[#3BB7A3]">
                Masterpieces
              </span>
            </h3>
            <p className="text-lg text-white/70 max-w-md">
              Explore a curated selection of our most impactful work across
              various industries, showcasing our commitment to excellence and
              innovation.
            </p>
            <Button
              asChild
              className="w-fit bg-white/10 hover:bg-white/20 text-white rounded-full px-8 py-6 text-lg font-bold border border-white/10 backdrop-blur-sm"
            >
              <Link href="/products">
                View All Projects <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Project Cards */}
          {landingPageProjects.map((project, i) => (
            <div
              key={i}
              className="group relative h-[60vh] md:h-[70vh] w-[80vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 bg-white/5 rounded-[40px] overflow-hidden border border-white/10 transition-transform duration-500 hover:scale-[1.02]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="text-[#4FBCAA] text-sm font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#4FBCAA]/10 border border-[#4FBCAA]/20">
                      Featured
                    </span>
                  </div>
                  <h4 className="text-3xl md:text-5xl font-black text-white mb-2 leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-white/70 text-lg md:text-xl line-clamp-2 mb-6 max-w-lg">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <Link
                      href={`/products/${project.id}`}
                      className="flex items-center gap-2 text-white font-bold hover:text-[#4FBCAA] transition-colors"
                    >
                      View Case Study <ArrowRight size={18} />
                    </Link>
                    <Link
                      href="" // Assuming there might be a live link
                      className="flex items-center gap-2 text-white/50 font-bold hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
