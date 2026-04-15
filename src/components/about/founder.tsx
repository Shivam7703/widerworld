"use client";
import React from "react";
import Image from "next/image";
import { FaQuoteLeft, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsAward } from "react-icons/bs";
import { ceo, plane } from "@/assets";

const stats = [
  { num: "10K+", label: "Clients Served",     pct: "100%" },
  { num: "95%",  label: "Visa Approval Rate", pct: "95%"  },
  { num: "150+", label: "Countries Covered",  pct: "85%"  },
];

export default function CEOMessage() {
  return (
    <section className="relative md:px-20 sm:p-16 p-4 py-16 md:py-28 overflow-hidden
      bg-gradient-to-b from-rose-50 via-blue-50  to-white">
    <Image
      src={plane}
      alt="immigration"
      className="z-0 absolute top-12 left-0 object-contain w-max h-28 opacity-70 sm:h-96 "
    />
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-color2 to-color1" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-color2/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-color1/7 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden
          shadow-[0_24px_80px_rgba(26,47,74,0.34)]">

          {/* ── LEFT: Image + Identity Panel ── */}
          <div className="relative min-h-[500px] col-span-1 lg:min-h-[620px] bg-slate-600 overflow-hidden">

            {/* Image */}
            <Image
              src={ceo}
              alt="Founder"
              fill
              className="object-cover object-top "
            />


            {/* Year badge — top right */}
            <div className="absolute top-8 right-8 w-[72px] h-[72px] rounded-full
              bg-gradient-to-br from-color2 to-color1
              flex flex-col items-center justify-center shadow-xl shadow-color2/30">
              <span
                className="text-white font-black text-xl leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >30+</span>
              <span className="text-white/70 text-[9px] font-semibold uppercase tracking-wider mt-0.5">Yrs</span>
            </div>

            {/* Bottom: Name + Socials */}
            <div className="absolute bottom-[4%] left-[5%] right-0 p-10 bg-black/50 border border-white backdrop-blur-sm w-[90%] rounded-2xl z-10">
              {/* Quote icon */}
              <div className="w-11 h-11 rounded-[14px] bg-color2 flex items-center justify-center mb-5 shadow-lg shadow-color2/30">
                <FaQuoteLeft className="text-white text-base" />
              </div>

              <h3
                className="text-white font-black text-2xl leading-tight mb-1"
              >
                Jonathan A. Mercer
              </h3>
              <p className="text-white/70 text-[10px] font-semibold uppercase tracking-[0.18em] mb-5">
                Founder & Chairman
              </p>

              {/* Gradient line */}
              <div className="w-10 h-[2px] bg-gradient-to-r from-color2 to-color1 rounded-full mb-5" />

              {/* Socials */}
              <div className="flex gap-2.5">
                {[
                  { icon: <FaLinkedin />,    href: "#" },
                  { icon: <FaInstagram />,   href: "#" },
                  { icon: <HiOutlineMail />, href: "#" },
                ].map((s, i) => (
                  
                  <a  key={i} href={s.href}
                    className="w-9 h-9 rounded-[10px] bg-white/8 border border-white/55
                      flex items-center justify-center text-white/90 text-sm
                      hover:bg-color2 hover:border-color2 hover:text-white
                      hover:-translate-y-0.5 hover:shadow-lg hover:shadow-color2/30
                      transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Content Panel ── */}
          <div className="bg-white  col-span-1 p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
            

            {/* Label */}
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase
              tracking-[0.22em] text-color2 border-2 border-color2/20 bg-color2/5
              px-4 py-2 rounded-full w-fit mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-color2 animate-pulse" />
              Message from Our Founder
            </span>

            {/* Main quote */}
            <p
              className="text-xl md:text-[22px] font-bold text-color3 leading-[1.5] mb-6 relative z-10"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
            >
              "We started with one simple belief — immigration should be transparent, reliable, and accessible. Built on dedication and a commitment to excellence every single day."
            </p>

            {/* Body */}
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Our goal is not just to process applications but to build trust in every journey. We grow responsibly, innovate continuously, and create opportunities while maintaining the highest standards of service and integrity.
            </p>

            {/* ── Stats — unique bar style ── */}
            <div className="flex flex-col gap-4 mb-8">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="flex items-baseline justify-between mb-1.5">
                    <div className="flex items-baseline gap-3">
                      <span
                        className="font-black text-2xl text-color3 leading-none"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >{s.num}</span>
                      <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.12em]">{s.label}</span>
                    </div>
                    <span className="text-[11px] font-bold text-color2">{s.pct}</span>
                  </div>
                  <div className="w-full h-[4px] bg-color2/8 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-color2 to-color1"
                      style={{ width: s.pct }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <div className="border-l-[3px] border-color1 pl-5 py-2 bg-color1/4 rounded-r-xl mb-8"
              style={{ borderRadius: "0 12px 12px 0" }}>
              <p className="text-gray-500 text-sm italic leading-relaxed">
                "Connecting lives with trust, clarity, and excellence in every immigration journey we deliver."
              </p>
            </div>

            {/* Signature */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-gradient-to-r from-color2 to-transparent rounded-full flex-shrink-0" />
              <div>
                <p
                  className="text-color3 font-bold text-lg leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >Jonathan A. Mercer</p>
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mt-0.5">Founder & Chairman</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}