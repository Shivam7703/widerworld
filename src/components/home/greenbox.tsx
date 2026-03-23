"use client";
import { box1, box2, box3 } from "@/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsPassportFill } from "react-icons/bs";
import { RiSpeedMiniFill, RiUserCommunityFill } from "react-icons/ri";
import { MdArrowRightAlt } from "react-icons/md";

export default function Greenbox() {

  const data = [
    {
      id: 1,
      img: box1,
      heading: "Passport Services",
      para: "Complete assistance for passport applications, renewals, and documentation.",
      icon: <BsPassportFill />,
      bg: "bg-color3",
    },
    {
      id: 2,
      img: box2,
      heading: "Fast-Track Visa Processing",
      para: "Efficient visa handling with accurate documentation and timely submissions.",
      icon: <RiSpeedMiniFill />,
      bg: "bg-color2",
    },
    {
      id: 3,
      img: box3,
      heading: "Dedicated Client Support",
      para: "Expert assistance and guidance at every step of your immigration process.",
      icon: <RiUserCommunityFill />,
      bg: "bg-color3",
    },
  ];

  return (
    <section className="md:pb-14 -mt-24 md:-mt-32 sticky z-40 py-8 w-full max-w-[1250px]">

      <div className="flex flex-wrap max-md:justify-center items-stretch">

        {data.map((card) => (

          <div
            key={card.id}
            className={`group relative flex-1 min-w-[320px] max-w-[380px]
            ${card.bg}
             overflow-hidden cursor-pointer
            shadow-[0_15px_40px_rgba(0,0,0,0.25)]
            transition-all duration-500
            hover:-translate-y-3
            hover:shadow-[0_35px_80px_rgba(0,0,0,0.35)]`}
          >

             {/* <div className="relative h-[240px] overflow-hidden">
              <Image
                src={card.img}
                alt={card.heading}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-b
              from-transparent via-transparent to-black/70" />
            </div> */}



            {/* BODY */}
            <div className="px-7 pt-11 pb-8 text-white">
            {/* ICON */}
            <div
              className=" w-[60px] h-[60px] mb-5 
              rounded-xl bg-white/10 backdrop-blur-md
              border border-white/30
              flex items-center justify-center text-[24px] text-white
              shadow-lg transition-all duration-400
              group-hover:scale-110 group-hover:-rotate-6"
             
            >
              {card.icon}
            </div>
              {/* GOLD LINE */}
              <div className="h-[3px] bg-[#C9992A] rounded-full mb-4
              w-10 transition-all duration-400 group-hover:w-24" />

              {/* TITLE */}
              <h2
                className="text-[24px] font-bold mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {card.heading}
              </h2>

              {/* PARA */}
              <p className="text-[15px] text-white/80 leading-[1.7] mb-6">
                {card.para}
              </p>

              {/* BUTTON */}
              <Link
                href="#"
                className="inline-flex items-center gap-2
                px-5 py-[9px] rounded-full
                text-[13px] font-semibold tracking-wide
                border border-white/40 text-white
                backdrop-blur-sm
                transition-all duration-300
                hover:bg-white hover:text-black"
              >
                Learn More
                <MdArrowRightAlt className="text-[18px]
                transition-transform duration-300
                group-hover:translate-x-1"/>
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}