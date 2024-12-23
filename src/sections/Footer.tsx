import ArrowUpRight from "@/assets/arrow-175-xxl.png";
import Image from "next/image";

const footerLinks = [
  {
    title: "Youtube",
    href: "#",
  },
  {
    title: "Twiiter",
    href: "#",
  },
  {
    title: "Instagram",
    href: "#",
  },
  {
    title: "LinkedIn",
    href: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t md:flex-row md:justify-between border-white/15 py-6 text-sm flex flex-col items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <div>
            <nav className="flex flex-col md:flex-row items-center gap-8">
              {footerLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="inline-flex items-center gap-1.5"
                >
                  <span className="font-semibold">{link.title}</span>
                  <Image className="size-4" src={ArrowUpRight} alt="arrow" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
