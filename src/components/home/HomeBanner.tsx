"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GrNext, GrPrevious } from "react-icons/gr";
import { MdArrowRightAlt } from "react-icons/md";
import { sliderContent } from "@/data/homeData";
import Buttonmain from "../global/button";

export default function HomeBanner() {
  const uniqueId = "banner12376";
  const [currentSlide, setCurrentSlide] = useState(0);

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: { delay: 9500, disableOnInteraction: false },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, EffectFade, Navigation],
    effect: "fade" as const,
    onSlideChange: (swiper: any) => setCurrentSlide(swiper.realIndex),
  };

  return (
    <section
      className="relative w-full overflow-hidden h-[70vh] md:h-screen"
    >
      {/* ── Swiper ── */}
      <Swiper {...swiperOptions} className="w-full h-full">
        {sliderContent.map((item, index) => (
          <SwiperSlide key={item.id} className="relative w-full h-full ">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={item.img}
                alt={item.title1}
                fill
                priority={index === 0}
                className="object-cover object-center"
              />
              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* ── Text Content ── */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto p-6 md:p-12 lg:px-20 pb-10 md:!pb-20 lg:!pb-32 w-full">
                <AnimatePresence mode="wait">
                  {currentSlide === index && (
                    <motion.div
                      key={`slide-${item.id}`}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="max-w-2xl"
                    >
                      {/* Welcome tag */}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center gap-2 mb-5"
                      >
                        <span className="w-8 h-[2px] bg-color4" />
                        <span className="text-color4 text-[13px] font-bold tracking-[0.2em] uppercase">
                          {item.welcome}
                        </span>
                      </motion.div>

                      {/* Title */}
                      <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="text-white font-bold leading-tight mb-5"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                        }}
                      >
                        {item.title1}
                        <span className="text-color4"> {item.title2}</span>
                      </motion.h1>

                      {/* Para */}
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-white/90 sm:text-xl text-lg leading-relaxed mb-8 max-w-xl"
                      >
                        {item.para}
                      </motion.p>

                      {/* CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.55 }}
                      >
    <Buttonmain href={"/contact-us"} text2={"Get Support"} text1={"Contact Now"}/>

                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
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
