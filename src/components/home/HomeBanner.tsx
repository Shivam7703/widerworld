"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";
import Image from "next/image";
import { GrNext, GrPrevious } from "react-icons/gr";
import { sliderContent } from "@/data/homeData";

export default function HomeBanner() {
  const uniqueId = "banner12376";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: { delay: 2500, disableOnInteraction: false },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Navigation],
  };

  return (
    <section
      className="relative w-full "
    >
      {/* ── Swiper ── */}
      <Swiper {...swiperOptions} className="w-full h-full">
        {sliderContent.map((item, index) => (
          <SwiperSlide key={index} className="overflow-hidden ">
            <Image
              title="Best immigration consultants in Delhi"
              src={item.img} // Use the dynamic image passed in
              className="h-full !w-full object-contain"
              alt="Immigration consultants in Delhi NCR"
            />
          </SwiperSlide>
        ))}
      </Swiper>



      {/* ── Navigation arrows ── */}
      <button
        className={`${uniqueId}-next absolute z-20 right-5 top-1/2 -translate-y-1/2
          max-md:hidden w-12 h-12 rounded-full
          bg-black/10 backdrop-blur-sm border-2 border-white/90
          flex items-center justify-center text-white text-xl
          hover:bg-[#CB0000] hover:border-[#CB0000]
          transition-all duration-300 hover:scale-110`}
      >
        <GrNext />
      </button>
      <button
        className={`${uniqueId}-prev absolute z-20 left-5 top-1/2 -translate-y-1/2
          max-md:hidden w-12 h-12 rounded-full
          bg-black/10 backdrop-blur-sm border-2 border-white/90
          flex items-center justify-center text-white text-xl
          hover:bg-[#CB0000] hover:border-[#CB0000]
          transition-all duration-300 hover:scale-110`}
      >
        <GrPrevious />
      </button>
    </section>
  );
}
