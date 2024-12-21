import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectSection />
      <TapeSection />
    </div>
  );
}
