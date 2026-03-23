"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import Buttonmain from "../global/button";
import { GiDiamondTrophy, GiTrophyCup } from "react-icons/gi";
const stats = [
  { label: "Visa Success Rate", value: 98,  display: "98%",  color: "#378ADD", sub: "Success"  },
  { label: "Happy Clients",     value: 94,  display: "94%",  color: "#1D9E75", sub: "Happy"    },
  { label: "Countries Covered", value: 87,  display: "87%",  color: "#EF9F27", sub: "Coverage" },
  { label: "Total Clients",     value: 96,  display: "10K+", color: "#D4537E", sub: "Clients"  },
];
const r = 40, circ = 2 * Math.PI * r; // ≈ 251.2

export default function AboutSection({ data }:any) {
  return (
    <section className="w-full ">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white "
      >

        <div className="flex flex-col lg:flex-row">

          {/* LEFT CONTENT */}
          <div className="lg:w-[52%] md:order-1 order-2 p-6 bg-zinc-50 md:p-10 lg:pr-16 lg:p-24">

            {/* Badge */}
            {data?.title1 && (
              <p className="text-sm font-bold uppercase text-color1 mb-4">
                {data?.title1}
              </p>
            )}

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-color3 mb-5 !leading-snug">
              {data?.title2}
              <span className="text-color1 ">
                {data?.title3}
              </span>
            </h2>

            {/* Description */}
            {data?.para && (
              <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed mb-7">
                {data?.para}
              </p>
            )}

            {/* POINTERS */}
            <div className="space-y-5 mb-8">

              {data?.pointer?.map((item:any, index:number) => (
                <motion.div
                  key={item?.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-start group"
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
<div className="lg:w-[48%] relative md:order-2 bg-color3 order-1 p-4 md:p-8 lg:pb-24">

  {/* ── BACKGROUND PATTERN ── */}
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.3]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.8"/>
      </pattern>
      <pattern id="dots" x="20" y="20" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="1.5" fill="white"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)"/>
    <rect width="100%" height="100%" fill="url(#dots)"/>
  </svg>


 

  

  <div className="relative w-full h-auto md:h-full min-h-96">

    {/* Trophy / rotating text badge */}
    <div className="absolute top-0 md:top-[2%] right-[4%] w-28 h-28 md:w-40 md:h-40 flex items-center justify-center">
      <svg
        className="absolute inset-0 w-full h-full animate-spin"
        style={{ animationDuration: "10s" }}
        viewBox="0 0 160 160"
      >
        <defs>
          <path
            id="circlePath"
            d="M 80,80 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
          />
        </defs>
        <text fill="#facc15" fontSize="12.5" fontWeight="600" letterSpacing="3">
          <textPath href="#circlePath">
            ✦ 40 YEARS OF EXPERIENCE ✦ SINCE 1992 ON
          </textPath>
        </text>
      </svg>
      <div className="animate-pulse p-4 border-2 bg-white/10 border-yellow-400 flex justify-center items-center rounded-full z-10">
        <GiTrophyCup className="text-yellow-400 md:text-6xl text-5xl" />
      </div>
    </div>

    {/* Stats card */}
    <div className="absolute -bottom-6 z-40 -left-24 flex gap-5 items-center max-md:scale-50 bg-white rounded-2xl">
      <div className="bg-gradient-to-br from-color1/20 via-rose-500/5 to-rose-700/10 rounded-2xl shadow-black/50 border border-gray-100 shadow-xl sm:p-6 p-3 flex flex-wrap sm:gap-6 justify-center">
        {stats.map((s, i) => (
          <CircularStat key={i} stat={s} delay={i * 0.15} />
        ))}
      </div>
    </div>

    {/* MAIN IMAGE */}
    {data?.img1 && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-0 left-0 w-[60%] h-[70%] rounded-lg group overflow-hidden shadow-2xl border-2 border-white"
      >
        <Image src={data?.img1} alt="immigration" fill className="object-cover group-hover:scale-110 duration-300" />
      </motion.div>
    )}

    {/* SECOND IMAGE */}
    {data?.img2 && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-0 right-0 w-[60%] group h-[70%] rounded-lg overflow-hidden shadow-2xl border-2 border-white"
      >
        <Image src={data?.img2} alt="consultants" fill className=" group-hover:scale-110 object-cover duration-300" />
      </motion.div>
    )}

  </div>
</div>

        </div>
      </motion.div>

    </section>
  );
}


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