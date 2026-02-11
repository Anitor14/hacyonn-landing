"use client";
import React from "react";
import Container from "./Container";
import { reviewData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { StaticImageData } from "next/image";

// Duplicate data for infinite scroll effect
const marqueeData = [...reviewData, ...reviewData, ...reviewData];

interface Review {
  id: string;
  image: StaticImageData;
  content: string;
  name: string;
  position: string;
}

const ReviewCard = ({ review }: { review: Review; index?: number }) => (
  <div className="w-[350px] md:w-[450px] flex-shrink-0 p-8 rounded-[32px] bg-white/5 backdrop-blur-md border border-white/10 mx-4 hover:border-[#4FBCAA] transition-colors duration-300">
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={16} className="fill-[#4FBCAA] text-[#4FBCAA]" />
      ))}
    </div>

    <p className="text-white/80 text-lg leading-relaxed mb-8 italic relative">
      <Quote className="absolute -top-2 -left-2 w-4 h-4 text-[#4FBCAA]/30 rotate-180" />
      {review.content}
    </p>

    <div className="flex items-center gap-4">
      <div className="w-12 h-12 relative rounded-full overflow-hidden border border-[#4FBCAA]/30">
        <Image
          src={review.image}
          alt={review.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h4 className="text-white font-bold">{review.name}</h4>
        <p className="text-[#4FBCAA] text-xs font-bold uppercase tracking-wider">
          {review.position}
        </p>
      </div>
    </div>
  </div>
);

const Review = () => {
  return (
    <section className="py-24 bg-[#0B2826] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-[#4FBCAA]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#3BB7A3]/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit pointer-events-none">
            <span className="text-sm font-bold text-[#4FBCAA] uppercase tracking-wide">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-[1.1]">
            Trusted by Visionaries <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FBCAA] to-[#3BB7A3]">
              Worldwide
            </span>
          </h2>
        </motion.div>
      </Container>

      {/* Infinite Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks for edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0B2826] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0B2826] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeData.map((review, i) => (
            <ReviewCard key={`${review.id}-${i}`} review={review} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Review;
