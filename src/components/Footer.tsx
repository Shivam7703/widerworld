"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { navigationMenu } from "@/data/homeData";
import { FormatHref } from "./header/Menu";

export default function Footer({ footer }: any) {
  return (
    <>
      <footer className="">
        {/* Footer links section  */}
        <div className="flex flex-wrap sm:p-8 p-6 md:px-24  w-full text-white bg-zinc-800  gap-y-6 lg:gap-y-10 justify-between">
          <div className="lg:w-[27%] sm:w-[48%] w-full flex flex-col gap-y-2">
            <Image
              src={footer?.logo}
              alt="logo"
              className="max-w-44 w-[80vw]  object-contain"
            />
             {/* <p className="w-full text-zinc-300  text-sm mt-3   max-sm:mt-3"> 
             {footer?.text}
             </p> */}
            {/* Socials  */}
            {footer?.socials && (
              <div className="flex gap-2 md:gap-x-3 mt-3 text-4xl text-white">
                {footer?.socials?.facebook && (
                  <FaFacebook
                    className=" hover:text-color1 p-2 bg-[#ffffff19] rounded-full duration-300 "
                    onClick={() =>
                      window.open(footer?.socials?.facebook, "_blank")
                    }
                  />
                )}
                {footer?.socials?.instagram && (
                  <AiFillInstagram
                    className="hover:text-color1 p-2 bg-[#ffffff19] rounded-full duration-300"
                    onClick={() =>
                      window.open(footer?.socials?.instagram, "_blank")
                    }
                  />
                )}
                {footer?.socials?.linkedin && (
                  <FaLinkedinIn
                    className="hover:text-color1 p-2 bg-[#ffffff19] rounded-full duration-300"
                    onClick={() =>
                      window.open(footer?.socials?.linkedin, "_blank")
                    }
                  />
                )}
                {footer?.socials?.youtube && (
                  <TbBrandYoutubeFilled
                    className="hover:text-color1 p-2 bg-[#ffffff19] rounded-full duration-300"
                    onClick={() =>
                      window.open(footer?.socials?.youtube, "_blank")
                    }
                  />
                )}
                {footer?.socials?.twitter && (
                  <FaXTwitter
                    className="hover:text-color1 p-2 bg-[#ffffff19] rounded-full duration-300"
                    onClick={() =>
                      window.open(footer?.socials?.twitter, "_blank")
                    }
                  />
                )}
              </div>
            )}
          </div>
          <div className="lg:w-[16%] sm:w-[48%] w-full flex flex-col gap-y-2 max-sm:mt-5">
            <h4 className="my-2 text-xl font-semibold">
              {footer?.list2?.title}
            </h4>
            <ul className="space-y-3">
              {footer?.list2?.links?.map((d: any, i: number) => (
                <li key={i}>
                  <Link
                    href={d?.href}
                    className=" transition:all text-base text-zinc-200 duration-300 hover:text-red-500"
                  >
                    {"-"} {d?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-[18%] sm:w-[48%] w-full flex flex-col gap-y-2  max-sm:mt-5">
            <h4 className="my-2 text-xl font-semibold">
              {footer?.list1?.title}
            </h4>
            <ul className="space-y-3">
              {footer?.list1?.links?.map((d: any, i: number) => (
                <li key={i}>
                  <Link
                    href={d?.href}
                    className=" transition:all text-base text-zinc-200 duration-300 hover:text-red-500"
                  >
                    {"-"} {d?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
    

          <div className="lg:w-[26%] sm:w-[48%] w-full flex flex-col max-sm:mt-5 space-y-2  col-span-3">
            <h4 className="my-2  text-xl font-semibold">
              {footer?.newLetter?.title}
            </h4>
            <p className=" transition:all text-base text-zinc-200 duration-300 hover:  ">
             <a href="tel:+919999624998"> <strong>Phone: </strong>&nbsp;+91 9999624998</a>
            </p>
            <p className=" transition:all text-base text-zinc-200 duration-300 hover:  ">
             <a href="mailto:info@widerworld.in" target="_blank" rel="noopener noreferrer"> <strong>E-mail: </strong>&nbsp;info@widerworld.in
           </a> </p>
            <p className=" transition:all text-base text-zinc-200 duration-300 hover:  ">
           <a href="https://www.google.com/maps/dir//Best+Immigration+Consultants+In+Delhi+%7C+Wider+World+Immigration+CHIRANJIV+TOWER+Office+No.+806+8th+Floor+Nehru+Place,+New+Delhi,+Delhi+110019/@28.5497144,77.2500794,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce3a36d1028b1:0xc372007dd192dd5b!2m2!1d77.2500794!2d28.5497144" target="_blank" rel="noopener noreferrer">   <strong>Address: </strong>&nbsp;Office No. 806, 8th Floor, Chiranjiv Tower -43, Nehru Place, New Delhi-110019</a>
            </p>
          </div>
        </div>
        <div className="text-black space-y-4 bg-white  p-6 md:px-24 ">
          {navigationMenu?.secondaryMenu?.map((item: any) => (
            <div key={item.id}>
              <span className="font-bold">{item?.label}: </span>
              {item?.subNav?.map((navitem: any) => (
                <React.Fragment key={navitem?.id}>
                  <Link
                    title={navitem?.label}
                    className="text-zinc-700"
                    href={FormatHref(navitem.href)}
                  >
                    {navitem?.label}
                    {"  "}&nbsp; | {"  "}&nbsp;
                  </Link>
                  {navitem?.subNav?.map((subNavItem: any) => (
                    <>
                      <Link
                        title={subNavItem?.label}
                        className="text-zinc-700"
                        key={subNavItem?.id}
                        href={FormatHref(subNavItem.href)}
                      >
                        {subNavItem?.label}
                        {"  "}&nbsp; | {"  "}&nbsp;
                      </Link>
                      {subNavItem?.subNavv?.map((data: any) => (
                        <Link
                          title={data?.label}
                          className="text-zinc-700"
                          key={data?.id}
                          href={FormatHref(data.href)}
                        >
                          {data?.label}
                          {"  "}&nbsp; | {"  "}&nbsp;
                        </Link>
                      ))}
                    </>
                  ))}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center border-t text-white bg-zinc-800 py-5 max-md:flex-col">
          <p className="text-center text-sm">
            {footer?.copyrightText}{" "}
            <span className=" transition-all font-semibold cursor-pointer">
              <a href="https://skywarddigitalsolutions.com">
                Skyward Digital Solutions
              </a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}

