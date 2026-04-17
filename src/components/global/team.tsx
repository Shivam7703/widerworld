"use client";
import { ceo } from "@/assets";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const data = {
  title1: "Meet Our Team",
  title2: "Our Team is Our",
  title3: "Strength and Success",
  members: [
    { img: ceo, name: "Raman Kartik",  designation: "Graphic Designer"   },
    { img: ceo, name: "Priya Sharma",  designation: "Lead Engineer"       },
    { img: ceo, name: "Arjun Mehta",   designation: "Aviation Specialist" },
    { img: ceo, name: "Neha Kapoor",   designation: "Operations Head"     },
  ],
};

const cardVariant = {
  hidden:  { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: 0.2 + i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Team() {
  return (
    <section className="relative lg:p-20 sm:p-12 px-6 py-8 overflow-hidden bg-color3">

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-color2 to-color1" />

      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-color2/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-color1/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-color4/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Heading ── */}
        <motion.div
          className="text-center flex flex-col items-center gap-4 mb-8 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          {/* Label */}
          <h4 className="text-gray-200 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            {data.title1}
          </h4>

          <h2
            className="text-3xl md:text-5xl font-black text-white leading-tight max-w-2xl"
            
          >
            {data.title2}{" "}{data.title3}
          </h2>

          <div className="h-[3px] w-16 rounded-full bg-gradient-to-r from-color2 to-color1" />

          <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
A dedicated group of professionals committed to delivering the best guidance with expertise, experience, and genuine support at every step of your journey.
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
          {data.members.map((member, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariant}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative rounded-md sm:rounded-2xl overflow-hidden
                         bg-white border border-white/10 backdrop-blur-sm
                         shadow-[0_4px_24px_rgba(0,0,0,0.15)]
                         hover:shadow-[0_24px_60px_rgba(0,0,0,0.25)]
                         hover:border-white/20
                         transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-72 overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </motion.div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-color3/90 via-color3/20 to-transparent" />

                {/* Social icons */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2.5
                  translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-400">
                  {[FaLinkedinIn, FaTwitter, FaInstagram].map((Icon, j) => (
                    <motion.a
                      key={j}
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm border border-white/30
                                 flex items-center justify-center text-white text-xs
                                 hover:bg-color2 hover:border-color2
                                 transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Accent line */}
              <motion.div
                className="h-[3px] bg-gradient-to-r from-color2 to-color1 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: "easeOut" }}
              />

              {/* Content */}
              <div className="p-5 text-center relative">
                <p className="text-color2 text-[10px] font-bold uppercase tracking-[0.22em] mb-1.5">
                  {member.designation}
                </p>
                <h3
                  className="text-zinc-900 text-lg font-bold leading-tight"
                >
                  {member.name}
                </h3>

                {/* Animated underline */}
                <motion.div
                  className="h-[2px] bg-gradient-to-r from-color2 to-color1 rounded-full mx-auto mt-3"
                  initial={{ width: 0 }}
                  whileHover={{ width: "40%" }}
                  transition={{ duration: 0.35 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}