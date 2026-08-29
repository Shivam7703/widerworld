"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronRight, FaRegUserCircle, FaLocationArrow, FaDownload } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineChat } from "react-icons/md";
import { getBlogs } from "@/lib/api"; // Import kiya

// ... (Baaki constants jaise data, coachingData, inputFields waise hi rahenge)

export default function BlogAside() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    async function loadLatestBlogs() {
      try {
        const res = await getBlogs(1); // Page 1 se data fetch kiya
        setBlogs(res.data?.slice(0, 12) || []); // Sirf top 3 blogs
      } catch (err) {
        console.error("Failed to load latest blogs:", err);
      }
    }
    loadLatestBlogs();
  }, []);

  return (
    <div className="space-y-6">
      {/* ... (Form Section waise hi rahega) */}

      {/* Latest Blogs Section - Updated */}
      <div className="bg-gradient-to-br from-white to-zinc-100 p-6 rounded-2xl border border-blue-100 shadow-lg">
        <h4 className="mb-5 text-xl md:text-2xl font-bold text-zinc-900 font2">
          Latest Blogs
        </h4>
        <div className="space-y-3">
          {blogs.map((blog: any) => (
            <Link
              key={blog.ID}
              href={`/${blog.post_name}`}
              className="group block"
            >
              <div className="relative bg-white rounded-2xl border border-zinc-200 transition-all duration-300 hover:border-blue-500 hover:shadow-xl p-2 flex gap-4 items-stretch">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  {/* Agar image field structure alag hai to adjust karein */}
                  <Image
                    src={blog.images?.[0]?.["image:loc"] ? `https://widerworld.in${blog.images[0]["image:loc"]}` : "/default-blog.jpg"}
                    alt={blog.post_title}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <h5 className="text-sm md:text-base font-semibold text-zinc-900 line-clamp-2 leading-snug group-hover:text-blue-600">
                    {blog.post_title}
                  </h5>
                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-blue-600">
                    <span>Read Article</span>
                    <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}