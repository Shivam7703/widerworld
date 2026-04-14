"use client";
import { motion } from "motion/react";
import React from "react";
import { FaWpforms } from "react-icons/fa";
import { LuHandshake } from "react-icons/lu";
import { MdOutlineEngineering, MdOutlineSettings } from "react-icons/md";
import Buttonmain from "../global/button";
import { pro1, shape1 } from "@/assets"; // apni illustration imgs import karo
import Image from "next/image";

const data = [
  {
    img: pro1,
    icon: <FaWpforms />,
    heading: "Initial Consultation",
    text: "Understanding client requirements, aircraft details, and operational timelines clearly.",
    bg: "text-violet-700",
  
  },
  {
    img: pro1,
    icon: <MdOutlineSettings />,
    heading: "Strategic Planning",
    text: "Preparing documentation, approvals, and coordination plans with authorities.",
    bg: "text-emerald-700",
  
  },
  {
    img: pro1,
    icon: <MdOutlineEngineering />,
    heading: "Execution & Coordination",
    text: "Managing permits, slots, handling, and services efficiently.",
    bg: "text-teal-700",
    
  },
  {
    img: pro1,
    icon: <LuHandshake />,
    heading: "Final Confirmation",
    text: "Providing updates, confirmations, and ensuring smooth flight completion.",
      bg: "text-rose-700",

  },
  {
    img: pro1,
    icon: <FaWpforms />,
    heading: "Initial Consultation",
    text: "Understanding client requirements, aircraft details, and operational timelines clearly.",
    bg: "text-violet-700",
  
  },
  {
    img: pro1,
    icon: <MdOutlineSettings />,
    heading: "Strategic Planning",
    text: "Preparing documentation, approvals, and coordination plans with authorities.",
    bg: "text-emerald-700",
  
  },
  {
    img: pro1,
    icon: <MdOutlineEngineering />,
    heading: "Execution & Coordination",
    text: "Managing permits, slots, handling, and services efficiently.",
    bg: "text-teal-700",
    
  },
  {
    img: pro1,
    icon: <LuHandshake />,
    heading: "Final Confirmation",
    text: "Providing updates, confirmations, and ensuring smooth flight completion.",
      bg: "text-rose-700",

  },
];

export default function WorkProcessSlider() {
  return (
    <div className="w-full px-6 py-16 md:px-12 lg:px-20 xl:px-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex  flex-wrap justify-between relative items-start">

          {/* LEFT */}
          <div className="sticky top-20 md:w-[46%] h-full  w-full">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase  text-color1 mb-5">
              <span className="w-7 h-0.5 bg-color1 rounded-full inline-block" />
              Work Process
            </p>
            <h2 className=" text-3xl md:text-4xl xl:text-5xl font-bold !leading-tight text-color3 mb-5">
              How We Make Your{" "}
              <span className="text-color1 ">Flight Possible</span>
            </h2>
            <p className="text-zinc-700 text-sm md:text-base leading-relaxed mb-8 ">
              From first contact to final clearance — a seamless, expert-managed
              journey for every aviation operation worldwide.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel totam molestias dicta provident officia quisquam corporis nemo adipisci distinctio, accusamus optio?
            </p>
            
            <Buttonmain href="/contact-us" text1="Know More" text2="Contact Now" />
            <Image src={pro1} alt="img" className="md:h-64 h-44 object-contain"/>
          </div>

          {/* RIGHT — sticky cards stacked */}
          <div className="relative h-full pb-10 md:w-[50%] w-full">
{data.map((card, index) => (
  <div
    key={index}
    style={{ top: `${80 + 18 * index}px`, zIndex: 10 + index }}
    className="sticky mb-10"
  >
    <div className="group relative rounded-3xl overflow-hidden border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-500">

      {/* 🔷 Background Gradient (unique per index) */}
      <div
        className={`absolute inset-0 opacity-40 ${
          index === 0 || 4
            ? "bg-gradient-to-br from-blue-100 via-white to-rose-100"
            : index === 1 || 5
            ? "bg-gradient-to-br from-emerald-100 via-white to-red-100"
            : index === 2 || 6
            ? "bg-gradient-to-br from-orange-100 via-white to-indigo-100"
            : "bg-gradient-to-br from-zinc-100 via-white to-teal-100"
        }`}
      />

      {/* 🔶 Decorative Lines */}
     

      {/* 🌟 Big Faded Icon (background) */}
      <div className={`absolute left-4 bottom-4 text-[80px] opacity-5 group-hover:opacity-10 transition {card.bg}`}>
        {card.icon}
      </div>

      {/* CONTENT */}
      <div className="relative flex flex-col md:flex-row items-center gap-6 p-6 md:p-10">

        {/* LEFT */}
        <div className="flex-1">
          
          {/* Icon + Step */}
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-black/5 text-gray-700 text-xl shadow-sm group-hover:scale-110 ${card.bg} transition`}>
              {card.icon}
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-black/5 text-gray-600">
              Step 0{index + 1}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            {card.heading}
          </h3>

          {/* Text */}
          <p className={`text-sm md:text-base text-gray-600 leading-relaxed max-w-md`}>
            {card.text}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 relative flex justify-center md:justify-end">
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 blur-2xl bg-black/5 rounded-full" />

            <Image
              src={card.img}
              alt={card.heading}
              className="relative h-32 sm:h-40 md:h-52 object-contain drop-shadow-xl group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500" />
    </div>
  </div>
))} 
          </div>

        </div>
      </motion.div>
    </div>
  );
}