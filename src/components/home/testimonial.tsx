"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FaQuoteLeft } from "react-icons/fa6";
import { testimonialData as data } from "@/data/homeData";
import { arrow} from "@/assets";
import { BsPatchCheckFill } from "react-icons/bs";

// Reusable card component to keep the code clean
const TestimonialCard = ({ cards }: { cards: any }) => (
  <div className="relative group h-full w-[320px] sm:w-[400px] md:w-[450px] mx-4 shrink-0">
    <div className="relative bg-white rounded-lg overflow-hidden shadow-md p-6 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 h-full">
    
        {/* Decorative Quote Icon */}
        <div className="absolute top-6 right-6 text-blue-200 opacity-20">
          <FaQuoteLeft className="w-14 h-16" />
        </div>

        {/* Profile Section with Premium Design */}
        <div className="flex gap-6 items-center mb-3">
            {/* Animated Ring */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-xl">
              <Image
                src={cards.img}
                alt={cards.title}
                width={96}
                height={96}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500"
              />
            </div>
        

          <div className="text-left">
            <h3 className="text-base text-zinc-800 sm:text-lg font-bold ">
              {cards.title}
            </h3>
            <p className="text-zinc-500 font-medium text-xs  mt-1 ">
              Happy Client
            </p>
          </div>
        </div>
 {/* Star Rating */}
            <div className="flex gap-1 mb-3 justify-start">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 fill-yellow-500 drop-shadow-md"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))} 
              <BsPatchCheckFill className="mt-[2px] text-blue-500" />
            </div>
        {/* Testimonial Text */}
        <p className="text-zinc-600 text-left leading-relaxed text-sm line-clamp-7">
          "{cards.text}"
        </p>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-8 sm:py-12 relative flex flex-col bg-zinc-100 items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={arrow}
        alt="Background"
        className="absolute top-20 opacity-70 left-0 h-full object-contain z-0 pointer-events-none"
      />

      {/* Header Section */}
      <div className="w-full text-center flex flex-col items-center gap-y-3 mb-6 sm:mb-12 relative z-10 px-6">
        <p className="text-sm mx-auto font-bold uppercase tracking-[0.22em] text-color3 relative">
          testimonials
        </p>
        <h2 className="font-bold text-3xl md:text-5xl !leading-tight mb-2 max-w-3xl mx-auto text-color3 relative">
          Our Client's <span className="text-color1">Valuable Words</span>
        </h2>
      </div>

      {/* Sliders Container */}
      <div className="w-full  relative z-10">
        
        {/* Row 1: Left to Right */}
        <Marquee 
          direction="right" 
          speed={45} 
          pauseOnHover={true} 
          autoFill={true} 
          className="py-4"
        >
          {data?.testimonials?.map((cards: any) => (
            <TestimonialCard key={`row1-${cards.id}`} cards={cards} />
          ))}
        </Marquee>

      </div>
    </section>
  );
}