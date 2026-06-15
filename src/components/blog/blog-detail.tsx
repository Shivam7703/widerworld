"use client"

import React, { useState } from "react"
import BlogAside from "./side"
import Image from "next/image"
import {
  BsCalendar3,
  BsClock,
  BsShareFill
} from "react-icons/bs"
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa"
import { BiLike } from "react-icons/bi"
import { HiOutlineBookmark } from "react-icons/hi"
import { box3 } from "@/assets"

interface BlogData {
  ID: string
  post_title: string
  post_name: string
  post_date: string
  post_content: string
  description: string
  images: { "image:loc": string }[] | null
}

export default function Blogdetails({ data }: { data: BlogData }) {
  const [likes, setLikes] = useState(246)
  const [bookmarked, setBookmarked] = useState(false)

  // Image URL
  const imageUrl = data?.images?.[0]?.["image:loc"]
    ? `https://widerworld.in${data.images[0]["image:loc"]}`
    : null

  // Date format
  const formattedDate = data?.post_date
    ? new Date(data.post_date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : ""

  const handleLike = () => setLikes((prev) => prev + 1)
  const handleBookmark = () => setBookmarked((prev) => !prev)

  const handleShare = (platform?: string) => {
    const shareUrl = typeof window !== "undefined" ? window.location.href : ""
    const shareText = data?.post_title

    if (navigator.share && !platform) {
      navigator.share({ title: shareText, text: data?.description, url: shareUrl })
        .catch((err) => console.error("Share failed:", err))
      return
    }

    let url = ""
    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        break
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
        break
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        break
      case "whatsapp":
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + shareUrl)}`
        break
    }
    if (url) window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="lg:px-24 md:p-20 sm:p-12 p-7 bg-gradient-to-b from-zinc-50 relative to-white">
      <div className="flex flex-wrap justify-between gap-y-7 relative w-full">
        <div className="md:w-[60%] w-full">

          {/* Hero Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-12 group">
           
              <Image
               width={800}
               height={500}
                src={imageUrl || box3}
                alt={data?.post_title}
                className="object-contain w-full h-full min-h-fit transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 transform rotate-45 translate-x-16 -translate-y-16" />
          </div>

          {/* Article Header */}
          <header className="mb-16 relative">
            <div className="flex items-center gap-4 mb-8 flex-wrap">
              <span className="inline-block bg-zinc-900 text-white px-4 py-1.5 text-xs font-bold tracking-widest uppercase hover:bg-amber-600 transition-all duration-300 hover:-translate-y-0.5 shadow-md">
                Immigration
              </span>

              <div className="flex items-center gap-2 text-zinc-600 text-sm font-medium">
                <BsCalendar3 className="w-4 h-4" />
                <span className="tracking-wide">{formattedDate}</span>
              </div>

              <div className="flex items-center gap-2.5 ml-auto group/author cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  A
                </div>
                <span className="text-sm font-semibold text-zinc-800 group-hover/author:text-amber-600 transition-colors">
                  Admin
                </span>
              </div>
            </div>

            <div className="relative">
              <h1 className="text-zinc-800 font-bold leading-tight text-3xl md:text-5xl  mb-6">
                {data?.post_title}
              </h1>
              <div className="flex mb-8">
                <div className="h-1.5 w-24 bg-amber-500" />
              </div>
              <div className="absolute -top-6 -left-8 text-amber-500/20 text-9xl font-serif leading-none select-none hidden md:block pointer-events-none">
                "
              </div>
            </div>
          </header>

          {/* Article Content — WordPress HTML directly render */}
          <article className="relative bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
            <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-amber-500 via-amber-600 to-transparent rounded-l-xl" />
            <div
              className="prose prose-lg max-w-none
                prose-headings:text-zinc-800 prose-headings:font-bold
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-zinc-700 prose-p:leading-relaxed
                 prose-a:no-underline 
                prose-ul:text-zinc-700 prose-ol:text-zinc-700
                prose-li:my-1
                prose-table:border prose-td:border prose-td:p-2 prose-th:border prose-th:p-2
                prose-strong:text-zinc-800"
              dangerouslySetInnerHTML={{ __html: data?.post_content || "" }}
            />
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-amber-100 rounded-full opacity-50 blur-xl animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-zinc-100 rounded-full opacity-50 blur-xl animate-pulse" style={{ animationDelay: "1s" }} />
          </article>

          {/* Share Section */}
          <div className="bg-gradient-to-r from-zinc-50 to-amber-50 rounded-xl p-8 mb-8 border border-zinc-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white shadow-md">
                  <BsShareFill className="w-5 h-5" />
                </div>
                <span className="font-bold text-zinc-800 text-sm uppercase tracking-wider">
                  Share Article
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={() => handleShare("facebook")} aria-label="Share on Facebook"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-110">
                  <FaFacebookF className="w-4 h-4" />
                </button>
                <button onClick={() => handleShare("twitter")} aria-label="Share on Twitter"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-110">
                  <FaTwitter className="w-4 h-4" />
                </button>
                <button onClick={() => handleShare("linkedin")} aria-label="Share on LinkedIn"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-110">
                  <FaLinkedinIn className="w-4 h-4" />
                </button>
                <button onClick={() => handleShare("whatsapp")} aria-label="Share on WhatsApp"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-110">
                  <FaWhatsapp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Reading Info & Actions */}
          <div className="flex items-center justify-between bg-white rounded-xl p-6 shadow-md mb-16 border border-zinc-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-zinc-600">
                <BsClock className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-medium">5 min read</span>
              </div>
              <div className="h-6 w-px bg-zinc-300 hidden sm:block" />
              <button onClick={handleLike}
                className="flex items-center gap-2 text-zinc-600 hover:text-amber-600 transition-colors group"
                aria-label="Like article">
                <BiLike className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{likes} Likes</span>
              </button>
            </div>

            <button onClick={handleBookmark}
              className={`flex items-center gap-2 px-5 py-2.5 border-2 rounded-full transition-all duration-300 group ${
                bookmarked
                  ? "bg-amber-600 text-white border-amber-600 shadow-lg"
                  : "border-zinc-800 hover:bg-zinc-800 text-zinc-600 hover:text-white"
              }`}
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark article"}>
              <HiOutlineBookmark className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">{bookmarked ? "Saved" : "Save"}</span>
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:w-[33%] w-full md:sticky md:top-10 h-full space-y-5">
          <BlogAside />
        </div>
      </div>
    </div>
  )
}