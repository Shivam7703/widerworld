"use client";
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import Image from "next/image";
import { logo, pop } from '@/assets';

const WHATSAPP_NUMBER = '911234567890';
const WHATSAPP_MESSAGE = "Hi WiderWorld! I'd like to know more about your Services.";

export default function Popups() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', country: 'canada', message: ''
  });

  useEffect(() => {
    // Timer set to 5000ms (5 seconds)
    const t = setTimeout(() => setIsFormOpen(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsFormOpen(false);
      setForm({ name: '', phone: '', email: '', country: 'canada', message: '' });
    }, 2200);
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="relative">
      {/* WhatsApp floating button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-2 w-[40px] h-[40px] rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white flex items-center justify-center shadow-lg hover:shadow-[0_8px_24px_rgba(37,211,102,0.55)] transition-all z-[60]"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Side tab trigger */}
      <button
        onClick={() => setIsFormOpen(true)}
        className="fixed top-1/2 -right-[80px] -translate-y-1/2 -rotate-90 origin-center bg-red-600 text-white font-semibold text-sm tracking-wide px-5 py-3 rounded-t-lg flex items-center gap-2 z-[55] transition-all"
      >
        Request A Callback
      </button>

      {/* Popup Overlay */}
      {isFormOpen && (
        <div
          onClick={() => setIsFormOpen(false)}
          className="fixed inset-0 bg-indigo-950/50 backdrop-blur-sm flex items-center justify-center z-[70] p-5"
        >
          <div
            className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Side */}
            <div className="w-full md:w-[40%] max-md:hidden">
              <div className="relative bg-gradient-to-b from-sky-200/70 via-rose-300 to-zinc-400/80 h-full p-6 min-h-72">
                <Image src={pop} alt="bg" fill className="object-contain object-bottom" />
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-[60%] p-8 bg-gray-50">
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black"
              >
                <FaTimes size={20} />
              </button>

              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-2xl">
                    ✓
                  </div>
                  <h3 className="text-xl font-medium">Request Sent!</h3>
                  <p>Our Immigration Expert will contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <div className="flex justify-between items-center">
                    <h2 className="sm:text-2xl font-medium text-xl text-gray-800">Talk to our <br/>Immigration Expert</h2>
                    <Image src={logo} alt="logo" className="sm:w-28 w-16" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-zinc-800 uppercase">Name</label>
                      <input
                        name="name"
                        value={form.name}
                        required
                        onChange={handleChange}
                        className="text-sm w-full p-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-sky-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-zinc-800 uppercase">Phone</label>
                      <input
                        name="phone"
                        value={form.phone}
                        required
                        onChange={handleChange}
                        className="text-sm w-full p-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-sky-200"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-zinc-800 uppercase">Email</label>
                      <input
                        name="email"
                        value={form.email}
                        required
                        type="email"
                        onChange={handleChange}
                        className="text-sm w-full p-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-sky-200"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-zinc-800 uppercase">Country to Migrate</label>
                      <select
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        className="text-sm w-full p-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-sky-200"
                      >
                        <option value="canada" className="text-zinc-500">Canada</option>
                        <option value="australia" className="text-zinc-500">Australia</option>
                        <option value="uk" className="text-zinc-500">UK</option>
                        <option value="europe" className="text-zinc-500">Europe</option>
                        <option value="uae" className="text-zinc-500">UAE</option>
                        <option value="other" className="text-zinc-500">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-zinc-800 uppercase">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      rows={3}
                      onChange={handleChange}
                      className="text-sm w-full p-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-sky-200"
                      placeholder="Write Your Query"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 rounded-lg transition-all shadow-lg"
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}