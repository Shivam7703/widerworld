"use client";

import React, { useEffect, useState } from "react";
import Blogs from "@/components/home/blog";
import { getBlogs } from "@/lib/api"; // Import kiya

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        // getBlogs function use kiya
        const data = await getBlogs(page);
        setTotalPages(data.total_pages || 1);
        setTotal(data.total || 0);
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
        <p className="text-gray-400 text-sm mt-2">Total {total} blogs</p>
        <div className="w-16 h-[3px] bg-gradient-to-r from-color2 to-color1 rounded-full mx-auto mt-5" />
      </div>

      {/* Blogs Component */}
      <Blogs isHome={false} page={page} />

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12 relative z-10 flex-wrap">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-lg border border-color2/20 text-color2 text-sm font-semibold
              disabled:opacity-40 disabled:cursor-not-allowed
              hover:bg-color2 hover:text-white transition-all duration-200"
          >
            ← Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-10 h-10 rounded-lg text-sm font-bold transition-all duration-200
                ${
                  p === page
                    ? "bg-color2 text-white shadow-md"
                    : "border border-color2/20 text-color3 hover:bg-color2/10"
                }`}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-lg border border-color2/20 text-color2 text-sm font-semibold
              disabled:opacity-40 disabled:cursor-not-allowed
              hover:bg-color2 hover:text-white transition-all duration-200"
          >
            Next →
          </button>
        </div>
      )}
    </section>
  );
}