"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion"; // adjust path as needed

function CountDown({ data }: any) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden py-8 p-6 md:p-12 bg-color3"
    >

      {/* Deep gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#0d1b2a] via-color3 to-color5" />

      {/* Red glow — top left */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: -80, left: -80, width: 340, height: 340,
          background: "radial-gradient(circle, rgba(203,0,0,0.16) 0%, transparent 70%)",
        }}
      />

      {/* Blue glow — bottom right */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: -80, right: -80, width: 340, height: 340,
          background: "radial-gradient(circle, rgba(0,64,148,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]">
        <defs>
          <pattern id="darkgrid" x="0" y="0" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M 44 0 L 0 0 0 44" fill="none" stroke="#ffce5b" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#darkgrid)" />
      </svg>

      {/* Top tri-color border */}
      <div
        className="absolute top-0 left-0 w-full h-[2px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, #CB0000, #ffce5b 50%, #004094)" }}
      />

      {/* Corner arcs */}
      <svg className="absolute top-0 left-0 w-28 h-28 pointer-events-none opacity-20">
        {[20, 36, 52].map((r) => (
          <path key={r} d={`M0 ${r} A${r} ${r} 0 0 1 ${r} 0`} stroke="#ffce5b" strokeWidth="0.7" fill="none" />
        ))}
      </svg>
      <svg className="absolute bottom-0 right-0 w-28 h-28 pointer-events-none opacity-20" style={{ transform: "rotate(180deg)" }}>
        {[20, 36, 52].map((r) => (
          <path key={r} d={`M0 ${r} A${r} ${r} 0 0 1 ${r} 0`} stroke="#ffce5b" strokeWidth="0.7" fill="none" />
        ))}
      </svg>

      {/* ── Section label ── */}
      <motion.div
        variants={fadeIn("down", "tween", 0, 0.5)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="relative z-10 flex items-center justify-center "
      >
       
        <p className="text-sm font-bold uppercase text-gray-200 mb-7">
          Our Impact
        </p>

      </motion.div>

      {/* ── Stats grid ── */}
      <motion.div
        variants={staggerContainer(0.15, 0.1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,206,91,0.08)",
        }}
      >
        {data?.map((counts: any, index: number) => (
          <motion.div
            key={counts?.id}
            variants={zoomIn(index * 0.12, 0.5)}
            className="group relative flex flex-col items-center justify-center text-center py-12 px-6 bg-color5 cursor-default"
            whileHover={{ backgroundColor: "#344a58" } as any}
            transition={{ duration: 0.25 }}
          >

            {/* Top accent bar — animates on hover */}
            <motion.div
              className="absolute top-0 left-0 w-full h-[2px]"
              initial={{ background: "transparent" }}
              whileHover={{
                background: "linear-gradient(90deg, #CB0000, #ffce5b, #004094)",
              }}
            />

            {/* Hover radial glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
              style={{
                background: "radial-gradient(circle at 50% 60%, rgba(255,206,91,0.07), transparent 65%)",
              }}
            />

            {/* Desktop vertical divider */}
            {index < (data?.length - 1) && (
              <div
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px"
                style={{
                  height: "40%",
                  background: "linear-gradient(to bottom, transparent, rgba(255,206,91,0.2), transparent)",
                }}
              />
            )}

            {/* Mobile dividers */}
            {index === 1 && (
              <>
                <div
                  className="lg:hidden absolute -bottom-px left-[5%] w-[90%] h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,206,91,0.2), transparent)" }}
                />
                <div
                  className="lg:hidden absolute top-[5%] right-0 h-[90%] w-px"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(255,206,91,0.2), transparent)" }}
                />
              </>
            )}

            {/* Icon badge */}
            <motion.div
              variants={fadeIn("up", "tween", index * 0.1 + 0.1, 0.4)}
              className="relative mb-5 w-14 h-14 flex items-center justify-center rounded-full text-color4"
              style={{
                border: "1px solid rgba(255,206,91,0.22)",
                background: "rgba(255,206,91,0.06)",
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {counts?.icon}
            </motion.div>

            {/* Number */}
            <motion.div
              variants={fadeIn("up", "tween", index * 0.1 + 0.2, 0.45)}
              className="mb-2 leading-none text-color4"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              {inView ? (
                <CountUp start={0} end={counts?.Value} duration={2.8} separator="," />
              ) : "0"}
              <span className="text-color4 opacity-85 ml-1" style={{ fontSize: "0.5em" }}>
                {counts?.suffix}
              </span>
            </motion.div>

            {/* Tri-color rule */}
            <div
              className="my-3 w-8 h-px"
              style={{ background: "linear-gradient(90deg, #CB0000, #ffce5b, #004094)" }}
            />

            {/* Title */}
            <motion.h3
              variants={fadeIn("up", "tween", index * 0.1 + 0.3, 0.4)}
              className="text-xs tracking-widest uppercase text-white/80 group-hover:text-white transition-colors duration-300"
            >
              {counts?.title}
            </motion.h3>

          </motion.div>
        ))}
      </motion.div>

      {/* Bottom tri-color border */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, #004094, #ffce5b 50%, #CB0000)" }}
      />

    </section>
  );
}

export default CountDown;