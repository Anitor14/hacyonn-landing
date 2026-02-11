import React from "react";
import Container from "./Container";
import { Button } from "../ui/button";
import Link from "next/link";
import MarqueeLogos from "../Home/MarqueeLogos";

const Footer = () => {
  const url = "/ContactVideo.mp4";
  return (
    <footer className="pb-10 bg-[#fff] text-white">
      <div className="relative w-full h-[500px] flex flex-col items-center justify-center space-y-6 overflow-hidden">
        {/* Background video */}
        <video
          src={url}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Full overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 pointer-events-none" />

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-6 text-white">
          <h1 className="text-3xl md:text-4xl text-center w-[95%] max-w-3xl">
            Have questions or looking for the right digital solution? We’d love
            to hear from you!
          </h1>
          <Button className="bg-[#4FBCAA] text-[#213B3C] rounded-[4px] h-[50px] w-[112px] hover:bg-[#4FBCAA]/80">
            Get in touch
          </Button>
        </div>
      </div>

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-10">
          <div className="space-y-3">
            <h1 className="text-[#213B3C] text-[30px]">Hacyon</h1>
            <p className="text-black">
              <span className="font-semibold">HQ:</span> No 5, Engr Maxwell
              Adoki Street, Peter Odili Road, Port Harcourt, Rivers State
            </p>
            <p className="text-black">
              <span className="font-semibold">Abuja Office:</span> Plot 91 Road
              3, Phase4, Nyanya, Abuja.
            </p>
            <p className="text-black">
              <span className="font-semibold ">Germany Office:</span> 11A
              Hirschstrasse, 76133, Karlsruhe Germany
            </p>
          </div>

          <div>
            <h1 className="text-xl font-bold mb-4 text-[#0B2826]">Menu</h1>
            <ul className="flex flex-col gap-3 text-[#20655D]">
              <Link href="/about">About</Link>
              <Link href="/services">Products</Link>
              <Link href="/industries">Industries</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-bold mb-4 text-[#0B2826]">Socials</h1>
            <ul className="flex flex-col gap-3 text-[#20655D]">
              <Link
                href="https://www.facebook.com/profile.php?id=100070072008518"
                target="_blank"
              >
                Facebook
              </Link>
              <Link
                href="https://www.instagram.com/hacyon_innovation/"
                target="_blank"
              >
                Instagram
              </Link>
              <Link
                href="https://www.linkedin.com/company/hacyon-innovation/"
                target="_blank"
              >
                LinkedIn
              </Link>
              <Link href="#">Twitter (X)</Link>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-bold mb-4 text-[#0B2826]">Legal</h1>
            <ul className="flex flex-col gap-3 text-[#20655D]">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </ul>
          </div>
        </div>

        <MarqueeLogos />

        <div className="w-full h-[1px] bg-[#4FBCAA42] my-12"></div>

        <div className="mt-6 flex items-center justify-between">
          <h1 className="text-[#0B2826]">innovation@hacyon.com</h1>

          <div className="text-[#0B2826] space-x-4 flex items-center">
            <h1>Privacy Policy</h1>
            <h2>Terms of use</h2>
          </div>
        </div>
        {/* <div className="mt-12 text-center text-sm text-[#A7CFCB]">
          © {new Date().getFullYear()} Hacyon. All rights reserved.
        </div> */}
      </Container>
    </footer>
  );
};

export default Footer;
