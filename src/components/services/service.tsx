"use client";
import Image from "next/image";
import Link from "next/link";
import { serviceData } from "@/data/homeData";

export default function ServiceSection() {

 

  return (
    <section className="p-4 sm:p-16 lg:px-24 md:px-20 max-w-[1450px] mx-auto !scroll-smooth">
      {/* Section header */}
      <div className="w-full text-center flex flex-col items-center gap-y-4 mb-11 md:mb-16">
          <h4 className="text-color2  mx-auto  font-semibold uppercase text-sm ">
                    {serviceData?.title1}
                  </h4>
      <h2 className="text-color3 font-black capitalize !leading-tight text-2xl md:text-4xl max-w-2xl  mx-auto ">
               {serviceData?.title2}
              </h2>
      </div>

      {/* Project grid */}
      <div
        className="relative gap-5 md:gap-16 py-7 md:pb-12 grid md:grid-cols-3 grid-cols-2 overflow-y-hidden"
      >
       
 {serviceData?.services?.map((pro, index: number) => (
  <div
    key={index}
    className={`group relative rounded-2xl overflow-hidden cursor-pointer
      shadow-2xl shadow-black/50 
      hover:shadow-[0_16px_48px_rgba(26,47,74,0.20)]
      transition-all duration-500 sm:h-[420px] h-72
    `}
  >
    {/* Image */}
    <Image
      src={pro.img}
      alt={pro.title}
      fill
      className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
    />


    {/* Bottom content panel — dark frosted */}
    <Link
      href={`/projects/${pro.title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")}`}
      className="absolute bottom-0 left-0 right-0 z-20 w-[90%]"
    >
      <div
        className="p-3 sm:p-5 transition-all duration-500 rounded-lg backdrop-blur-md bg-gradient-to-r from-black/80 via-zinc-700/80 to-black/80"
      >
        {/* Icon + Title row */}
        <div className="flex items-center sm:gap-4 gap-2 mb-3">
          {/* Icon circle */}
          <div className="sm:w-12 sm:h-12 h-8 w-8 rounded-xl border border-white/60 flex items-center justify-center flex-shrink-0 text-white sm:text-xl text-base 
            group-hover:border-white/60 group-hover:bg-white/20 transition-all duration-300">
            {pro.icon}
          </div>
          <h2 className="text-white font-bold text-sm sm:text-2xl leading-tight">
            {pro.title}
          </h2>
        </div>

        {/* Divider line — animated */}
        <div className="w-full bg-zinc-500">
        <div className="h-[1.5px] w-10 bg-white/90 group-hover:w-full  duration-500 rounded-full my-4" />
</div>
        
          <p className="text-gray-100 sm:text-base text-xs group-hover:sm:py-4 max-h-0 group-hover:max-h-96 duration-300 leading-relaxed overflow-hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci nostrum, optio officiis repellendus architecto ea aliquid nobis suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque repudiandae quia.
          </p>
      </div>
    </Link>
  </div>
))}

      </div>
    </section>
  );
}
