"use client";
import React from "react";
import { BackgroundBeams } from "@/app/components/ui/background-beams";
import MagicButton from "@/app/components/ui/MagicButton";
import { FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:nilay.saxena.06@gmail.com";
  };

  return (
    <section id="footer" className="bg-black lg:p-40 lg:pb-20 p-10 relative">
      <div className="flex lg:justify-between lg:flex-row flex-col">
        <div className="flex flex-col gap-6 lg:mb-24 mb-16 text-center items-center lg:text-left lg:items-start z-20">
          <h2 className="font-merriweather lg:text-4xl text-2xl text-slate-400">
            Let&apos;s work together
          </h2>
          <p className="font-jetbrainsMono text-base text-slate-400">
            Reach out to me and let us discuss opportunities to work together.
          </p>
          <MagicButton
            text="{Contact}"
            icon={<FaEnvelope />}
            position="left"
            otherClasses="text-slate-400 border-slate-800 w-fit"
            animate={true}
            handleClick={handleContactClick}
          />
        </div>
        <div className="flex flex-col gap-4 font-jetbrainsMono text-slate-400 text-base mb-6 z-20">
          <p className="font-bold text-primary lg:text-lg text-merriweather">
            Contact
          </p>
          <p className="flex items-center gap-4">(+91) 9140416064</p>
          <p className="flex items-center gap-4">nilay.saxena.06@gmail.com</p>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-4 items-center justify-center mt-10">
        <h2 className="font-merriweather lg:text-4xl text-2xl text-primary">
          Nilay Saxena
        </h2>
        <p className="text-base lg:text-lg font-jetbrainsMono text-slate-400 text-center">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default Footer;
