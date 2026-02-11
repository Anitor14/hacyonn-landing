"use client";
import React, { useEffect, useRef } from "react";
import Container from "./Container";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Activity, Users, Globe, Award } from "lucide-react";

interface Props {
  data: {
    id: string;
    title: string;
    stat: string;
  }[];
  title: string;
}

const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="tabular-nums" />;
};

const Feat = ({ data, title }: Props) => {
  // Helper to parse "50+" into { value: 50, suffix: "+" }
  const parseStat = (stat: string) => {
    const match = stat.match(/(\d+)(.*)/);
    if (match) {
      return { value: parseInt(match[1]), suffix: match[2] || "" };
    }
    return { value: 0, suffix: stat };
  };

  const getIcon = (index: number) => {
    switch (index % 4) {
      case 0:
        return <Activity className="w-8 h-8 text-[#4FBCAA]" />;
      case 1:
        return <Users className="w-8 h-8 text-[#3BB7A3]" />;
      case 2:
        return <Globe className="w-8 h-8 text-[#4FBCAA]" />;
      case 3:
        return <Award className="w-8 h-8 text-[#3BB7A3]" />;
      default:
        return <Activity className="w-8 h-8 text-[#4FBCAA]" />;
    }
  };

  return (
    <section className="py-24 bg-[#0B2826] relative overflow-hidden">
      {/* Background Map Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/world-map.svg')] bg-center bg-no-repeat bg-contain" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            {title}
          </h2>
          <p className="text-white/60 text-lg">
            Metrics that define our impact and your success. We are driven by
            results and committed to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((datum, index) => {
            const { value, suffix } = parseStat(datum.stat);

            return (
              <motion.div
                key={datum.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] hover:border-[#3BB7A3]/50 hover:shadow-[0_10px_40px_-10px_rgba(59,183,163,0.2)] transition-all duration-300"
              >
                <div className="mb-6 bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-300">
                  {getIcon(index)}
                </div>

                <h3 className="text-5xl font-black text-white mb-2">
                  <CountUp value={value} suffix={suffix} />
                </h3>
                <p className="text-white/60 font-medium uppercase tracking-wider text-sm">
                  {datum.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Feat;
