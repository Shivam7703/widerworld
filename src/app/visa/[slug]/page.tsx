import { notFound } from "next/navigation";
import React from "react";
import { visaData } from "@/data/visadata";
import { bann } from "@/assets";
import Banner from "@/components/global/banner";
import Visadetails from "@/components/visa/visa-detail";
import { createSlug } from "@/app/coaching/[slug]/page";
import { Metadata } from "next";

interface Pageprops {
  params: {
    slug: string;
  };
}

// Dynamic Metadata Generation for SEO
export async function generateMetadata({ params }: Pageprops): Promise<Metadata> {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singlevisa = visaData.find(
    (visa: any) => createSlug(visa.title) === decodedSlug
  );

  if (!singlevisa) {
    return {
      title: "Visa Not Found",
    };
  }

  // Comma-separated metakey string ko array me parse karne ke liye
  const keywordsList = singlevisa.metakey
    ? singlevisa.metakey.split(",").map((item: string) => item.trim())
    : [];

  return {
    title: singlevisa.metatitle || singlevisa.title,
    description: singlevisa.metadesc,
    keywords: keywordsList,
    alternates: {
      canonical: `https://www.widerworld.in/visa/${decodedSlug}/`,
    },
    openGraph: {
      title: singlevisa.metatitle || singlevisa.title,
      description: singlevisa.metadesc,
      url: `https://www.widerworld.in/visa/${decodedSlug}/`,
      siteName: "Wider World Immigration",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: singlevisa.metatitle || singlevisa.title,
      description: singlevisa.metadesc,
    },
  };
}

export default function Visapage({ params }: Pageprops) {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singlevisa = visaData.find(
    (visa: any) => createSlug(visa.title) === decodedSlug
  );

  if (!singlevisa) {
    notFound();
  }

  // Schema Markup for Visa Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": singlevisa.title,
    "description": singlevisa.metadesc,
    "provider": {
      "@type": "Organization",
      "name": "Wider World Immigration",
      "url": "https://www.widerworld.in/"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Banner
        img={bann}
        title={singlevisa.title}
        para={singlevisa?.metadesc}
        slug={`visa/${createSlug(singlevisa.title)}`}
      />
      <Visadetails data={singlevisa} />
    </main>
  );
}