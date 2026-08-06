import React from "react";
import { IoRocketOutline, IoBulbOutline, IoTrophyOutline } from "react-icons/io5";

const data = [
  {
    title1: "Our",
    title2: "Vision",
    colorClass: "text-red-600", // Coral Red
    text: "Our vision is to become a trusted and recognized name in global immigration services by consistently delivering quality outcomes and building long-term relationships.",
    icon: IoRocketOutline,
  },
  {
    title1: "Our",
    title2: "Mission",
    colorClass: "text-orange-600", // Soft Orange
    text: "Our mission is to simplify the immigration journey by providing clear guidance, reliable support, and result-oriented solutions tailored to individual goals.",
    icon: IoBulbOutline,
  },
  {
    title1: "Our",
    title2: "Values",
    colorClass: "text-blue-600", // Light Blue
    text: "Our values are rooted in transparency, integrity, and commitment to excellence. We believe in honest communication, ethical practices, and professional services.",
    icon: IoTrophyOutline,
  },
];

export default function Mission() {
  return (
    <section className="bg-white sm:p-12 py-6 px-4 min-h-[70vh] flex items-center justify-center font-sans ">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-stretch justify-between relative bg-white">

        {data.map((item, index) => {
          const Icon = item.icon;

          return (
            <React.Fragment key={index}>
              {/* ── Content Column ── */}
              <div className="flex-1 flex flex-col items-center p-8 lg:pb-12 text-center shadow-lg bg-gradient-to-r from-white to-zinc-100 z-10">
                {/* Icon */}
                <Icon className={`text-[2.5rem] mb-6 ${item.colorClass}`} strokeWidth={2} />
                {/* Heading */}
                <h3 className="text-2xl md:text-3xl font-bold  text-gray-700 mb-6 capitalize">
                  {item.title1} <span className={` ${item.colorClass}`}>{item.title2}</span>
                </h3>

                {/* Paragraph */}
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[280px]">
                  {item.text}
                </p>
              </div>

              {/* ── Soft Shadow Divider (Desktop) ── */}
              {index !== data.length - 1 && (
                <div className="hidden md:flex w-[1px] relative justify-center my-12 z-0">
                  <div className="absolute top-0 bottom-0 w-[1px] shadow-[0_0_25px_6px_rgba(0,0,0,0.08)] bg-transparent rounded-full" />
                </div>
              )}

              {/* ── Soft Shadow Divider (Mobile) ── */}
              {index !== data.length - 1 && (
                <div className="md:hidden h-[1px] w-full relative flex justify-center mx-auto my-6 z-0">
                  <div className="absolute left-16 right-16 h-[1px] shadow-[0_0_25px_6px_rgba(0,0,0,0.08)] bg-transparent rounded-full" />
                </div>
              )}
            </React.Fragment>
          );
        })}

      </div>
    </section>
  );
}