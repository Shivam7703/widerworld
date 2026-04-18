"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineChat } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { servicedata } from "@/data/servicedata";
import { FaDownload, FaLocationArrow, FaRegUserCircle } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiRightArrowAlt } from "react-icons/bi";
import { usePathname } from "next/navigation";

    

const visaList = [
  { id: 1, title: "Canada PR Visa" },
  { id: 2, title: "Australia PR Visa" },
  { id: 3, title: "Dubai Work Visa" },
  { id: 4, title: "Qatar Tourist Visa" },
  { id: 5, title: "Croatia Work Visa" },
  { id: 6, title: "Luxembourg Work Visa" },
];

const inputFields = [
  { name: "name",     label: "Name",     type: "text",  icon: FaRegUserCircle,          placeholder: "John Doe" },
  { name: "phone",    label: "Phone",    type: "tel",   icon: FiPhone,                  placeholder: "+1 (555) 000-0000" },
  { name: "email",    label: "Email",    type: "email", icon: FiMail,                   placeholder: "john@example.com" },
  { name: "location", label: "Location", type: "text",  icon: FaLocationArrow,          placeholder: "City, Country" },
  { name: "subject",  label: "Subject",  type: "text",  icon: IoChatboxEllipsesOutline, placeholder: "How can we help?" },
];

const createSlug = (title: string) =>
  title.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");


