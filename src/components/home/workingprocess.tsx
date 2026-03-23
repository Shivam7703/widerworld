import Link from "next/link";
import React from "react";
import { FaWpforms } from "react-icons/fa";
import { LuHandshake } from "react-icons/lu";
import { MdFlight, MdOutlineEngineering, MdOutlineSettings } from "react-icons/md";

const data = [
  {
    icon: <FaWpforms />,
    heading: "Initial Consultation",
    text: "Understanding client requirements, aircraft details, and operational timelines clearly.",
  },
  {
    icon: <MdOutlineSettings />,
    heading: "Strategic Planning",
    text: "Preparing documentation, approvals, and coordination plans with authorities.",
  },
  {
    icon: <MdOutlineEngineering />,
    heading: "Execution & Coordination",
    text: "Managing permits, slots, handling, and services efficiently.",
  },
  {
    icon: <LuHandshake />,
    heading: "Final Confirmation",
    text: "Providing updates, confirmations, and ensuring smooth flight completion.",
  },
  {
    icon: <MdOutlineSettings />,
    heading: "Strategic Planning",
    text: "Preparing documentation, approvals, and coordination plans with authorities.",
  },
  {
    icon: <MdOutlineEngineering />,
    heading: "Execution & Coordination",
    text: "Managing permits, slots, handling, and services efficiently.",
  },
  {
    icon: <LuHandshake />,
    heading: "Final Confirmation",
    text: "Providing updates, confirmations, and ensuring smooth flight completion.",
  },
];

export default function WorkProcess() {
  return (
    <div className="relative lg:px-20 sm:p-12 p-7 bg-gradient-to-br from-[#f0f4fb] via-[#e8eef8] to-[#f5f0e8]">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,64,148,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,64,148,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-color2 to-color1" />

      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-color2/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-color1/7 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-color4/8 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      {/* Heading */}
      <p className="text-sm text-center mx-auto font-bold uppercase tracking-[0.22em] text-color2 mb-5 relative">
        work process
      </p>
      <h2 className="font-bold text-center text-3xl md:text-5xl !leading-tight mb-6 max-w-3xl mx-auto text-color3 relative">
        Lorem ipsum dolor sit amet{" "}
        <span className="text-color1">consectetur</span> adipisicing elit.
      </h2>

      {/* Timeline */}
      <div className="relative mt-9 md:mt-16 max-w-6xl mx-auto">
        {/* Center Vertical Line */}
        <div className="absolute md:left-1/2 left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-color2/50 via-color1/70 to-color2/50 -translate-x-1/2" />

        {data.map((item, index) => {
          const isOdd = index % 2 !== 0;
          return (
            <ProCard key={index} num={index + 1} pro={item} isOdd={isOdd} />
          );
        })}
      </div>
    </div>
  );
}

const ProCard = ({
  pro,
  isOdd,
  num,
}: {
  pro: any;
  isOdd: boolean;
  num: number;
}) => (
  <div
    className={`flex md:flex-row flex-row-reverse items-start gap-0 mb-0 md:mb-0 relative group ${
      isOdd ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* Card Side */}
    <div
      className={` md:w-[48%] ${
        isOdd ? "md:pl-8 lg:pl-16" : "md:pr-8 lg:pr-16"
      } pb-7 md:pb-16`}
    >
      <Link
        href="/contact-us"
        className={`space-y-2 ${
          isOdd ? "md:text-left md:pl-4" : "md:text-right md:pr-4"
        }`}
      >
        <div className="relative bg-white border border-color2/20 rounded-2xl md:p-10 p-6 text-left h-full transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:border-color2 mx-auto overflow-hidden">
          
          {/* Top accent bar on hover */}
          <div className="absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r from-color2 to-color1 rounded-b opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Number Badge */}
          <div className="absolute top-5 right-3 px-3 py-2 h-max w-max flex items-center justify-center rounded-full text-sm font-bold bg-color2 text-white shadow-lg shadow-color2/30">
          Step  0{num}
          </div>

          {/* Icon Box */}
          <div className="w-14 h-14 rounded-[14px] flex items-center justify-center text-2xl text-color2 bg-gradient-to-br from-color2/8 to-color1/6 border border-color2/10 mb-5  transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-color2 group-hover:to-color1 group-hover:text-white group-hover:border-transparent">
            {pro.icon}
          </div>

          {/* Heading */}
          <h2 className="text-xl md:text-2xl font-semibold text-color3 mb-3">
            {pro.heading}
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            {pro.text}
          </p>
        </div>
      </Link>
    </div>

    {/* Step Side */}
    <div
      className={`w-[24%] md:w-[49%] sticky top-40 ${
        isOdd ? "sm:-mr-[0.48%] " : "md:pl-8 lg:pl-[3.66%] "
      } `}
    >
      <div
        className={`flex items-center  max-sm:-ml-2 w-full gap-2 md:gap-14 ${
          isOdd ? "md:flex-row-reverse" : "md:justify-start md:-ml-11"
        }`}
      >
        {/* Animated Icon Circle */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-color2 rounded-full animate-ping opacity-40" />
          <div className="relative  rounded-full p-2  sm:p-3 group-hover:bg-color1 sm:text-3xl text-2xl shadow-lg shadow-color2/20 transition-all duration-300 bg-color2 rotate-180  text-white">
<MdFlight />
          </div>
        </div>

        {/* Ghost Step Number */}
        <div className="flex flex-col leading-none select-none max-sm:hidden text-9xl text-color2/30 group-hover:text-color2/70">
          {pro?.icon}
        </div>
      </div>
    </div>
  </div>
);