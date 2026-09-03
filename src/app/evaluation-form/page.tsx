import Evaluation from '@/components/evalution'
import React from 'react'

export const metadata = {
  title: "Free Eligibility Evaluation Form | Wider World Immigration",
  description: "Fill out our free eligibility evaluation form to assess your chances for Canada PR, work permits, study visas, and overseas immigration.",
  keywords: [
    "Eligibility Evaluation Form",
    "CRS Score Calculator",
    "Immigration Eligibility Check",
    "Canada PR Eligibility Evaluation",
    "Visa Evaluation Form",
    "Wider World Immigration"
  ],
  alternates: {
    canonical: "https://www.widerworld.in/evaluation-form//",
  },
  openGraph: {
    title: "Free Eligibility Evaluation Form | Wider World Immigration",
    description: "Fill out our free eligibility evaluation form to assess your chances for Canada PR, work permits, study visas, and overseas immigration.",
    url: "https://www.widerworld.in/evaluation-form//",
    siteName: "Wider World Immigration",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Eligibility Evaluation Form | Wider World Immigration",
    description: "Fill out our free eligibility evaluation form to assess your chances for Canada PR, work permits, study visas, and overseas immigration.",
  },
};

function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Eligibility Evaluation Form",
    "url": "https://www.widerworld.in/evaluation-form//",
    "description": "Fill out our free eligibility evaluation form to assess your chances for Canada PR, work permits, study visas, and overseas immigration.",
    "publisher": {
      "@type": "Organization",
      "name": "Wider World Immigration",
      "url": "https://www.widerworld.in/"
    }
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Evaluation />
    </div>
  )
}

export default page