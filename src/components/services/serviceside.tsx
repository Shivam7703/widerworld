"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineChat, MdStickyNote2, MdOutlineSchool } from "react-icons/md";
import { FaChevronRight, FaRegUserCircle, FaDownload, FaLocationArrow } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoChatboxEllipsesOutline, IoSettings } from "react-icons/io5";
import { BiRightArrowAlt } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { GrVisa } from "react-icons/gr";
import { BsNewspaper } from "react-icons/bs";
import Image from "next/image";
import { box1 } from "@/assets";
import { getBlogs } from "@/lib/api";
import { servicedata } from "@/data/servicedata";
import { createSlug } from "@/utils/slug";


interface Blog {
  ID: number;
  post_title: string;
  post_name: string;
  post_date: string;
  images: { "image:loc": string }[] | null;
}

const visaList = [
  { id: 1, title: "Canada PR Visa", href: "/visa/canada-pr-visa" },
  { id: 2, title: "Australia Work Visa", href: "/visa/australia-work-visa" },
  { id: 3, title: "Dubai Golden Visa", href: "/visa/dubai-golden-visa" },
  { id: 4, title: "Germany Work Visa", href: "/visa/germany-work-visa" },
  { id: 5, title: "Qatar Work Visa", href: "/visa/qatar-work-visa" },
  { id: 6, title: "Luxembourg Work Visa", href: "/visa/luxembourg-work-visa" },
];

const coachingData = [
  { id: 1, title: "IELTS", href: "/coaching/ielts" },
  { id: 2, title: "PTE", href: "/coaching/pte" },
  { id: 3, title: "TOEFL", href: "/coaching/toefl" },
  { id: 4, title: "CELPIP", href: "/coaching/celpip" },
  { id: 5, title: "OET", href: "/coaching/oet" },
];

const inputFields = [
  { name: "name", label: "Name", type: "text", icon: FaRegUserCircle, placeholder: "Your Name" },
  { name: "phone", label: "Phone", type: "tel", icon: FiPhone, placeholder: "Contact no." },
  { name: "email", label: "Email", type: "email", icon: FiMail, placeholder: "Your Email" },
  { name: "location", label: "Location", type: "text", icon: FaLocationArrow, placeholder: "Country" },
  { name: "subject", label: "Subject", type: "text", icon: IoChatboxEllipsesOutline, placeholder: "How can we help?" },
];


