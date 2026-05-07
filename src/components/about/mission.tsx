import { mission, vision } from "@/assets";
import React from "react";
import { FaGlobe, FaHandshake, FaBullseye, FaLightbulb } from "react-icons/fa";
import { MdOutlineVisibility } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import Image from "next/image";

const data = [{
  label: "Our Mission",
  text:"Our mission is to simplify the immigration journey by providing clear guidance, reliable support, and result-oriented solutions tailored to individual goals. We focus on making complex processes easy to understand while ensuring accuracy, transparency, and a smooth experience from start to finish.",
points:["Expert visa and immigration consulting","Transparent and honest guidance"],
  img: mission,
  icon: TbTargetArrow
},{
  label: "Our Vision",
  text:"Our vision is to become a trusted and recognized name in global immigration services by consistently delivering quality outcomes and building long-term relationships. We aim to empower individuals to achieve international opportunities with confidence and clarity.",
points:["Making global mobility simple and accessible","Commitment to excellence in every visa journey"],
  img: vision,
  icon: MdOutlineVisibility
},{
  label: "Our Values",
  text:"Our values are rooted in transparency, integrity, and commitment to excellence. We believe in honest communication, ethical practices, and delivering services that prioritize client success while maintaining professionalism at every stage.",
points:["Maintain honesty, transparency, and strong ethical work standards","Focus on client success with dedication and professionalism"],
  img: mission,
  icon: MdOutlineVisibility
}]


export default function Mission() {
  return (
    <section className="relative overflow-hidden bg-white lg:px-20 md:p-14 sm:p-10 px-6 py-8">

      {/* Background pattern */}
     
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-color2/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-color1/7 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
          <h2
            className="font-black text-color3 text-3xl md:text-5xl text-center leading-tight mb-5"
          >
            Our <span className="text-color1">Vision</span> & Mission
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-color2 to-color1 rounded-full mx-auto mb-6 sm:mb-8" />

        {/* ── Vision + Mission Cards ── */}
       <div className="flex flex-col sm:flex-row ">
          {data.map((item, index) => {
            const Icon = item.icon;
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex rounded-3xl overflow-hidden transition-all duration-300 ${
                  index % 2 ? "md:flex-col-reverse flex-row-reverse" : "md:flex-col flex-row"
                }`}
              >
                {/* Content */}
                <div className="bg-gradient-to-br from-indigo-800 via-blue-900 to-color5 text-white p-10 flex flex-col justify-center">
                  <div className="flex gap-3 items-center mb-6"><div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 ">
                    <Icon className="text-2xl text-white" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold">
                    {item.label}
                  </h3></div>
                  

                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {item.text}
                  </p>

                  <ul className="space-y-2">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-color1 rounded-full" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="  overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.label}
                    className=" w-[80%] !m-auto object-contain hover:scale-110 transition duration-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}