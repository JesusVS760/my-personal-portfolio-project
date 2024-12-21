import dsdlanding from "@/assets/7dsddesk.png";
import weatherlanding from "@/assets/weatherdesk.png";
import minigamelanding from "@/assets/minigamedesk.png";
import Checkcircle from "@/assets/checkcircle.png";
import uprightarrow from "@/assets/uprightarrow.png";
import Image from "next/image";

const PortfolioProjects = [
  {
    company: "7 Dimensions",
    year: "2024",
    title: "Non-Profit App Development",
    results: [
      {
        title: "Empowered At Risk Youth",
      },
      {
        title: "Optimized Website Speed",
      },
      {
        title: "Enhanced Community Outreach",
      },
    ],
    link: "#",
    image: dsdlanding,
  },
  {
    company: "Weather App",
    year: "2024",
    title: "Weather App Development",
    results: [
      {
        title: "Integrated Real-Time Weather Data API",
      },
      {
        title: "Enhanced User Interface for Seamless Experience",
      },
      {
        title: "Optimized Mobile Performance for Fast Access",
      },
    ],
    link: "https://jesusweathertechportion.netlify.app/Weather",
    image: weatherlanding,
  },
  {
    company: "Rock Paper Scissors",
    year: "2024",
    title: "Rock Paper Scissors Game Development",
    results: [
      {
        title: "Built Interactive User Interface for Easy Play",
      },
      {
        title: "Implemented Randomized AI Opponent Logic",
      },
      {
        title: "Optimized Performance for Smooth User Experience",
      },
    ],
    link: "#",
    image: minigamelanding,
  },
];

export const ProjectSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Real-World Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg max-w-md mx-auto lg:text-xl text-white/60 mt-4">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className=" md:mt-20 flex flex-col mt-10 gap-20">
          {PortfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 overflow-hidden rounded-3xl relative z-0 after:z-10 after:content-[''] after:absolute after:inset-0  after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 lg:pt-16 lg-px-20 md:pt-12 md:px-10 after:pointer-events-none"
            >
              <div className="absolute inset-0"></div>

              <div className="lg:grid lg:grid-cols-2 lg-gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={result.title}
                      >
                        <Image
                          className="size-5 md:size-6 bg-white/50 rounded-full p-1"
                          src={Checkcircle}
                          alt="checked circle"
                        />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <Image
                        className="size-4"
                        src={uprightarrow}
                        alt="arrow"
                      />
                    </button>
                  </a>
                </div>
                <div>
                  <Image
                    className="lg:mt-0 -mt-4 -mb-12 md:-mb-28 md:-mt-12"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
