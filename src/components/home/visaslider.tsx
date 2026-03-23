"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { visaSliderdata as data } from "@/data/homeData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";


export default function VisaSlider() {
  const uniqueId = "caseStudy123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    autoplay: { delay: 5000, disableOnInteraction: false },
    loop: true,
    modules: [Autoplay, Navigation],
    breakpoints: {
      140:  { slidesPerView: 1 },
      560:  { slidesPerView: 2 },
      924:  { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
  };

  return (
    <section className="bg-color3 relative overflow-hidden p-6 md:p-14 lg:px-20">

    

      {/* ── HEADER ── */}
      <div className="relative z-10 text-center mb-12">
        {data?.title1 && (
          <p className="text-sm font-bold uppercase text-gray-200 mb-4">
            {data?.title1}
          </p>
        )}
        <h2 className="text-white font-bold text-3xl md:text-5xl !leading-tight mb-6 max-w-3xl mx-auto">
          {data?.title2}
        </h2>

        {/* thin line */}
        <div className="w-24 h-px bg-white/50 mx-auto sm:mb-8 mb-5" />
      </div>

      {/* ── SWIPER ── */}
      <div className="relative z-10">
        <Swiper {...swiperOptions} className={`${uniqueId}`}>
          {data?.cards.map((card: any, index: number) => (
            <SwiperSlide key={card.id} className="group !h-auto">

              {/* CARD */}
              <div className="flex flex-col group relative h-full rounded-md overflow-hidden shadow-2xl">

                {/* ── TOP: IMAGE ── */}
                <div className="relative w-full overflow-hidden h-72 md:h-80" >
                  <Image
                    alt={card?.heading}
                    src={card?.img}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

<div className="h-24 bg-color2"></div>
                {/* ── BOTTOM: CONTENT PANEL ── */}
                <div
                  className="absolute bottom-0  flex flex-col flex-1 px-6 py-5 transition-colors duration-500 bg-white text-zinc-800 group-hover:bg-color1 group-hover:text-white"
                >
                  {/* Title */}
                  <h3 className={`text-lg font-bold leading-snug mb-3
                    `}>
                    {card?.heading}
                  </h3>

                  {/* Description — only first card shows it */}
                    <p className="duration-300 group-hover:py-4 h-0 group-hover:h-fit leading-relaxed line-clamp-3">
                      {card?.text}
                    </p>

                  {/* Thin divider */}
                  <div className={`w-full h-px mt-auto mb-4
                    bg-zinc-400 group-hover:bg-white/60`}
                  />

                  {/* Read More */}
                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-2 text-sm font-semibold
                      transition-all duration-300 hover:gap-3
                      text-zinc-600 group-hover:text-white`}
                  >
                    Read More
                    <HiArrowUpRight className="text-base" />
                  </Link>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ── NAV ARROWS ── */}
      <button
        className={`${uniqueId}-next absolute z-30 right-2 md:right-6 top-[62%] -translate-y-1/2
          w-12 h-12 border border-white/80 rounded-full bg-white/10 hover:bg-color1
          flex items-center justify-center text-white shadow-xl
          transition-all duration-300 hover:scale-110`}
      >
        <FaArrowRightLong className="text-sm" />
      </button>
      <button
        className={`${uniqueId}-prev absolute z-30 left-2 md:left-6 top-[62%] -translate-y-1/2
          w-12 h-12 border border-white/80 rounded-full bg-white/10 hover:bg-color1
          flex items-center justify-center text-white shadow-xl
          transition-all duration-300 hover:scale-110`}
      >
        <FaArrowLeftLong className="text-sm" />
      </button>

    </section>
  );
}