"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { whychooseus as data } from "@/data/homeData";

export default function Aboutchoose() {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="xl:px-32 lg:px-28 md:px-20 sm:p-12 p-7 overflow-hidden relative min-h-screen flex flex-wrap justify-between gap-y-6 pb-24 md:pb-32"
    >
      {/* Background Image with Overlay */}
      {data?.img && (
        <>
          <Image
            title="Best immigration consultants in Delhi"
            src={data?.img}
            alt="Best immigration consultants in Delhi"
            className="absolute top-0 left-0 h-full w-full -z-0 object-center object-cover"
            fill
          />
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-indigo-900/65 to-white/5 -z-10" />

          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        </>
      )}

       <div className=" w-full text-center z-10 ">          
          {/* Title */}
          <h2 className=" lg:text-7xl sm:text-5xl text-4xl font-extrabold  text-white leading-tight py-4">
            {data?.title1}
          </h2>
          
          {/* Decorative underline */}
          <div className="mt-4 mx-auto w-32 h-1.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full" />
          <div className="mt-2 mx-auto w-20 h-1 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full opacity-60" />
        </div>


      {/* Left Column */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="md:w-[40%] w-full sm:order-1 order-2 space-y-6"
      >
        {data?.points?.slice(0, 2).map((item: any, index: number) => (
          <motion.div
            key={index}
            variants={fadeIn("right", "tween", 0.3 + index * 0.1, 1)}
            className="group relative bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            {/* Gradient accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon with glow */}
            <div className="flex gap-5 items-start">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 rounded-xl" />
                <div className="relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                  {item.heading}
                </h3>
                <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {item.para}
                </p>
              </div>
            </div>

            {/* Bottom corner glow */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </motion.div>

     

      {/* Right Column */}
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="md:w-[40%] w-full order-3 space-y-6"
      >
        {data?.points?.slice(2, 4).map((item: any, index: number) => (
          <motion.div
            key={index}
            variants={fadeIn("left", "tween", 0.3 + index * 0.1, 1)}
            className="group relative bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            {/* Gradient accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon with glow */}
            <div className="flex gap-5 items-start">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 rounded-xl" />
                <div className="relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                  {item.heading}
                </h3>
                <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {item.para}
                </p>
              </div>
            </div>

            {/* Bottom corner glow */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </motion.div>

    </motion.div>
  );
}