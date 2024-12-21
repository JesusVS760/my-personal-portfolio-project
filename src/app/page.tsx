import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectSection } from "@/sections/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectSection />
    </div>
  );
}
