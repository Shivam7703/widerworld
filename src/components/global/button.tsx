import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

/* Main Wrapper */
function Buttonmain({ href, text1 , text2 }: { href: string; text1: string; text2: string }) {
const isTel =
  href.startsWith("tel:") ||
  href.startsWith("https") ||
  href.startsWith("mailto:") ||
  href.startsWith("www");
  if (isTel) {
    return (
      <a href={href} className="w-max inline-block group/btn">
        <Button text11={text1} text12={text2} />
      </a>
    );
  }

  return (
    <Link href={href} className="w-max inline-block group/btn">
      <Button text11={text1} text12={text2} />
    </Link>
  );
}

export default Buttonmain;

/* Button UI */
export const Button = ({ text11, text12 } :any) => {
  return (
    <div
        className="group relative flex items-center gap-3 px-8 py-4 rounded-full
        text-white font-semibold text-[15px] tracking-wide overflow-hidden
        transition-all bg-gradient-to-br from-red-600 via-color1 to-red-800 duration-300 hover:-translate-y-[2px] 
        shadow-[0_6px_20px_rgba(203,0,0,0.45)]
        hover:shadow-[0_12px_30px_rgba(203,0,0,0.65)]"
       
      >
        {/* shimmer */}
        <span
          className="absolute top-0 left-[-120%] w-[60%] h-full
          bg-gradient-to-r from-transparent via-white/25 to-transparent
          -skew-x-12 pointer-events-none animate-shimmer"
        />

        {/* text swap */}
        <span className="relative overflow-hidden h-[1.25em] flex items-center">
          <span className="block transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap">
{text11 }         </span>

          <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 whitespace-nowrap">
{text12}          </span>
        </span>

        <FaArrowRight className="text-[15px] transition-all duration-300 group-hover:translate-x-1" />
      </div>
  );
};
