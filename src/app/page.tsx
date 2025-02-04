"use client";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import MagicButton from "@/app/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Footer from "@/app/components/Footer";

const downloadResume = () => {
  window.open(
    "https://drive.google.com/file/d/1htb0hgnYskDjqpgUY6LP41uFKzcbnWnX/view"
  );
};

export default function Home() {
  return (
    <main className="relative bg-black flex flex-col justify-center items-center overflow-hidden mx-auto">
      <div className="w-full">
        <MagicButton
          text=">> Resume"
          icon={<FaLocationArrow />}
          position="right"
          otherClasses="fixed z-30 right-4 top-4 text-primary border-primary"
          handleClick={downloadResume}
          animate={true}
        />
        <Hero />
        <About />
        <Footer />
      </div>
    </main>
  );
}
