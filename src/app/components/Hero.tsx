"use client";
import { Spotlight } from "@/app/components/ui/spotlight-new";
import MagicButton from "./ui/MagicButton";
import { FiArrowRightCircle } from "react-icons/fi";
import { TypewriterEffect } from "@/app/components/ui/typewriter-effect";

const handleClick = () => {
  alert("Coming soon...");
};

const Hero = () => {
  const words = [
    {
      text: ">",
    },
    {
      text: "Full",
    },
    {
      text: "Stack",
    },
    {
      text: "Developer",
    },
    {
      text: "based",
    },
    {
      text: "in",
    },
    {
      text: "Lucknow,",
      className: "text-blue-500 dark:text-primary",
    },
    {
      text: "India.",
      className: "text-blue-500 dark:text-primary",
    },
  ];
  return (
    <section id="hero" className="lg:grid lg:grid-cols-2 relative min-h-screen">
      <div className="flex justify-center bg-[url(/assets/images/bg.jpg)] bg-no-repeat bg-center bg-[length:75%] relative bg-white lg:visible invisible"></div>
      <div className="relative">
        <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
        <Spotlight />
        <div className="flex justify-center relative z-10 items-center lg:h-full h-screen">
          <div className="max-w-[90vw] flex flex-col items-center justify-center lg:gap-10 gap-5">
            <h2 className="tracking-widest text-sm md:text-lg text-center text-gray-500 max-w-80 font-jetbrainsMono">
              &apos;Crafting websites that feel as good as they look.&apos; -
              ChatGPT
            </h2>
            <h1 className="text-center mt-8 leading-3 text-lg md:text-2xl lg:text-4xl font-jetbrainsMono">
              Hi all. I am
            </h1>
            <h2 className="text-center text-4xl lg:text-8xl leading-none font-jetbrainsMono text-primary">
              Nilay Saxena
            </h2>
            <div className="text-center md:tracking-wider mb-4 text-lg lg:text-2xl font-jetbrainsMono">
              <TypewriterEffect words={words} />
            </div>
            <MagicButton
              text="_Projects"
              icon={<FiArrowRightCircle />}
              position="right"
              otherClasses="mt-8 text-slate-400 border-slate-800"
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
