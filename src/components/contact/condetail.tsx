import React from "react";
import { contat } from "@/assets";
import Image from "next/image";

function ConDetail({ data }: any) {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] lg:px-20 md:px-14 sm:px-10 px-6 py-16 md:py-20">

      {/* Decorative blur lights */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-color1/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[260px] h-[260px] bg-color2/10 rounded-full blur-[120px]" />

      <div className="max-w-[1300px] mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-16">

        {/* LEFT IMAGE */}
        <div className="md:w-[45%] w-full relative min-h-[420px] md:min-h-[500px] lg:min-h-[560px]">
          <Image
            src={contat}
            alt="Contact Illustration"
            fill
            className="object-contain object-center"
          />
        </div>

        {/* RIGHT CONTACT CARDS */}
        <div className="flex-1 flex flex-col gap-6">

          {data?.map((item: any, index: number) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-white/70 backdrop-blur-lg
              border border-white/40
              shadow-[0_10px_30px_rgba(0,0,0,0.05)]
              hover:shadow-[0_25px_60px_rgba(0,64,148,0.18)]
              hover:-translate-y-2 transition-all duration-500"
            >
              {/* Gradient border glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-color1/5 via-color2/5 to-white opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

              <div className="relative flex items-center gap-6 px-8 py-7">

                {/* ICON */}
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-2xl
                  bg-gradient-to-br from-color1 to-color2 text-white text-2xl
                  shadow-[0_10px_25px_rgba(0,64,148,0.25)]
                  group-hover:scale-110 transition duration-300"
                >
                  {item?.icon}
                </div>

                {/* TEXT */}
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-semibold text-color3 tracking-wide">
                    {item?.title}
                  </h3>

                  <a
                    href={item?.slug}
                    className="text-gray-500 mt-1 text-base font-medium
                    group-hover:text-color1 transition"
                  >
                    {item?.text}
                  </a>
                </div>

                {/* Right arrow hover */}
                <div className="ml-auto text-color1 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition duration-300 text-xl">
                  →
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default ConDetail;