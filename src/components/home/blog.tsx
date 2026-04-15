import React from "react";
import { blogData as data } from "@/data/homeData";
import Image from "next/image";
import { FaArrowRight, FaUser } from "react-icons/fa6";
import Link from "next/link";
import { box3 } from "@/assets";

export default function Blogs({ isHome }: any) {
  return (
    <section
      className={`${
        isHome ? "lg:px-20 xl:px-28 md:px-16 sm:p-12 p-6" : "px-3 pb-5"
      } relative w-full overflow-hidden bg-gradient-to-br from-[#f0f4fb] via-[#e8eef8] to-[#f5f0e8]`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-color2 to-color1" />

      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-color2/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-color1/7 rounded-full blur-[100px] pointer-events-none" />

      {/* ── HEADER ── */}
      {isHome && (
        <div className="text-center mb-8 sm:mb-12 relative z-10">
          {data?.title1 && (
            <span className="text-color2 font-bold uppercase text-sm tracking-[0.22em] mb-4">
              {data.title1}
            </span>
          )}
          <h2
            className="text-color3 font-black !leading-tight text-2xl md:text-4xl max-w-2xl mx-auto"
          >
            {data.title2}
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-color2 to-color1 rounded-full mx-auto mt-5" />
        </div>
      )}

      {/* ── GRID ── */}
      <div
        className={`grid ${
          !isHome ? "" : "lg:grid-cols-4"
        } sm:grid-cols-2 gap-8  mx-auto relative z-10`}
      >
        {(isHome ? data?.blog?.slice(0, 4) : data?.blog)?.map(
          (blogs: any, index: number) => (
            <div
              key={index}
              className="group bg-white rounded-2xl w-full overflow-hidden
                border border-color2/10
                shadow-[0_4px_20px_rgba(26,47,74,0.07)]
                hover:shadow-[0_16px_48px_rgba(0,64,148,0.13)]
                hover:border-color2/25 hover:-translate-y-2
                transition-all duration-300"
            >
              {/* ── IMAGE ── */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={box3}
                  alt={blogs.heading}
                  width={500}
                  height={350}
                  className="w-full h-full object-cover
                    group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-color3/40 via-transparent to-transparent" />

                {/* Date badge */}
                {blogs?.date && (
                  <div className="absolute bottom-4 right-4 bg-color1 text-white text-center px-4 py-3 rounded-xl shadow-lg min-w-[52px]">
                    <p className="text-2xl font-black leading-none">
                      {blogs.date.split(" ")[0]}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider font-semibold mt-0.5">
                      {blogs.date.split(" ")[1]}
                    </p>
                  </div>
                )}

                {/* Tag badge */}
                {blogs?.tag && (
                  <div className="absolute top-4 left-4 bg-color2 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    {blogs.tag}
                  </div>
                )}
              </div>

              {/* ── CONTENT ── */}
              <div className="p-5 sm:p-6 space-y-4 text-left">

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <p>
                    Post By:{" "}
                    <span className="font-semibold text-color3">Admin</span>
                  </p>
                  <div className="w-8 h-8 rounded-full bg-color2/8 border border-color2/15 flex items-center justify-center">
                    <FaUser className="text-color2 text-xs" />
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-color2/10" />

                {/* Title */}
                <Link
                  href={`/blogs/${encodeURIComponent(
                    blogs.heading.toLowerCase().replace(/\s+/g, "-")
                  )}`}
                >
                  <h2
                    className="text-lg sm:text-xl font-bold leading-snug text-color3
                      group-hover:text-color1
                      transition-colors duration-300 line-clamp-2 cursor-pointer"
                  >
                    {blogs.heading}
                  </h2>
                </Link>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {blogs?.para?.slice(0, 150)}...
                </p>

                {/* Divider */}
                <div className="h-px bg-color2/10" />

                {/* Read More */}
                <Link
                  href={`/blogs/${encodeURIComponent(
                    blogs.heading.toLowerCase().replace(/\s+/g, "-")
                  )}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold
                    text-color2 group-hover:text-color1
                    transition-all duration-300 hover:gap-3"
                >
                  Read More
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}