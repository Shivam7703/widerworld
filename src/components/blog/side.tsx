"use client";
import { about2 } from "@/assets";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdArrowCircleRight, MdOutlineChat } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import {blogData as latestBlogs} from "@/data/homeData";
import { FaDownload, FaLocationArrow, FaRegUserCircle } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { motion } from "motion/react";
import { BiRightArrowAlt } from "react-icons/bi";

const data = [
  {
    id: 1,
    title: "Canada PR Visa",
    href: "/visa/canada-pr-visa",
  },
  {
    id: 2,
    title: "Australia PR Visa",
    href: "/visa/australia-pr-visa",
  },
  {
    id: 3,
    title: "Dubai Work Visa",
    href: "/visa/dubai-work-visa",
  },
  {
    id: 4,
    title: "Qatar Tourist Visa",
    href: "/visa/qatar-tourist-visa",
  },
  {
    id: 5,
    title: "Croatia Work Visa",
    href: "/visa/croatia-work-visa",
  },
  {
    id: 6,
    title: "Luxembourg Work Visa",
    href: "/visa/luxembourg-work-visa",
  },
];


 const inputFields = [
    { name: 'name', label: 'Name', type: 'text', icon: FaRegUserCircle, placeholder: 'John Doe' },
    { name: 'phone', label: 'Phone', type: 'tel', icon: FiPhone, placeholder: '+1 (555) 000-0000' },
    { name: 'email', label: 'Email', type: 'email', icon: FiMail, placeholder: 'john@example.com' },
    { name: 'location', label: 'Location', type: 'text', icon: FaLocationArrow, placeholder: 'City, Country' },

    { name: 'subject', label: 'Subject', type: 'text', icon: IoChatboxEllipsesOutline, placeholder: 'How can we help?' }
  ];

 function BlogAside() {
//   const blogsData = await getBlogs();
//   const latestBlogs = blogsData.slice(0, 3);

//   const createSlug = (title: string): string =>
//     title
//       .trim()
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/^-+|-+$/g, "");

  return (
    <div className="space-y-6">

{/* form  sec1 */}
    <form className="bg-white rounded-2xl p-6  shadow-lg border">
  <div className=" space-y-3">

    {/* First 4 inputs in 2-column grid */}
  <div className="grid md:grid-cols-1 xl:grid-cols-2  grid-cols-2 gap-y-3 gap-4">
      {inputFields.slice(0, 4).map((field) => {
        const Icon = field.icon;
        return (
          <div key={field.name} className="relative">
            <label className="block text-zinc-700 font-medium mb-2 text-sm sm:text-base">
              {field.label}
            </label>
            <div className="relative">
              <div className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10">
                <Icon size={16} className="sm:w-4 sm:h-4" />
              </div>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="w-full pl-7 sm:pl-8 pr-3 py-2  bg-zinc-50 rounded-xl sm:rounded-2xl text-zinc-800 placeholder-zinc-400 transition-all duration-300 focus:outline-none focus:bg-white border border-zinc-200 text-sm shadow-inner"
                required
              />
            </div>
          </div>
        );
      })}
    </div>

    {/* Remaining inputs full width */}
    {inputFields.slice(4).map((field) => {
      const Icon = field.icon;
      return (
        <div key={field.name} className="relative">
          <label className="block text-zinc-700 font-medium mb-2 text-sm sm:text-base">
            {field.label}
          </label>
          <div className="relative">
            <div className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10">
              <Icon size={16} className="sm:w-4 sm:h-4" />
            </div>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              className="w-full pl-7 sm:pl-8 pr-4 py-2 bg-zinc-50 rounded-xl sm:rounded-2xl text-zinc-800 placeholder-zinc-400 transition-all duration-300 focus:outline-none focus:bg-white border border-zinc-200 text-sm shadow-inner"
              required
            />
          </div>
        </div>
      );
    })}

    {/* Message */}
    <div className="relative">
      <label className="block text-zinc-700 font-medium mb-2 text-sm sm:text-base">
        Message
      </label>
      <div className="relative">
        <div className="absolute left-2 sm:left-3 top-4 text-zinc-400 z-10">
          <MdOutlineChat size={17} className="sm:w-4 sm:h-4" />
        </div>
        <textarea
          name="message"
          rows={2}
          placeholder="Tell us more about your inquiry..."
          className="w-full pl-7 sm:pl-8 pr-4 py-2 bg-zinc-50 rounded-xl sm:rounded-2xl text-zinc-800 placeholder-zinc-400 transition-all duration-300 focus:outline-none focus:bg-white border border-zinc-200 resize-none text-sm shadow-inner"
          required
        />
      </div>
    </div>

<button
  type="submit"
  className="
    rounded-full px-6 py-3
    text-sm sm:text-base font-medium
    bg-blue-600 text-white
    transition-all duration-200
    hover:bg-blue-700
    active:scale-95
  "
>
  Submit Now
</button>



  </div>
</form>

   {/* Latest Blogs Section 2 */}
    <div className="bg-gradient-to-br from-white to-zinc-100 p-6  rounded-2xl border border-blue-100 shadow-lg">
  {/* Heading */}
  <h4 className="mb-5 text-xl md:text-2xl font-bold text-zinc-900 font2">
    Latest Blogs
  </h4>

  {/* Blog List */}
  <div className="space-y-3">
    {latestBlogs?.blog.slice(0, 3).map((blog: any, index: number) => (
      <Link
        key={blog?.id || index}
        href={`/blogs/${blog?.heading}`}
        title={blog?.heading}
        className="group block"
      >
        <div
          className="relative bg-white hover14 rounded-2xl border border-zinc-200
                     transition-all duration-300
                     hover:border-blue-500 hover:shadow-xl"
        >
          <div className="flex gap-4 p-2 items-stretch">
            {/* Image */}
            <div className="relative w-20 h-20  rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src={blog?.img}
                alt={blog?.imgAlt || blog?.heading}
                width={80}
                height={80}
                className="w-full h-full object-cover
                           transition-transform duration-500
                           group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between">
              <h5
                className="text-sm md:text-base font-semibold text-zinc-900
                           line-clamp-2 leading-snug
                           transition-colors duration-300
                           group-hover:text-blue-600"
              >
                {blog?.heading}
              </h5>

              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-blue-600">
                <span>Read Article</span>
                <FaChevronRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>

      {/* Other Visa Categories Section */}
     <div className="bg-gradient-to-br from-white to-zinc-100 p-6  rounded-2xl border border-zinc-200 shadow-lg">
  {/* Heading */}
  <h4 className="mb-5 text-xl md:text-2xl font-bold text-zinc-900 font2">
    Visas We Offer
  </h4>

  {/* List */}
  <ul className="space-y-3">
    {data?.map((service) => (
      <li
        key={service?.id}
        className="group rounded-xl overflow-hidden bg-white border border-zinc-200
                   transition-all duration-300
                   hover:border-blue-600 hover:shadow-lg"
      >
        <Link
          href={service?.href}
          title="Best immigration consultants in Delhi"
          className="flex items-center"
        >
          {/* Icon */}
          <div
            className="flex items-center justify-center px-4 py-3
                       text-zinc-500
                       transition-all duration-300
                       group-hover:text-white
                       group-hover:bg-gradient-to-br
                       group-hover:from-blue-600
                       group-hover:to-indigo-700"
          >
            <FaChevronRight className="text-sm" />
          </div>

          {/* Text */}
          <p
            className="flex-1 px-4 py-3 text-sm md:text-base
                       font-medium text-zinc-800
                       transition-colors duration-300
                       group-hover:text-blue-700"
          >
            {service?.title}
          </p>
        </Link>
      </li>
    ))}
  </ul>
</div>


     {/* Migrate */}
     <div className="bg-gradient-to-br from-white to-zinc-100 p-6  rounded-2xl border border-zinc-200 shadow-lg">
  {/* Heading */}
  <h4 className="mb-5 text-xl md:text-2xl font-bold text-zinc-900 font2">
    Migrate
  </h4>

  {/* List */}
  <ul className="space-y-3">
    {data?.map((service) => (
      <li
        key={service?.id}
        className="group rounded-xl overflow-hidden bg-white border border-zinc-200
                   transition-all duration-300
                   hover:border-blue-600 hover:shadow-lg"
      >
        <Link
          href={service?.href}
          title="Best immigration consultants in Delhi"
          className="flex items-center"
        >
          {/* Icon */}
          <div
            className="flex items-center justify-center px-4 py-3
                       text-zinc-500
                       transition-all duration-300
                       group-hover:text-white
                       group-hover:bg-gradient-to-br
                       group-hover:from-blue-600
                       group-hover:to-indigo-700"
          >
            <FaChevronRight className="text-sm" />
          </div>

          {/* Text */}
          <p
            className="flex-1 px-4 py-3 text-sm md:text-base
                       font-medium text-zinc-800
                       transition-colors duration-300
                       group-hover:text-blue-700"
          >
{service?.title?.split(" ")[0]}
          </p>
        </Link>
      </li>
    ))}
  </ul>
</div>

<div className="bg-gradient-to-br from-zinc-50 to-zinc-100 p-6 rounded-2xl border border-zinc-200 shadow-md">
  {/* Heading */}
  <h4 className="mb-5 text-lg md:text-xl font-bold text-zinc-900 font2">
    Popular Tags
  </h4>

  {/* Tags */}
  <div className="flex flex-wrap gap-2.5">
    {data?.map((tag: any, index: number) => (
      <button
        key={index}
        className="
          group inline-flex items-center justify-center
          px-4 py-1.5 rounded-full
          text-xs md:text-sm font-medium
          text-zinc-700
          bg-white border border-zinc-200
          transition-all duration-300
          hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600
          hover:text-white hover:border-transparent
          hover:shadow-md
        "
      >
        #{tag?.title?.split(" ").slice(1).join(" ")}
      </button>
    ))}
  </div>
</div>


      {/* brochure download*/}
      <button
  type="button"
  className="
    group relative inline-flex items-center gap-3
    rounded-xl px-6 py-3
    font-semibold text-white
    bg-gradient-to-r from-blue-600 to-indigo-600
    shadow-lg !mx-auto
    transition-all duration-300
    hover:shadow-xl hover:scale-[1.03]
    active:scale-95
  "
>
  {/* Icon */}
  <span
    className="flex items-center justify-center w-9 h-9 rounded-lg
               bg-white/20 backdrop-blur-sm
               transition-transform duration-300
               group-hover:rotate-[-6deg]"
  >
    <FaDownload className="text-lg" />
  </span>

  {/* Text */}
  <span className="text-sm sm:text-base tracking-wide">
    Download Brochure
  </span>
</button>

    </div>
  );
}

export default BlogAside;