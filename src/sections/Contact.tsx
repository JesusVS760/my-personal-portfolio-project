import ArrowUpRight from "@/assets/uprightarrow.png";
import Image from "next/image";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-14">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center">
          <h2 className="font-serif text-2xl">
            Let's create something amazing together
          </h2>
          <p className="text-sm mt-2">
            Ready to bring your next projet ot life? Let's connect and discuss
            how I can help you achieve your goals.
          </p>
          <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8">
            <span className="font-semibold">Contact Me</span>
            <Image className="size-4" src={ArrowUpRight} alt="arrow symbol" />
          </button>
        </div>
      </div>
    </div>
  );
};
