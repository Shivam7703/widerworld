import React from 'react'
import { testimonialData as data } from "@/data/homeData";
import Image from 'next/image';
import { FaCheckCircle, FaQuoteLeft, FaStar, FaUser } from 'react-icons/fa';
function Stories() {
  return (
    <section className="lg:px-28 md:px-20 sm:p-12 p-6 ">
       <div className="w-full text-center flex flex-col items-center gap-y-3 mb-8 ">
         {data?.title1 && (
              <h4 className="text-blue-800 font-bold sm:text-lg mx-auto text-sm mb-2 border-blue-700 w-max border-b px-3 py-2">
                {data.title1}
              </h4>
            )}
      
            <h2 className="text-zinc-800 font-extrabold !leading-tight text-2xl md:text-4xl max-w-2xl mx-auto mb-10">
              {data.title2}
            </h2>
      </div>
<div className=' relative grid md:grid-cols-2 md:gap-10 gap-6'>
 
          {data.testimonials.map((cards, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent h-32"></div>
              
              <div className="relative p-6 z-10">
                <div className="absolute top-4 right-4 text-purple-200 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <FaQuoteLeft size={60} />
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaUser size={28} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 shadow-lg">
                      <FaCheckCircle className="text-white" size={14} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-lg group-hover:text-white transition-colors duration-300">
                      {cards.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" 
                          size={14}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <FaCheckCircle className="text-green-500 group-hover:text-green-300 transition-colors duration-300" size={12} />
                      <span className="text-xs text-gray-600 group-hover:text-white/90 transition-colors duration-300 font-medium">
                        Verified Review
                      </span>
                    </div>
                  </div>
                </div>

                <div className="my-6 relative">
                  <p className="text-gray-700 group-hover:text-white transition-colors duration-300 leading-relaxed  italic">
                    "{cards.text}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 group-hover:border-white/30 transition-colors duration-300">
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 text-sm">
                      {cards.title}
                    </p>
                    <p className="text-xs text-purple-600 group-hover:text-purple-200 transition-colors duration-300 font-medium mt-1">
                      Success Story
                    </p>
                  </div>
                  
                  <div className="bg-purple-100 group-hover:bg-white/20 transition-colors duration-300 px-3 py-1 rounded-full">
                    <span className="text-xs text-purple-700 group-hover:text-white transition-colors duration-300 font-medium">
                      Shared their experience
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Stories
