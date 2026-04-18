import Image from "next/image";
import Link from "next/link";
import { box1, box2, box3 } from "@/assets"; 
import { div } from "motion/react-client";
import Buttonmain from "../global/button";

const imgs=[
    box1,box2,box3
]
const features = [
  "Experienced Immigration Consultants",
  "Fast & Reliable Visa Processing",
  "Personalized Client Assistance",
  "Global reach and support",
];

export default function Studyabrod() {
  return (
    <section className="relative xl:px-28 lg:px-20 md:p-16 sm:p-12 p-6  flex flex-wrap items-stretch gap-12  justify-between bg-gradient-to-br from-[#f0f4fb] via-[#e8eef8] to-[#f5f0e8] overflow-hidden">

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
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

      {/* ── LEFT: Stacked Images ── */}
     <div className="relative flex-shrink-0 w-full md:w-[46%] h-[420px] md:h-[480px] p-4">

  {/* Paper plane deco */}
  <svg
    className="absolute -top-3 right-6 w-12 h-12 text-color2 opacity-20 z-10"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
  >
    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
  </svg>

  {/* Dashed frames behind */}
  <div className="absolute top-[10px] left-[36px] right-[-14px] bottom-[-14px] border-2 border-dashed border-color1/30 rounded-2xl pointer-events-none z-[2]" />
  <div className="absolute top-[22px] left-[60px] right-[-26px] bottom-[-26px] border-2 border-dashed border-color2/20 rounded-2xl pointer-events-none " />

  {/* Card Back — box3, rotated right */}
  <div className="absolute w-[49%] h-[86%] right-[3%] top-[12%] rotate-[8deg] z-[1] rounded-2xl duration-300 ease-in-out  hover:!z-10 overflow-hidden border-[3px] border-white shadow-xl">
    <Image src={imgs[2]} alt="img" fill className="object-cover object-center" />
  </div>

  {/* Card Mid — box2, slight left tilt */}
  <div className="absolute w-[50%] h-[90%] left-[24%] top-[6%] -rotate-[3deg] z-[2] rounded-2xl duration-300 ease-in-out  hover:!z-10 overflow-hidden border-[3px] border-white shadow-xl">
    <Image src={imgs[1]} alt="img" fill className="object-cover object-center" />
  </div>

  {/* Card Front — box1, straight, red border */}
  <div className="absolute w-[50%] h-[86%] left-[7%] top-[12%] -rotate-[10deg] z-[3] rounded-2xl duration-300 ease-in-out  overflow-hidden border-[3px] border-white shadow-2xl">
    <Image src={imgs[0]} alt="img" fill className="object-cover object-center" />
  </div>
</div>

      {/* ── RIGHT: Content ── */}
      <div className="relative md:w-[47%] w-full">

        {/* Label */}
        <span className="block text-color2 font-bold uppercase text-xs tracking-[0.22em] mb-4">
          Who We Are
        </span>

        {/* Heading */}
        <h2 className="font-bold  capitalize text-color3 text-3xl md:text-4xl lg:text-5xl !leading-tight mb-5">
          Trusted Support for Every Step of Your{" "}
          <span className="text-color1">Immigration Journey</span>
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
          We provide professional assistance for every visa application, ensuring a smooth process, accurate documentation, and reliable support to make your journey abroad simple and stress-free.

        </p>

        {/* Experience + Features */}
        <div className="flex flex-wrap items-start gap-10 mb-9">

          {/* 20+ Years */}
          <div>
            <p
              className="font-black text-8xl leading-none"
              style={{
                background: "linear-gradient(135deg, #004094, #CB0000)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              20+
            </p>
            <p className="text-color3 font-semibold text-base mt-1">Years Of Experience</p>
          </div>

          {/* Features list */}
          <ul className="flex flex-col gap-3 pt-1">
            {features.map((f, i) => (
              <li key={i} className="flex items-end gap-2 text-color3 font-medium text-[15px]">
                <span className="text-color2 font-black text-lg tracking-[-4px]">»</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}

      </div>
    </section>
  );
}