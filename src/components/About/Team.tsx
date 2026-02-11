"use client";
import Container from "../Shared/Container";
import { teamData } from "@/lib/data";
import { User } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-[#0B2826]">
      {/* Decorative Orb */}
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-[#4FBCAA]/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] bg-[#4FBCAA] w-[40px]"></div>
            <span className="text-xs font-black tracking-[0.3em] uppercase text-[#4FBCAA]">
              Leadership
            </span>
            <div className="h-[2px] bg-[#4FBCAA] w-[40px]"></div>
          </div>

          <h2 className="text-[40px] lg:text-[56px] font-black text-[#1C4540] dark:text-white leading-[1.1] tracking-tight">
            Our Elite{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FBCAA] to-[#3BB7A3]">
              Team
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {teamData.map((team) => {
            const hasPhoto = team.image;

            return (
              <motion.div
                variants={itemVariants}
                key={team.id}
                className="group relative"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-gray-100 ring-1 ring-black/5 dark:ring-white/10 transition-all duration-500">
                  {hasPhoto ? (
                    <Image
                      src={team.image}
                      alt={team.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#1C4540] to-[#0B2826] flex items-center justify-center">
                      <User className="w-16 h-16 text-white/20" />
                    </div>
                  )}

                  {/* Glassmorphic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2826] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <h3 className="text-white group-hover:text-[#1C4540] text-xl font-black tracking-tight leading-tight mb-1 transition-colors">
                      {team.name}
                    </h3>
                    <p className="text-[#4FBCAA] group-hover:text-[#1C4540]/60 text-xs font-bold uppercase tracking-widest transition-colors">
                      {team.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default Team;
