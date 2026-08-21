"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { box1 } from "@/assets";
import { newsData } from "@/data/newsData";
import { createSlug } from "@/utils/slug";


interface Props {
  isHome?: boolean;
  page?: number;
}

export default function NewsSection({ isHome, page = 1 }: Props) {
  // Home page par 4 blogs dikhayenge, baki jagah page size ke hisab se
  const perPage = isHome ? 4 : 12;
  const startIndex = isHome ? 0 : (page - 1) * perPage;
  const displayNews = newsData.slice(startIndex, startIndex + perPage);

  return (
    <section
      className={`${isHome ? "lg:px-20 xl:px-28 md:px-16 sm:p-12 p-6" : "px-3 pb-5"
        } relative w-full overflow-hidden `}
    >


      {isHome && (
        <div className="text-center mb-8 sm:mb-12 relative z-10">
          <span className="text-color2 text-xs tracking-[0.22em] font-bold uppercase mb-4 block">
            Latest News
          </span>
          <h2 className="text-color3 font-bold text-3xl md:text-5xl !leading-tight mb-6 max-w-3xl mx-auto">
            Latest News and <span className="text-color1">Updates</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-color2 to-color1 mx-auto rounded-full" />
        </div>
      )}

      <div
        className={`grid ${isHome ? "lg:grid-cols-4" : "lg:grid-cols-3"
          } sm:grid-cols-2 gap-8 md:gap-12 mx-auto relative z-10`}
      >
        {displayNews.map((news: any) => {
          const blogUrl = `/news/${createSlug(news.title)}`;

          return (
            <div
              key={news.id}
              className="group w-full transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-60 overflow-hidden bg-gray-100 border rounded-xl">
                <Image
                  src={news.img || box1}
                  alt={news.title}
                  width={500}
                  height={350}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Content */}
              <div className="py-5 sm:py-6 text-left">
                <Link href={blogUrl}>
                  <h3 className="text-lg sm:text-xl font-semibold leading-snug text-color3 transition-colors duration-300 group-hover:text-color1 line-clamp-2">
                    {news.title}
                  </h3>
                </Link>

                <div className="mt-5">
                  <Link
                    href={blogUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-color2 transition-all duration-300 hover:gap-3 hover:text-color1"
                  >
                    Read More
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}