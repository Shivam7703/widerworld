"use client";
import React, { useState } from 'react'
import Countryslider from './countryslider'
import { canadapnp } from "@/data/homeData";
import { blog_bg } from '@/assets';
import Image from 'next/image';


const category = [
  { name: "MBBS In Abroad", value: "mbbs" },
  { name: "Study Abroad", value: "abroad" },
];

function Dreamcountry() {
  const [cat, setCat] = useState("mbbs");

const filterData = {
  cards: canadapnp.cards.filter((card) => card.cat === cat)
};
  return (
    <section className="bg-color3 relative overflow-hidden md:py-7 ">
      <Image src={blog_bg} alt={"img"} className='absolute top-0 left-0 w-full object-contain h-auto z-0 opacity-45' />
      {/* ── HEADER ── */}
      <div className="p-6 relative z-10 text-center ">
        <p className="text-sm font-bold uppercase text-gray-200 mb-4">
          {canadapnp.title1}
        </p>
        <h2 className="text-white font-bold text-3xl md:text-5xl !leading-tight mb-6 max-w-3xl mx-auto">
          {canadapnp.title2}
        </h2>

        {/* thin line */}
        <div className="w-24 h-px bg-white/50 mx-auto sm:mb-8 mb-5" />

        {/* Category Tabs */}
        <div className="mx-auto flex gap-3 justify-center flex-wrap">
          {category.map((categ) => (
            <button
              key={categ.value}
              onClick={() => setCat(categ.value)}
              className={`px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border transition-all duration-300
                ${cat === categ.value
                  ? "bg-color1 text-white border-color1 shadow-lg"
                  : "bg-transparent text-gray-300 border-white/30 hover:border-white/60 hover:text-white"
                }`}
            >
              {categ.name}
            </button>
          ))}
        </div>
      </div>

        {/* Slider */}
        <div className="pb-4 sm:p-10 lg:px-20  relative">
          <Countryslider data={filterData} uniqueId="dream123" />
        </div>
    </section>
  );
}

export default Dreamcountry;