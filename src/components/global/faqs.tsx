"use client";
import React, { useState } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function Faq({ data }: { data: { que: string; ans: string }[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  return (
    <div className="space-y-3">
      {data.map((item, index) => {
        const isOpen = expandedIndex === index;

        return (
          <div
            key={index}
            className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden bg-white
              ${isOpen
                ? "border-color2/30 shadow-lg shadow-color2/8"
                : "border-color2/10 hover:border-color2/25 hover:shadow-md"
              }`}
          >
            {/* Left accent bar */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl transition-all duration-300
                ${isOpen ? "bg-color1" : "bg-transparent group-hover:bg-color2/30"}`}
            />

            {/* Question row */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
             
                <h3
                  className={`text-base sm:text-xl font-semibold transition-colors duration-300 leading-snug
                    ${isOpen ? "text-color2" : "text-color3"}`}
                >
                  {item.que}
                </h3>

              <BsArrowUpRightCircleFill
                className={`text-xl shrink-0 transition-all duration-300
                  ${isOpen
                    ? "rotate-[135deg] text-color2"
                    : "text-color2/25 group-hover:text-color2"
                  }`}
              />
            </button>

            {/* Answer */}
            <div
              className={`grid transition-all duration-500 ease-in-out
                ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6">
                  <p className="text-zinc-500 text-sm md:text-base font-medium !leading-relaxed">
                    {item.ans}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Faq;