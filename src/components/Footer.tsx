"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { navigationMenu } from "@/data/homeData";
import Marquee from "react-fast-marquee";
import { footerImage, plane } from "@/assets";
import { FormatHref } from "./header/Menu";

export default function Footer({ footer }: any) {
  return (
    <>
      <footer className="">
        {/* Footer links section  */}
        <div className="grid sm:p-8 p-6 md:px-24  w-full text-white bg-color5  grid-cols-3 sm:grid-cols-6 gap-6 lg:gap-10 lg:grid-cols-12">
          <div className="col-span-3 flex flex-col gap-y-2">
            <Image
              src={footer?.logo}
              alt="logo"
              className="max-w-64 w-[80vw] object-contain"
            />
            {/* <p className=" w-full text-base mt-3  max-sm:mt-3">
              {footer?.text}
            </p> */}
            {/* Socials  */}
            {footer?.socials && (
              <div className="flex gap-2 md:gap-x-3 mt-3  text-4xl text-white">
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
          <div className="col-span-1 flex flex-col gap-y-2 max-md:hidden"></div>
          <div className="col-span-2 flex flex-col gap-y-2 max-sm:mt-5">
            <h4 className="my-2 text-xl font-semibold">
              {footer?.list2?.title}
            </h4>
            <ul className="space-y-2">
              {footer?.list2?.links?.map((d: any, i: number) => (
                <li key={i}>
                  <Link
                    href={d?.href}
                    className=" transition:all text-base text-zinc-200 duration-300 hover:text-green2 "
                  >
                    {"-"} {d?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 flex flex-col gap-y-2  max-sm:mt-5">
            <h4 className="my-2 text-xl font-semibold">
              {footer?.list1?.title}
            </h4>
            <ul className="space-y-2">
              {footer?.list1?.links?.map((d: any, i: number) => (
                <li key={i}>
                  <Link
                    href={d?.href}
                    className=" transition:all text-base text-zinc-200 duration-300 hover:text-green2 "
                  >
                    {"-"} {d?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 flex flex-col gap-y-2 max-md:hidden"></div>

          <div className=" flex flex-col max-sm:mt-5 space-y-2  col-span-3">
            <h4 className="my-2  text-xl font-semibold">
              {footer?.newLetter?.title}
            </h4>
            <p className=" transition:all text-base text-zinc-200 duration-300 hover: hover:text-main ">
              <strong>Phone: </strong>&nbsp;0679513203,0677066361
            </p>
            <p className=" transition:all text-base text-zinc-200 duration-300 hover: hover:text-main ">
              <strong>E-mail: </strong>&nbsp;info@WiderWorldcoreoverseas.com
            </p>
            <p className=" transition:all text-base text-zinc-200 duration-300 hover: hover:text-main ">
              <strong>Address: </strong>&nbsp;Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Cum voluptate necessitatibus quod
              beatae.
            </p>
          </div>
        </div>
        <div className="text-black space-y-7 bg-white py-6 px-6 md:px-24 ">
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
        {/* footplane */}
        {/* <Footplane /> */}
        {/* copyright  */}
        <div className="flex items-center justify-center border-t text-white bg-color5 py-5 max-md:flex-col">
          <p className="text-center text-sm">
            {footer?.copyrightText}{" "}
            <span className="hover:text-main transition-all font-semibold cursor-pointer">
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

const Footplane = () => {
  return (
    <div className="bg-white pt-8 w-full relative">
      <Marquee
        speed={100}
        gradient={false}
        className="flex w-full flex-1 "
        pauseOnHover={false} // Prevent pausing on hover
        autoFill={true} // Automatically fill the space with repeated items
      >
        <Image
          src={footerImage}
          alt="logo"
          className="md:w-[900px] w-80 object-contain !-mx-6" // Added horizontal margin for spacing
        />
      </Marquee>

      <Image
        src={plane}
        alt="logo"
        className="md:w-56 w-24 object-contain mx-4 rotate-12 absolute top-4 left-[40vw]" // Added horizontal margin for spacing
      />
    </div>
  );
};
