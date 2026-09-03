import { notFound } from "next/navigation";
import React from "react";
import { servicedata } from "@/data/servicedata";
import { bann } from "@/assets";
import Banner from "@/components/global/banner";
import Servicedetails from "@/components/services/servicedetail";
import { createSlug } from "@/utils/slug";

import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

// Dynamic Metadata Generation for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singleService = servicedata.find(
    (service: any) => createSlug(service.title) === decodedSlug
  );

  if (!singleService) {
    return {
      title: "Service Not Found",
    };
  }

  // Comma-separated metakey string ko array me parse karne ke liye
  const keywordsList = singleService.metakey
    ? singleService.metakey.split(",").map((item: string) => item.trim())
    : [];

  return {
    title: singleService.metatitle || singleService.title,
    description: singleService.metadesc,
    keywords: keywordsList,
    alternates: {
      canonical: `https://www.widerworld.in/ourservices/${decodedSlug}/`,
    },
    openGraph: {
      title: singleService.metatitle || singleService.title,
      description: singleService.metadesc,
      url: `https://www.widerworld.in/ourservices/${decodedSlug}/`,
      siteName: "Wider World Immigration",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: singleService.metatitle || singleService.title,
      description: singleService.metadesc,
    },
  };
}

export default function ServicePage({ params }: PageProps) {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singleService = servicedata.find(
    (service: any) => createSlug(service.title) === decodedSlug
  );

  if (!singleService) {
    notFound();
  }

  // Schema Markup for Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": singleService.title,
    "description": singleService.metadesc,
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
        title={singleService.title}
        para={singleService?.metadesc}
        slug={`services/${createSlug(singleService.title)}`}
      />
      <Servicedetails data={singleService} />
    </main>
  );
}