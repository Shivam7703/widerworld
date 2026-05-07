"use client"
import React from "react";
import Image from "next/image";
import Faq from "../global/faqs";
import ServiceAside from "./serviceside";
     import { FaCheckCircle } from "react-icons/fa";

export default function Servicedetails({ data }: any) {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Top 3-color bar */}
      <div className="h-1 bg-gradient-to-r from-color1 via-color3 to-[#1A2F4A]" />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-10 py-7 sm:py-10 lg:py-12">
        <div className="flex flex-wrap w-full gap-[5%] items-start">

          {/* ── Sidebar ── */}
          <div className="w-full md:order-1 order-2 md:w-[30%] shrink-0 md:sticky md:top-8">
<ServiceAside/>
          </div>

          {/* ── Main ── */}

<div className="md:order-2 order-1 md:w-[64%] w-full flex flex-col gap-10 p-6 md:p-8 rounded-2xl bg-white">

  {/* Hero Image */}
  <div className="overflow-hidden rounded-3xl">
    {data?.img && (
      <Image
        src={data.img}
        alt={data?.title || "Service"}
        width={1200}
        height={600}
        priority
        className="w-full h-auto object-cover rounded-3xl"
      />
    )}
  </div>

  {/* Title */}
  <div className="space-y-3">
    <span className="text-2xl md:text-4xl font-bold uppercase tracking-[0.2em] text-color3">
      {data?.title}
    </span>

    <div className="w-32 h-[3px] rounded-full bg-color1" />
  </div>

  {/* Content */}
  <div className="space-y-10">

    {data?.content?.map((section: any, secIndex: number) => (
      <div key={secIndex} className="space-y-8">

        {/* Heading */}
        {section?.heading && (
          <div className="space-y-3">
            <h2
              className="text-xl sm:text-2xl font-bold text-color2 leading-snug"
              dangerouslySetInnerHTML={{ __html: section.heading }}
            />

            <div className="w-14 h-[3px] rounded-full bg-color1" />
          </div>
        )}

        {/* Sub Content */}
        {section?.subcontent?.map((item: any, index: number) => (
          <div key={index} className="space-y-4">

            {/* Subheading */}
            {item?.subheading && (
              <h3
                className="text-lg sm:text-xl font-bold text-color3"
                dangerouslySetInnerHTML={{ __html: item.subheading }}
              />
            )}

            {/* Paragraph */}
            {item?.para && (
              <div
                className="text-sm font-medium sm:text-base leading-[1.9] text-zinc-800"
                dangerouslySetInnerHTML={{ __html: item.para }}
              />
            )}

            {/* List */}
            {item?.list &&
              Array.isArray(item.list) &&
              item.list.length > 0 && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

                  {item.list.map((li: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <FaCheckCircle className="text-color1 mt-2 text-sm flex-shrink-0" />

                      <span
                        className="text-sm sm:text-base font-medium !leading-relaxed text-slate-600"
                        dangerouslySetInnerHTML={{ __html: li }}
                      />
                    </li>
                  ))}
                </ul>
              )}

            {/* Table */}
            {item?.table && (
              <div className="overflow-x-auto pt-3">

                <table className="w-full border border-slate-200">

                  <thead>
                    <tr className="bg-slate-100">

                      {item.table.theading?.map(
                        (th: string, i: number) => (
                          <th
                            key={i}
                            className="px-5 py-4 text-left text-sm font-semibold text-color2 border-b border-slate-200"
                          >
                            {th}
                          </th>
                        )
                      )}

                    </tr>
                  </thead>

                  <tbody>
                    {item.table.rows?.map((row: any, ri: number) => (
                      <tr
                        key={ri}
                        className="border-b border-slate-200"
                      >
                        {row?.colum?.map((col: string, ci: number) => (
                          <td
                            key={ci}
                            className="px-5 py-4 text-sm leading-[1.8] text-slate-700"
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

  </div>

  {/* FAQ */}
  <div className="space-y-4 pt-4">

    <div className="space-y-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-color2">
        Frequently Asked Questions
      </h2>

      <div className="w-16 h-[3px] rounded-full bg-color1" />
    </div>

    <Faq data={data?.faq} />
  </div>

</div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-1 bg-gradient-to-r from-color1 via-color3 to-[#1A2F4A]" />
    </div>
  );
}