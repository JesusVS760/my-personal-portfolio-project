import StarIcon from "@/assets/starImage.svg";
import Image from "next/image";

const frontEndWords = [
  "Responsive",
  "Accessible",
  "Optimized",
  "Interactive",
  "Scalable",
  "User-Centric",
  "Efficient",
  "Maintainable",
  "SEO Optimized",
  "Cross-Browser",
  "Responsive Design",
  "State Management",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%, transparent) ]">
          <div className="flex flex-none gap-4 py-3">
            {frontEndWords.map((word) => (
              <div key={word} className="inline-flex items-center gap-4">
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
