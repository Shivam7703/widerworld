"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { mission as data } from "@/data/homeData";


export default function Ourmission() {
    const cardStyles = [
    {
      gradient: "from-indigo-500 to-purple-600",
      hoverGradient: "from-indigo-600 to-purple-700",
      borderGradient: "from-indigo-400 via-purple-500 to-indigo-600",
      glowColor: "bg-indigo-500/30"
    },
    {
      gradient: "from-emerald-500 to-teal-600",
      hoverGradient: "from-emerald-600 to-teal-700",
      borderGradient: "from-emerald-400 via-teal-500 to-emerald-600",
      glowColor: "bg-emerald-500/30"
    }
  ];
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="xl:px-32 lg:px-28 md:p-20 sm:p-12 p-7 py-11 bg-gradient-to-tr from-slate-100 via-white to-zinc-200 overflow-hidden "
    >
      <div className="relative flex flex-col md:items-end gap-6 sm:gap-10">
 {data?.img && (
            <Image
              title="Best immigration consultants in Delhi"
              src={data?.img}
              alt="Best immigration consultants in Delhi"
              className="absolute top-0 left-0 md:h-[100%] h-0 w-full -z-0 sm:w-[500px] object-cover"
            />
          )}
      <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)}
        className=" z-10 sm:space-y-8 space-y-6"
      >
        {data?.title1 && (
         <motion.h4
                    whileHover={{ scale: 1.05 }}
                    className="text-zinc-700 font-semibold sm:text-base text-sm border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 w-max px-4 py-2 rounded-full shadow-sm"
                  >
                    {data?.title1}
                  </motion.h4>
        )}
         <h2 className="text-zinc-900 font-extrabold text-3xl md:text-5xl lg:text-6xl leading-tight">
                  {data?.title2}
                  <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {data?.title3}
                  </span>
                </h2>
      </motion.div>


<div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 mt-6 gap-6 max-w-5xl">
  {data?.vision?.map((item, index) => {
    const Icon = item.icon;
    const style = cardStyles[index];

    return (
      <div
        key={index}
        className="group relative w-full bg-white rounded-3xl shadow-xl
                   hover:shadow-2xl transition-all duration-500
                   overflow-hidden hover:-translate-y-3"
      >
        {/* Top gradient bar */}
        <div className={`h-2 w-full bg-gradient-to-r ${style.gradient}`} />

        <div className="p-8 sm:p-10 space-y-6">
          {/* ICON + HEADING ROW */}
          <div className="flex items-center justify-between gap-5">
            {/* Icon */}
            <div className="relative">
              {/* Glow */}
              <div
                className={`absolute inset-0 ${style.glowColor} blur-2xl
                            rounded-xl group-hover:blur-3xl transition-all duration-500`}
              />

              {/* Icon container */}
              <div
                className={`relative w-12 h-12 sm:w-14 sm:h-14
                            rounded-2xl flex items-center justify-center
                            bg-gradient-to-br ${style.gradient}
                            group-hover:${style.hoverGradient}
                            text-white shadow-lg
                            group-hover:shadow-2xl
                            group-hover:scale-105
                            transition-all duration-500`}
              >
                <Icon size={26} className="sm:w-7 sm:h-7" strokeWidth={2} />
              </div>
            </div>

            {/* Heading */}
            <h3
              className="text-2xl sm:text-3xl font-bold text-zinc-900
                         group-hover:text-zinc-500 transition-colors duration-500"
            >
              {item.heading}
            </h3>
          </div>

          {/* Description */}
          <p className=" text-zinc-700 font-medium leading-relaxed">
            {item.para}
          </p>

          {/* Bottom accent */}
          <div className="pt-2 opacity-100 ">
            <div className={`w-16 h-1 bg-gradient-to-r ${style.gradient} rounded-full`} />
          </div>
        </div>
      </div>
    );
  })}
</div>


        {/* Bottom decorative elements */}
        <div className="mt-4 sm:mt-8 flex justify-center gap-3">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 animate-pulse delay-75" />
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-600 animate-pulse delay-150" />
        </div>

</div>

    </motion.div>
  );
}
