import React from "react";
import Container from "../Shared/Container";
import Image from "next/image";
import Acyon from "../../../public/images/Acyon.png";
import Alarmix from "../../../public/images/alarmix-mock.png";
import Droporf from "../../../public/images/drop-orf-mock.png";

const ProjectCard = () => {
  const url = "/images/AcyonBg.png";
  const bgUrl = "/images/ProjectsBg.png";

  const alarmixUrl = "/images/AlarnixBg.png";
  const droporfUrl = "/images/DroporfBg.png";

  return (
    <div
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
      className="space-y-14 lg:space-y-0"
    >
      <div
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "80% auto",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
        }}
        className="relative min-h-[900px] overflow-visible flex"
      >
        <Container className="mb-[8rem]">
          <div className="space-y-5 w-full max-w-[600px] relative z-10 pt-20">
            <div className="h-[2px] bg-[#2E9E8D] w-[60px]" />
            <h1 className="text-[#213B3C] text-4xl leading-snug">
              Haycon ETTC Ticketing App
            </h1>
            <p className="text-[#213B3C] text-lg leading-relaxed">
              Our vision is to cultivate and propagate as a Major IT service and
              Sales provider to emerge as a leading performer in providing
              quality sales, web, and software development solutions in the
              competitive global market. Our flexible, professional, and
              integrated process mirror what Gastrown is about. We possess the
              ability to accelerate, given our talented crew of professionals
              molded and shaped to perfection, with all possessing outstanding
              talent.
            </p>
          </div>
        </Container>

        <Image
          src={Acyon}
          alt="Acyon"
          className="absolute bottom-[-2rem] sm:bottom-[2rem] lg:bottom-[-5rem] md:right-[5%] w-full sm:w-[500px] lg:w-[700px] max-w-none object-contain"
          priority
        />
      </div>

      <div
        style={{
          backgroundImage: `url(${alarmixUrl})`,
          backgroundSize: "80% auto",
          backgroundPosition: "left bottom",
          backgroundRepeat: "no-repeat",
        }}
        className="relative min-h-[500px] lg:min-h-[900px] overflow-visible flex flex-col-reverse md:flex-row"
      >
        <div className="relative flex-1 flex  justify-center md:justify-start">
          <Image
            src={Alarmix}
            alt="Alarmix"
            className="w-full sm:w-[450px] lg:w-[600px] max-w-full object-contain md:ml-[5%]"
            priority
          />
        </div>

        <div className="flex-1 flex items-center">
          <Container>
            <div className="space-y-5 w-full max-w-[600px] ml-auto relative z-10">
              <div className="h-[2px] bg-[#2E9E8D] w-[60px]" />
              <h1 className="text-[#213B3C] text-4xl leading-snug">
                Haycon Security App
              </h1>
              <p className="text-[#213B3C] text-lg leading-relaxed">
                The Alarmix app enhances community safety by enabling registered
                users to quickly alert others in the vicinity of imminent
                dangers or emergencies. The app sends out real-time
                notifications to everyone in the area.
              </p>
            </div>
          </Container>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${droporfUrl})`,
          backgroundSize: "80% auto",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
        }}
        className="relative min-h-[900px] overflow-visible flex"
      >
        <div className="flex-1 flex items-center">
          <Container>
            <div className="space-y-5 w-full max-w-[600px] relative z-10">
              <div className="h-[2px] bg-[#2E9E8D] w-[60px]" />
              <h1 className="text-[#213B3C] text-4xl leading-snug">
                Haycon Delivery App
              </h1>
              <p className="text-[#213B3C] text-lg leading-relaxed">
                Discover Drop Off, a carpooling app designed to simplify the
                transportation of items between cities. Users can easily post
                their travel details, including destinations, transportation
                methods, and available cargo space.
              </p>
            </div>
          </Container>
        </div>

        <Image
          src={Droporf}
          alt="Droporf"
          className="absolute bottom-[3rem] sm:bottom-[2rem] lg:bottom-[-1rem] md:right-[5%] w-[90%] sm:w-[500px] lg:w-[700px] max-w-none object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default ProjectCard;
