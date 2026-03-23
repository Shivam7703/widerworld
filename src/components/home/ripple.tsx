"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
import { faq } from "@/assets";

export default function Ripple() {
  return (
    <motion.div
      variants={fadeIn("left", "tween", 0.3, 1)}
      className="md:w-[46%] w-full min-h-[450px] relative group"
    >
      <div className="relative w-full h-full min-h-[570px] max-sm:!pb-5 rounded-2xl overflow-hidden">

        {/* Gradient background */}
        <div className="absolute inset-0 z-0"
          style={{ background: "linear-gradient(135deg, #e8f0fb 0%, #f0e8f8 50%, #fbe8e8 100%)" }} />
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full z-0"
          style={{ background: "radial-gradient(circle, rgba(0,64,148,0.12) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/3 right-0 w-56 h-56 rounded-full z-0"
          style={{ background: "radial-gradient(circle, rgba(203,0,0,0.08) 0%, transparent 70%)" }} />
        <div className="absolute top-6 right-10 w-32 h-32 rounded-full z-0"
          style={{ background: "radial-gradient(circle, rgba(255,206,91,0.15) 0%, transparent 70%)" }} />

        {/* Floating badges */}
        <div className="absolute top-5 left-5 z-30 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-color2/15 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-color4" />
          <span className="text-xs font-bold text-color2">⭐ 10K+ Clients</span>
        </div>
        <div className="absolute top-1/3 sm:top-5 right-5 z-30 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-color1/15">
          <span className="text-xs font-bold text-color1">95% Success Rate</span>
        </div>

        {/* Image with webkit reflect */}
        <div className="relative z-10 w-full  max-sm:p-6 flex items-end justify-center" style={{ height: "72%" }}>
          <div style={{
            WebkitBoxReflect: "below 0px linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 100%)",
          }}>
            <Image
              src={faq}
              alt="FAQ Expert"
              width={600}
              height={460}
              className="object-contain object-bottom w-full  max-w-[580px]"
              style={{
                filter: "drop-shadow(0px 28px 32px rgba(0,64,148,0.22)) drop-shadow(0px 10px 20px rgba(0,64,148,0.15))",
              }}
            />
          </div>
        </div>

        {/* Animated Waves */}
     {/* Animated Waves */}
<div className="absolute bottom-0 -left-5 w-[120%] z-20 overflow-hidden" style={{ height: "48%" }}>

  <style>{`
    @keyframes wave1 {
      0% { transform: translateX(0) translateY(0); }
      50% { transform: translateX(-6%) translateY(-6px); }
      100% { transform: translateX(0) translateY(0); }
    }
    @keyframes wave2 {
      0% { transform: translateX(0) translateY(0); }
      50% { transform: translateX(5%) translateY(-10px); }
      100% { transform: translateX(0) translateY(0); }
    }
    @keyframes wave3 {
      0% { transform: translateX(0) translateY(0); }
      50% { transform: translateX(-4%) translateY(-7px); }
      100% { transform: translateX(0) translateY(0); }
    }
    @keyframes wave4 {
      0% { transform: translateX(0) translateY(0); }
      50% { transform: translateX(6%) translateY(-4px); }
      100% { transform: translateX(0) translateY(0); }
    }
  `}</style>

  {/* Wave layer 1 — back, slow */}
  <svg viewBox="0 0 1440 120" preserveAspectRatio="none"
    className="absolute bottom-0 -left-5 w-[120%]"
    style={{ height: "120%", animation: "wave1 6s ease-in-out infinite" }}
  >
    <path
      d="M0,60 C180,100 360,20 540,60 C720,100 900,20 1080,60 C1260,100 1380,40 1440,60 L1440,120 L0,120 Z"
       className="fill-rose-600/20"
    />
  </svg>

  {/* Wave layer 2 */}
  <svg viewBox="0 0 1440 120" preserveAspectRatio="none"
    className="absolute bottom-0 -left-5 w-[120%]"
    style={{ height: "90%", animation: "wave2 5s ease-in-out infinite" }}
  >
    <path
      d="M0,40 C200,80 400,10 600,50 C800,90 1000,15 1200,50 C1320,72 1400,35 1440,50 L1440,120 L0,120 Z"
       className="fill-rose-400/80"
    />
  </svg>

  {/* Wave layer 3 */}
  <svg viewBox="0 0 1440 120" preserveAspectRatio="none"
    className="absolute bottom-0 -left-5 w-[120%]"
    style={{ height: "68%", animation: "wave3 4s ease-in-out infinite" }}
  >
    <path
      d="M0,50 C160,20 320,80 480,50 C640,20 800,80 960,50 C1120,20 1280,75 1440,50 L1440,120 L0,120 Z"
       className="fill-rose-300/80"
    />
  </svg>

  {/* Wave layer 4 */}
  <svg viewBox="0 0 1440 120" preserveAspectRatio="none"
    className="absolute bottom-0 -left-7 w-[120%]"
    style={{ height: "42%", animation: "wave4 3.5s ease-in-out infinite" }}
  >
    <path
      d="M0,45 C120,15 240,70 360,45 C480,20 600,70 720,45 C840,20 960,70 1080,45 C1200,20 1340,65 1440,45 L1440,120 L0,120 Z"
       className="fill-rose-100/30"
    />
  </svg>

  {/* Wave layer 5 — front foam, light blue-white */}
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none"
    className="absolute -bottom-3 -left-7 w-[120%]"
    style={{ height: "30%", animation: "wave2 4.5s ease-in-out infinite reverse" }}
  >
    <path
      d="M0,40 C100,10 200,60 300,40 C400,20 500,55 600,40 C700,25 800,55 900,40 C1000,25 1100,55 1200,40 C1300,25 1380,50 1440,40 L1440,80 L0,80 Z"
       className="fill-white/80"
    />
  </svg>

</div>
      </div>
    </motion.div>
  );
}