export default function BlogAside() {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lastSegment = pathname?.split("/").filter(Boolean).pop();
    setActiveSegment(lastSegment || null);
  }, [pathname]);

  // Helper to check if a path or title matches current URL
  const isActive = (pathOrTitle: string) => {
    const slug = pathOrTitle.includes("/")
      ? pathOrTitle.split("/").filter(Boolean).pop()
      : createSlug(pathOrTitle);
    return slug === activeSegment;
  };

  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    async function loadLatestBlogs() {
      try {
        const res = await getBlogs(1);
        setBlogs(res.data?.slice(0, 3) || []);
      } catch (err) {
        console.error("Failed to load latest blogs:", err);
      }
    }
    loadLatestBlogs();
  }, []);

  function getImageUrl(images: Blog["images"]) {
    if (!images || images.length === 0) return null;
    const loc = images[0]["image:loc"];
    return loc ? `https://widerworld.in${loc}` : null;
  }
  function formatDate(dateStr: string) {

    return new Date(dateStr).toLocaleDateString("en-IN", {

      day: "2-digit",

      month: "short",

      year: "numeric",

    });

  }
  return (
    <div className="flex flex-col gap-4 md:gap-7">

      {/* 1. Inquiry Form */}
      <SideCard title="Quick Inquiry" icon={<MdStickyNote2 size={14} />}>

        <form className="p-4 flex flex-col gap-3">

          <div className="grid grid-cols-2 gap-2.5">

            {inputFields.slice(0, 4).map((f) => {

              const Icon = f.icon;

              return (

                <div key={f.name}>

                  <label className="block text-xs font-semibold uppercase tracking-[.08em] text-color3 my-2">

                    {f.label}

                  </label>

                  <div className="relative">

                    <Icon size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-color2 opacity-60 z-10" />

                    <input

                      type={f.type}

                      name={f.name}

                      placeholder={f.placeholder}

                      className="w-full pl-7 pr-2.5 py-2 text-xs rounded-lg shadow text-color3 placeholder:text-slate-400 outline-none focus:border-color2 border"

                    />

                  </div>

                </div>

              );

            })}

          </div>



          {inputFields.slice(4).map((f) => {

            const Icon = f.icon;

            return (

              <div key={f.name}>

                <label className="block text-xs font-semibold uppercase tracking-[.08em] text-color3 my-2">

                  {f.label}

                </label>

                <div className="relative">

                  <Icon size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-color2 opacity-60 z-10" />

                  <input

                    type={f.type}

                    name={f.name}

                    placeholder={f.placeholder}

                    className="w-full pl-7 pr-2.5 py-2 text-xs rounded-lg border shadow text-color3 placeholder:text-slate-400 outline-none focus:border-color2"

                  />

                </div>

              </div>

            );

          })}



          <div>

            <label className="block text-xs font-semibold uppercase tracking-[.08em] text-color3 mb-1.5">

              Message

            </label>

            <div className="relative">

              <MdOutlineChat size={13} className="absolute left-2.5 top-3 text-color2 opacity-60 z-10" />

              <textarea

                name="message"

                rows={2}

                placeholder="Tell us more about your inquiry..."

                className="w-full pl-7 pr-2.5 py-2 text-xs rounded-lg border shadow text-color3 placeholder:text-slate-400 outline-none focus:border-color2 resize-none"

              />

            </div>

          </div>



          <button

            type="submit"

            className="self-start flex items-center gap-2 bg-color2 hover:bg-[#003070] text-white text-[12px] font-semibold uppercase tracking-[.04em] px-5 py-2.5 rounded-full transition-all duration-200 active:scale-95"

          >

            Submit Now

            <span className="w-[18px] h-[18px] rounded-full bg-color4 flex items-center justify-center flex-shrink-0">

              <BiRightArrowAlt size={12} className="text-color3" />

            </span>

          </button>

        </form>

      </SideCard>



      {/* 2. Latest Blogs */}
      <SideCard title="Latest Blogs" icon={<BsNewspaper size={14} />}>

        <div className="p-3 flex flex-col gap-3">

          {blogs.length === 0 ? (

            <p className="text-xs text-slate-400 text-center py-4 animate-pulse">Loading...</p>

          ) : (

            blogs.map((blog) => {

              const imageUrl = getImageUrl(blog.images);

              return (

                <Link

                  key={blog.ID}

                  href={`/${blog.post_name}`}

                  className="group flex items-center gap-3 p-2 rounded-xl border border-slate-200 hover:border-color2 hover:bg-blue-50 transition-all duration-200"

                >

                  {/* Thumbnail */}

                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">

                    <Image

                      src={imageUrl || box1}

                      alt={blog.post_title}

                      fill

                      className="object-cover group-hover:scale-105 transition-transform duration-300"

                    />

                  </div>



                  {/* Text */}

                  <div className="flex flex-col gap-1 flex-1 min-w-0">

                    <p className="text-sm text-color2 font-semibold">

                      {formatDate(blog.post_date)}

                    </p>

                    <p className="text-base font-semibold text-color3 group-hover:text-color2 transition-colors line-clamp-2 leading-snug">

                      {blog.post_title}

                    </p>

                  </div>

                </Link>

              );

            })

          )}



          {/* View All */}

          <Link

            href="/blogs"

            className="self-center text-xs font-bold text-color2 hover:text-color1 transition-colors mt-1 flex items-center gap-1"

          >

            View All Blogs <BiRightArrowAlt size={14} />

          </Link>

        </div>

      </SideCard>



      {/* 3. Our Services */}
      <SideCard title="Our Services" icon={<IoSettings size={14} />}>
        <div className="p-3 flex flex-col gap-1.5">
          {servicedata.map((service: any, i: number) => {
            const active = isActive(service.title);
            return (
              <NavLink key={i} href={`/services/${createSlug(service.title)}`} active={active}>
                {service.title}
              </NavLink>
            );
          })}
        </div>
      </SideCard>

      {/* 4. Coaching */}
      <SideCard title="Coaching Programs" icon={<MdOutlineSchool size={14} />}>
        <div className="p-3 flex flex-col gap-1.5">
          {coachingData.map((c) => (
            <NavLink key={c.id} href={c.href} active={isActive(c.href)}>
              {c.title}
            </NavLink>
          ))}
        </div>
      </SideCard>

      {/* 5. Visas We Offer */}
      <SideCard title="Visas We Offer" icon={<GrVisa size={14} />}>
        <div className="p-3 flex flex-col gap-1.5">
          {visaList.map((v) => (
            <NavLink key={v.id} href={v.href} active={isActive(v.href)}>
              {v.title}
            </NavLink>
          ))}
        </div>
      </SideCard>





      {/* ── 7. CTA ── */}

      <div className="rounded-2xl bg-color1 p-5">

        <p className="text-xs font-bold uppercase tracking-[.18em] text-white/50 mb-1.5">Need Help?</p>

        <p className="text-base font-bold text-white leading-snug mb-3">

          Get a Free Immigration Consultation Today

        </p>

        <Link href="/evaluation-form"

          className="w-full flex items-center justify-center gap-2 bg-color4 text-color3 text-xs font-bold uppercase tracking-[.08em] py-2.5 rounded-[9px] hover:bg-[#ffd96e] transition-colors"

        >

          <MdOutlineChat size={14} />

          Book a Call →

        </Link>

      </div>



    </div>

  );

}

// Reusable Navigation Link for UI consistency
function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] border-[1.5px] transition-all duration-200
        ${active ? "bg-color2 border-color2 text-white" : "border-slate-200 bg-slate-50 hover:border-color2 hover:bg-blue-50"}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${active ? "bg-white" : "bg-color2 group-hover:bg-color1"}`} />
      <span className={`flex-1 text-sm font-medium ${active ? "text-white" : "text-slate-700 group-hover:text-color2"}`}>
        {children}
      </span>
      <span className={`w-[18px] h-[18px] rounded-[5px] flex items-center justify-center flex-shrink-0 ${active ? "bg-white" : "bg-blue-100 group-hover:bg-color2"}`}>
        <BiRightArrowAlt size={12} className={`${active ? "text-color2" : "text-color2 group-hover:text-white"}`} />
      </span>
    </Link>
  );
}

function SideCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
      <div className="flex items-center gap-2.5 px-4 py-3 bg-color3">
        <div className="w-[26px] h-[26px] rounded-[7px] bg-color4 flex items-center justify-center">{icon}</div>
        <span className="text-sm font-bold text-white tracking-wide">{title}</span>
      </div>
      {children}
    </div>
  );
}