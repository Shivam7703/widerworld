"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { HomefaqData as data } from "@/data/homeData";
import Faqs from "../global/faqs";
import Image from "next/image";
import Ripple from "./ripple";
import { plane2 } from "@/assets";

export default function FaqSection() {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="xl:px-32 lg:px-28 md:px-20 sm:p-12 px-7 py-11 max-w-[1530px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7 bg-zinc-100 relative"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)}
        className="md:w-[47%] w-full"
      >
        
        <h2 className="text-color3 font-bold text-3xl md:text-5xl mb-2 sm:mb-4 !leading-none">
          {data?.title2}
          <span className="text-color1">
            {data?.title3}
          </span>
        </h2>

        {data?.para1 && (
          <p className="text-zinc-800 mb-6 sm:mb-8">{data?.para1}</p>
        )}
        <Faqs data={data?.faqs} />

      </motion.div>

     
<Ripple/>     
    </motion.div>
  );
}





