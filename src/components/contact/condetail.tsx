import React from "react";
import { contat } from "@/assets";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaXTwitter, FaShareNodes } from "react-icons/fa6";
import { footer } from "@/data/homeData";

interface ConDetailProps {
  data?: Array<{
    icon: React.ReactNode;
    title: string;
    text: string;
    slug: string;
  }>;
 
}

function ConDetail({ data }: ConDetailProps) {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] lg:px-20 md:px-14 sm:px-10 px-6 pt-7 md:pt-12">
      {/* Background Blur Lights */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-color1/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[260px] h-[260px] bg-color2/10 rounded-full blur-[120px]" />

      <div className="max-w-[1300px] mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        {/* IMAGE: Mobile -> order-2, Desktop -> order-1 */}
        <div className="order-2 md:order-1 md:w-[45%] w-full relative min-h-[350px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[560px]">
          <Image
            src={contat}
            alt="Contact Illustration"
            fill
            className="object-contain object-center"
          />
        </div>

        {/* RIGHT CONTENT CARDS: Mobile -> order-1, Desktop -> order-2 */}
   <div className="order-1 md:order-2 flex-1 w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
  
  {/* Dynamic 3 Contact Cards */}
  {data?.slice(0, 3).map((item: any, index: number) => (
    <div
      key={index}
      className="group relative rounded-2xl bg-white/70 backdrop-blur-lg
      border border-white/50
      shadow-[0_8px_25px_rgba(0,0,0,0.04)]
      hover:shadow-[0_20px_45px_rgba(0,64,148,0.15)]
      hover:-translate-y-1 transition-all duration-300 min-h-[120px] flex items-center"
    >

      <div className="relative flex flex-col gap-4 px-5 py-4 w-full">
        {/* Main Card Icon */}
        <div
          className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl
          bg-gradient-to-br from-color1 to-color2 text-white text-xl
          shadow-[0_8px_20px_rgba(0,64,148,0.2)]
          group-hover:scale-105 transition duration-300"
        >
          {item?.icon}
        </div>

        {/* Text Details */}
        <div className="flex flex-col min-w-0 flex-1">
          <h3 className="text-base sm:text-lg font-semibold text-color3 mb-1 tracking-wide">
            {item?.title}
          </h3>
          <a
            href={item?.slug}
            className="text-gray-700 mt-0.5 text-sm sm:text-base font-medium group-hover:text-blue-600 transition leading-snug break-words"
          >
            {item?.text}
          </a>
        </div>
      </div>
    </div>
  ))}

  {/* 4TH CARD: Social Media Links (Top 4 Only) */}
  <div
    className="group relative rounded-2xl bg-white/70 backdrop-blur-lg
    border border-white/50
    shadow-[0_8px_25px_rgba(0,0,0,0.04)]
    hover:-translate-y-1 transition-all duration-300 min-h-[120px] flex items-center"
  >

    <div className="relative flex flex-col gap-4 px-5 py-4 w-full">
      {/* Share Icon */}
      <div
        className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl
        bg-gradient-to-br from-color1 to-color2 text-white text-xl
        shadow-[0_8px_20px_rgba(0,64,148,0.2)]
        group-hover:scale-105 transition duration-300"
      >
        <FaShareNodes />
      </div>

      {/* Social Media Links Container */}
      <div className="flex flex-col min-w-0 flex-1">
        <h3 className="text-base sm:text-lg font-semibold text-color3 mb-1 tracking-wide">
          Follow Us
        </h3>

        {footer?.socials && (
          <div className="flex items-center gap-2 mt-2 text-sm text-color3">
            {footer?.socials?.facebook && (
              <a
                href={footer.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-color1 hover:text-white rounded-full transition duration-300 flex-shrink-0"
              >
                <FaFacebook className="text-lg" />
              </a>
            )}
            {footer?.socials?.instagram && (
              <a
                href={footer.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-color1 hover:text-white rounded-full transition duration-300 flex-shrink-0"
              >
                <AiFillInstagram className="text-lg" />
              </a>
            )}
            {footer?.socials?.linkedin && (
              <a
                href={footer.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-color1 hover:text-white rounded-full transition duration-300 flex-shrink-0"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
            )}
            {footer?.socials?.youtube && (
              <a
                href={footer.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-color1 hover:text-white rounded-full transition duration-300 flex-shrink-0"
              >
                <TbBrandYoutubeFilled className="text-lg" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  </div>

</div>
      </div>
    </section>
  );
}

export default ConDetail;