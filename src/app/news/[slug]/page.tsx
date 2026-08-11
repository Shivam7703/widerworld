import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { newsData } from "@/data/newsData";
import { box1 } from "@/assets";
import { createSlug } from "@/app/coaching/[slug]/page";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Helper function to create consistent URL slugs


export async function generateStaticParams() {
  return newsData.map((news: any) => ({
    slug: createSlug(news.title),
  }));
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = createSlug(decodeURIComponent(slug));

  const singleNews = newsData.find(
    (item: any) => createSlug(item.title) === decodedSlug
  );

  if (!singleNews) {
    notFound();
  }

  return (
    <main className="lg:p-20 md:p-16 sm:p-12 py-8 px-6 max-w-[1400px] mx-auto bg-white min-h-screen">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-14 justify-between">
        
        {/* Main Content Area (60%) */}
        <div className="md:w-[62%] w-full space-y-6">
          {/* Main Hero Image */}
          <div className="relative w-full h-[280px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={singleNews.img || box1}
              alt={singleNews.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* HTML Description Content Render */}
          <div className="">
            <div
              dangerouslySetInnerHTML={{ __html: singleNews.desc }}
            />
          </div>
        </div>

        {/* Sidebar News Section (35%) */}
        <aside className="md:w-[35%] w-full space-y-6">
          <div className="sticky top-10 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">
              Latest News
            </h3>

            <div className="space-y-6">
              {newsData.slice(0, 6).map((news: any) => {
                const newsUrl = `/news/${createSlug(news.title)}`;

                return (
                  <Link
                    key={news.id}
                    href={newsUrl}
                    className="group block space-y-3 pb-5 border-b border-slate-100 last:border-none"
                  >
                    {/* Sidebar Item Image */}
                    <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100">
                      <Image
                        src={news.img || box1}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Sidebar Item Title & Tag */}
                    <div className="space-y-2">
                      <h4 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-blue-600 line-clamp-2 leading-snug transition-colors">
                        {news.title}
                      </h4>
                      
                      <div className="flex items-center gap-2">
                        <span className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          Updates
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
}