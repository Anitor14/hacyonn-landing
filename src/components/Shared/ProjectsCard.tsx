import Image, { StaticImageData } from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  data: {
    id: string;
    image: StaticImageData;
    title: string;
    description: string;
  };
  textClassName?: string;
  hideText?: boolean;
}

const ProjectsCard = ({ data, textClassName, hideText }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="space-y-2 px-1 pb-1">
        {!hideText && (
          <h3
            className={twMerge(
              `text-2xl font-black leading-tight`,
              textClassName,
            )}
          >
            {data.title}
          </h3>
        )}

        <p
          className={twMerge(
            `text-lg font-medium leading-relaxed opacity-70`,
            textClassName,
          )}
        >
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;
