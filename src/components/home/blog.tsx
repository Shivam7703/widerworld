"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaUser } from "react-icons/fa6";
import { box1 } from "@/assets";
import { getBlogs } from "@/lib/api";

interface Blog {
  ID: number;
  post_title: string;
  post_name: string;
  post_date: string;
  description: string;
  images: { "image:loc": string }[] | null;
}

interface Props {
  isHome?: boolean;
  blogs?: Blog[];      // parent se data aaye to fetch nahi hoga
  loading?: boolean;   // parent ki loading state
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function getDateParts(dateStr: string) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return { day: "--", month: "---", year: "" };
  return {
    day: String(d.getDate()).padStart(2, "0"),
    month: MONTHS[d.getMonth()],
    year: String(d.getFullYear()),
  };
}

function getImageUrl(images: Blog["images"]) {
  if (!images || images.length === 0) return null;
  const loc = images[0]?.["image:loc"];
  if (!loc) return null;
  return loc.startsWith("http") ? loc : `https://widerworld.in${loc}`;
}

export default function Blogs({
  isHome,
  blogs: blogsProp,
  loading: loadingProp,
}: Props) {
  const [ownBlogs, setOwnBlogs] = useState<Blog[]>([]);
  const [ownLoading, setOwnLoading] = useState(!blogsProp);

  useEffect(() => {
    if (blogsProp) return; // parent ne data diya hai

    let cancelled = false;
    async function fetchBlogs() {
      setOwnLoading(true);
      try {
        const data = await getBlogs(1, 4); // home par sirf 4
        if (!cancelled) setOwnBlogs(data.data || []);
      } catch (err) {
        console.error("Blog fetch error:", err);
      } finally {
        if (!cancelled) setOwnLoading(false);
      }
    }
    fetchBlogs();
    return () => {
      cancelled = true;
    };
  }, [blogsProp]);

  const blogs = blogsProp ?? ownBlogs;
  const loading = loadingProp ?? ownLoading;

  // pehli baar load ho raha ho tabhi "Loading" dikhao
  // (page badalte waqt purane blogs dikhte rahenge, flicker nahi hoga)
  if (loading && blogs.length === 0) {
    return (
      <div className="w-full flex justify-center py-20">
        <p className="text-color2 font-semibold animate-pulse">
          Loading blogs...
        </p>
      </div>
    );
  }

  if (!loading && blogs.length === 0) {
    return (
      <div className="w-full flex justify-center py-20">
        <p className="text-gray-500 font-medium">No blogs found.</p>
      </div>
    );
  }

  return (
    <section
      className={`${
        isHome ? "lg:px-20 xl:px-28 md:px-16 sm:p-12 p-6" : "px-3 pb-5"
      } relative w-full overflow-hidden bg-blue-50`}
    >
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-color2/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-color1/7 rounded-full blur-[100px] pointer-events-none" />

      {isHome && (
        <div className="text-center mb-8 sm:mb-12 relative z-10">
          <span className="text-color2 text-xs tracking-[0.22em] font-bold uppercase mb-4">
            Latest Blogs
          </span>
          <h2 className="text-color3 font-bold text-3xl md:text-5xl !leading-tight mb-6 max-w-3xl mx-auto">
            Latest Insight and{" "}
            <span className="text-color1">Updated Blogs</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-color2 to-color1 mx-auto rounded-full" />
        </div>
      )}

      <div
        className={`grid ${
          isHome ? "lg:grid-cols-4" : "lg:grid-cols-3"
        } sm:grid-cols-2 gap-8 mx-auto relative z-10 ${
          loading ? "opacity-60 transition-opacity" : ""
        }`}
      >
        {blogs.map((blog) => {
          const imageUrl = getImageUrl(blog.images);
          const { day, month, year } = getDateParts(blog.post_date);

          return (
            <div
              key={blog.ID}
              className="group bg-white rounded-2xl w-full overflow-hidden border border-color2/10 shadow-[0_4px_20px_rgba(26,47,74,0.07)] hover:shadow-[0_16px_48px_rgba(0,64,148,0.13)] hover:border-color2/25 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={imageUrl || box1}
                  alt={blog.post_title}
                  width={500}
                  height={350}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-color3/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 bg-color1 text-white text-center px-4 py-3 rounded-xl shadow-lg min-w-[52px]">
                  <p className="text-2xl font-black leading-none">{day}</p>
                  <p className="text-[10px] uppercase tracking-wider font-semibold mt-0.5">
                    {month} {year}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-4 text-left">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <p>
                    Post By:{" "}
                    <span className="font-semibold text-color3">Admin</span>
                  </p>
                  <div className="w-8 h-8 rounded-full bg-color2/8 border border-color2/15 flex items-center justify-center">
                    <FaUser className="text-color2 text-xs" />
                  </div>
                </div>
                <div className="h-px bg-color2/10 !mb-2" />
                <Link href={`/${blog.post_name}/`}>
                  <h2 className="text-lg sm:text-xl font-bold leading-snug text-color3 group-hover:text-color1 transition-colors duration-300 line-clamp-2 cursor-pointer">
                    {blog.post_title}
                  </h2>
                </Link>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {blog.description
                    ? blog.description.length > 150
                      ? blog.description.slice(0, 150) + "..."
                      : blog.description
                    : "Read this blog to know more..."}
                </p>
                <div className="h-px bg-color2/10" />
                <Link
                  href={`/${blog.post_name}/`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-color2 group-hover:text-color1 transition-all duration-300 hover:gap-3"
                >
                  Read More
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}