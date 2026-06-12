"use client";

import React, { useEffect, useState } from "react";
import Blogs from "@/components/home/blog";
import { getBlogs } from "@/lib/api"; // Import kiya
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        // getBlogs function use kiya
        const data = await getBlogs(page);
        setTotalPages(data.total_pages || 1);
        // setTotal(data.total || 0);
      } catch (err) {
        console.error("Blog fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [page]);

  return (
    <section className="lg:px-20 xl:px-28 md:px-16 sm:p-12 p-6 relative w-full overflow-hidden bg-gradient-to-br from-[#f0f4fb] via-[#e8eef8] to-[#f5f0e8]">
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-color2/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-color1/7 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 relative z-10">
        <span className="text-color2 font-bold uppercase text-sm tracking-[0.22em] mb-4">
          All Blogs
        </span>
        <h2 className="text-color3 font-bold !leading-tight text-2xl md:text-4xl max-w-2xl mx-auto">
          Insights & Immigration Updates
        </h2>
        {/* <p className="text-gray-400 text-sm mt-2">Total {total} blogs</p> */}
        <div className="w-16 h-[3px] bg-gradient-to-r from-color2 to-color1 rounded-full mx-auto mt-5" />
      </div>

      {/* Blogs Component */}
      <Blogs isHome={false} page={page} />

      {/* Pagination */}
     {!loading && totalPages > 1 && (
  <div className="flex items-center justify-center gap-1.5 mt-12 relative z-10 flex-wrap">
    
    

    {/* Prev */}
    <button
      onClick={() => setPage((p) => Math.max(p - 1, 1))}
      disabled={page === 1}
      className="w-9 h-9 rounded-lg border border-color2/20 text-color2 text-sm font-bold
        disabled:opacity-30 disabled:cursor-not-allowed
        hover:bg-color2 hover:text-white transition-all duration-200"
    >
<FaArrowLeft className="mx-auto"/>
    </button>

    {/* Page Numbers with ... */}
    {(() => {
      const pages: (number | string)[] = [];

      if (totalPages <= 7) {
        // Show all if small
        for (let i = 1; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        if (page > 3) pages.push("...");
        for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
          pages.push(i);
        }
        if (page < totalPages - 2) pages.push("...");
        pages.push(totalPages);
      }

      return pages.map((p, idx) =>
        p === "..." ? (
          <span key={`dots-${idx}`} className="w-9 h-9 flex items-center justify-center text-color2/50 text-sm font-bold">
            ···
          </span>
        ) : (
          <button
            key={p}
            onClick={() => setPage(p as number)}
            className={`w-9 h-9 rounded-lg text-sm font-bold transition-all duration-200
              ${
                p === page
                  ? "bg-color2 text-white shadow-md scale-105"
                  : "border border-color2/20 text-color3 hover:bg-color2/10"
              }`}
          >
            {p}
          </button>
        )
      );
    })()}

    {/* Next */}
    <button
      onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
      disabled={page === totalPages}
      className="w-9 h-9 rounded-lg border border-color2/20 text-color2 text-sm font-bold
        disabled:opacity-30 disabled:cursor-not-allowed
        hover:bg-color2 hover:text-white transition-all duration-200"
    >
<FaArrowRight className="mx-auto"/>
    </button>

   

  </div>
)}
    </section>
  );
}