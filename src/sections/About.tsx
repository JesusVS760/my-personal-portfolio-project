import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import StarIcon from "@/assets/sparkle.svg";
import book from "@/assets/book2.png";
import JavascriptIcon from "@/assets/javascript.svg";
import HtmlIcon from "@/assets/html5.svg";
import CssIcon from "@/assets/css3.svg";
import ReactIcon from "@/assets/react.svg";
import NextjsIcon from "@/assets/nextjs.svg";
import GithubIcon from "@/assets/github.svg";
import mapImage from "@/assets/map.jpg";
import myMemoji from "@/assets/Memoji.png";
import { TechIcon } from "@/components/TechIcon";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: NextjsIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Programming",
    emoji: "👨‍💻",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gym",
    emoji: "🏋🏽",
    left: "50%",
    top: "5%",
  },

  {
    title: "Hiking",
    emoji: "⛰️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Learning",
    emoji: "📚",
    left: "5%",
    top: "65%",
  },
  {
    title: "Running",
    emoji: "🏃🏻‍♀️",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <div className="md:col-span-2 lg:col-span-1">
              <Card className="h-[320px] ">
                <CardHeader
                  title="My Reads"
                  description="  Explore the books shaping my perspectives"
                />
                <div className="w-44 mx-auto mt-2 md:mt-0">
                  <Image src={book} alt="book" />
                </div>
              </Card>
            </div>
            <div className="md:col-span-3 lg:col-span-2">
              <Card className="h-[320px]">
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
                  className=""
                />
                <ToolboxItems items={toolboxItems} className="mt-6" />
                <ToolboxItems
                  items={toolboxItems}
                  className="mt-6 "
                  itemsWrapperClassName="-translate-x-1/2"
                />
              </Card>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8 ">
            <div className="md:col-span-3 lg:col-span-2">
              <Card className="h-[320px] p-0 flex flex-col">
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my interests and hobbies beyond the digital realm"
                  className="px-6 py-6"
                />
                <div className="relative flex-1">
                  {hobbies.map((hobby) => (
                    <div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                    >
                      <span className="font-medium text-gray-950 ">
                        {hobby.title}{" "}
                      </span>
                      <span>{hobby.emoji}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <Card className="h-[320px] p-0 relative">
                <Image
                  className="h-full w-full object-cover object-left-top"
                  src={mapImage}
                  alt="san diego map"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <Image
                    src={myMemoji}
                    alt="my memoji character"
                    className="size-20"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
