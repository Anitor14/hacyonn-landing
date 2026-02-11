import React from "react";
import Container from "../Shared/Container";
import BlogCard from "./BlogCard";
import { blogDataMain } from "@/lib/data";

const RecentPosts = () => {
  return (
    <div>
      <Container>
        <div className="space-y-2 mb-6">
          <h1 className="uppercase text-lg text-[#1C4540] font-bold">
            Recent Posts
          </h1>
          <div className="w-full h-[2px] bg-[#D1D5DC]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-6 mb-10">
          {blogDataMain.map((data, i) => (
            <BlogCard key={i} data={data} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RecentPosts;
