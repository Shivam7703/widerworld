"use client";
import React from "react";
import { FaLocationArrow, FaRegUserCircle } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineChat } from "react-icons/md";
import { BiRightArrowAlt } from "react-icons/bi";

const inputFields = [
  { name: "name",     label: "Full Name", type: "text",  icon: FaRegUserCircle,        placeholder: "John Doe"           },
  { name: "phone",    label: "Phone",     type: "tel",   icon: FiPhone,                placeholder: "+1 (555) 000-0000"  },
  { name: "email",    label: "Email",     type: "email", icon: FiMail,                 placeholder: "john@example.com"   },
  { name: "location", label: "Location",  type: "text",  icon: FaLocationArrow,        placeholder: "City, Country"      },
  { name: "subject",  label: "Subject",   type: "text",  icon: IoChatboxEllipsesOutline, placeholder: "How can we help?" },
];

const pointers = [
  "20+ years of trusted visa consultancy experience",
  "95% visa approval rate across all categories",
  "Expert guidance for 150+ countries worldwide",
  "Personalized support from application to approval",
  "Transparent process with zero hidden charges",
  "Dedicated team available 6 days a week",
];

function Form() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f4fb] via-[#e8eef8] to-[#f5f0e8] lg:px-20 md:px-14 sm:px-10 px-4 py-16 md:py-24">

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,64,148,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,64,148,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-color2 to-color1" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-color2/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-color1/7 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-wrap items-stretch rounded-3xl overflow-hidden
          shadow-[0_20px_60px_rgba(26,47,74,0.14)]">

          {/* ── LEFT: Info Panel ── */}
          <div className="md:w-[46%] w-full bg-color3 relative overflow-hidden p-10 md:p-12 flex flex-col justify-between">

            {/* Pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            {/* Blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-color2/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-52 h-52 bg-color1/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              {/* Label */}
              <h4 className="text-white font-bold uppercase text-sm tracking-[0.22em] mb-4 sm:mb-6">
                Contact Us
              </h4>

              {/* Heading */}
              <h2
                className="text-white font-black text-3xl md:text-4xl !leading-tight mb-5"
              >
                Making Visas Simple With{" "}
                Expert Consultants
              </h2>

              <p className="text-white/80 leading-relaxed mb-10">
                Get personalized immigration guidance from our certified experts. We handle every step so you don't have to.
              </p>

              {/* Divider */}
              <div className="w-12 h-[2px] bg-gradient-to-r from-color2 to-color1 rounded-full mb-8" />

              {/* Pointers */}
              <ul className="flex flex-col gap-4">
                {pointers.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-color2 to-color1 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-white text-base leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom stat strip */}
          
          </div>

          {/* ── RIGHT: Form Panel ── */}
          <div className="md:w-[54%] w-full bg-white p-8 md:p-12">

            <h3
              className="text-color3 font-black text-2xl mb-1"
            >
              Send Us a Message
            </h3>
            <p className="text-gray-600 text-sm mb-8">Fill in the form and our team will get back to you within 24 hours.</p>

            <form className="space-y-5">

              {/* First 4 — 2 col grid */}
              <div className="grid sm:grid-cols-2 gap-5">
                {inputFields.slice(0, 4).map((field) => {
                  const Icon = field.icon;
                  return (
                    <div key={field.name}>
                      <label className="block text-color3 font-semibold text-xs uppercase tracking-[0.12em] mb-2">
                        {field.label}
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-color2/80 z-10">
                          <Icon size={16} />
                        </div>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          className="w-full pl-10 pr-4 py-3 bg-zinc-100 rounded-xl text-color3
                            placeholder-gray-600 text-sm
                            border border-color2/50
                            focus:outline-none focus:border-color2/35 focus:bg-white
                            transition-all duration-200"
                          required
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Subject — full width */}
              {inputFields.slice(4).map((field) => {
                const Icon = field.icon;
                return (
                  <div key={field.name}>
                    <label className="block text-color3 font-semibold text-xs uppercase tracking-[0.12em] mb-2">
                      {field.label}
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-color2/80 z-10">
                        <Icon size={16} />
                      </div>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        className="w-full pl-10 pr-4 py-3 bg-zinc-100 rounded-xl text-color3
                          placeholder-gray-600 text-sm
                          border border-color2/50
                          focus:outline-none focus:border-color2/35 focus:bg-white
                          transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                );
              })}

              {/* Message */}
              <div>
                <label className="block text-color3 font-semibold text-xs uppercase tracking-[0.12em] mb-2">
                  Message
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-4 text-color2/80 z-10">
                    <MdOutlineChat size={16} />
                  </div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us more about your visa inquiry..."
                    className="w-full pl-10 pr-4 py-3 bg-zinc-100 rounded-xl text-color3
                      placeholder-gray-600 text-sm
                      border border-color2/50
                      focus:outline-none focus:border-color2/35 focus:bg-white
                      transition-all duration-200 resize-none"
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex items-center gap-0 border-2 border-color3 rounded-full overflow-hidden
                  hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="px-8 py-3 text-sm font-bold uppercase tracking-[0.12em] text-color3">
                  Submit Now
                </span>
                <span className="w-11 h-11 flex items-center justify-center bg-color1 text-white
                  group-hover:bg-color2 transition-colors duration-300 rounded-full">
                  <BiRightArrowAlt size={20} />
                </span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Form;