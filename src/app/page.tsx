import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import MagicButton from "@/app/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black flex flex-col justify-center items-center overflow-hidden mx-auto">
      <div className="w-full">
        <a href="https://drive.google.com/file/d/1htb0hgnYskDjqpgUY6LP41uFKzcbnWnX/view">
          <MagicButton
            text=">> Resume"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="fixed z-20 right-4 top-4 text-primary border-primary"
          />
        </a>
        <Hero />
        <About />
      </div>
    </main>
  );
}
