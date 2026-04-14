"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { Whychoose as data } from "@/data/homeData";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import Buttonmain from "../global/button";
import { shape1 } from "@/assets";

export default function WhychooseSection() {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-white via-color1/5 to-white">
<Image
              src={shape1}
              alt="img"
              className="absolute opacity-60 -bottom-6 max-w-[400px] scale-x-[-1] -right-5 object-contain z-0"
            />
      {/* Background pattern */}
    

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-color2 to-color1" />

      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-color2/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-color1/7 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="xl:px-32 lg:px-28 md:p-20 sm:p-12 px-7 py-16 max-w-[1530px] mx-auto flex flex-wrap items-stretch justify-between gap-y-10 relative z-10"
      >

      
        {/* ── RIGHT ── */}
        <motion.div
          variants={fadeIn("left", "tween", 0.3, 1)}
          className="sm:w-[46%] w-full min-h-[500px] relative group"
        >
          {/* Corner deco frames */}
          <div className="absolute -top-3 -right-3 w-20 h-20 border-t-[3px] border-r-[3px] border-color2/40 rounded-tr-2xl pointer-events-none" />
          <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-[3px] border-l-[3px] border-color1/40 rounded-bl-2xl pointer-events-none" />

          {/* Image container */}
          <div className="relative w-full h-full min-h-[460px] rounded-2xl overflow-hidden border-[3px] border-white shadow-2xl">

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-color3/25 via-transparent to-transparent z-10" />

            {data?.img && (
              <Image
                src={data.img}
                alt="Why choose us"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}

            {/* Floating badge — top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-xl border border-color2/10 flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-color4 rounded-full" />
              <p className="text-xs font-bold text-color2">⭐ Trusted by 10K+ Clients</p>
            </motion.div>

            {/* Stat card — bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute bottom-6 right-6 z-20 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl border border-color2/10 text-center"
            >
              <p className="font-black text-3xl text-color1 leading-none" >20+</p>
              <p className="text-[11px] font-semibold text-color5 uppercase tracking-widest mt-1">Years Experience</p>
            </motion.div>
          </div>
        </motion.div>


  {/* ── LEFT ── */}
        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
          className="sm:w-[47%] w-full sm:space-y-6 space-y-5"
        >
         <span className="block text-color2 font-bold uppercase text-xs tracking-[0.22em]">
          Why choose us
        </span>

          {/* Heading */}
          <h2 className="font-black text-color3 text-3xl md:text-5xl leading-tight" >
            Lorem ipsum dolor sit.
            <span className="block mt-2 text-color1">
              Lorem, ipsum.
            </span>
          </h2>

          {/* Para */}
          {data?.para && (
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg">
              {data.para}
            </p>
          )}

          {/* Progress Bars */}
          <div className="space-y-6 pt-2">
            {data?.success?.map((item: any, index: number) => (
              <motion.div
                key={item?.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-color3 font-semibold text-sm md:text-base flex items-center gap-2">
                    <span className="w-2 h-2 bg-color2 rounded-full animate-pulse" />
                    {item?.text}
                  </h3>
                  <p className="text-color3 font-bold text-sm md:text-base">
                    {item?.value}
                  </p>
                </div>

                {/* Track */}
                <div className="w-full rounded-full h-[10px] overflow-hidden bg-color2/10 shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item?.value }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full relative overflow-hidden"
                    style={{
                      background: "linear-gradient(90deg, #004094, #CB0000)",
                      width: item?.value,
                    }}
                  >
                    {/* Shimmer */}
                    <motion.div
                      animate={{ x: ["-100%", "300%"] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
                               <Buttonmain href={"/contact-us"} text1={"Know More"} text2={"About Us"}/>

        </motion.div>

      </motion.div>
    </section>
  );
}