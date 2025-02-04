"use client";
import React from "react";
import { GlowingEffect } from "@/app/components/ui/glowing-effect";
import MagicButton from "@/app/components/ui/MagicButton";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
// import { motion } from "motion/react";
// import { AuroraBackground } from "@/app/components/ui/aurora-background";

const handleLinkedinClick = () => {
  window.open("https://www.linkedin.com/in/nilaysaxena22/");
};

const handleGithubClick = () => {
  window.open("https://www.github.com/Nilay611");
};

const About = () => {
  return (
    <section
      id="about"
      className="lg:bg-[url(/assets/images/about.jpg)] bg-[length:50%] bg-left bg-no-repeat relative p-8 lg:py-24 flex justify-center lg:justify-end bg-white"
    >
      {/* <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Background lights are cool you know.
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            And this, is chemical burn.
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Debug now
          </button>
        </motion.div>
      </AuroraBackground> */}
      <div className="lg:w-3/5 w-fit h-fit bg-black p-10 lg:p-36 relative rounded-tl-[50px] rounded-br-[50px] lg:mr-24">
        <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0 rounded-tl-[50px] rounded-br-[50px]">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] rounded-tl-[50px] rounded-br-[50px]"></div>
        </div>
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative z-10 justify-center items-center flex flex-col">
          <h1 className="font-merriweather uppercase font-bold lg:text-6xl text-4xl text-primary mb-4 lg:text-left text-center">
            About
          </h1>
          <p className="font-jetbrainsMono text-justify text-slate-400 leading-8 lg:text-lg text-base">
            I am an innovative Full Stack Developer with over 2 years of
            experience in building scalable web applications using{" "}
            <span className="font-bold text-primary">ReactJS</span>,{" "}
            <span className="font-bold text-primary">NextJS</span>,{" "}
            <span className="font-bold text-primary">ASP.NET Core</span>, and{" "}
            <span className="font-bold text-primary">SQL Server</span>.
            Experienced in designing{" "}
            <span className="font-bold text-primary">RESTful APIs</span>,
            streamlining backend architectures, and delivering high-quality
            solutions in <span className="font-bold text-primary">Agile</span>{" "}
            environments. If you&apos;re interested in my work and experience,
            please don&apos;t hesitate to reach out to me!
          </p>
          <div className="flex flex-row gap-4 mt-6">
            <MagicButton
              icon={<FaLinkedin />}
              position="left"
              otherClasses="text-slate-400 border-slate-800 text-xl"
              handleClick={handleLinkedinClick}
              animate={true}
            />
            <MagicButton
              icon={<FaGithub />}
              position="left"
              otherClasses="text-slate-400 border-slate-800 text-xl"
              handleClick={handleGithubClick}
              animate={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
