import { bann } from "@/assets";
import CEOMessage from "@/components/about/founder";
import OurHistory from "@/components/about/history";
import Mission from "@/components/about/mission";

import Banner from "@/components/global/banner";
import AboutSection from "@/components/home/AboutSection";
import Award from "@/components/home/award";
import CountDown from "@/components/home/Contdown";
import Testimonials from "@/components/home/testimonial";
import WhychooseSection from "@/components/home/whychoose";
import { aboutdata2 } from "@/data/homeData";

export const metadata = {
  title: "About Us - Wider World Immigration | Visa Consultants",
  description: "Learn about the best immigration consultants in Delhi, delivering trusted visa solutions, expert guidance, and transparent support for global success.",
  keywords: [
    "Best Immigration Consultants In Delhi",
    "Visa Consultants In Delhi"
  ],
  alternates: {
    canonical: "https://www.widerworld.in/about-us/",
  },
  openGraph: {
    title: "About Us - Wider World Immigration | Visa Consultants",
    description: "Learn about the best immigration consultants in Delhi, delivering trusted visa solutions, expert guidance, and transparent support for global success.",
    url: "https://www.widerworld.in/about-us/",
    siteName: "Wider World Immigration",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Wider World Immigration | Visa Consultants",
    description: "Learn about the best immigration consultants in Delhi, delivering trusted visa solutions, expert guidance, and transparent support for global success.",
  },
};

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us - Wider World Immigration",
    "url": "https://www.widerworld.in/about-us/",
    "description": "Learn about the best immigration consultants in Delhi, delivering trusted visa solutions, expert guidance, and transparent support for global success.",
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
        title={"About Us"}
        para={
          "Wider World Immigration is your trusted Visa Consultants in navigating the huge opportunities and possibilities that exist beyond boundaries."
        }
        slug={"about-us"}
      />
      <AboutSection data={aboutdata2} />
      <Mission />
      {/* <OurHistory/> */}
      <CEOMessage />
      <CountDown />
      <Award />
      <WhychooseSection />
    </>
  );
}