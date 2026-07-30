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
import { planebg } from "@/assets";


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
      140: { slidesPerView: 1 },
      560: { slidesPerView: 2 },
      924: { slidesPerView: 3 },
      // 1200: { slidesPerView: 4 },
    },
  };

  return (
    <section className="pb-6 relative overflow-hidden ">

      {/* ══════════════════════════════
          TOP — Dark bg with city image
      ══════════════════════════════ */}
      <div className="relative p-6  md:p-14 lg:px-20 md:h-[450px] overflow-hidden h-64 md:rounded-b-[250px]  bg-color2 w-full">

        {/* Background image — darkened */}
        <Image
          src={planebg}
          alt="background"
          fill
          className="object-cover object-right-bottom opacity-30"
        />
        {/* ── HEADER ── */}
        <div className="relative z-10 text-center mb-12">
          {data?.title1 && (
            <p className="text-xs font-bold uppercase text-gray-200 mb-2 sm:mb-4">
              {data?.title1}
            </p>
          )}
          <h2 className="text-white font-bold text-2xl md:text-5xl !leading-tight mb-6 max-w-3xl mx-auto">
            {data?.title2}
          </h2>

          {/* thin line */}
          <div className="w-24 h-[2px] bg-white mx-auto " />
        </div>
      </div>

      {/* ── SWIPER ── */}
      <div className="relative z-10 md:-mt-52  -mt-24 px-10 md:p-14 lg:px-20 xl:px-28">
        <Swiper {...swiperOptions} className={`${uniqueId}`}>
          {data?.cards.map((card: any, index: number) => (
            <SwiperSlide key={card.id} className="group !h-auto">

              {/* CARD */}
              <div className="flex flex-col group relative h-full rounded-xl overflow-hidden shadow-2xl">

                {/* ── TOP: IMAGE ── */}
                <div className="relative w-full overflow-hidden h-64 md:h-[350px]" >
                  <Image
                    alt={card?.heading}
                    src={card?.img}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 bg-gradient-to-t from-black/80 via-black/60 to-white/20 w-full h-full" />
                </div>

                {/* ── BOTTOM: CONTENT PANEL ── */}
                <div
                  className="absolute bottom-0 gap-3 flex flex-col flex-1 p-6 text-white"
                >
                  {/* Title */}
                  <h3 className={`text-lg md:text-xl font-bold leading-snug
                    `}>
                    {card?.heading}
                  </h3>

                  {/* Description — only first card shows it */}
                  <p className=" text-zinc-200 line-clamp-2">
                    {card?.text}
                  </p>



                  {/* Read More */}
                  <Link
                    href="/services"
                    className={`inline-flex bg-white hover:bg-color1 px-4 py-2.5 w-max group/btn rounded-md  items-center gap-2 text-xs font-semibold
                      transition-all duration-300 hover:gap-3
                      text-color2 hover:text-white`}
                  >
                    Read More
                    <HiArrowUpRight className="text-sm group-hover/btn:rotate-45" />
                  </Link>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ── NAV ARROWS ── */}
      <button
        className={`${uniqueId}-next absolute z-30 right-2 md:right-6 top-[68%] -translate-y-1/2
          w-12 h-12 border border-white/80 rounded-full bg-color2 hover:bg-color1
          flex items-center justify-center text-white shadow-xl
          transition-all duration-300 hover:scale-110`}
      >
        <FaArrowRightLong className="text-sm" />
      </button>
      <button
        className={`${uniqueId}-prev absolute z-30 left-2 md:left-6 top-[68%] -translate-y-1/2
          w-12 h-12 border border-white/80 rounded-full bg-color2 hover:bg-color1
          flex items-center justify-center text-white shadow-xl
          transition-all duration-300 hover:scale-110`}
      >
        <FaArrowLeftLong className="text-sm" />
      </button>

    </section>
  );
}