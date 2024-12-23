import memo2 from "@/assets/person1.png";
import memo1 from "@/assets/person2.png";
import memo3 from "@/assets/person3.png";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";

const testimonials = [
  {
    name: "Gail Parker",
    position: "CEO at 7 Dimensions",
    text: "The work you did for our website has truly transformed our online presence. Your attention to detail and understanding of our mission really helped us connect with the community. We are so grateful for your efforts!",
    avatar: memo1,
  },
  {
    name: "Nader Abdulrub",
    position: "Software Engineer @ Wireflow",
    text: "I was really impressed with your front-end work. The UI/UX was seamless, and your ability to implement complex features with clean, maintainable code is commendable. You have a true talent for front-end development!",
    avatar: memo2,
  },
  {
    name: "Derek Barnett",
    position: "Product Manager at Argyle",
    text: "I can't recommend your front-end skills enough. The design was user-friendly, and the performance was flawless. You really went above and beyond to ensure everything was perfect. Keep up the great work!",
    avatar: memo3,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say About Me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />
        <div className="mt-16 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex  gap-8 flex-none">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="max-w-xs md:max-w-md p-6 md:p-8"
              >
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="max-h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">
                  {testimonial.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
