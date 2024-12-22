import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import StarIcon from "@/assets/sparkle.svg";
import book from "@/assets/books.png";
import JavascriptIcon from "@/assets/javascript.svg";
import HtmlIcon from "@/assets/html5.svg";
import CssIcon from "@/assets/css3.svg";
import ReactIcon from "@/assets/react.svg";
import NextjsIcon from "@/assets/nextjs.svg";
import GithubIcon from "@/assets/github.svg";
import { TechIcon } from "@/components/TechIcon";

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

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me."
      />
      <div>
        <Card>
          <div>
            <StarIcon className="size-8 " />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives</p>
          </div>
          <Image src={book} alt="books stacked" />
        </Card>
        <Card>
          <div>
            <StarIcon className="size-8 " />
            <h3>My Toolbox</h3>
            <p>
              Explore the technologies and tools I use to craft exceptional
              digital experiences.{" "}
            </p>
          </div>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title}>
                <TechIcon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div>
            <StarIcon className="size-8 " />
            <h3>Beyong the Code</h3>
            <p>Explore my interests and hobbies beyond the digital realm</p>
          </div>
          <Image src={book} alt="books stacked" />
        </Card>
        <Card></Card>
      </div>
    </div>
  );
};
