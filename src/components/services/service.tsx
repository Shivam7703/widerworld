"use client";
import Image from "next/image";
import Link from "next/link";
import { serviceData } from "@/data/homeData";

export default function ServiceSection() {
  return (
    <section className="py-14 sm:py-24 px-4 sm:px-16 lg:px-24 max-w-[1450px] mx-auto">

      {/* Header */}
      <div className="text-center mb-14">
       <h4 className="text-color2 text-xs font-bold tracking-[0.2em] uppercase mb-4">
{serviceData.title1}        </h4>
        <h2
          className="text-color3 font-bold capitalize text-3xl md:text-5xl !leading-tight mb-6 max-w-3xl mx-auto"
        >
{serviceData.title2}  {" "}         <span className="text-color1">{serviceData.title3} </span>
        </h2>
        <div className="w-16 h-[2px] bg-color4 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

        {serviceData?.services?.map((pro, index: number) => (
          <div
            key={index}
            className="group relative h-[320px] sm:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden"
          >

            {/* Image */}
            <Image
              src={pro.img}
              alt={pro.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Dark luxury overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/90" />

            {/* Glass effect layer */}
            <div className="absolute inset-0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Premium Badge */}
            <div className="absolute top-4 left-4 z-20 px-3 py-[5px] text-[10px]
                            bg-black/40 backdrop-blur-md border border-color4/40
                            text-[#E6D3A3] rounded-full tracking-widest uppercase">
              Immigration
            </div>

            {/* Content */}
            <Link
              href={`/projects/${pro.title
                .trim()
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`}
              className="absolute bottom-0 w-full p-5 z-20"
            >

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center
                              bg-color4/10 border border-color4/40 text-color4
                              mb-3 transition-all duration-300
                              group-hover:bg-color4/20 group-hover:shadow-[0_0_20px_rgba(198,164,92,0.35)]">
                {pro.icon}
              </div>

              {/* Title */}
              <h3
                className="text-white text-[1rem] sm:text-[1.2rem] font-semibold mb-2 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {pro.title}
              </h3>

              {/* Divider */}
              <div className="h-[1px] bg-white/20 mb-3 relative overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-6 bg-color4 group-hover:w-full transition-all duration-500" />
              </div>

              {/* Description */}
              <p className="text-white/70 text-xs leading-relaxed
                            max-h-0 opacity-0 overflow-hidden
                            group-hover:max-h-24 group-hover:opacity-100
                            transition-all duration-500">
                Expert guidance for visa processing, documentation, and smooth
                immigration journeys tailored to your goals.
              </p>

              {/* CTA */}
              <span className="inline-flex items-center gap-1 mt-3 text-[10px]
                               tracking-[0.2em] uppercase text-color4
                               opacity-0 translate-y-2
                               group-hover:opacity-100 group-hover:translate-y-0
                               transition-all duration-300">
                Discover →
              </span>
            </Link>

            {/* Hover glow border */}
            <div className="absolute inset-0 rounded-2xl border border-transparent
                            group-hover:border-color4/40 transition duration-500" />
          </div>
        ))}

      </div>
    </section>
  );
}