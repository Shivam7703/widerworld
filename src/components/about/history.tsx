"use client";
import React, { useEffect, useRef, useState } from "react";

const stats = [
  { num: "20+",  label: "Years Experience"  },
  { num: "10K+", label: "Clients Served"    },
  { num: "150+", label: "Countries Covered" },
  { num: "95%",  label: "Approval Rate"     },
];

const milestones = [
  { year: "2004", side: "left",  color: "blue", icon: "🌱", title: "The Beginning",         text: "Founded with a single office and a vision to simplify immigration for aspiring global citizens. Started with 3 team members and a passion for changing lives."          },
  { year: "2008", side: "right", color: "red",  icon: "🏢", title: "National Expansion",     text: "Expanded operations across 5 major cities, building a strong team of certified immigration consultants. Crossed 500 successful visa applications milestone."              },
  { year: "2012", side: "left",  color: "blue", icon: "🏆", title: "Global Recognition",     text: "Received our first international certification and established partnerships with 50+ universities worldwide, opening doors to global education pathways."                  },
  { year: "2016", side: "right", color: "red",  icon: "🎓", title: "5,000 Lives Changed",    text: "Celebrated helping 5,000+ clients achieve their immigration dreams. Launched our dedicated MBBS abroad and study visa divisions with specialized expert teams."           },
  { year: "2020", side: "left",  color: "blue", icon: "💻", title: "Digital Transformation", text: "Launched our digital platform enabling end-to-end visa tracking and online consultation. Served clients across 100+ countries despite global challenges."                 },
  { year: "2024", side: "right", color: "red",  icon: "🌍", title: "20 Years of Excellence", text: "Celebrating two decades of trust — 10,000+ satisfied clients, 150+ country coverage, and a 95% approval rate. Growing stronger every year."                             },
];

export default function OurHistory() {
  const tlWrapRef = useRef<HTMLDivElement>(null);
  const [fillPct, setFillPct] = useState(0);

  useEffect(() => {
    function updateLine() {
      const el = tlWrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const wh = window.innerHeight;
      const pct = Math.min(100, Math.max(0, ((wh - rect.top) / (rect.bottom - rect.top)) * 90));
      setFillPct(pct);
    }
    window.addEventListener("scroll", updateLine, { passive: true });
    window.addEventListener("resize", updateLine, { passive: true });
    updateLine();
    return () => {
      window.removeEventListener("scroll", updateLine);
      window.removeEventListener("resize", updateLine);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-color3 lg:px-20 md:px-14 sm:px-10 px-6 py-20">

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-color2 to-color1" />

      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-color2/35 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-color1/10  rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-color4/10 rounded-full blur-[140px] pointer-events-none" />


  {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <span className="text-white font-bold uppercase text-sm tracking-[0.22em] mb-5">
            Our Journey
          </span>
          <h2
            className="font-black text-white text-3xl md:text-5xl leading-tight mb-4 mt-3"
          >
            The Story of Our{" "}
            History
          </h2>
          <p className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed mb-5">
            From humble beginnings to a globally trusted immigration partner — two decades of excellence, dedication, and transforming lives.
          </p>
          <div className="w-16 h-[3px] bg-gradient-to-r from-color2 to-color1 rounded-full mx-auto" />
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((s, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 text-center relative overflow-hidden
                shadow-[0_4px_20px_rgba(0,0,0,0.2)]
                hover:shadow-[0_12px_36px_rgba(0,0,0,0.28)]
                hover:-translate-y-1 transition-all duration-300
                border border-white/90"
            >
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-color2 to-color1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p
                className="font-black text-3xl leading-none mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: "linear-gradient(135deg, #004094, #CB0000)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.num}
              </p>
              <p className="text-xs font-semibold text-color5 uppercase tracking-[0.1em]">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Timeline ── */}
        <div className="relative" ref={tlWrapRef}>

          {/* Desktop track */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-color4 via-blue-400 to-red-400 transition-all duration-75"
              style={{ height: `${fillPct}%` }}
            />
          </div>

          {/* Mobile track */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10 md:hidden">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-color4 via-blue-400 to-red-400 transition-all duration-75"
              style={{ height: `${fillPct}%` }}
            />
          </div>

          <div className="flex flex-col">
            {milestones.map((m, i) => {
              const isLeft = m.side === "left";
              const isBlue = m.color === "blue";

              return (
                <div
                  key={i}
                  className={`flex items-start mb-14 relative
                    md:flex-row ${!isLeft ? "md:flex-row-reverse" : ""}
                    flex-row pl-12 md:pl-0`}
                >
                  {/* ── Card ── */}
                  <div className={`w-full md:w-[46%] ${isLeft ? "md:pr-10" : "md:pl-10"}`}>
                    <div className="group bg-white rounded-2xl relative overflow-hidden
                      shadow-[0_8px_32px_rgba(0,0,0,0.22)]
                      hover:shadow-[0_20px_56px_rgba(0,0,0,0.32)]
                      hover:-translate-y-2 transition-all duration-300
                      border border-white/95">

                      {/* Top bar — reveals on hover */}
                      <div
                        className={`h-0 group-hover:h-1 transition-all duration-300 rounded-t-2xl
                          ${isBlue
                            ? "bg-gradient-to-r from-color2 to-color1"
                            : "bg-gradient-to-r from-color1 to-color2"
                          }`}
                      />

                      <div className="p-7 md:p-9">
                        {/* Ghost year */}
                        <span
                          className="absolute bottom-2 right-5 font-black text-[80px] text-color3/5 leading-none select-none pointer-events-none"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {m.year}
                        </span>

                        {/* Year badge */}
                        <span
                          className={`inline-block text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full mb-4
                            ${isBlue
                              ? "bg-color2/8 text-color2 border border-color2/20"
                              : "bg-color1/8 text-color1 border border-color1/20"
                            }`}
                        >
                          {m.year}
                        </span>

                        {/* Title */}
                        <h3
                          className="text-color3 font-black text-xl md:text-2xl mb-3 leading-snug"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {m.title}
                        </h3>

                        {/* Text */}
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">{m.text}</p>
                      </div>
                    </div>
                  </div>

                  {/* ── Center dot — desktop ── */}
                  <div className="hidden md:flex w-[8%] flex-col items-center pt-8 flex-shrink-0">
                    <div className="relative w-12 h-12">
                      <div className={`absolute inset-0 rounded-full animate-ping opacity-25 ${isBlue ? "bg-color2" : "bg-color1"}`} />
                      <div
                        className={`relative w-12 h-12 rounded-full flex items-center justify-center text-xl
                          border-4 border-color3 shadow-xl z-10
                          ${isBlue
                            ? "bg-gradient-to-br from-color2 to-color2/75"
                            : "bg-gradient-to-br from-color1 to-color1/75"
                          }`}
                      >
                        {m.icon}
                      </div>
                    </div>
                  </div>

                  {/* ── Mobile dot ── */}
                  <div className="absolute left-0 top-5 md:hidden">
                    <div className="relative w-9 h-9">
                      <div className={`absolute inset-0 rounded-full animate-ping opacity-25 ${isBlue ? "bg-color2" : "bg-color1"}`} />
                      <div className={`relative w-9 h-9 rounded-full flex items-center justify-center text-sm border-2 border-color3 shadow-md ${isBlue ? "bg-color2" : "bg-color1"}`}>
                        {m.icon}
                      </div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[46%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}