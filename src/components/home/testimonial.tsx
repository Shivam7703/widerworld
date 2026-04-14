"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData as data } from "@/data/homeData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaQuoteLeft,
} from "react-icons/fa6";
import { blog_bg } from "@/assets";

export default function Testimonials() {
  const uniqueId = "servic123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      140: {
        slidesPerView: 1,
      },

      1024: {
        slidesPerView: 2,
      },
    },
    speed: 1200,
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Navigation],
  };
  // bg-back
  return (
    <section className=" lg:px-28 md:px-20 sm:p-12 p-6  text-center relative flex flex-col items-center">
       <Image
                    src={blog_bg}
                    alt="img"
                    className="absolute top-0 w-full left-0 object-contain z-0"
                  />
      <div className="w-full text-center flex flex-col items-center gap-y-3 mb-8 ">
        <p className="text-sm text-center mx-auto font-bold uppercase tracking-[0.22em] text-color2  relative">
          testimonials
        </p>
        <h2 className="font-bold text-center text-3xl md:text-5xl !leading-tight mb-6 max-w-3xl mx-auto text-color5 relative">
          Lorem ipsum dolor sit amet{" "}
          <span className="text-color1">consectetur</span> adipisicing elit.
        </h2>
      </div>

      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full max-w-6xl mx-auto px-5 ${uniqueId}`}
      >
        {" "}
        {data?.testimonials?.map((cards: any) => (
          <SwiperSlide key={cards.id} className="py-8">
            <div className="relative group h-full">
              <div className="relative bg-gradient-to-r from-color2 via-color1 to-color3 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 m-[1px] h-full">
                  {/* Decorative Quote Icon */}
                  <div className="absolute top-6 right-6 text-blue-100 opacity-20">
                    <FaQuoteLeft className="w-12 h-12" />
                  </div>

                  {/* Profile Section with Premium Design */}
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
                    <div className="relative">
                      {/* Animated Ring */}
                      <div className="absolute -inset-2 rounded-full border-2 border-dashed border-color5/50" />

                      <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                        <Image
                          src={cards.img}
                          alt={cards.title}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500"
                        />
                      </div>
                    </div>

                    <div className="text-center sm:text-left">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                        {cards.title}
                      </h3>
                      <p className="text-blue-500 font-medium text-sm mt-1 flex items-center gap-2 justify-center sm:justify-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full" />
                        Verified Customer
                      </p>
                      {/* Star Rating with Animation */}
                      <div className="flex gap-1 mt-4 justify-center sm:justify-start">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 fill-yellow-500 drop-shadow-md"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-zinc-900 font-medium leading-relaxed mb-6 italic">
                    "{cards.text}"
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`${uniqueId}-next absolute z-30 p-3 hover:bg-color2 bg-color1 shadow-lg hover:shadow-xl text-white right-0 md:right-10 bottom-1/3  max-md:scale-75 rounded-full cursor-pointer transition-all duration-300 hover:scale-110`}
      >
        <FaArrowRightLong className="text-xl font-bold" />
      </div>
      <div
        className={`${uniqueId}-prev absolute z-20 rounded-full hover:bg-color2 p-3 bg-color1 shadow-lg hover:shadow-xl text-white left-0 md:left-10 bottom-1/3 max-md:scale-75 cursor-pointer transition-all duration-300 hover:scale-110`}
      >
        <FaArrowLeftLong className="text-xl font-bold" />
      </div>
    </section>
  );
}
