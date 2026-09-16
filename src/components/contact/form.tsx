"use client";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { MdOutlineChat, MdSubject } from "react-icons/md";
import { BiRightArrowAlt } from "react-icons/bi";
import InquiryForm from "../global/inquiryform";
import { TbWorld } from "react-icons/tb";



const pointers = [
  "8+ years of experience as leading Immigration Consultants in India",
  "High visa success rate across multiple categories and countries",
  "Expert consultation for 150+ global destinations",
  "End-to-end support from application to final decision",
  "Clear and transparent process with no hidden charges",
  "Dedicated team available 6 days a week for continuous assistance",
];

function Form() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f4fb] via-[#e8eef8] to-[#f5f0e8] lg:px-20 md:px-14 sm:px-10 px-4 py-16 md:py-24">

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,64,148,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,64,148,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-color2 to-color1" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-color2/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-color1/7 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-wrap items-stretch rounded-3xl overflow-hidden
          shadow-[0_20px_60px_rgba(26,47,74,0.14)]">

          {/* ── LEFT: Info Panel ── */}
          <div className="md:w-[46%] w-full bg-color3 relative overflow-hidden p-10 md:p-12 flex flex-col justify-between">

            {/* Pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            {/* Blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-color2/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-52 h-52 bg-color1/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              {/* Label */}
              <h4 className="text-white font-bold uppercase text-xs tracking-[0.22em] mb-4 sm:mb-6">
                Contact Us
              </h4>

              {/* Heading */}
              <h2
                className="text-white font-bold  text-2xl md:text-4xl !leading-tight mb-5"
              >
                Simplifying Your Visa Journey with Trusted Experts
              </h2>

              <p className="text-white/80 leading-relaxed mb-4 text-sm">
                Get personalized assistance from experienced Immigration Consultants in India who guide you at every step. From profile evaluation to final approval, we make your immigration process smooth, transparent, and stress-free.
              </p>

              {/* Divider */}
              <div className="w-12 h-[2px] bg-gradient-to-r from-color2 to-color1 rounded-full mb-6" />

              {/* Pointers */}
              <ul className="flex flex-col gap-3">
                {pointers.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-color2 to-color1 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-white text-base leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom stat strip */}

          </div>

          {/* ── RIGHT: Form Panel ── */}
          <div className="md:w-[54%] w-full bg-white p-8 md:p-12">

            <h3
              className="text-color3 font-black text-2xl mb-1"
            >
              Send Us a Message
            </h3>
            <p className="text-gray-600 text-sm mb-8">Fill in the form and our team will get back to you within 24 hours.</p>

            <InquiryForm
  icons={{ name: FaRegUserCircle, phone: FiPhone, email: FiMail, country: TbWorld, subject: MdSubject, message: MdOutlineChat }}
  buttonContent={<>Submit Now <span className="w-11 h-11 flex items-center justify-center bg-color1 text-white group-hover:bg-color2 rounded-full"><BiRightArrowAlt size={20} /></span></>}
  classNames={{
    form: "space-y-5",
    grid: "grid sm:grid-cols-2 gap-5",
    label: "block text-color3 font-semibold text-xs uppercase tracking-[0.12em] mb-2",
    inputWrap: "relative",
 icon: "absolute left-2.5 top-1/2 -translate-y-1/2 text-color2 opacity-60 z-10",
  textareaIcon: "absolute left-2.5 top-4 text-color2 opacity-60 z-10", 
      input: "w-full pl-8 pr-4 py-3 bg-zinc-100 rounded-xl text-color3 placeholder:text-zinc-400 text-sm border border-color2/50 focus:outline-none focus:border-color2/35 focus:bg-white transition-all duration-200",
    textarea: "w-full pl-8 pr-4 py-3 bg-zinc-100 rounded-xl text-color3 placeholder:text-zinc-400 text-sm border border-color2/50 focus:outline-none focus:border-color2/35 focus:bg-white transition-all duration-200 resize-none",
    button: "group inline-flex items-center gap-4 border-2 border-color3 py-1 pr-1 pl-4 rounded-full overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300",
  }}
/>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Form;