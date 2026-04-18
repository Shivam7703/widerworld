"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Buttonmain from "../global/button";

export default function AboutSection({ data }:any) {
  return (
    <section className="w-full p-4 md:p-12 lg:px-20 xl:px-24">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white "
      >

        <div className="flex flex-col md:flex-row justify-between gap-y-5">

          {/* LEFT CONTENT */}
          <div className="lg:w-[48%] md:order-1 order-2 bg-white ">

            {/* Badge */}
            {data?.title1 && (
              <p className="text-sm font-bold uppercase text-color1 mb-4">
                {data?.title1}
              </p>
            )}

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  text-color3 mb-5 !leading-tight">
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
<div className="lg:w-[50%] relative md:order-2 bg-white order-1">
  <div className="relative group w-full h-auto md:h-full min-h-96">

{/* MAIN IMAGE - Slight left tilt, hover pe seedha aata hai */}
{data?.img1 && (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2 }}
    whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
    className="absolute top-[8%] left-[2%] w-[54%] h-[88%] rounded-xl overflow-hidden border-[3px] border-white cursor-pointer "
    style={{
      rotate: '-3deg',
      boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
      zIndex: 2,
      transition: 'box-shadow 0.45s',
    }}
  >
    <Image
      src={data?.img1}
      alt="immigration"
      fill
      className="object-cover transition-transform duration-500 hover:scale-[1.07]"
    />
    <div className="absolute bottom-4 left-4 bg-white/90 text-sm font-medium px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Immigration
    </div>
  </motion.div>
)}


{/* SECOND IMAGE - Slight right tilt, hover pe seedha aata hai */}
{data?.img2 && (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4 }}
    whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
    className="absolute bottom-[6%] right-[2%] w-[54%] h-[88%] rounded-xl overflow-hidden border-[3px] border-white cursor-pointer"
    style={{
      rotate: '4deg',
      boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
      zIndex: 1,
      transition: 'box-shadow 0.45s',
    }}
  >
    <Image
      src={data?.img2}
      alt="consultants"
      fill
      className="object-cover transition-transform duration-500 hover:scale-[1.07]"
    />
    <div className="absolute bottom-4 left-4 bg-white/90 text-sm font-medium px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Consultants
    </div>
  </motion.div>
)}
 
  </div>
</div>

        </div>
      </motion.div>

    </section>
  );
}



 