import { bann } from '@/assets'
import Banner from '@/components/global/banner'
import Testimonials from '@/components/home/testimonial'
import WhychooseSection from '@/components/home/whychoose'
import ServiceSection from '@/components/services/service'
import React from 'react'

export const metadata = {
  title: "Visa & Immigration Services | Wider World Immigration",
  description: "Explore comprehensive visa and immigration services by Wider World Immigration. From PR visas and work permits to documentation and career counselling.",
  keywords: [
    "Immigration Services Delhi",
    "Visa Assistance Services",
    "Canada PR Services",
    "Work Permit Visa Consultants",
    "Documentation Services Immigration",
    "Career Counselling Visa"
  ],
  alternates: {
    canonical: "https://www.widerworld.in/services/",
  },
  openGraph: {
    title: "Visa & Immigration Services | Wider World Immigration",
    description: "Explore comprehensive visa and immigration services by Wider World Immigration. From PR visas and work permits to documentation and career counselling.",
    url: "https://www.widerworld.in/services/",
    siteName: "Wider World Immigration",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visa & Immigration Services | Wider World Immigration",
    description: "Explore comprehensive visa and immigration services by Wider World Immigration. From PR visas and work permits to documentation and career counselling.",
  },
};

function Services() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Immigration & Visa Services",
    "provider": {
      "@type": "Organization",
      "name": "Wider World Immigration",
      "url": "https://www.widerworld.in/"
    },
    "serviceType": "Visa and Immigration Consulting",
    "areaServed": "India",
    "description": "Comprehensive immigration services offering clear guidance, accurate documentation, and end-to-end support for global visa applications."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Banner
        img={bann}
        title={"Our Services"}
        para={
          "Our immigration services offer clear guidance, accurate documentation, and end-to-end support for global visa applications."
        }
        slug={"services"}
      />
      <ServiceSection />
      <WhychooseSection />
      <Testimonials />
    </>
  );
}

export default Services;