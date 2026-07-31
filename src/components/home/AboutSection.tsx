"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Buttonmain from "../global/button";

export default function AboutSection({ data }:any) {
  return (
    <section className="w-full p-4 py-7 md:p-12 lg:px-20 xl:px-24">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white "
      >

        <div className="flex max-w-[1360px] mx-auto flex-col md:flex-row justify-between gap-y-5">

          {/* LEFT CONTENT */}
          <div className="lg:w-[49%] md:order-1 order-2 bg-white ">

            {/* Badge */}
            {data?.title1 && (
              <p className="text-xs tracking-[0.22em] font-bold uppercase text-color1 mb-4">
                {data?.title1}
              </p>
            )}

            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold  text-color3 mb-5 !leading-tight">
              {data?.title2}{" "}
              <span className="text-color1 ">
                {data?.title3}
              </span>
            </h2>

            {/* Description */}
            {data?.para && (
              <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-7">
                {data?.para}
              </p>
            )}

            {/* POINTERS */}
            <div className="gap-y-5 mb-8 flex justify-between flex-wrap">

              {data?.pointer?.map((item:any, index:number) => (
                <motion.div
                  key={item?.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 sm:w-[48%] w-full items-start group"
                >

                  <div className="w-11 h-11 flex-shrink-0 bg-red-50 rounded-xl
                  flex items-center justify-center text-xl text-color1
                  group-hover:bg-color1 group-hover:text-white
                  transition">

                    {item?.icon}

                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-color3 group-hover:text-color1">
                      {item?.heading}
                    </h3>

                    <p className="text-gray-600 text-sm">
                      {item?.text}
                    </p>
                  </div>

                </motion.div>
              ))}

            </div>

            {/* CTA */}
               <Buttonmain href={"/contact-us"} text1={"Know More"} text2={"About Us"}/>


          </div>


         {/* RIGHT SIDE IMAGES */}
<div className="lg:w-[45%] relative md:order-2 bg-white md:p-7 order-1">
  <div className="relative rounded-2xl border-2 shadow-lg hover14 group w-full h-auto md:h-full min-h-96 overflow-hidden">

{data?.img1 && (
    <Image
      src={data?.img1}
      alt="consultants"
      fill
      className="object-cover object-top transition-transform duration-500 hover:scale-[1.07]"
    />
)}
 
  </div>
</div>

        </div>
      </motion.div>

    </section>
  );
}



 