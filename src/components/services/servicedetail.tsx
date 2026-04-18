"use client"
import React from "react";
import Image from "next/image";
import Faq from "../global/faqs";
import ServiceAside from "./serviceside";

export default function Servicedetails({ data }: any) {
  return (
    <div className="min-h-screen bg-slate-100 font-sans">

      {/* Top 3-color bar */}
      <div className="h-1 bg-gradient-to-r from-color1 via-color3 to-[#1A2F4A]" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-7 sm:py-10 lg:py-12">
        <div className="flex flex-wrap gap-5 justify-between items-start">

          {/* ── Sidebar ── */}
          <aside className="w-full md:order-1 order-2 md:w-[30%] shrink-0 md:sticky md:top-8">
<ServiceAside/>
          </aside>

          {/* ── Main ── */}
          <main className="flex-1 min-w-0 flex flex-col md:order-2 order-1 md:w-[64%] w-full gap-4 sm:gap-5">

            {/* Hero Card */}
            <div className="rounded-2xl overflow-hidden bg-white border border-slate-200">
              <div className="h-1 bg-gradient-to-r from-color1 to-color3" />

              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "2" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A2F4A] via-[#2B3944] to-[#1A2F4A]" />
                {data?.img && (
                  <Image
                    src={data.img}
                    alt={data?.title || "Service"}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F4A]/75 via-[#1A2F4A]/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4 sm:p-5">
                  <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10.5px] font-semibold uppercase tracking-widest text-white bg-color2">
                    <span className="w-1.5 h-1.5 rounded-full bg-color4" />
                    {data?.title || "Our Service"}
                  </span>
                  
                </div>
              </div>             
            </div>

            {/* Article sections */}
            {data?.content?.map((section: any, secIndex: number) => (
              <div key={secIndex} className="rounded-2xl overflow-hidden bg-white border border-slate-200">

                {/* Card header */}
                {section?.heading && (
                  <div className="flex items-center gap-3 px-5 sm:px-6 py-4 bg-color2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-color4/15 border border-color4/30">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2L10 6H14L11 9L12.5 13L8 10.5L3.5 13L5 9L2 6H6L8 2Z" fill="#ffce5b" />
                      </svg>
                    </div>
                    <div>
                      <h2
                        className="text-lg sm:text-xl font-bold text-white leading-tight "
                        dangerouslySetInnerHTML={{ __html: section.heading }}
                      />
                     
                    </div>
                  </div>
                )}

                <div className="p-5 sm:p-6 space-y-5">
                  {section?.subcontent?.map((item: any, index: number) => (
                    <div key={index}>

                      {/* Subheading */}
                      {item?.subheading && (
                        <h3 className="flex items-start gap-2 text-base sm:text-xl font-semibold mb-2.5 text-color3">
                          <span className="w-[3px] h-5 rounded-sm bg-color1 flex-shrink-0 mt-[3px]" />
                          <span dangerouslySetInnerHTML={{ __html: item.subheading }} />
                        </h3>
                      )}

                      {/* Decorative rule — first item only */}
                      {index === 0 && (
                        <div className="flex items-center gap-2 mb-4">
                          <div className="h-[3px] w-7 rounded bg-color1" />
                          <div className="h-[3px] w-4 rounded bg-color3" />
                          <div className="w-2 h-2 rounded-full bg-color4" />
                          <div className="flex-1 h-px bg-slate-300" />
                        </div>
                      )}

                      {/* Paragraph */}
                      {item?.para && (
                        <div
                          className="text-sm sm:text-base leading-[1.8] mb-4 pl-3 border-l-2 border-color5 text-slate-800"
                          dangerouslySetInnerHTML={{ __html: item.para }}
                        />
                      )}

                      {/* List — 2-col */}
                      {item?.list && Array.isArray(item.list) && item.list.length > 0 && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 list-none p-0">
                          {item.list.map((li: string, i: number) => (
                            <li
                              key={i}
                              className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl text-xs sm:text-sm leading-[1.55] border border-slate-200 bg-slate-50 text-slate-700 transition-colors duration-200 cursor-default hover:border-color3 hover:bg-blue-50"
                            >
                              <span className="w-4 h-4 rounded-md bg-color1 flex items-center justify-center flex-shrink-0 mt-[1px]">
                                <svg width="8" height="7" viewBox="0 0 10 8" fill="none">
                                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </span>
                              <span dangerouslySetInnerHTML={{ __html: li }} />
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Table */}
                      {item?.table && (
                        <div className="rounded-xl overflow-hidden mt-2 border border-slate-200">
                          <div className="h-[3px] bg-gradient-to-r from-color1 to-color3" />
                          <div className="overflow-x-auto">
                            <table className="w-full text-xs sm:text-[13px] border-collapse">
                              <thead>
                                <tr className="bg-color1">
                                  {item.table.theading?.map((th: string, i: number) => (
                                    <th
                                      key={i}
                                      className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-[.12em] text-white"
                                    >
                                      {th}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {item.table.rows?.map((row: any, ri: number) => (
                                  <tr
                                    key={ri}
                                    className="border-b border-slate-200 hover:bg-blue-50/50 transition-colors"
                                  >
                                    {row?.colum?.map((col: string, ci: number) => (
                                      <td
                                        key={ci}
                                        className={`px-4 py-2.5 ${ci === 0 ? "text-color3 font-medium" : "text-slate-600 font-normal"}`}
                                      >
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
                </div>
              </div>
            ))}



 <div  className="rounded-2xl overflow-hidden bg-white border border-slate-200">

                {/* Card header */}
                  <div className="flex items-center gap-3 px-5 sm:px-6 py-4 bg-color2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-color4/15 border border-color4/30">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2L10 6H14L11 9L12.5 13L8 10.5L3.5 13L5 9L2 6H6L8 2Z" fill="#ffce5b" />
                      </svg>
                    </div>
                    <div>
                      <h6
                        className="text-lg sm:text-xl font-bold text-white leading-tight "
                      >Frequently asked question</h6>
                    </div>
                  </div>
                                       <div className="p-5 sm:p-6 space-y-5"><Faq data={data?.faq}/></div>

              </div>

            {/* Bottom accent */}
            <div className="h-1 rounded-full bg-gradient-to-r from-color1 via-color4 to-color3" />
          </main>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-1 bg-gradient-to-r from-color1 via-color3 to-[#1A2F4A]" />
    </div>
  );
}