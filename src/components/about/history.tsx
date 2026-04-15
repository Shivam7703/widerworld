"use client";
import React, { useRef } from "react";
import { 
  LuSparkles, 
  LuBuilding2, 
  LuAward, 
  LuGraduationCap, 
  LuMonitorSmartphone, 
  LuGlobe,
  LuChevronLeft,
  LuChevronRight
} from "react-icons/lu";


const milestones = [
  { 
    year: "2004", 
    theme: "amber", 
    icon: LuSparkles, 
    title: "The Beginning",        
    text: "Founded with a single office and a vision to simplify immigration. Started with 3 team members and a passion for changing lives."          
  },
  { 
    year: "2008", 
    theme: "indigo",  
    icon: LuBuilding2, 
    title: "National Expansion",     
    text: "Expanded operations across 5 major cities. Crossed 500 successful visa applications milestone with a certified team."              
  },
  { 
    year: "2012", 
    theme: "amber", 
    icon: LuAward, 
    title: "Global Recognition",     
    text: "Received first international certification and partnered with 50+ universities worldwide for global education pathways."                   
  },
  { 
    year: "2016", 
    theme: "indigo",  
    icon: LuGraduationCap, 
    title: "5,000 Lives Changed",    
    text: "Celebrated 5,000+ successful clients. Launched dedicated MBBS abroad and specialized study visa expert divisions."           
  },
  { 
    year: "2020", 
    theme: "amber", 
    icon: LuMonitorSmartphone, 
    title: "Digital Transformation", 
    text: "Launched digital platform for end-to-end visa tracking. Served clients across 100+ countries during global challenges."                 
  },
  { 
    year: "2024", 
    theme: "indigo",  
    icon: LuGlobe, 
    title: "20 Years Excellence", 
    text: "Celebrating two decades of trust — 10,000+ satisfied clients, 150+ country coverage, and a 95% approval rate."                               
  },
];

export default function OurHistory() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 1.5 : scrollLeft + clientWidth / 1.5;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-zinc-50 text-zinc-900 font-sans py-24 selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- Background Elements (Light Theme) --- */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#e5e7eb 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
          maskImage: "linear-gradient(to bottom, black, transparent)"
        }}
      />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
           
            <h2
            className="font-black text-color3 text-3xl md:text-5xl  leading-tight mb-5"
          >
            Our History & <span className="text-color1">Journey</span> 
          </h2>
            <p className="text-zinc-800 text-sm sm:text-lg  leading-relaxed">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi impedit similique illum? Nihil autem voluptas dicta odio, laudantium velit optio ea delectus nostrum quibusdam magnam, a debitis, similique quisquam.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll("left")}
              className="p-4 rounded-full border group border-zinc-700 bg-white hover:bg-color2 transition-all shadow-lg active:scale-95"
            >
              <LuChevronLeft className="w-6 h-6 group-hover:text-white text-zinc-700" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="p-4 rounded-full border group border-zinc-700 bg-white hover:bg-color2 transition-all shadow-lg active:scale-95"
            >
              <LuChevronRight className="w-6 h-6 group-hover:text-white text-zinc-700" />
            </button>
          </div>
        </div>

        {/* --- Horizontal Timeline Slider --- */}
        <div className="relative group">
          {/* Timeline Continuous Track Line */}
          <div className="absolute top-[52px] left-0 right-0 h-[2px] bg-gradient-to-r from-color2 via-color1  to-color3 z-0" />
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-12 pt-4 no-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isAmber = m.theme === "amber";

              return (
                <div key={i} className="min-w-[320px] md:min-w-[400px] snap-start relative pt-12">
                  
                  {/* Point on Timeline */}
                  <div className="absolute top-[-10px] left-0 z-10">
                    <div className={`w-6 h-6 rounded-full border-4 border-zinc-50 flex items-center justify-center transition-all duration-500
                      ${isAmber ? 'bg-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.4)]' : 'bg-color2 shadow-[0_0_15px_rgba(79,70,229,0.4)]'}`}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="bg-white rounded-[2.5rem] p-8 border border-zinc-200 shadow-lg  hover:shadow-black/50 shadow-black/30 transition-all duration-500 group/card">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 rounded-2xl shadow-md shadow-black/30 ${isAmber ? 'bg-amber-50 text-amber-600' : 'bg-indigo-50 text-color2'}`}>
                        <Icon size={24} strokeWidth={2.5} />
                      </div>
                      <span className="text-4xl font-black text-color1/20 transition-colors group-hover/card:text-color1/40">
                        {m.year}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-color5 mb-3 tracking-tight">
                      {m.title}
                    </h3>
                    
                    <p className="text-zinc-700 leading-relaxed font-medium  max-sm:text-sm ">
                      {m.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}