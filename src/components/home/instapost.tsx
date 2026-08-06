"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import {
  insta1,
  insta2,
  insta3,
  insta4,
  insta5,
  insta6,
  insta7,
  insta8,
  insta9,
  insta10,
} from "@/assets";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IoPlaySharp } from "react-icons/io5";

const img = [
  insta1,
  insta2,
  insta3,
  insta4,
  insta5,
  insta6,
  insta7,
  insta8,
  insta9,
  insta10,
];

const data = [
  "https://www.instagram.com/reel/DUnWLdCAc2J/",
  "https://www.instagram.com/reel/DUaDh-rAW2V/",
  "https://www.instagram.com/reel/DUIGiaNgYIq/",
  "https://www.instagram.com/reel/DSo_E9QAUVh/",
  "https://www.instagram.com/reel/DPLtjS_gXKi/",
  "https://www.instagram.com/reel/DJejD5gtkvC/",
  "https://www.instagram.com/reel/DBIwVJlhERJ/",
  "https://www.instagram.com/reel/C4SsS4Vpuwk/",
  "https://www.instagram.com/reel/C4_ajZwySHN/",
  "https://www.instagram.com/reel/C6GtoHBhaDD/",
];

// getCleanReelUrl function is removed as it's not needed for direct links

export default function InstaPost() {
  const uniqueId = "insta1234";

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
      240: { slidesPerView: 2 },
      600: { slidesPerView: 3 },
      1080: { slidesPerView: 4 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-7 sm:py-14">
      {/* HEADER */}
      <div className="relative lg:px-20 w-full">
        <div className="relative z-10 text-center mb-12">
          <h2 className="text-color3 font-bold text-3xl md:text-5xl !leading-tight mb-6 max-w-3xl mx-auto">
            Reels of the <span className="text-color1">Day</span>
          </h2>
          <div className="w-24 h-[2px] md:mb-9 mb-5 bg-color1 mx-auto" />
        </div>
      </div>

      {/* SWIPER */}
      <div className="relative z-10 px-6 md:px-14 lg:px-20 xl:px-28">
        <Swiper {...swiperOptions} className={uniqueId}>
          {data.map((url, index) => (
            <SwiperSlide key={index} className="py-3">
              {/* The entire card is now a link */}
              <a
                href={url} // Direct link to the Instagram reel
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-xl bg-black group" // Added 'group' for hover effects
              >
                {/* Image */}
                <Image
                  src={img[index]}
                  alt={`Instagram reel ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105" // Subtle zoom on hover
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full border-2 border-white/80 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <IoPlaySharp className="w-8 h-8 text-white fill-white ml-1" /> {/* Play icon */}
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* NAV ARROWS */}
      <button
        className={`${uniqueId}-next absolute z-30 right-2 md:right-6 top-[60%] -translate-y-1/2
          w-12 h-12 border border-white/80 rounded-full bg-color5 hover:bg-color1
          flex items-center justify-center text-white shadow-xl
          transition-all duration-300 hover:scale-110`}
      >
        <FaArrowRightLong className="text-sm" />
      </button>
      <button
        className={`${uniqueId}-prev absolute z-30 left-2 md:left-6 top-[60%] -translate-y-1/2
          w-12 h-12 border border-white/80 rounded-full bg-color5 hover:bg-color1
          flex items-center justify-center text-white shadow-xl
          transition-all duration-300 hover:scale-110`}
      >
        <FaArrowLeftLong className="text-sm" />
      </button>
    </section>
  );
}