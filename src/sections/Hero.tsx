import heroImage from "@/assets/hero-image.png";
import Image from "next/image";
import StarIcon from "@/assets/starImage.svg";
import Sparkle from "@/assets/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldSpin
          spinDuration="3s"
          shouldOrbit
          orbitDuration="30s"
        >
          <Sparkle className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={79}
          shouldSpin
          spinDuration="3s"
          shouldOrbit
          orbitDuration="32s"
        >
          <Sparkle className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-gray-300/20"></div>
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={179}
          shouldSpin
          spinDuration="3s"
          shouldOrbit
          orbitDuration="36s"
        >
          <Sparkle className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={20}
          shouldSpin
          spinDuration="6s"
          shouldOrbit
          orbitDuration="38s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          shouldSpin
          spinDuration="6s"
          shouldOrbit
          orbitDuration="40s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-gray-300/20"></div>
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={144}
          shouldSpin
          spinDuration="3s"
          shouldOrbit
          orbitDuration="44s"
        >
          <Sparkle className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-gray-300/20"></div>
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-71}
          shouldSpin
          spinDuration="6s"
          shouldOrbit
          orbitDuration="48s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image className="size-[100px]" alt="hero-image" src={heroImage} />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className=" bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Amazing User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Experienced Frontend Developer crafting seamless, user-centric web
            experiences with expertise in modern technologies
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="cursor-pointer inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work</span>
            <span>↓</span>
          </button>
          <button className="cursor-pointer inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋</span>
            <span className="font-semibold ">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
