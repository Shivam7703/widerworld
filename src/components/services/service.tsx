"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaPlaneUp } from "react-icons/fa6";
import { serviceData } from "@/data/homeData";

export default function ServiceSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let lastHeight = 0;

    const updateLineHeight = () => {
      if (!sectionRef.current || !lineRef.current) return;

      const { top, height } = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollProgress = Math.min(
        1,
        Math.max(0, (viewportHeight - top - 140) / height)
      );

      const targetHeight = scrollProgress * (height - 100);
      lastHeight += (targetHeight - lastHeight) * 0.09;

      lineRef.current.style.height = `${lastHeight}px`;

      animationFrameId = requestAnimationFrame(updateLineHeight);
    };

    animationFrameId = requestAnimationFrame(updateLineHeight);
    window.addEventListener("scroll", updateLineHeight, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", updateLineHeight);
    };
  }, []);

  return (
    <section className="p-6 sm:p-16 lg:px-24 md:px-20 max-w-[1450px] mx-auto !scroll-smooth">
      {/* Section header */}
      <div className="w-full text-center flex flex-col items-center gap-y-4 mb-11 md:mb-16">
          <h4 className="text-zinc-700  mx-auto mb-3 sm:mb-5 font-semibold uppercase text-sm border-2 border-blue-400 bg-gradient-to-r from-blue-50 via-violet-50 to-red-50 w-max px-4 py-2 rounded-full shadow-sm">
                    {serviceData?.title1}
                  </h4>
      <h2 className="text-zinc-800 font-extrabold !leading-tight text-2xl md:text-4xl text-center max-w-2xl mx-auto mb-10">
               {serviceData?.title2}
              </h2>
      </div>

      {/* Project grid */}
      <div
        className="relative gap-y-5 md:gap-y-12 py-7 md:pb-12 flex flex-wrap max-md:justify-end justify-between overflow-y-hidden"
        ref={sectionRef}
      >
        {/* Background static line */}
        <div className="absolute md:left-1/2 left-2 z-10 -translate-x-1/2 bg-zinc-500 h-[94%] w-1 top-3" />

        {/* Scroll progress line */}
        <div
          ref={lineRef}
          className="absolute md:left-1/2 left-2 z-20  -translate-x-1/2 w-1 top-3"
        >
          <div className="w-full h-full bg-gradient-to-b from-blue-500 to-blue-900 relative" />
          <FaPlaneUp className="text-yellow-600 transition-all duration-300 absolute -bottom-3 -left-[8px] md:-left-[12.5px] text-xl sm:text-3xl  rotate-180" />
        </div>

        {/* Arrow follows the line smoothly */}

        {/* Project cards */}
   {serviceData?.services?.map((pro, index: number) => (
  <div
    key={index}
    className="group relative h-64 sm:h-80 w-[89%] md:w-[45%] overflow-hidden rounded-lg  shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-blue-800/20"
  >
    {/* Image with enhanced zoom effect */}
    <Image
      src={pro.img}
      alt={pro.title}
      fill
      className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-[0.75]"
    />

    {/* Multi-layer gradient for depth */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
    <div className="absolute inset-0 bg-gradient-to-br from-blue-800/0 via-blue-800/5 to-blue-800/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

   

    {/* Content Container */}
    <Link
      href={`/projects/${pro.title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")}`}
      className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-8"
    >
      <div className="flex items-end justify-between gap-4">
        {/* Text Section with staggered animation */}
        <div className="flex-1 space-y-3 transform transition-all duration-500 group-hover:-translate-y-3">
          {/* Small decorative line */}
          <div className="h-0.5 w-12 bg-blue-800 transition-all duration-500 group-hover:w-20 group-hover:bg-yellow-500" />
          
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl transition-all duration-300 ">
            {pro.title}
          </h2>
          
          <p className="mt-2 line-clamp-2 max-w-sm text-sm leading-relaxed text-gray-300/90 transition-all duration-300 group-hover:text-white">
            {pro.text}
          </p>
        </div>

        {/* Enhanced Action Button */}
        <div className="flex-shrink-0">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/95 backdrop-blur-sm text-black shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-45 group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:to-red-600 group-hover:text-white group-hover:shadow-red-500/50">
            <BsArrowUpRightCircleFill className="text-3xl transition-transform duration-500" />
            
            {/* Pulse effect on hover */}
            <div className="absolute inset-0 rounded-full bg-red-500/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-ping" />
          </div>
        </div>
      </div>
    </Link>

    
  </div>
))}

      </div>
    </section>
  );
}
