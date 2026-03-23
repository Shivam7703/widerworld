"use client";

import React, { useState } from "react";
import BlogAside from "../blog/side";
import Image from "next/image";

import { bann } from "@/assets";
import { FaCheckCircle } from "react-icons/fa";
import Faqs from "../global/faqs";

export default function Visadetails({ data }: any) {
  return (
    <div className="lg:px-28 xl:px-32 md:p-20 sm:p-12 p-7 bg-gradient-to-b from-zinc-50/70 relative to-white/60">
      <div className="flex flex-wrap justify-between gap-y-7 relative w-full">
        <div className="md:w-[60%] w-full">
          {/* Hero Image Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-12 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={data?.img}
                alt={data?.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          <article className="relative mb-16">
            <div className="space-y-12">
              {data?.content?.map((section: any, secIndex: number) => (
                <div key={secIndex} className="space-y-6">
                  {/* Section Heading */}
                  {section?.heading ? (
                    <div
                      className="text-2xl font2 sm:text-3xl md:text-4xl font-bold text-zinc-800 leading-snug border-l-4 border-amber-500 pl-4"
                      dangerouslySetInnerHTML={{ __html: section.heading }}
                    />
                  ) : null}

                  {/* Subcontent */}
                  {section?.subcontent?.map((item: any, index: number) => (
                    <div key={index} className="space-y-4">
                      {/* Subheading */}
                      {item?.subheading ? (
                        <p
                          className="text-2xl  sm:text-3xl font-semibold text-zinc-800 mt-6"
                          dangerouslySetInnerHTML={{ __html: item.subheading }}
                        />
                      ) : null}

                      {/* Paragraph */}
                      {item?.para ? (
                        <p
                          className="text-zinc-700 leading-relaxed text-base sm:text-lg"
                          dangerouslySetInnerHTML={{ __html: item.para }}
                        />
                      ) : null}

                      {/* List with Icon */}
                      {item?.list ? (
                        <ul className="space-y-3 mt-3">
                          {Array.isArray(item.list)
                            ? item.list.map((li: string, i: number) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-zinc-700 text-sm sm:text-base  bg-amber-50 hover:bg-amber-100 transition-all duration-300 p-3 rounded-lg shadow-sm"
                                >
                                  <FaCheckCircle className="text-amber-500 mt-1 shrink-0" />
                                  <span
                                    dangerouslySetInnerHTML={{ __html: li }}
                                  />
                                </li>
                              ))
                            : null}
                        </ul>
                      ) : null}

                      {/* Table */}
                      {item?.table ? (
                        <div className="overflow-x-auto rounded-xl border text-zinc-700 border-zinc-200 shadow-sm">
                          <table className="min-w-full text-sm sm:text-base">
                            <thead>
                              <tr>
                                {item?.table.theading?.map(
                                  (th: string, thIndex: number) => (
                                    <th
                                      key={thIndex}
                                      className="px-4 py-3 text-left bg-gradient-to-r from-amber-500 to-amber-600 text-white first:rounded-tl-2xl last:rounded-tr-2xl font-semibold whitespace-nowrap"
                                    >
                                      {th}
                                    </th>
                                  )
                                )}
                              </tr>
                            </thead>
                            <tbody>
                              {item?.table.rows?.map(
                                (row: any, rIndex: number) => (
                                  <tr
                                    key={rIndex}
                                    className="even:bg-zinc-50 hover:bg-amber-50 transition"
                                  >
                                    {row?.colum?.map(
                                      (col: string, cIndex: number) => (
                                        <td
                                          key={cIndex}
                                          className="px-4 py-3 border-t border-zinc-200 whitespace-nowrap"
                                        >
                                          {col}
                                        </td>
                                      )
                                    )}
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              ))}
                          <Faqs data={data.faq} />
            </div>

          </article>
        </div>

        {/* Sidebar */}
        <div className="md:w-[33%] w-full md:sticky md:top-10 h-full space-y-5">
          <BlogAside />
        </div>
      </div>
    </div>
  );
}
