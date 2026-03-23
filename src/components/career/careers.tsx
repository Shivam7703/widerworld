"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaRocket, FaHandshake, FaGlobe, FaEye } from "react-icons/fa";
import Link from "next/link";

const data = {
  title1: "Join Our Team",
  title2: "Build Your Career ",
  title3: "With Us",
  para: "We believe that great results come from great people. If you are passionate about helping others achieve their global dreams and want to grow in a dynamic environment, you are in the right place. At our organization, careers are not just jobs—they are opportunities to learn, lead, and make a meaningful impact.",
  pointer: [
    {
      id: 1,
      icon: <FaRocket />,
      heading: "Growth That Matters",
      text: "We focus on continuous learning. From industry training to skill development sessions, we help you grow professionally and personally.",
    },
    {
      id: 2,
      icon: <FaHandshake />,
      heading: "Supportive Culture",
      text: "We value collaboration over competition. Our team works together, shares knowledge, and celebrates success collectively.",
    },
    {
      id: 3,
      icon: <FaGlobe />,
      heading: "Real Impact",
      text: "Every application we handle represents someone’s dream. Your work directly contributes to changing lives and building global futures.",
    },
    {
      id: 4,
      icon: <FaEye />,
      heading: "Transparent Environment",
      text: "We believe in clear communication, ethical practices, and respect at every level.",
    },
  ],
};

const stats = [
  { value: "500+", label: "Visas Processed" },
  { value: "98%", label: "Success Rate" },
  { value: "10+", label: "Countries" },
  { value: "50+", label: "Team Members" },
];

export default function CareerSection() {
  return (
    <section className="xl:px-32 lg:px-24 md:p-20 sm:p-12 py-6 p-2 max-w-[1730px] mx-auto">
      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="lg:px-16 bg-white/60 backdrop-blur-sm shadow-xl rounded-xl sm:p-12 p-6 mx-auto flex flex-wrap items-stretch justify-between gap-y-7 overflow-hidden"
      >
        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
          className="sm:w-[50%] w-full sm:space-y-8 space-y-6"
        >
          {/* Badge */}
          {data?.title1 && (
            <motion.h4
              whileHover={{ scale: 1.05 }}
              className="text-zinc-700 mb-3 sm:mb-5 font-semibold uppercase text-sm border-2 border-blue-400 bg-gradient-to-r from-blue-50 via-violet-50 to-red-50 w-max px-4 py-2 rounded-full shadow-sm"
            >
              {data.title1}
            </motion.h4>
          )}

          {/* Heading */}
          <h2 className="text-zinc-900 font-extrabold text-3xl md:text-5xl !leading-snug">
            {data.title2}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {data.title3}
            </span>
          </h2>

          {/* Para */}
          {data?.para && (
            <p className="text-zinc-600 text-sm md:text-base">{data.para}</p>
          )}

          {/* Pointers */}
          <div className="grid sm:grid-cols-2 gap-4">
            {data.pointer.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-1/5 text-3xl text-blue-950">{item.icon}</div>
                <div className="space-y-1 w-full">
                  <h3 className="text-blue-800 text-base sm:text-lg font-bold">
                    {item.heading}
                  </h3>
                  <p className="text-zinc-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/careers"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 mt-4"
          >
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-pink-600 to-blue-600 bg-[length:200%_100%]"
            />
            <span className="absolute inset-0 rounded-full bg-white/30 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative z-10 flex items-center gap-3">
              Explore Opportunities
              <BiRightArrowAlt
                size={22}
                className="transition-transform duration-500 group-hover:translate-x-2"
              />
            </span>
          </Link>
        </motion.div>

        {/* RIGHT — Stats Grid Visual */}
        <motion.div
          variants={fadeIn("left", "tween", 0.3, 1)}
          className="sm:w-[45%] w-full relative flex flex-col justify-center gap-5"
        >
          {/* Stats Cards Grid */}
          <div className="grid grid-cols-2 gap-4 h-full">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className={`rounded-2xl p-6 flex flex-col items-center justify-center shadow-md text-center transition-all duration-300 ${
                  i === 0
                    ? "bg-gradient-to-br from-blue-600 to-blue-400 text-white"
                    : i === 1
                    ? "bg-gradient-to-br from-purple-600 to-indigo-500 text-white"
                    : i === 2
                    ? "bg-gradient-to-br from-pink-500 to-rose-400 text-white"
                    : "bg-gradient-to-br from-orange-400 to-yellow-400 text-white"
                }`}
              >
                <span className="text-4xl font-extrabold">{s.value}</span>
                <span className="text-sm font-medium mt-1 uppercase tracking-widest opacity-90">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-5 py-4 shadow-xl z-10">
            <div className="flex items-center gap-4">
              <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500">
                <span className="text-base font-bold text-white">98%</span>
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-700">Success Rate</p>
                <p className="text-lg font-bold text-zinc-900">Proven Results</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}