"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { contat } from "@/assets";
import { FaLocationArrow, FaRegUserCircle } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineChat } from "react-icons/md";
import { motion } from "motion/react";
import { BiRightArrowAlt } from "react-icons/bi";

function Form() {


   const inputFields = [
    { name: 'name', label: 'Name', type: 'text', icon: FaRegUserCircle, placeholder: 'John Doe' },
    { name: 'phone', label: 'Phone', type: 'tel', icon: FiPhone, placeholder: '+1 (555) 000-0000' },
    { name: 'email', label: 'Email', type: 'email', icon: FiMail, placeholder: 'john@example.com' },
    { name: 'location', label: 'Location', type: 'text', icon: FaLocationArrow, placeholder: 'City, Country' },

    { name: 'subject', label: 'Subject', type: 'text', icon: IoChatboxEllipsesOutline, placeholder: 'How can we help?' }
  ];

  return (
      <div className="flex lg:px-24 md:px-20 sm:p-12 py-7 px-3 relative w-full">
       <div className="max-w-[1200px] mx-auto w-full flex flex-wrap items-stretch shadow-xl"><div className="md:w-[48%] w-full bg-gradient-to-r to-blue-500 from-blue-700 p-6 md:p-10 !pb-0"><h4 className="px-3 w-max py-2 border border-white text-white uppercase text-md font-medium mb-4">Contact Us</h4>
       <h5 className="md:text-5xl text-3xl text-white font-bold !leading-snug mb-6">Making visas simple with expert visa consultants in Delhi
</h5>
       <Image src={contat} alt="Contact" className="w-[82%]"/>
       </div>
       
       <div className="md:w-[52%] w-full bg-gradient-to-r to-zinc-100/40 from-zinc-50/40 py-6 px-3 md:p-10"> 
    <form className="bg-white backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
  <div className="sm:space-y-6 space-y-5">

    {/* First 4 inputs in 2-column grid */}
  <div className="grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 grid-cols-2 gap-x-8 gap-y-5">
      {inputFields.slice(0, 4).map((field) => {
        const Icon = field.icon;
        return (
          <div key={field.name} className="relative">
            <label className="block text-zinc-700 font-medium mb-2 text-sm sm:text-base">
              {field.label}
            </label>
            <div className="relative">
              <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-zinc-400 z-10">
                <Icon size={18} className="sm:w-5 sm:h-5" />
              </div>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-zinc-50 rounded-xl sm:rounded-2xl text-zinc-800 placeholder-zinc-400 transition-all duration-300 focus:outline-none focus:bg-white border border-zinc-200 text-sm sm:text-base shadow-inner"
                required
              />
            </div>
          </div>
        );
      })}
    </div>

    {/* Remaining inputs full width */}
    {inputFields.slice(4).map((field) => {
      const Icon = field.icon;
      return (
        <div key={field.name} className="relative">
          <label className="block text-zinc-700 font-medium mb-2 text-sm sm:text-base">
            {field.label}
          </label>
          <div className="relative">
            <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-zinc-400 z-10">
              <Icon size={18} className="sm:w-5 sm:h-5" />
            </div>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-zinc-50 rounded-xl sm:rounded-2xl text-zinc-800 placeholder-zinc-400 transition-all duration-300 focus:outline-none focus:bg-white border border-zinc-200 text-sm sm:text-base shadow-inner"
              required
            />
          </div>
        </div>
      );
    })}

    {/* Message */}
    <div className="relative">
      <label className="block text-zinc-700 font-medium mb-2 text-sm sm:text-base">
        Message
      </label>
      <div className="relative">
        <div className="absolute left-3 sm:left-4 top-4 text-zinc-400 z-10">
          <MdOutlineChat size={18} className="sm:w-5 sm:h-5" />
        </div>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us more about your inquiry..."
          className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-zinc-50 rounded-xl sm:rounded-2xl text-zinc-800 placeholder-zinc-400 transition-all duration-300 focus:outline-none focus:bg-white border border-zinc-200 resize-none text-sm sm:text-base shadow-inner"
          required
        />
      </div>
    </div>

    {/* Button */}
    <button
      type="submit"
      className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
    >
      {/* Animated gradient background */}
      <motion.span
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-pink-600 to-blue-600 bg-[length:200%_100%]"
      />

      {/* Glow effect */}
      <span className="absolute inset-0 rounded-full bg-white/30 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      <span className="relative z-10 flex items-center gap-2 sm:gap-3">
        Submit Now
        <BiRightArrowAlt
          size={20}
          className="sm:w-6 sm:h-6 transition-transform duration-500 group-hover:translate-x-2"
        />
      </span>
    </button>

  </div>
</form>

        </div></div>
    </div>
  );
}

export default Form;
