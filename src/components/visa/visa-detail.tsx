"use client";

import React, { useState } from "react";
import BlogAside from "../blog/side";
import Image from "next/image";

import { bann } from "@/assets";
import { FaCheckCircle } from "react-icons/fa";
import Faqs from "../global/faqs";
import { MdCheckCircleOutline } from "react-icons/md";

export default function Visadetails({ data }: any) {
  return (
    <div className="lg:px-28 xl:px-32 md:p-20 sm:p-12 p-7 bg-gradient-to-b from-zinc-50/70 relative to-white/60">
      <div className="flex flex-wrap justify-between gap-y-7 relative w-full">
        <div className="md:w-[60%] w-full">

      {/* Hero Image */}
      <div className="relative overflow-hidden rounded-2xl mb-10 group">
        <div className="absolute inset-0 bg-gradient-to-t from-color3/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={data?.img}
            alt={data?.title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </div>

      {/* Article */}
      <article className="mb-16">
        <div className="space-y-12">
          {data?.content?.map((section: any, secIndex: number) => (
            <div key={secIndex} className="space-y-5">

              {/* Section Heading */}
              {section?.heading && (
                <div className="flex items-stretch gap-3">
                  <div className="w-1 rounded-full bg-color1 shrink-0" />
                  <h2
                    className="text-2xl sm:text-3xl font-semibold text-color3 leading-snug font2"
                    dangerouslySetInnerHTML={{ __html: section.heading }}
                  />
                </div>
              )}

              {/* Subcontent */}
              {section?.subcontent?.map((item: any, index: number) => (
                <div key={index} className="space-y-3">

                  {/* Subheading */}
                  {item?.subheading && (
                    <p
                      className="text-xl sm:text-2xl font-semibold text-color2 mt-4"
                      dangerouslySetInnerHTML={{ __html: item.subheading }}
                    />
                  )}

                  {/* Paragraph */}
                  {item?.para && (
                    <p
                      className="text-zinc-600 leading-relaxed text-base sm:text-[17px]"
                      dangerouslySetInnerHTML={{ __html: item.para }}
                    />
                  )}

                  {/* List */}
                  {Array.isArray(item?.list) && (
                    <ul className="space-y-2 mt-2">
                      {item.list.map((li: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-zinc-700 text-sm sm:text-base bg-color4/10 hover:bg-color4/20 transition-all duration-200 p-3 rounded-xl border border-color4/30"
                        >
                          <MdCheckCircleOutline className="text-color2 mt-0.5 shrink-0 text-[18px]" />
                          <span dangerouslySetInnerHTML={{ __html: li }} />
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Table */}
                  {item?.table && (
                    <div className="overflow-x-auto rounded-xl border border-zinc-200 shadow-sm mt-3">
                      <table className="min-w-full text-sm sm:text-base">
                        <thead>
                          <tr>
                            {item.table.theading?.map((th: string, thIndex: number) => (
                              <th
                                key={thIndex}
                                className="px-4 py-3 text-left bg-color2 text-white font-medium whitespace-nowrap first:rounded-tl-xl last:rounded-tr-xl"
                              >
                                {th}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {item.table.rows?.map((row: any, rIndex: number) => (
                            <tr
                              key={rIndex}
                              className="even:bg-color2/5 hover:bg-color4/10 transition-colors duration-150"
                            >
                              {row?.colum?.map((col: string, cIndex: number) => (
                                <td
                                  key={cIndex}
                                  className="px-4 py-3 border-t border-zinc-100 text-zinc-700 whitespace-nowrap"
                                >
                                  {col}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                </div>
              ))}
            </div>
          ))}

          {/* FAQ */}
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
