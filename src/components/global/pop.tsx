"use client";
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { usePathname } from 'next/navigation'; // Pathname hook import kiya
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import Image from "next/image";
import { logo, pop } from '@/assets';
import InquiryForm from './inquiryform';

const WHATSAPP_NUMBER = '919999624998';
const WHATSAPP_MESSAGE = "Hi WiderWorld! I'd like to know more about your Services.";

export default function Popups() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', country: 'canada', subject: '', message: ''
  });

  const pathname = usePathname(); // Current route track karne ke liye

  useEffect(() => {
    // Har baar page/path change hone par form close hoga aur 5 sec baad wapas open hoga
    setIsFormOpen(false);

    const t = setTimeout(() => {
      setIsFormOpen(true);
    }, 5000);

    return () => clearTimeout(t);
  }, [pathname]); // 'pathname' ko dependency array me add kiya

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
      setForm({ name: '', phone: '', email: '', country: 'canada', subject: '', message: '' });
    }, 2200);
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="">
      {/* WhatsApp floating button */}
      {/* WhatsApp floating button */}
<a
  href={whatsappHref}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
  className="fixed bottom-6 right-2 sm:w-16 sm:h-16 w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white flex items-center justify-center shadow-lg hover:shadow-[0_8px_24px_rgba(37,211,102,0.55)] transition-all z-40"
>
  <FaWhatsapp size={30} />
</a>

{/* Side tab trigger */}
<button
  onClick={() => setIsFormOpen(true)}
  className="fixed top-1/2 -right-[80px] -translate-y-1/2 -rotate-90 origin-center bg-red-600 text-white font-semibold text-sm tracking-wide px-5 py-3 rounded-t-lg flex items-center gap-2 z-40 transition-all"
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

             <InquiryForm
  header={{ title: <>Talk to our <br />Immigration Expert</>, logo }}
  buttonContent="Send Enquiry"
  classNames={{
    wrapper: "",
    header: "flex justify-between items-center mb-3",
    title: "sm:text-2xl font-medium text-xl text-gray-800",
    logo: "sm:w-28 w-16",
    form: "space-y-3 md:space-y-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
    label: "text-sm font-medium text-zinc-800 uppercase",
    inputWrap: "space-y-1",
    input: "text-sm w-full p-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-sky-200",
    textareaWrap: "space-y-1",
    textarea: "text-sm w-full p-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-sky-200",
    button: "w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 rounded-lg transition-all shadow-lg",
    successWrapper: "h-full flex flex-col items-center justify-center text-center",
    successIcon: "w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-2xl",
    successTitle: "text-xl font-medium",
    successText: "",
  }}
/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}