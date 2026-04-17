import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";


export default function Countryslider({data, uniqueId}:any) {
  return (
    <>
        <div className="relative px-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              nextEl: `.${uniqueId}-next`,
              prevEl: `.${uniqueId}-prev`,
            }}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              500:  { slidesPerView: 2 },
              924: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className={` ${uniqueId}`}
          >
            {data?.cards?.map((card: any, index: number) => (

<SwiperSlide key={index}>
  <div
    className="group relative my-6 bg-white rounded-3xl overflow-hidden
    shadow-lg hover:shadow-2xl 
    transition-all duration-500"
  >

   

    {/* IMAGE */}
    <div className="relative h-48 overflow-hidden">

      {/* Image */}
      <Image
        src={card.img}
        alt={card.heading ?? card.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Wave Divider */}
      <div className="absolute -bottom-2 left-0 right-0">
        <svg viewBox="0 0 300 40" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 40 L0 18 Q75 0 150 18 Q225 36 300 18 L300 40 Z"
            fill="white"
          />
        </svg>
      </div>
    </div>

    {/* FLAG BADGE */}
    <div className="flex justify-center -mt-14 relative z-10">
      <div
        className="relative w-16 h-16 rounded-full border-4 border-white
        shadow-lg overflow-hidden transition-transform duration-500
        group-hover:scale-110"
      >
        <Image
          src={card.flag}
          alt={card.heading ?? card.name}
          width={64}
          height={64}
          className="object-cover w-full h-full"
        />
      </div>
    </div>

    {/* CONTENT */}
    <div className="text-center px-5 pt-3 pb-6">

      <h3 className="text-zinc-900 font-bold text-lg mb-2">
        {card.heading ?? card.name}
      </h3>

      <p className="text-zinc-800  leading-relaxed mx-auto">
        {card.text ?? "Lorem Ipsum Has Been The Industry's Standard"}
      </p>

      {/* Learn More */}
<Link
  href={"/service"}
  className="mt-6  items-center gap-4 
  px-4 py-2  flex justify-center  w-full
  rounded-2xl
  transition-all duration-300
  hover:bg-color3 bg-color2 text-white
  hover:shadow-md
  group"
>
 <h3 className="text-sm">Learn More</h3> 
  <FaArrowRightLong className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
</Link>

    </div>

  </div>
</SwiperSlide>
            ))}
          </Swiper>
 </div>
          {/* ── Nav arrows ── */}
        <button
                className={`${uniqueId}-next absolute z-30 right-2 md:right-6 top-[62%] -translate-y-1/2
                  w-12 h-12 border border-black/80 rounded-full bg-white/70  hover:bg-color1
                  flex items-center justify-center text-black hover:text-white shadow-xl
                  transition-all duration-300 hover:scale-110`}
              >
                <FaArrowRightLong className="text-sm" />
              </button>
              <button
                className={`${uniqueId}-prev absolute z-30 left-2 md:left-6 top-[62%] -translate-y-1/2
                  w-12 h-12 border border-black/80 rounded-full bg-white/70 hover:bg-color1
                  flex items-center justify-center text-black hover:text-white shadow-xl
                  transition-all duration-300 hover:scale-110`}
              >
                <FaArrowLeftLong className="text-sm" />
              </button>
    </>
  )
}

