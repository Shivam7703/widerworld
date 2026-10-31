"use client";

import React, { useEffect, useState } from "react";
import Blogs from "@/components/home/blog";
import { getBlogs } from "@/lib/api";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PER_PAGE = 12;

export default function BlogClient() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadData() {
      setLoading(true);
      setError("");
      try {
        const data = await getBlogs(page, PER_PAGE);
        if (cancelled) return;
        setBlogs(data.data || []);
        setTotalPages(data.total_pages || 1);
      } catch (err: any) {
        if (cancelled) return;
        console.error("Blog fetch error:", err);
        setError("Blogs load nahi ho paye. Please thodi der baad try karein.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadData();
    return () => {
      cancelled = true;
    };
  }, [page]);

  function goToPage(p: number) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const pages: (number | string)[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (page > 3) pages.push("...");
    for (
      let i = Math.max(2, page - 1);
      i <= Math.min(totalPages - 1, page + 1);
      i++
    ) {
      pages.push(i);
    }
    if (page < totalPages - 2) pages.push("...");
    pages.push(totalPages);
  }

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
        <div className="w-16 h-[3px] bg-gradient-to-r from-color2 to-color1 rounded-full mx-auto mt-5" />
      </div>

      {/* Error */}
      {error && (
        <p className="relative z-10 mb-6 text-center text-sm text-red-600">
          {error}
        </p>
      )}

      {/* Blogs */}
      <Blogs isHome={false} blogs={blogs} loading={loading} />

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-12 relative z-10 flex-wrap">
          <button
            onClick={() => goToPage(Math.max(page - 1, 1))}
            disabled={page === 1 || loading}
            aria-label="Previous page"
            className="w-9 h-9 rounded-lg border border-color2/20 text-color2 text-sm font-bold
              disabled:opacity-30 disabled:cursor-not-allowed
              hover:bg-color2 hover:text-white transition-all duration-200"
          >
            <FaArrowLeft className="mx-auto" />
          </button>

          {pages.map((p, idx) =>
            p === "..." ? (
              <span
                key={`dots-${idx}`}
                className="w-9 h-9 flex items-center justify-center text-color2/50 text-sm font-bold"
              >
                ···
              </span>
            ) : (
              <button
                key={p}
                onClick={() => goToPage(p as number)}
                disabled={loading}
                className={`w-9 h-9 rounded-lg text-sm font-bold transition-all duration-200 ${
                  p === page
                    ? "bg-color2 text-white shadow-md scale-105"
                    : "border border-color2/20 text-color3 hover:bg-color2/10"
                }`}
              >
                {p}
              </button>
            )
          )}

          <button
            onClick={() => goToPage(Math.min(page + 1, totalPages))}
            disabled={page === totalPages || loading}
            aria-label="Next page"
            className="w-9 h-9 rounded-lg border border-color2/20 text-color2 text-sm font-bold
              disabled:opacity-30 disabled:cursor-not-allowed
              hover:bg-color2 hover:text-white transition-all duration-200"
          >
            <FaArrowRight className="mx-auto" />
          </button>
        </div>
      )}
    </section>
  );
}