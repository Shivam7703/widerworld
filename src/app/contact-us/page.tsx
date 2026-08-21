import Banner from "@/components/global/banner";
import React from "react";
import { contactdetail } from "@/data/homeData";
import Form from "@/components/contact/form";
import { bann } from "@/assets";
import ConDetail from "@/components/contact/condetail";

export const metadata = {
  title: "Contact Us for Support & Queries - Wider World",
  description: "Contact our immigration experts for personalized guidance on visas, study abroad, PR, work permits, and overseas career opportunities. Get started today.",
  keywords: [
    "Immigration Consultants In India"
  ],
  alternates: {
    canonical: "https://www.widerworld.in/contact-us/",
  },
  openGraph: {
    title: "Contact Us for Support & Queries - Wider World",
    description: "Contact our immigration experts for personalized guidance on visas, study abroad, PR, work permits, and overseas career opportunities. Get started today.",
    url: "https://www.widerworld.in/contact-us/",
    siteName: "Wider World Immigration",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us for Support & Queries - Wider World",
    description: "Contact our immigration experts for personalized guidance on visas, study abroad, PR, work permits, and overseas career opportunities. Get started today.",
  },
};

function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - Wider World Immigration",
    "url": "https://www.widerworld.in/contact-us/",
    "description": "Contact our immigration experts for personalized guidance on visas, study abroad, PR, work permits, and overseas career opportunities. Get started today.",
    "publisher": {
      "@type": "Organization",
      "name": "Wider World Immigration",
      "url": "https://www.widerworld.in/"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Banner
        img={bann}
        title={"Contact Us"}
        para={
          "Connect with trusted Immigration Consultants in India for expert guidance, smooth visa processing, and personalized support for your study, work, or settlement journey abroad."
        }
        slug={"contact-us"}
      />
      <Form />
      <ConDetail data={contactdetail} />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.667271668777!2d77.24750447495363!3d28.54971908783757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a36d1028b1%3A0xc372007dd192dd5b!2sWider%20World%20Immigration!5e0!3m2!1sen!2sin!4v1786988996237!5m2!1sen!2sin"
        width="100%"
        height="350"
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </>
  );
}

export default Contact;