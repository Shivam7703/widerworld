"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import Marquee from "react-fast-marquee";

import { VscChromeClose } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import {
  FaCreditCard,
  FaFacebook,
  FaLinkedinIn,
  FaSquarePhone,
} from "react-icons/fa6";
import {  AiFillInstagram } from "react-icons/ai";
import { TbBrandYoutubeFilled } from "react-icons/tb";

import { logo, logo2 } from "@/assets";
import { navigationMenu } from "@/data/homeData";
import { MdEmail } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Buttonmain from "../global/button";

const Header = ({ header }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navItems, setNavItems] = useState<any[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current < 80) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        setIsVisible(current < lastScrollY || current < 90);
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setNavItems(header?.navItems || []);
  }, [header]);

  return (
    <>
      {/* HEADER SPACER */}
      <div className="h-20 md:h-36 bg-color5" />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isAtTop ? " top-0" : "md:-top-12 -top-1"}`}
      >
        {/* ================= DESKTOP HEADER ================= */}
        <div className="max-md:hidden w-full">
        <div className="w-full flex relative items-stretch  ">
          {/* decorative gradient shapes */}

          {/* LOGO */}
          <Link
            href={header?.href || "/"}
            className="w-72 py-3 bg-gradient-to-br from-red-200 via-blue-200 to-indigo-400 flex justify-center items-center z-10"
          >
            <Image
              src={logo}
              alt="Globesway Immigration"
              className="w-[70%] mx-auto object-contain hover:scale-105 transition"
            />
          </Link>

          <div className="w-full relative z-10">
            {/* TOP BAR */}
            <div
              className="flex justify-between items-center px-8 py-2 w-full text-sm font-medium text-white
      bg-color1 shadow-lg"
            >
              <div className="flex gap-8 font-bold">
                <a href="" className="flex items-center gap-2 hover:text-yellow-300 transition">
                  <FaSquarePhone className="text-yellow-400" />
                  <span className="">+919311936564</span>
                </a>

                <a href="" className="flex items-center gap-2 hover:text-yellow-300 transition">
                  <MdEmail className="text-yellow-400" />
                  <span className="">info@widerworld.com</span>
                </a>
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex gap-3.5 text-lg">
                {/* Facebook */}
                <div
                  className="group relative w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm
      border-[1.5px] border-white flex items-center justify-center cursor-pointer
      overflow-hidden transition-all duration-300
      hover:-translate-y-1 hover:scale-110 hover:border-transparent
      hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/globeswayimmigration",
                      "_blank"
                    )
                  }
                >
                  <span
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
      bg-gradient-to-br from-[#1877F2] to-[#0a5bb5]"
                  />
                  <FaFacebook className="text-base text-[#1877F2] group-hover:text-white relative z-10 transition-colors duration-300" />
                </div>

                {/* Instagram */}
                <div
                  className="group relative w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm
      border-[1.5px] border-white flex items-center justify-center cursor-pointer
      overflow-hidden transition-all duration-300
      hover:-translate-y-1 hover:scale-110 hover:border-transparent
      hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/globeswayimmigration/",
                      "_blank"
                    )
                  }
                >
                  <span
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
                    }}
                  />
                  <AiFillInstagram className="text-lg text-rose-600 group-hover:text-white relative z-10 transition-colors duration-300" />
                </div>

                {/* LinkedIn */}
                <div
                  className="group relative w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm
      border-[1.5px] border-white flex items-center justify-center cursor-pointer
      overflow-hidden transition-all duration-300
      hover:-translate-y-1 hover:scale-110 hover:border-transparent
      hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/globesway-immigration/",
                      "_blank"
                    )
                  }
                >
                  <span
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
      bg-gradient-to-br from-[#0A66C2] to-[#004182]"
                  />
                  <FaLinkedinIn className="text-lg text-[#0A66C2] group-hover:text-white relative z-10 transition-colors duration-300" />
                </div>

                {/* YouTube */}
                <div
                  className="group relative w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm
      border-[1.5px] border-white flex items-center justify-center cursor-pointer
      overflow-hidden transition-all duration-300
      hover:-translate-y-1 hover:scale-110 hover:border-transparent
      hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/@GlobeswayImmigration",
                      "_blank"
                    )
                  }
                >
                  <span
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
      bg-gradient-to-br from-[#FF0000] to-[#cc0000]"
                  />
                  <TbBrandYoutubeFilled className="text-lg text-[#FF0000] group-hover:text-white relative z-10 transition-colors duration-300" />
                </div>
              </div>
            </div>

            {/* NAV BAR */}
            <div className="flex bg-color5 justify-between items-center w-full px-10 pt-4 pb-7 relative">
              {/* MENU */}
              <div className="flex items-center">
                <Menu
                  navItemsArray={navItems}
                  Items={navigationMenu.primaryMenu}
                  Isprimary
                />
              </div>

              {/* BUTTONS WRAPPER */}
              <div className="flex items-center gap-5">
                <PaymentButton />
              </div>
            </div>
               <div className=" bg-white w-max -mt-4 z-[60] sticky px-10 shadow-lg ">
            <Menu
              navItemsArray={navItems}
              Items={navigationMenu.secondaryMenu}
              Isprimary={false}
              onTop={isAtTop}
            /> 
          </div>
          </div>
          
        </div>
     
        </div>

        {/* ================= MOBILE HEADER ================= */}
        <div
          className={`flex md:hidden items-center justify-between px-4 h-20 transition ${
            isAtTop ? "bg-color1" : "bg-white shadow-md"
          }`}
        >
          <Link href={header?.href || "/"}>
            <Image
              src={isAtTop ? logo2 : logo}
              alt="Globesway Immigration"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {isMobileMenuOpen ? (
            <VscChromeClose
              className={`text-3xl ${isAtTop ? "text-white" : "text-black"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ) : (
            <IoMenu
              className={`text-3xl ${isAtTop ? "text-white" : "text-black"}`}
              onClick={() => setIsMobileMenuOpen(true)}
            />
          )}
        </div>

        {/* MOBILE MENU */}
        <div
          className={`fixed top-20 left-0 h-screen w-full md:hidden transition-all duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } ${isAtTop ? "bg-black" : "bg-white"}`}
        >
          <MenuMobile
            onTop={isAtTop}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </header>
    </>
  );
};

