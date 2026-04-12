"use client";
import React from "react";
import { canadapnp as data } from "@/data/homeData";
import Image from "next/image";
import Countryslider from "./countryslider";


export default function Canadapnp() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* ══════════════════════════════
          TOP — Dark bg with city image
      ══════════════════════════════ */}
      <div className="relative bg-color3 w-full">

        {/* Background image — darkened */}
        <Image
          src={data?.bgImg}
          alt="background"
          fill
          className="object-contain object-center opacity-30"
        />

        {/* Header text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-9 pb-28 md:pt-12 md:pb-32">
          {data?.title1 && (
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-gray-200 mb-5">
              {data.title1}
            </p>
          )}
          <h2 className="text-white font-bold text-3xl md:text-5xl !leading-tight mb-6 max-w-3xl mx-auto">
            {data?.title2}
          </h2>
        </div>
      </div>

  
      <div
        className="  sm:p-12 md:p-16 lg:px-20 sticky -mt-28 md:-mt-44"
      >
      
      <Countryslider data={data} uniqueId = {"canadaSlider"}/>
      </div>

    </section>
  );
}