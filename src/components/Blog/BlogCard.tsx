import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  data: {
    image: StaticImageData;
    title: string;
    description: string;
  };
}

const BlogCard = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-[24px]">
      <Image src={data.image} alt={data.title} className="w-full" />
      <h1 className="font-bold text-[20px] w-full max-w-[80%]">{data.title}</h1>
      <p className="text-[#213B3C] font-medium text-lg">{data.description}</p>
      <Link
        href="#"
        className="text-[#213B3C] flex items-center gap-3 font-medium"
      >
        Read More
        <ArrowRight className="h-4 w-4 " />
      </Link>
    </div>
  );
};

export default BlogCard;
