import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import MagicButton from "@/app/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black flex flex-col justify-center items-center overflow-hidden mx-auto">
      <div className="w-full">
        <MagicButton
          text=">> Resume"
          icon={<FaLocationArrow />}
          position="right"
          otherClasses="fixed z-20 right-4 top-4"
        />
        <Hero />
        <About />
      </div>
    </main>
  );
}
