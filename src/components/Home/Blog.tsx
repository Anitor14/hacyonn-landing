"use client";
import React from "react";
import Container from "../Shared/Container";
import { blogData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import { Button } from "../ui/button";

const Blog = () => {
  // Assuming the first item is the featured post
  const featuredPost = blogData[0];
  const otherPosts = blogData.slice(1);

  return (
    <section className="py-24 bg-white relative">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 max-w-lg"
          >
            <div className="flex items-center gap-2 text-[#4FBCAA] font-bold uppercase tracking-widest text-xs">
              <span className="w-8 h-[2px] bg-[#4FBCAA]"></span>
              Insights & News
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B2826] leading-[1.1]">
              Latest from <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FBCAA] to-[#3BB7A3]">
                Our Blog
              </span>
            </h2>
          </motion.div>

          <Button
            variant="outline"
            className="rounded-full border-[#0B2826]/20 text-[#0B2826] hover:bg-[#0B2826] hover:text-white transition-colors"
          >
            View All Articles
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Featured Post - Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[400px] lg:h-[600px] rounded-[32px] overflow-hidden cursor-pointer"
          >
            <Image
              src={featuredPost.image}
              alt={featuredPost.text}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider border border-white/20">
              Featured
            </div>

            <div className="absolute bottom-0 left-0 p-8 lg:p-10 w-full">
              <div className="flex items-center gap-4 text-white/70 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> Oct 24, 2025
                </span>
                <span className="flex items-center gap-1">
                  <User size={14} /> Editorial Team
                </span>
              </div>
              <h3 className="text-2xl lg:text-4xl font-black text-white mb-4 leading-tight group-hover:underline decoration-[#4FBCAA] underline-offset-4 decoration-2">
                {featuredPost.text}
              </h3>
              <div className="flex items-center gap-2 text-[#4FBCAA] font-bold mt-4">
                READ ARTICLE <ArrowUpRight size={18} />
              </div>
            </div>
          </motion.div>

          {/* Other Posts - Right Side Vertical Stack */}
          <div className="flex flex-col gap-8">
            {otherPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col md:flex-row gap-6 items-center p-4 rounded-[24px] hover:bg-[#F2FBF9] transition-colors duration-300 cursor-pointer"
              >
                <div className="relative w-full md:w-[200px] h-[200px] md:h-[130px] rounded-2xl overflow-hidden flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.text}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-4 text-[#0B2826]/50 text-xs font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> Oct 1{index}, 2025
                    </span>
                    <span className="uppercase tracking-wider text-[#4FBCAA]">
                      Tech
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-[#0B2826] leading-snug group-hover:text-[#4FBCAA] transition-colors">
                    {post.text}
                  </h4>
                  <p className="text-[#0B2826]/60 text-sm line-clamp-2">
                    Discover how AI is reshaping the landscape of modern
                    business operations...
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
