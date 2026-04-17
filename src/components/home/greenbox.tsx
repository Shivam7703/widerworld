"use client";
import { box1, box2, box3, mission, plane, pro1, vision } from "@/assets";
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
      img: mission,
      heading: "Visa Application Support",
      para: "Complete assistance with visa filing, ensuring every step is handled accurately for better approval chances",
      icon: <BsPassportFill />,
      bg: "bg-white border",
    },
    {
      id: 2,
      img: plane,
      heading: "Documentation Assistance",
      para: "Proper guidance for preparing and verifying all required documents to avoid errors and delays.",
      icon: <RiSpeedMiniFill />,
      bg: "bg-white border",
    },
    {
      id: 3,
      img: vision,
      heading: "Client Support Services",
      para: "Dedicated support for every client with clear communication and guidance throughout the entire process.",
      icon: <RiUserCommunityFill />,
      bg: "bg-white border",
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

             <div className="h-56 w-56 bg-gradient-to-tr from-red-500 to-red-700 rotate-45 z-0 absolute -top-32 -right-32 object-contain"/>
             <div className="h-56 w-56 bg-gradient-to-tr from-red-500 to-red-700 opacity-30 rotate-45 z-0 absolute -top-4 -right-44 object-contain"/>

            {/* BODY */}
            <div className="px-7 pt-11 pb-8 text-white">
            {/* ICON */}
            <div
              className=" w-[60px] h-[60px] mb-5 
              rounded-xl bg-color5 
              flex items-center justify-center text-[24px] text-white
               transition-all duration-400 shadow-md shadow-black/35
              group-hover:scale-110 group-hover:-rotate-6"
             
            >
              {card.icon}
            </div>
              {/* GOLD LINE */}
              <div className="h-[3px] bg-color1 rounded-full mb-4
              w-10 transition-all duration-400 group-hover:w-24" />

              {/* TITLE */}
              <h2
                className="text-[24px] font-bold text-color3 mb-3"
              
              >
                {card.heading}
              </h2>

              {/* PARA */}
              <p className="text-[15px] text-black/80 leading-[1.7] mb-6">
                {card.para}
              </p>

              {/* BUTTON */}
              <Link
                href="#"
                className="inline-flex items-center gap-2
                px-5 py-[9px] rounded-full
                text-[13px] font-semibold tracking-wide
                border border-black/40 text-black
                backdrop-blur-sm
                transition-all duration-300
                hover:bg-black hover:text-white"
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