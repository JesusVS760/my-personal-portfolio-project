import ArrowUpRight from "@/assets/arrow-175-xxl.png";
import Image from "next/image";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 md:text-left  rounded-3xl text-center">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next projet ot life? Let's connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button className="text-white border border-gray-900 bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max">
                <span className="font-semibold">Contact Me</span>
                <Image
                  className="size-4"
                  src={ArrowUpRight}
                  alt="arrow symbol"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