export default function ServiceAside() {
         const [activeItem, setActiveItem] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const lastSegment = pathname?.split("/").filter(Boolean).pop();
    let path = lastSegment || "home";

    setActiveItem(path);
  }, [pathname]);
  
   const isHref = (title: string) => {
    return createSlug(title) === activeItem;
  };
  
  return (
    <div className="flex flex-col gap-4">

      {/* ── 1. Inquiry Form ── */}
      <SideCard
        title="Quick Inquiry"
        icon={<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 3h12v1.5L9 9v5l-2-1.5V9L2 4.5V3z" fill="color3"/></svg>}
      >
        <form className="p-4 flex flex-col gap-3">
          {/* 2-col grid for first 4 */}
          <div className="grid grid-cols-2 gap-2.5">
            {inputFields.slice(0, 4).map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.name}>
                  <label className="block text-[10.5px] font-semibold uppercase tracking-[.08em] text-color3 mb-1.5">
                    {f.label}
                  </label>
                  <div className="relative">
                    <Icon size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-color2 opacity-60 z-10" />
                    <input
                      type={f.type}
                      name={f.name}
                      placeholder={f.placeholder}
                      className="w-full pl-7 pr-2.5 py-[7px] text-[12px] rounded-[9px] border-[1.5px] border-slate-200 bg-slate-50 text-color3 placeholder:text-slate-400 outline-none focus:border-color2 focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subject — full width */}
          {inputFields.slice(4).map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.name}>
                <label className="block text-[10.5px] font-semibold uppercase tracking-[.08em] text-color3 mb-1.5">
                  {f.label}
                </label>
                <div className="relative">
                  <Icon size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-color2 opacity-60 z-10" />
                  <input
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    className="w-full pl-7 pr-2.5 py-[7px] text-[12px] rounded-[9px] border-[1.5px] border-slate-200 bg-slate-50 text-color3 placeholder:text-slate-400 outline-none focus:border-color2 focus:bg-white transition-colors"
                  />
                </div>
              </div>
            );
          })}

          {/* Message */}
          <div>
            <label className="block text-[10.5px] font-semibold uppercase tracking-[.08em] text-color3 mb-1.5">
              Message
            </label>
            <div className="relative">
              <MdOutlineChat size={13} className="absolute left-2.5 top-3 text-color2 opacity-60 z-10" />
              <textarea
                name="message"
                rows={2}
                placeholder="Tell us more about your inquiry..."
                className="w-full pl-7 pr-2.5 py-[7px] text-[12px] rounded-[9px] border-[1.5px] border-slate-200 bg-slate-50 text-color3 placeholder:text-slate-400 outline-none focus:border-color2 focus:bg-white transition-colors resize-none"
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

      {/* ── 2. Our Services ── */}
      <SideCard
        title="Our Services"
        icon={<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="5" height="5" rx="1.5" fill="color3"/><rect x="9" y="2" width="5" height="5" rx="1.5" fill="color3"/><rect x="2" y="9" width="5" height="5" rx="1.5" fill="color3"/><rect x="9" y="9" width="5" height="5" rx="1.5" fill="color3"/></svg>}
      >
        <div className="p-3 flex flex-col gap-1.5">
          {servicedata.map((service: any, i: number) => {
            const active = isHref(service.title);

            return (
              <Link
                key={i}
                href={`/services/${createSlug(service.title)}`}
                className={`group flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] border-[1.5px] transition-all duration-200
                  
                  ${active 
                    ? "bg-color2 border-color2 text-white"
                    : "border-slate-200 bg-slate-50 hover:border-color2 hover:bg-blue-50"
                  }
                `}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 
                  ${active ? "bg-white" : "bg-color2 group-hover:bg-color1"}`}
                />

                <span
                  className={`flex-1 text-[12.5px] font-medium transition-colors 
                  ${active ? "text-white" : "text-[color5] group-hover:text-color2"}`}
                >
                  {service.title}
                </span>

                <span
                  className={`w-[18px] h-[18px] rounded-[5px] flex items-center justify-center flex-shrink-0 transition-colors
                  ${active ? "bg-white" : "bg-blue-100 group-hover:bg-color2"}`}
                >
                  <BiRightArrowAlt
                    size={11}
                    className={`${active ? "text-color2" : "text-color2 group-hover:text-white"}`}
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </SideCard>

      {/* ── 3. Visas We Offer ── */}
      <SideCard
        title="Visas We Offer"
        icon={<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5.5" stroke="color3" strokeWidth="1.8"/><path d="M8 5v3l2 2" stroke="color3" strokeWidth="1.5" strokeLinecap="round"/></svg>}
      >
        <div className="p-3 flex flex-col gap-1.5">
          {visaList.map((v) => (
            <Link
              key={v.id}
              href="#"
              className="group flex items-center overflow-hidden rounded-[9px] border-[1.5px] border-slate-200 bg-white hover:border-color1 transition-all duration-200"
            >
              <div className="w-[34px] self-stretch flex items-center justify-center bg-slate-50 border-r border-slate-200 group-hover:bg-color1 group-hover:border-color1 transition-all flex-shrink-0">
                <FaChevronRight size={10} className="text-color1 group-hover:text-white transition-colors" />
              </div>
              <span className="px-3 py-2.5 text-[12.5px] font-medium text-[color5] group-hover:text-color1 transition-colors">
                {v.title}
              </span>
            </Link>
          ))}
        </div>
      </SideCard>

      {/* ── 4. Migrate ── */}
      <SideCard
        title="Migrate"
        icon={<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M8 3l5 5-5 5" stroke="color3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      >
        <div className="p-3 flex flex-col gap-1.5">
          {visaList.map((v) => (
            <Link
              key={v.id}
              href="#"
              className="group flex items-center overflow-hidden rounded-[9px] border-[1.5px] border-slate-200 bg-white hover:border-color1 transition-all duration-200"
            >
              <div className="w-[34px] self-stretch flex items-center justify-center bg-slate-50 border-r border-slate-200 group-hover:bg-color1 group-hover:border-color1 transition-all flex-shrink-0">
                <FaChevronRight size={10} className="text-color1 group-hover:text-white transition-colors" />
              </div>
              <span className="px-3 py-2.5 text-[12.5px] font-medium text-[color5] group-hover:text-color1 transition-colors">
                {v.title.split(" ")[0]}
              </span>
            </Link>
          ))}
        </div>
      </SideCard>

     

      {/* ── 6. Download Brochure ── */}
      <button
        type="button"
        className="flex items-center gap-3 bg-color3 hover:bg-[color5] rounded-2xl px-4 py-3.5 w-full text-left transition-all duration-200 hover:-translate-y-0.5 active:scale-[.98]"
      >
        <div className="w-9 h-9 rounded-[9px] bg-color4 flex items-center justify-center flex-shrink-0">
          <FaDownload size={14} className="text-color3" />
        </div>
        <div className="flex flex-col">
          <span className="text-[9.5px] font-semibold uppercase tracking-[.12em] text-white/45 mb-0.5">
            Free Resource
          </span>
          <span className="text-[13px] font-bold text-white">Download Brochure</span>
        </div>
      </button>

      {/* ── 7. CTA ── */}
      <div className="rounded-2xl bg-color1 p-5">
        <p className="text-[9px] font-bold uppercase tracking-[.18em] text-white/50 mb-1.5">Need Help?</p>
        <p className="text-[16px] font-bold text-white leading-snug mb-3">
          Get a Free Immigration Consultation Today
        </p>
        <a href={"tel:123456667"} className="w-full flex items-center justify-center gap-2 bg-color4 text-color3 text-[12px] font-bold uppercase tracking-[.08em] py-2.5 rounded-[9px] hover:bg-[#ffd96e] transition-colors">
          <MdOutlineChat size={14} />
          Book a Call →
        </a>
      </div>

    </div>
  );
}



// ── Reusable card wrapper ───────────────────────────────
function SideCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {


  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 py-3 bg-color3">
        <div className="w-[26px] h-[26px] rounded-[7px] bg-color4 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <span className="text-[13px] font-bold text-white tracking-wide">{title}</span>
      </div>
      {/* Red→Blue accent bar */}
      <div className="h-[2px] bg-gradient-to-r from-color1 to-color2" />
      {children}
    </div>
  );
}