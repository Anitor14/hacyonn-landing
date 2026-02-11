import React from "react";
import Container from "../Shared/Container";
import ProviderCard from "./ProviderCard";
import { StaticImageData } from "next/image";

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
    <div className="py-[64px] bg-white">
      <Container className="space-y-[48px]">
        <h1 className="max-w-[751px] text-[#213B3C] font-bold text-[36px]">
          {title}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {providers.map((provider) => (
            <ProviderCard key={provider.id} {...provider} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Providers;