export default Header;

// function Latestupdate() {
//   return (
//     <section className="flex font-semibold items-center text-sm text-white relative">
//       {/* Latest Update Label with arrow shape */}
//       <div className="relative shrink-0">
//         <div className="relative px-4 py-3  bg-gradient-to-r from-yellow-500 to-yellow-600">
//           <span className="relative z-10 font-bold flex gap-x-1 tracking-wide items-center">
//             Latest Update <FaCaretRight />
//           </span>
//         </div>
//       </div>

//       {/* Marquee Section */}
//       <div className="flex-1 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 relative overflow-hidden">
//         {/* Animated shine effect */}
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>

//         <Marquee speed={50} pauseOnHover gradient={false} className="py-3">
//           <a
//             className="mx-6 hover:text-blue-100 transition-colors duration-200 flex items-center gap-2 group"
//             href="#"
//           >
//             <span className="inline-block w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform duration-200"></span>
//             <span className="group-hover:underline">
//               New medical exam requirements for Express Entry PR applications
//             </span>
//           </a>
//           <a
//             className="mx-6 hover:text-blue-100 transition-colors duration-200 flex items-center gap-2 group"
//             href="#"
//           >
//             <span className="inline-block w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform duration-200"></span>
//             <span className="group-hover:underline">
//               Canada issues thousands of invitations in major Healthcare draw
//             </span>
//           </a>
//           <a
//             className="mx-6 hover:text-blue-100 transition-colors duration-200 flex items-center gap-2 group"
//             href="#"
//           >
//             <span className="inline-block w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform duration-200"></span>
//             <span className="group-hover:underline">
//               IRCC invites more PNP candidates in latest Express Entry draw
//             </span>
//           </a>
//         </Marquee>
//       </div>
//     </section>
//   );
// }

// globals.css mein add karo
/*

*/

function PaymentButton() {
  return (
    <div className="flex items-center gap-4 flex-shrink-0">
      {/* ── GET FREE QUOTE ── */}
    <Buttonmain href={"/contact-us"} text2={"Get Support"} text1={"Contact Now"}/>

      {/* ── PAY NOW ── */}
      <Link
        href="/payment"
        className="group relative flex items-center gap-3 px-8 py-4 rounded-full
  text-white font-semibold text-[15px] tracking-wide
  transition-all duration-300 hover:-translate-y-[2px] z-0"
      >
        {/* spinning border layer */}
        <span className="absolute inset-0 rounded-full overflow-hidden -z-10">
          <span
            className="absolute inset-[-2px] h-52 w-52"
            style={{
              background:
                "conic-gradient(from 0deg,#CB0000,#C9992A,#004094,#CB0000)",
              animation: "spinBorder 4s linear infinite",
            }}
          />

          {/* inner mask */}
          <span className="absolute inset-[2px] rounded-full bg-[#44535b]" />
        </span>

        {/* text swap */}
        <span className="relative overflow-hidden h-[1.25em] flex items-center">
          <span className="block transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap">
            Make Payment
          </span>

          <span className="absolute top-0 left-0 block translate-y-full  text-center transition-transform duration-300 group-hover:translate-y-0 whitespace-nowrap">
            {" "}
            Pay Now
          </span>
        </span>

        <FaCreditCard className="text-[15px] text-color4 transition-all duration-300 group-hover:translate-x-1" />
      </Link>

      {/* ── SEARCH ── */}
      <button
        className="group relative w-[48px] h-[48px] rounded-full
        bg-white/10 border border-white/25 flex items-center justify-center
        overflow-hidden transition-all duration-300
        hover:-translate-y-[2px] hover:border-transparent
        hover:shadow-[0_10px_25px_rgba(203,0,0,0.45)]"
      >
        <span
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
          transition-opacity duration-300"
          style={{
            background: "linear-gradient(135deg,#CB0000,#8B0000)",
          }}
        />

        <FaSearch
          className="text-[17px] text-white/80 group-hover:text-white
          relative z-10 transition-transform duration-300 group-hover:scale-110"
        />
      </button>
    </div>
  );
}
