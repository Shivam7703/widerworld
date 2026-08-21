import { notFound } from "next/navigation";
import React from "react";
import { coachingdata } from "@/data/coachingData";
import { bann } from "@/assets";
import Banner from "@/components/global/banner";
import Servicedetails from "@/components/services/servicedetail";
import { Metadata } from "next";

interface Pageprops {
  params: {
    slug: string;
  };
}

export const createSlug = (title: string) => {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// Dynamic Metadata Generation for SEO
export async function generateMetadata({ params }: Pageprops): Promise<Metadata> {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singleCoaching = coachingdata.find(
    (coaching: any) => createSlug(coaching.title) === decodedSlug
  );

  if (!singleCoaching) {
    return {
      title: "Coaching Not Found",
    };
  }

  // Keywords string ko array mein split karna (agar string di ho)
  const keywordsList = singleCoaching.metakey
    ? singleCoaching.metakey.split(",").map((item: string) => item.trim())
    : [];

  return {
    title: singleCoaching.metatitle || singleCoaching.title,
    description: singleCoaching.metadesc,
    keywords: keywordsList,
    alternates: {
      canonical: `https://www.widerworld.in/coaching/${decodedSlug}/`,
    },
    openGraph: {
      title: singleCoaching.metatitle || singleCoaching.title,
      description: singleCoaching.metadesc,
      url: `https://www.widerworld.in/coaching/${decodedSlug}/`,
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

export default function CoachingPage({ params }: Pageprops) {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singleCoaching = coachingdata.find(
    (coaching: any) => createSlug(coaching.title) === decodedSlug
  );

  if (!singleCoaching) {
    notFound();
  }

  // Schema Markup for Course / Educational Program
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": singleCoaching.title,
    "description": singleCoaching.metadesc,
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
        title={singleCoaching.title}
        para={singleCoaching?.metadesc}
        slug={`coaching/${createSlug(singleCoaching.title)}`}
      />
      <Servicedetails data={singleCoaching} />
    </main>
  );
}