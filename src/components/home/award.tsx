"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";
import Buttonmain from "../global/button";
import { banner2, cl1, cl2, cl4, planebg2 } from "@/assets";

const checkpoints = [
  "Customer-Focused Approach",
  "Transparent Communication",
  "24x7 Quick Supports",
  "Complete Visa Solutions",
];

const avatars = [
  cl1,
  cl2,
  cl4,
];

export default function Award() {
  return (
    <section className="relative w-full bg-white p-3 py-6 md:p-16">

<div className="absolute bottom-0 w-full bg-color2 left-0 h-2/3" >
 <Image
          src={planebg2}
          alt="background"
          fill
          className="object-cover object-right-bottom opacity-70"
        />
</div>
      {/* ── OUTER ROUNDED DARK CONTAINER ── */}
      <div className="relative w-full max-w-7xl mx-auto bg-white  rounded-3xl overflow-hidden shadow-xl shadow-black/70 p-6  md:p-12 lg:p-14">

        <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">

          {/* ══════════════════════════════
              LEFT — Text Content
          ══════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 min-w-0"
          >
            {/* Label */}
            <p className="sm:text-sm font-bold uppercase text-xs !leading-[1.25] tracking-[0.22em] text-zinc-800 md:mb-4 mb-3">
             INDIA’S NO.1 Certified Immigration & Visa Experts
            </p>

            {/* Heading */}
            <h2 className="text-color2 font-bold text-3xl md:text-4xl !leading-tight mb-3 sm:mb-6">
            Secure your future abroad with the best immigration consultants in Delhi today.
            </h2>

            {/* Paragraph */}
            <p className="text-zinc-700  md:text-base sm:leading-relaxed mb-4 sm:mb-8 max-w-lg">
             We are a reliable immigration service provider with proven experience, helping individuals and families achieve their global goals with the right visa pathways
            </p>

            {/* 2×2 Checkpoints Grid */}
            <div className="grid  sm:grid-cols-2 gap-x-6 gap-y-4 sm:mb-10 mb-6">
              {checkpoints.map((item: string, i: number) => (
                  <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                  >
                  <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                  <FaCheck className="text-color1 text-sm" />
                  </span>
                  <span className="text-zinc-800 text-sm md:text-[15px]">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <Buttonmain href={"/contact-us"} text1={"Get Start Now"} text2={"Get Start Now"}/>
            </motion.div>
          {/* ══════════════════════════════
              RIGHT — Image + Red Card
          ══════════════════════════════ */}
            <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative flex-shrink-0 w-full lg:w-[46%]"
            >
{/* <div className="bg-gradient-to-tr from-red-500/70 to-red-900/60 w-52 h-52 rotate-45 -top-16 -right-24  absolute"/> */}

            {/* Main Image */}
            <div className="relative h-72 sm:h-[400px] shadow-lg w-full rounded-xl overflow-hidden"
              >
              <Image
                src={ banner2}
                alt="insurance"
                fill
                className="object-cover object-center h-full w-full "
              />
            </div>

            {/* ── RED OVERLAY CARD ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute bottom-0 -left-8
               w-[90%] md:w-[70%] bg-color1
                rounded-tl-2xl rounded-br-xl
                px-6 py-5 shadow-2xl"
            >
              {/* Avatars + Title row */}
              <div className="flex items-center gap-4 mb-3">
                {/* Overlapping avatars */}
                <div className="flex -space-x-3 flex-shrink-0">
                  {avatars?.map((src:any, i: number) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-color1 overflow-hidden relative"
                      style={{ zIndex: 10 - i }}
                    >
                      <Image
                        src={src}
                        alt="expert"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Contact link */}
                <Link
                  href={ "/contact"}
                  className="text-white font-bold text-base underline underline-offset-2
                    hover:text-white/80 transition-colors duration-200 leading-snug"
                >
          Start Your Journey With Us
                </Link>
              </div>

              {/* Description */}
              <p className="text-white/85 text-sm leading-relaxed">
               Our team is here to guide you with the right support for smooth and successful outcomes

              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}