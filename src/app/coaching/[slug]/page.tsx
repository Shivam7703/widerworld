// app/coaching/[slug]/page.tsx
import { notFound } from "next/navigation";
import React from "react";
import { coachingdata } from "@/data/coachingData";
import { bann } from "@/assets";
import Banner from "@/components/global/banner";
import Servicedetails from "@/components/services/servicedetail";
import { Metadata } from "next";
import Script from "next/script";
import { createSlug } from "@/utils/slug";

interface PageProps {
  params: {
    slug: string;
  };
}

// SSG for better SEO performance & indexing speed
export async function generateStaticParams() {
  return coachingdata.map((coaching: any) => ({
    slug: createSlug(coaching.title),
  }));
}

// Dynamic Metadata Generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singleCoaching = coachingdata.find(
    (coaching: any) => createSlug(coaching.title) === decodedSlug
  );

  if (!singleCoaching) {
    return {
      title: "Coaching Not Found | Wider World Immigration",
    };
  }

  const keywordsList = singleCoaching.metakey
    ? singleCoaching.metakey.split(",").map((item: string) => item.trim())
    : [];

  const pageUrl = `https://www.widerworld.in/coaching/${decodedSlug}`;

  return {
    title: singleCoaching.metatitle || singleCoaching.title,
    description: singleCoaching.metadesc,
    keywords: keywordsList,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: singleCoaching.metatitle || singleCoaching.title,
      description: singleCoaching.metadesc,
      url: pageUrl,
      siteName: "Wider World Immigration",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: singleCoaching.metatitle || singleCoaching.title,
      description: singleCoaching.metadesc,
    },
  };
}

export default async function CoachingPage({ params }: PageProps) {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singleCoaching = coachingdata.find(
    (coaching: any) => createSlug(coaching.title) === decodedSlug
  );

  if (!singleCoaching) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": singleCoaching.title,
    "description": singleCoaching.metadesc,
    "provider": {
      "@type": "Organization",
      "name": "Wider World Immigration",
      "url": "https://www.widerworld.in/",
    },
  };

  return (
    <main>
      <Script
        id={`schema-coaching-${decodedSlug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Banner
        img={bann}
        title={singleCoaching.title}
        para={singleCoaching?.metadesc}
        slug={`coaching/${decodedSlug}`}
      />
      <Servicedetails data={singleCoaching} />
    </main>
  );
}