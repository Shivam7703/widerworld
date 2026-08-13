"use client";
import { mohini, tanya,meenakshi,rahul, vishal} from "@/assets";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const data = {
  title1: "Meet Our Team",
  title2: "Our Team is Our",
  title3: "Strength and Success",
  members: [
    { img: meenakshi, name: "Meenakshi Shankar",   designation: "Documentation Specialist"   },
    { img: mohini, name: "Mohini  Sharma",   designation: "Branch Manager"       },
    { img: rahul, name: "Rahul Solanki",    designation: "Study Visa Counsellor" },
    { img: tanya, name: "Tanya kaur", designation: "Senior Visa Counsellor"     },
    { img: vishal, name: "Vishal Kumar", designation: "Operations Head"     },

  ],
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.215, 0.610, 0.355, 1] },
  }),
};

export default function Team() {
  return (
    <section className="relative w-full bg-blue-50 overflow-hidden py-16">
      
      {/* ── Background Header Banner with Sweeping Curve ── */}
      <div className="absolute top-0 left-0 right-0 h-[480px] md:h-[550px] bg-color2 z-0 overflow-hidden">
        
        {/* ── NEW: 3D Cubic Room Wireframe Grid ── */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-screen" 
          style={{ perspective: "700px", transformStyle: "preserve-3d" }}
        >
        

          {/* Left Side Wall Perspective Plane */}
          <div 
            className="absolute top-[-50%] bottom-[-50%] left-0 w-[60%] origin-left"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1.5px, transparent 1.5px),
                linear-gradient(to bottom, #ffffff 1.5px, transparent 1.5px)
              `,
              backgroundSize: "50px 50px",
              transform: "rotateY(75deg) scale(2)",
            }}
          />

          {/* Right Side Wall Perspective Plane */}
          <div 
            className="absolute top-[-50%] bottom-[-50%] right-0 w-[60%] origin-right"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1.5px, transparent 1.5px),
                linear-gradient(to bottom, #ffffff 1.5px, transparent 1.5px)
              `,
              backgroundSize: "50px 50px",
              transform: "rotateY(-75deg) scale(2)",
            }}
          />

          
        </div>
        
        {/* Bottom Concave Mask / Arc Curve matching the image layout */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-blue-50 rounded-t-[100%_40px] md:rounded-t-[100%_70px] translate-y-1" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header Section ── */}
        <motion.div
          className="text-center flex flex-col items-center mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Pill Label */}
          <span className="text-white  font-bold uppercase text-xs tracking-[0.22em] mb-4">
            {data.title1}
          </span>

          {/* Main Title */}
          <h2 className="text-white font-bold text-2xl md:text-5xl !leading-tight mb-6 max-w-2xl mx-auto">
            {data.title2} {data.title3}
          </h2>

          {/* Core Red Accent Line */}
          <div className="w-24 h-[2px] bg-white/80 rounded-full" />
        </motion.div>

        {/* ── Team Cards Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  sm:gap-6 gap-2 gap-y-5">
          {data.members.map((member, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariant}
              whileHover={{ y: -6 }}
              className="bg-white rounded-[24px] shadow-[0_12px_36px_rgba(2,19,48,0.08)] border border-zinc-400  overflow-hidden flex flex-col transition-all duration-300"
            >
              {/* Profile Image Frame Area */}
              <div className="relative  aspect-[4/5]   flex items-end justify-center">
                
                <div className="relative w-full h-full rounded-b-[45px] border-b-4 border-red-500 mx-auto overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-top filter contrast-[1.02]"
                    sizes="(max-w-768px) 100vw, 25vw"
                  />
                </div>

                {/* Floating Profile Designation Pill */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-5 py-1.5 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.08)] border border-gray-100 text-center z-10 whitespace-nowrap min-w-[70%]">
                  <p className="text-[#0B409C] sm:text-xs text-[8px] font-extrabold uppercase tracking-wider">
                    {member.designation}
                  </p>
                </div>
              </div>

              {/* Card Meta Content Block */}
              <div className="pt-8 pb-6 px-4 flex flex-col items-center text-center">
                <h3 className="text-[#1A253C] text-lg font-bold tracking-tight">
                  {member.name}
                </h3>

                {/* Subtle Underline separator */}
                <div className="h-[2px] w-12 bg-gradient-to-r from-[#0B409C] to-[#C8102E] my-3.5 rounded-full" />

                {/* Social Share Matrix Line */}
                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs font-semibold">
                  <span className="text-[11px] tracking-wide text-gray-400 font-medium">Follow</span>
                  <div className="flex items-center gap-1.5 ml-1">
                    {[FaLinkedinIn, FaTwitter, FaInstagram].map((Icon, j) => (
                      <a
                        key={j}
                        href="#"
                        className="w-5 h-5 rounded-full bg-transparent flex items-center justify-center text-[#0B409C] hover:text-[#C8102E] transition-colors duration-200 text-xs"
                      >
                        <Icon size={13} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Lower Core Paragraph Container ── */}
        <motion.p 
          className="text-[#1A365D] text-center text-sm md:text-base max-w-3xl mx-auto mt-16 md:mt-24 font-medium leading-relaxed px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A dedicated group of professionals committed to delivering the best guidance with
          expertise, experience, and genuine support at every step of your journey.
          </motion.p>

      </div>
    </section>
  );
}