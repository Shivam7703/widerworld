"use client";
import React from "react";
import { motion } from "framer-motion";
import { BiRightArrowAlt, BiEnvelope } from "react-icons/bi";
import {
  FaCheckCircle,
  FaBriefcase,
  FaStar,
  FaUserTie,
  FaFileAlt,
  FaChartLine,
  FaUsers,
  FaHeadset,
  FaDesktop,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { bann, touristvisa } from "@/assets";

/* ─── Animation helpers ─────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.65, delay },
  },
});

const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: -36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.65, delay },
  },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: 36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.65, delay },
  },
});

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

/* ─── Data ───────────────────────────────────────────────────── */
const traits = [
  "Passionate about immigration and global mobility",
  "Detail-oriented and responsible",
  "Strong communicators",
  "Client-focused and solution-driven",
  "Eager to learn and grow",
];

const roles = [
  { icon: <FaUserTie />, title: "Immigration Consultants" },
  { icon: <FaFileAlt />, title: "Case Processing Executives" },
  { icon: <FaDesktop />, title: "Documentation Specialists" },
  { icon: <FaChartLine />, title: "Business Development Executives" },
  { icon: <FaUsers />, title: "Client Relationship Managers" },
  { icon: <FaHeadset />, title: "Administrative Support Staff" },
];

const expectations = [
  "Professional training and mentorship",
  "Performance-based growth opportunities",
  "Positive and respectful workplace culture",
  "Competitive compensation",
  "Long-term career development",
];

/* ─── Sub-components ─────────────────────────────────────────── */
function SectionPill({
  label,
  color,
}: {
  label: string;
  color: "blue" | "purple" | "amber";
}) {
  const styles = {
    blue: "border-blue-200 bg-blue-50 text-blue-700",
    purple: "border-violet-200 bg-violet-50 text-violet-700",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
  };
  return (
    <span
      className={`inline-block border text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full ${styles[color]}`}
    >
      {label}
    </span>
  );
}

/* floating stat badge that overlaps the image */
function FloatingBadge({
  value,
  label,
  pos,
}: {
  value: string;
  label: string;
  pos: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.55,
        duration: 0.4,
        type: "spring",
        stiffness: 200,
      }}
      className={`absolute ${pos} bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-20 border border-zinc-100`}
    >
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-extrabold text-sm leading-none shrink-0">
        {value}
      </div>
      <p className="text-zinc-700 text-xs font-semibold leading-tight max-w-[88px]">
        {label}
      </p>
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
export default function WhoWeAreLooking() {
  return (
    <section
      className="relative overflow-hidden py-24 px-4 sm:px-8"
      style={{
        background:
          "radial-gradient(ellipse 90% 55% at 50% -8%, #dde5ff 0%, #fafaf7 52%)",
      }}
    >
      {/* Top edge line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-9 md:space-y-16">
        {/* ══════════════════════════════════════
            BLOCK 1 — Who We Are Looking For
            lg: text (5 cols) | image (7 cols)
        ══════════════════════════════════════ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* LEFT — text */}
          <motion.div
            variants={fadeRight(0)}
            className="lg:col-span-5 space-y-7"
          >
            <SectionPill label="Ideal Candidates" color="blue" />

            <h2 className="font-extrabold text-[clamp(28px,3.2vw,50px)] leading-[1.08] text-zinc-900">
              Who We Are{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Looking For
              </span>
            </h2>

            <p className="text-zinc-500 text-base lg:text-lg leading-relaxed">
              We are always open to meeting individuals who bring passion,
              dedication, and a client-first mindset to everything they do.
            </p>

            <motion.ul variants={stagger} className="space-y-3">
              {traits.map((t, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp(0.05 * i)}
                  className="flex items-center gap-3 bg-white border border-blue-100 rounded-2xl px-5 py-3.5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
                >
                  <FaCheckCircle className="text-blue-500 shrink-0 text-base" />
                  <span className="text-zinc-700 text-sm lg:text-[15px] font-medium">
                    {t}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <p className="text-zinc-400 text-sm lg:text-[15px] leading-relaxed">
              Whether you are experienced in immigration services, sales,
              documentation, compliance, marketing, or customer support — we
              welcome talent that is committed and driven.
            </p>
          </motion.div>

          {/* RIGHT — image */}
          <motion.div
            variants={fadeLeft(0.12)}
            className="lg:col-span-7 relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/11]">
              <Image
                src={bann}
                alt="Professional team collaborating in a modern office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              {/* subtle tint */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-blue-900/10" />
            </div>

            {/* Floating stat badges */}
            <FloatingBadge
              value="500+"
              label="Clients Served Globally"
              pos="-bottom-5 -left-5"
            />
            <FloatingBadge
              value="98%"
              label="Client Satisfaction Rate"
              pos="-top-5 -right-5"
            />

            {/* Decorative rings */}
            <div className="pointer-events-none absolute -z-10 -bottom-10 -right-10 w-80 h-80 rounded-full border-2 border-dashed border-indigo-200" />
            <div className="pointer-events-none absolute -z-10 -top-10 -left-10 w-56 h-56 rounded-full bg-blue-100/50 blur-3xl" />
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

        {/* ══════════════════════════════════════
            BLOCK 2 — What You Can Expect
            lg: image (6 cols) | text (6 cols)
        ══════════════════════════════════════ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* LEFT — image (order-2 on mobile, order-1 on lg) */}
          <motion.div
            variants={fadeRight(0.12)}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src={touristvisa}
                alt="Happy diverse team working together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-violet-900/20 via-transparent to-pink-900/10" />
            </div>

            <FloatingBadge
              value="10+"
              label="Years in Immigration"
              pos="-bottom-5 -right-5"
            />
            <FloatingBadge
              value="50+"
              label="Expert Team Members"
              pos="-top-5 -left-5"
            />

            <div className="pointer-events-none absolute -z-10 -bottom-10 -left-10 w-80 h-80 rounded-full border-2 border-dashed border-violet-200" />
            <div className="pointer-events-none absolute -z-10 -top-10 -right-10 w-56 h-56 rounded-full bg-violet-100/50 blur-3xl" />
          </motion.div>

          {/* RIGHT — text */}
          <motion.div
            variants={fadeLeft(0)}
            className="lg:col-span-6 space-y-7 order-1 lg:order-2"
          >
            <SectionPill label="Employee Benefits" color="purple" />

            <h2 className="font-extrabold text-[clamp(28px,3.2vw,50px)] leading-[1.08] text-zinc-900">
              What You Can{" "}
              <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
                Expect
              </span>
            </h2>

            <p className="text-zinc-500 text-base lg:text-lg leading-relaxed">
              We believe that when our team grows, the company grows. Here's
              what we offer to every team member.
            </p>

            <motion.ul variants={stagger} className="space-y-4">
              {expectations.map((e, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp(0.05 * i)}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
                    {i + 1}
                  </div>
                  <span className="text-zinc-700 text-sm lg:text-[15px] font-medium">
                    {e}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Quote card */}
            <motion.div
              variants={fadeUp(0.3)}
              className="rounded-2xl px-6 py-5 text-white shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%)",
              }}
            >
              <FaStar className="text-yellow-300 mb-2 text-xl" />
              <p className="text-sm lg:text-base font-medium leading-relaxed italic">
                "We believe that when our team grows, the company grows."
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

        {/* ══════════════════════════════════════
            BLOCK 3 — Current Opportunities
        ══════════════════════════════════════ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-10"
        >
          <motion.div variants={fadeUp(0)} className="text-center space-y-4">
            <SectionPill label="We're Hiring" color="amber" />
            <h2 className="font-extrabold text-[clamp(28px,3.2vw,50px)] leading-[1.08] text-zinc-900">
              Current{" "}
              <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
                Opportunities
              </span>
            </h2>
            <p className="text-zinc-500 text-sm lg:text-base max-w-xl mx-auto leading-relaxed">
              We regularly hire for the following roles. If you don't see a
              match, share your resume — we're always looking for exceptional
              talent.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5"
          >
            {roles.map((r, i) => (
              <motion.div
                key={i}
                variants={fadeUp(0.06 * i)}
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="group flex flex-col items-center text-center gap-3 bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-indigo-200 cursor-default transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 text-2xl group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-violet-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  {r.icon}
                </div>
                <p className="text-zinc-700 text-xs lg:text-sm font-semibold leading-snug group-hover:text-indigo-700 transition-colors duration-300">
                  {r.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ══════════════════════════════════════
            BLOCK 4 — CTA Band
        ══════════════════════════════════════ */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-3xl px-8 lg:px-20 py-16 lg:py-24 text-white text-center shadow-2xl"
          style={{
            background:
              "linear-gradient(135deg, #1d4ed8 0%, #4f46e5 45%, #db2777 100%)",
          }}
        >
          {/* Orbs */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          {/* Dot grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <FaBriefcase className="text-yellow-300 text-5xl mx-auto" />

            <h2 className="font-extrabold text-[clamp(28px,4vw,54px)] leading-tight">
              Join Our Team
            </h2>

            <p className="text-white/80 text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
              If you are ready to build a meaningful career in the immigration
              industry, we would love to hear from you. Let's build global
              success stories together.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="mailto:info@WiderWorldcoreoverseas.com"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-7 py-4 rounded-full text-sm lg:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <BiEnvelope size={20} />
                info@WiderWorldcoreoverseas.com
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 border-2 border-white/70 text-white font-bold px-7 py-4 rounded-full text-sm lg:text-base hover:bg-white hover:text-indigo-700 transition-all duration-300"
              >
                Connect with HR
                <BiRightArrowAlt
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <p className="text-white/50 text-xs lg:text-sm pt-1">
              We respond to all applications within 3–5 business days
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />
    </section>
  );
}
