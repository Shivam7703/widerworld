"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { servicechoose as data } from "@/data/homeData";


export default function Serviceschoose() {
   
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="xl:px-32 lg:px-28 md:p-20 sm:p-12 p-7 py-11 bg-gradient-to-tr from-slate-100 via-white to-zinc-200 overflow-hidden "
    >
      <div className="relative flex flex-col gap-6 sm:gap-10">
 {data?.img && (
            <Image
              title="Best immigration consultants in Delhi"
              src={data?.img}
              alt="Best immigration consultants in Delhi"
              className="absolute top-0 right-0 md:h-[100%] h-0 w-full -z-0 md:w-[40%] object-cover"
            />
          )}
      <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)}
        className=" z-10 sm:space-y-8 space-y-6 md:w-[54%] w-full"
      >
        {data?.title1 && (
         <motion.h4
                    whileHover={{ scale: 1.05 }}
                    className="text-zinc-700 font-semibold sm:text-base text-sm border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 w-max px-4 py-2 rounded-full shadow-sm"
                  >
                    {data?.title1}
                  </motion.h4>
        )}
         <h2 className="text-zinc-900 font-extrabold text-3xl md:text-5xl leading-tight">
                  {data?.title2}
                  <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {data?.title3}
                  </span>
                </h2>
                <p className="text-zinc-600">{data?.para}</p>
      </motion.div>


<div className="grid grid-cols-1 md:grid-cols-3 lg:gap-12 mt-6 gap-6 max-w-5xl">
{data?.vision?.map((item, index) => {
  const Icon = item.icon;

  return (
    <div
      key={index}
      className="group relative w-full bg-white rounded-2xl
                 shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                 hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)]
                 border border-gray-100
                 transition-all duration-300 ease-out
                 hover:-translate-y-2 overflow-hidden"
    >
      {/* 对角线滑动背景 */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div
          className="absolute -left-full -bottom-full w-[200%] h-[200%]
                     bg-gradient-to-br from-blue-500 via-blue-700 to-indigo-800
                     opacity-0 group-hover:opacity-100
                     
                     /* 对角线移动动画 */
                     translate-x-[-50%] translate-y-[-50%]
                     group-hover:translate-x-0 group-hover:translate-y-0
                     
                     transition-all duration-700 ease-out
                     
                     /* 鼠标移出时反向动画 */
                     group-hover:transition-all group-hover:duration-700 group-hover:ease-in"
          style={{
            transformOrigin: 'bottom left',
            willChange: 'transform, opacity'
          }}
        />
      </div>

      {/* 图标 */}
      <div className="relative z-10 flex justify-center mt-10">
        <div
          className="w-14 h-14 sm:w-16 sm:h-16
                     rounded-2xl flex items-center justify-center
                     bg-blue-50 shadow-md text-blue-600 
                     group-hover:bg-white
                     group-hover:scale-110 group-hover:rotate-6
                     transition-all duration-500"
        >
          <Icon size={28} strokeWidth={2} />
        </div>
      </div>

      {/* 内容 */}
      <div className="relative z-10 pt-8 p-8 text-center space-y-4">
        <h3 
          className="text-xl sm:text-2xl font-semibold text-gray-900
                     group-hover:text-white transition-colors duration-300"
        >
          {item.heading}
        </h3>

        <p 
          className="text-gray-600 leading-relaxed
                     group-hover:text-blue-50 transition-colors duration-300"
        >
          {item.para}
        </p>
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




