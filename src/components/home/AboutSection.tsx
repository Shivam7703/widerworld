"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Buttonmain from "../global/button";
import { plane } from "@/assets";
const stats = [
  { label: "Visa Success Rate", value: 98,  display: "98%",  color: "#378ADD", sub: "Success"  },
  { label: "Happy Clients",     value: 94,  display: "94%",  color: "#1D9E75", sub: "Happy"    },
  { label: "Countries Covered", value: 87,  display: "87%",  color: "#EF9F27", sub: "Coverage" },
  { label: "Total Clients",     value: 96,  display: "10K+", color: "#D4537E", sub: "Clients"  },
];
const r = 40, circ = 2 * Math.PI * r; // ≈ 251.2

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
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-color3 mb-5 !leading-tight">
              {data?.title2}
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
 {/* <Image
      src={plane}
      alt="immigration"
      className="z-30 absolute bottom-4 right-[4%] object-contain w-max h-1/3 animate-y"
    /> */}
  </div>
</div>

        </div>
      </motion.div>

    </section>
  );
}




 {/* Stats card */}
    {/* <div className="absolute -bottom-6 z-40 -left-24 flex gap-5 items-center max-md:scale-50 bg-white rounded-2xl">
      <div className="bg-gradient-to-br from-color1/20 via-rose-500/5 to-rose-700/10 rounded-2xl shadow-black/50 border border-gray-100 shadow-xl sm:p-6 p-3 flex flex-wrap sm:gap-6 justify-center">
        {stats.map((s, i) => (
          <CircularStat key={i} stat={s} delay={i * 0.15} />
        ))}
      </div>
    </div> */}


function CircularStat({ stat, delay }: { stat: typeof stats[0]; delay: number }) {
  const offset = circ - (stat.value / 100) * circ;
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#e5e7eb" strokeWidth="7" />
        <motion.circle
          cx="50" cy="50" r={r}
          fill="none"
          stroke={stat.color}
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: offset }}
          transition={{ delay, duration: 1.4, ease: "easeOut" }}
          style={{ rotate: "-90deg", transformOrigin: "50% 50%" }}
        />
        <text x="50" y="46" textAnchor="middle" dominantBaseline="central"
          className="fill-color3 font-semibold" style={{ fontSize: 20 }}>
          {stat.display}
        </text>
        <text x="50" y="65" textAnchor="middle" dominantBaseline="central"
          className="fill-gray-400" style={{ fontSize: 10 }}>
          {stat.sub}
        </text>
      </svg>
      <span className="text-sm font-medium text-gray-500 text-center leading-tight">
        {stat.label}
      </span>
    </div>
  );
}