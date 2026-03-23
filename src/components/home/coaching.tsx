"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";

const data = [
  { title: "IELTS",  text: "lorem ipsum adipisicing elit. Et nisi quis repellendus!", href: "visa/ielts" },
  { title: "TOEFL",  text: "lorem ipsum adipisicing elit. Et nisi quis repellendus!", href: "visa/toefl" },
  { title: "PTE",    text: "lorem ipsum adipisicing elit. Et nisi quis repellendus!", href: "visa/pte"   },
  { title: "GMAT",   text: "lorem ipsum adipisicing elit. Et nisi quis repellendus!", href: "visa/gmat"  },
  { title: "GRE",    text: "lorem ipsum adipisicing elit. Et nisi quis repellendus!", href: "visa/gre"   },
  { title: "SAT",    text: "lorem ipsum adipisicing elit. Et nisi quis repellendus!", href: "visa/sat"   },
];

export default function Coaching() {
  const uniqueId = "Coaching123";

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
    <section className="relative overflow-hidden p-6 md:p-14  bg-gradient-to-br from-[#f0f4fb] via-[#e8eef8] to-[#f5f0e8]">

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-color2 to-color1" />

      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-color2/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-color1/7 rounded-full blur-[100px] pointer-events-none" />

      {/* ── HEADER ── */}
      <div className="relative z-10 text-center mb-7 sm:mb-12">
        <h4 className="text-color2 text-xs font-bold tracking-[0.2em] uppercase mb-4">
          Coaching We Offer
        </h4>
        <h2
          className="text-color3 font-black text-3xl md:text-5xl !leading-tight mb-6 max-w-3xl mx-auto"
        >
          Lorem ipsum, dolor sit amet{" "}
          <span className="text-color1">consectetur</span>
        </h2>
        <div className="w-24 h-[2px] bg-gradient-to-r from-color2 to-color1 mx-auto rounded-full" />
      </div>

      {/* ── SWIPER ── */}
      <div className="relative z-10 px-7 sm:px-12">
        <Swiper {...swiperOptions} className={uniqueId}>
          {data?.map((card: any, index: number) => (
            <SwiperSlide key={index} className="group !h-auto pb-2">
              <div className="flex flex-col relative h-full rounded-2xl overflow-hidden
                bg-white border border-color2/10
                shadow-[0_4px_20px_rgba(26,47,74,0.07)]
                transition-all duration-300
                group-hover:-translate-y-2
                group-hover:shadow-[0_16px_48px_rgba(0,64,148,0.13)]
                group-hover:border-color2/25">

                {/* ── TOP COLOR BAND ── */}
                <div className="h-[3px] w-full bg-gradient-to-r from-color2 to-color1" />

                {/* ── NUMBER + TITLE BLOCK ── */}
                <div className="relative px-6 pt-7 pb-5">

                  {/* Ghost number */}
                  <span
                    className="absolute top-2 right-5 text-7xl font-black text-color3/5 select-none leading-none"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Number badge */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-color2 to-color1
                    flex items-center justify-center text-white text-xs font-bold mb-4 shadow-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-black text-color3 leading-tight mb-1"
                  >
                    {card?.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-color2 text-xs font-bold uppercase tracking-[0.18em]">
                    Coaching Program
                  </p>
                </div>

                {/* Divider */}
                <div className="mx-6 h-px bg-color2/10 group-hover:bg-color2/20 transition-colors duration-300" />

                {/* ── TEXT ── */}
                <div className="px-6 py-5 flex-1">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {card?.text}
                  </p>
                </div>

                {/* ── TAGS ── */}
                <div className="px-6 pb-4 flex flex-wrap gap-2">
                  {["Expert Faculty", "Certified", "Online"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-wider
                        px-2.5 py-1 rounded-full
                        border border-color2/15 text-color2/60
                        group-hover:border-color2/30 group-hover:text-color2
                        bg-color2/3 group-hover:bg-color2/6
                        transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="mx-6 h-px bg-color2/10 group-hover:bg-color2/20 transition-colors duration-300" />

                {/* ── READ MORE ── */}
                <div className="px-6 py-4">
                  <Link
                    href={`/${card?.href}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold
                      text-color2 group-hover:text-color1
                      transition-all duration-300 hover:gap-3"
                  >
                    Read More
                    <HiArrowUpRight className="text-sm transition-transform duration-300 group-hover:rotate-45" />
                  </Link>
                </div>

                {/* ── BOTTOM GLOW LINE ── */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px]
                  bg-gradient-to-r from-color2 via-color1 to-color2
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

         <button
        className={`${uniqueId}-next absolute z-30 -right-3 top-[62%] -translate-y-1/2
          w-11 h-11 rounded-full bg-white border border-color2/20 hover:bg-color2
          flex items-center justify-center text-color3 hover:text-white shadow-lg
          transition-all duration-300 hover:scale-110`}
      >
        <FaArrowRightLong className="text-sm" />
      </button>
      <button
        className={`${uniqueId}-prev absolute z-30 -left-3 top-[62%] -translate-y-1/2
          w-11 h-11 rounded-full bg-white border border-color2/20 hover:bg-color2
          flex items-center justify-center text-color3 hover:text-white shadow-lg
          transition-all duration-300 hover:scale-110`}
      >
        <FaArrowLeftLong className="text-sm" />
      </button>

      </div>

      {/* ── NAV ARROWS ── */}
     
    </section>
  );
}