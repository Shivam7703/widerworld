"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
import { faq2, plane2 } from "@/assets";

export default function Ripple() {
  return (
    <motion.div
      variants={fadeIn("left", "tween", 0.3, 1)}
      className="md:w-[46%] w-full min-h-[500px] relative group flex items-center justify-center"
    >
      {/* Background Soft Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full h-full min-h-[550px] rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-6 overflow-hidden flex items-end justify-center">
        
        {/* Decorative Floating Plane Image */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 right-6 md:right-0 w-48 sm:w-64 z-20 pointer-events-none drop-shadow-xl p-2"
        >
          {/* <Image
            src={plane2}
            alt="Widerworld Immigration"
            className="w-full h-auto object-contain"
          /> */}
        </motion.div>

        {/* Main Character / FAQ Image Container */}
        <div className="relative w-full h-full z-10 md:min-h-[550px] min-h-[400px]">
          <Image
            src={faq2}
            alt="FAQ Expert"
            fill
            priority
            className="object-contain h-full object-bottom drop-shadow-2xl"
          />
        </div>

        {/* Floating Trust Badge (Bottom Left) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-8 left-4 sm:left-8 z-30 bg-white/80 backdrop-blur-md border border-black/20 p-3 rounded-2xl shadow-lg flex items-center gap-3"
        >
          <div className="py-3 px-1 rounded-xl bg-color1 text-white flex items-center justify-center font-bold text-lg">
            99%
          </div>
          <div>
            <p className=" font-semibold  text-gray-900 ">
              Success Rate
            </p>
            <p className=" text-sm text-gray-600">
              Verified Visas
            </p>
          </div>
        </motion.div>

        {/* Floating Support Badge (Top Left) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute top-8 left-4 sm:left-8 z-30 bg-white/80  backdrop-blur-md border border-black/20 px-4 py-2 rounded-3xl shadow-md "
        ><p className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm font-medium text-gray-800">
            24/7 Expert Support
          </span> </p>
        </motion.div>
      </div>
    </motion.div>
  );
}