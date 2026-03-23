"use client"
import React from "react";
import BlogAside from "../blog/side";
import Image from "next/image";

export default function Servicedetails({ data }: any) {
  return (
    <div className="relative min-h-screen" style={{ background: "#faf9f7", fontFamily: "'Georgia', serif" }}>

   

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent 0%, #c9a84c 30%, #e8c96a 50%, #c9a84c 70%, transparent 100%)" }} />

      <div className="relative  mx-auto lg:px-28 xl:px-32 md:p-20 sm:p-12 p-7">

        

        <div className="flex flex-col lg:flex-row gap-12 justify-between xl:gap-16 items-start">

          {/* ── Sidebar ─────────────────────────────────── */}
          <aside className="w-full md:w-[33%]  shrink-0 lg:sticky lg:top-10">
            <div className="relative">
              {/* Corner ornaments */}
              <span className="absolute -top-3 -left-3 w-5 h-5 border-t border-l pointer-events-none" style={{ borderColor: "#c9a84c" }} />
              <span className="absolute -bottom-3 -right-3 w-5 h-5 border-b border-r pointer-events-none" style={{ borderColor: "#c9a84c" }} />
           
                <BlogAside />
            </div>
          </aside>

          {/* ── Main Content ─────────────────────────────── */}
          <main className="flex-1 w-full md:w-[60%] min-w-0 space-y-16">

            {/* Hero Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl"
                style={{ border: "1px solid #ede9e0", boxShadow: "0 8px 48px rgba(0,0,0,0.08)" }}>

                {/* Gold top strip */}
                <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
                  style={{ background: "linear-gradient(90deg, #c9a84c, #e8c96a, #c9a84c)" }} />

                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={data?.img}
                    alt={data?.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    priority
                  />
                  {/* Subtle dark gradient at bottom */}
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(20,18,14,0.55) 0%, transparent 55%)" }} />
                </div>

                {/* Badge */}
                <div className="absolute bottom-5 left-6 z-10">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-widest uppercase"
                    style={{
                      background: "rgba(201,168,76,0.92)",
                      color: "#14120e",
                      fontWeight: 600,
                      backdropFilter: "blur(8px)",
                      letterSpacing: "0.12em",
                    }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9.5L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z"
                        fill="currentColor" />
                    </svg>
                    Services
                  </div>
                </div>
              </div>
            </div>

            {/* Article */}
            <article className="space-y-14">
              {data?.content?.map((section: any, secIndex: number) => (
                <section key={secIndex} className="space-y-10">

                  {/* Section heading */}
                  {section?.heading && (
                    <div className="relative pb-5">
                      <h2
                        className="text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight font-bold"
                        style={{ color: "#1a1714", fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
                        dangerouslySetInnerHTML={{ __html: section.heading }}
                      />
                      {/* Underline ornament */}
                      <div className="mt-4 flex items-center gap-2">
                        <div className="h-[2px] w-12 rounded-full" style={{ background: "#c9a84c" }} />
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#c9a84c" }} />
                        <div className="h-[2px] w-6 rounded-full" style={{ background: "#e8c96a60" }} />
                      </div>
                    </div>
                  )}

                  {/* Subcontent */}
                  {section?.subcontent?.map((item: any, index: number) => (
                    <div key={index} className="space-y-6">

                      {/* Subheading */}
                      {item?.subheading && (
                        <h3
                          className="text-xl sm:text-2xl font-semibold flex items-center gap-3"
                          style={{ color: "#2d2a24" }}
                        >
                          <span className="w-1.5 h-6 rounded-full shrink-0" style={{ background: "linear-gradient(to bottom, #c9a84c, #e8c96a)" }} />
                          <span dangerouslySetInnerHTML={{ __html: item.subheading }} />
                        </h3>
                      )}

                      {/* Paragraph */}
                      {item?.para && (
                        <p
                          className="text-base sm:text-lg leading-[1.85]"
                          style={{
                            color: "#5a5650",
                            borderLeft: "2px solid #e8c96a40",
                            paddingLeft: "1.25rem",
                          }}
                          dangerouslySetInnerHTML={{ __html: item.para }}
                        />
                      )}

                      {/* List */}
                      {item?.list && Array.isArray(item.list) && (
                        <ul className="space-y-3 mt-2">
                          {item.list.map((li: string, i: number) => (
                            <li key={i}
                              className="group flex items-start gap-4 px-5 py-4 rounded-xl transition-all duration-300 cursor-default"
                              style={{
                                background: "#ffffff",
                                border: "1px solid #ede9e0",
                                boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
                              }}
                              onMouseEnter={e => {
                                (e.currentTarget as HTMLLIElement).style.borderColor = "#c9a84c60";
                                (e.currentTarget as HTMLLIElement).style.boxShadow = "0 4px 20px rgba(201,168,76,0.1)";
                              }}
                              onMouseLeave={e => {
                                (e.currentTarget as HTMLLIElement).style.borderColor = "#ede9e0";
                                (e.currentTarget as HTMLLIElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.03)";
                              }}
                            >
                              {/* Gold check icon */}
                              <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                                style={{ background: "linear-gradient(135deg, #c9a84c, #e8c96a)" }}>
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </span>
                              <span
                                className="text-base sm:text-[0.95rem] leading-relaxed"
                                style={{ color: "#3d3a34" }}
                                dangerouslySetInnerHTML={{ __html: li }}
                              />
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Table */}
                      {item?.table && (
                        <div className="mt-6 overflow-hidden rounded-2xl"
                          style={{ border: "1px solid #ede9e0", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}>
                          {/* Gold top accent */}
                          <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #c9a84c, #e8c96a, #c9a84c)" }} />
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm sm:text-base bg-slate-300">
                              <thead>
                                <tr style={{ background: "#1a1714" }}>
                                  {item.table.theading?.map((th: string, thIndex: number) => (
                                    <th key={thIndex}
                                      className="px-6 py-4 text-left text-xs bg-gradient-to-r from-amber-500 to-amber-600 text-white first:rounded-tl-2xl last:rounded-tr-2xl tracking-[0.15em] uppercase"
                                     >
                                      {th}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody style={{ background: "#ffffff" }}>
                                {item.table.rows?.map((row: any, rIndex: number) => (
                                  <tr key={rIndex}
                                    style={{ borderBottom: "1px solid #f0ece4" }}
                                    onMouseEnter={e => ((e.currentTarget as HTMLTableRowElement).style.background = "#faf8f4")}
                                    onMouseLeave={e => ((e.currentTarget as HTMLTableRowElement).style.background = "#ffffff")}
                                    className="transition-colors duration-200">
                                    {row?.colum?.map((col: string, cIndex: number) => (
                                      <td key={cIndex}
                                        className="px-6 py-4"
                                        style={{ color: cIndex === 0 ? "#2d2a24" : "#5a5650", fontWeight: cIndex === 0 ? 500 : 400 }}>
                                        {col}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                    </div>
                  ))}
                </section>
              ))}
            </article>

            {/* Footer ornament */}
            <div className="flex items-center gap-4 pt-6">
              <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, #c9a84c40, transparent)" }} />
              <div className="flex gap-1.5">
                {[0, 1, 2].map(i => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: i === 1 ? "#c9a84c" : "#c9a84c40" }} />
                ))}
              </div>
              <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, #c9a84c40)" }} />
            </div>

          </main>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent 0%, #c9a84c 30%, #e8c96a 50%, #c9a84c 70%, transparent 100%)" }} />
    </div>
  );
}