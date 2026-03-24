import React from "react";
import { FaGlobe, FaHandshake, FaBullseye, FaLightbulb } from "react-icons/fa";
import { MdOutlineVisibility } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

const visionPoints = [
  "Seamless global mobility for everyone",
  "Trusted by 10,000+ clients worldwide",
  "Excellence in every visa journey",
];

const missionPoints = [
  "Expert visa & immigration consulting",
  "Transparent, honest guidance",
  "End-to-end application support",
];

const values = [
  { icon: <FaHandshake />, title: "Integrity",    text: "Honest and transparent guidance at every step of your journey."       },
  { icon: <FaBullseye  />, title: "Excellence",   text: "Delivering the highest standards in every service we provide."         },
  { icon: <FaLightbulb />, title: "Innovation",   text: "Continuously improving our processes to serve you better."             },
  { icon: <FaGlobe     />, title: "Global Reach", text: "150+ countries covered with expert local knowledge."                   },
];

export default function Mission() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f4fb] via-[#e8eef8] to-[#f5f0e8] lg:px-20 md:p-14 sm:p-10 px-6 py-8">

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,64,148,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,64,148,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-color2 to-color1" />

      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-color2/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-color1/7 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Header ── */}
          <h2
            className="font-black text-color3 text-3xl md:text-5xl text-center leading-tight mb-5"
          >
            Our <span className="text-color1">Vision</span> & Mission
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-color2 to-color1 rounded-full mx-auto mb-6 sm:mb-8" />

        {/* ── Vision + Mission Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-8">

          {/* Vision */}
          <div className="group bg-white rounded-3xl border border-color2/10 p-10 relative overflow-hidden
            shadow-[0_4px_24px_rgba(26,47,74,0.07)]
            hover:shadow-[0_20px_52px_rgba(0,64,148,0.13)]
            hover:border-color2/25 hover:-translate-y-2
            transition-all duration-300">

            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-color2 to-color1 rounded-t-3xl" />

            {/* Ghost letter */}
            

            {/* Icon */}
            <div className="w-16 h-16 rounded-[18px] flex items-center justify-center text-2xl text-color2
              bg-gradient-to-br from-color2/8 to-color2/4 border border-color2/12 mb-6
              group-hover:bg-gradient-to-br group-hover:from-color2 group-hover:to-color2/80
              group-hover:text-white group-hover:border-transparent transition-all duration-300">
              <MdOutlineVisibility />
            </div>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-color2 mb-3">Our Vision</p>
            <h3
              className="text-2xl font-black text-color3 mb-4 leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A World Without Borders
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-7">
              To be the most trusted global immigration partner — empowering individuals and families to build their future anywhere in the world with confidence, clarity, and care.
            </p>

            <ul className="flex flex-col gap-3">
              {visionPoints.map((pt, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-500 text-color3">
                  <span className="w-[7px] h-[7px] rounded-full bg-color2 flex-shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* Mission */}
          <div className="group bg-white rounded-3xl border border-color1/10 p-10 relative overflow-hidden
            shadow-[0_4px_24px_rgba(26,47,74,0.07)]
            hover:shadow-[0_20px_52px_rgba(203,0,0,0.10)]
            hover:border-color1/25 hover:-translate-y-2
            transition-all duration-300">

            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-color1 to-color2 rounded-t-3xl" />

          

            {/* Icon */}
            <div className="w-16 h-16 rounded-[18px] flex items-center justify-center text-2xl text-color1
              bg-gradient-to-br from-color1/8 to-color1/4 border border-color1/12 mb-6
              group-hover:bg-gradient-to-br group-hover:from-color1 group-hover:to-color1/80
              group-hover:text-white group-hover:border-transparent transition-all duration-300">
              <TbTargetArrow />
            </div>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-color1 mb-3">Our Mission</p>
            <h3
              className="text-2xl font-black text-color3 mb-4 leading-snug"
            >
              Guidance at Every Step
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-7">
              To provide expert, personalized immigration guidance that transforms complex processes into seamless experiences — making every client's dream of global opportunity a reality.
            </p>

            <ul className="flex flex-col gap-3">
              {missionPoints.map((pt, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-color3">
                  <span className="w-[7px] h-[7px] rounded-full bg-color1 flex-shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Core Values ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {values.map((val, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-color2/8 p-6 text-center relative overflow-hidden
                shadow-[0_2px_12px_rgba(26,47,74,0.05)]
                hover:shadow-[0_12px_32px_rgba(0,64,148,0.10)]
                hover:border-color2/20 hover:-translate-y-1
                transition-all duration-300"
            >
              {/* Bottom hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-color2 to-color1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl text-color2 mx-auto mb-4
                bg-gradient-to-br from-color2/8 to-color1/5 border border-color2/10
                group-hover:from-color2 group-hover:to-color1 group-hover:text-white group-hover:border-transparent
                transition-all duration-300">
                {val.icon}
              </div>

              <h4
                className="text-color3 font-bold text-base mb-2"
              >
                {val.title}
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed">{val.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}