"use client";
import React from "react";
import { canadapnp as data } from "@/data/homeData";
import Image from "next/image";
import Countryslider from "./countryslider";
import { arrow, plane2 } from "@/assets";


export default function Canadapnp() {
  return (
    <section className="relative w-full overflow-hidden">

 {/* <Image
          src={plane2}
          alt="background"
          className="absolute top-3 scale-x-[-1] left-4 md:w-80 w-64"
        />

        <Image
          src={arrow}
          alt="background"
          className="absolute bottom-3 scale-x-[-1] right-0"
        /> */}
      <div
        className="sm:p-12 md:p-16 lg:px-20 p-6"
      >
         {/* ══════════════════════════════
          TOP — Dark bg with city image
      ══════════════════════════════ */}
      <div className="relative  w-full">

        {/* Header text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          {data?.title1 && (
            <p className="text-xs tracking-[0.22em] font-bold uppercase text-color1 mb-5">
              {data.title1}
            </p>
          )}
          <h2 className="text-color3 font-bold text-3xl md:text-5xl !leading-tight mb-6 max-w-3xl mx-auto">
            {data?.title2}
          </h2>
        </div>
      </div>

      <Countryslider data={data} uniqueId = {"canadaSlider"}/>
      </div>

    </section>
  );
}