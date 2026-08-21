import AboutSection from "@/components/home/AboutSection";

import CountDown from "@/components/home/Contdown";
import Greenbox from "@/components/home/greenbox";
import BannerSlider from "@/components/home/HomeBanner";
import Testimonials from "@/components/home/testimonial";
import { aboutdata} from "@/data/homeData";
import FaqSection from "@/components/home/faq";
import VisaSlider from "@/components/home/visaslider";
import WorkProcessSlider from "@/components/home/workingprocess";
import Canadapnp from "@/components/home/canadapnp";
import WhychooseSection from "@/components/home/whychoose";
import Award from "@/components/home/award";
import Studyabrod from "@/components/home/studyabroad";
import Dreamcountry from "@/components/home/dreamcountry";
import Partners from "@/components/home/partner";
import Coaching from "@/components/home/coaching";
import Team from "@/components/global/team";
import InstaPost from "@/components/home/instapost";
import NewsSection from "@/components/home/news";


export const metadata = {
  title: "Best Immigration Consultants In Delhi | Registered Visa Experts",
  description: "Wider World Immigration is Best Immigration Consultants In Delhi. Delhi's #1 trusted immigration consultants for Canada PR with 100% client satisfaction.",
  keywords: [
    "Best Immigration Consultants In Delhi",
    "Visa Consultants In Delhi"
  ],
  alternates: {
    canonical: "https://www.widerworld.in/",
  },
  openGraph: {
    title: "Best Immigration Consultants In Delhi | Registered Visa Experts",
    description: "Wider World Immigration is Best Immigration Consultants In Delhi. Delhi's #1 trusted immigration consultants for Canada PR with 100% client satisfaction.",
    url: "https://www.widerworld.in/",
    siteName: "Wider World Immigration",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Immigration Consultants In Delhi | Registered Visa Experts",
    description: "Wider World Immigration is Best Immigration Consultants In Delhi. Delhi's #1 trusted immigration consultants for Canada PR with 100% client satisfaction.",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Wider World Immigration",
    "url": "https://www.widerworld.in/",
    "telephone": "+91-9999624998",
    "email": "info@widerworld.in",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 806, 8th Floor, Chiranjiv Tower, 43, Nehru Place",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110019",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5494,
      "longitude": 77.2471
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "18:00"
    },
    "description": "Wider World Immigration is Best Immigration Consultants In Delhi. Delhi's #1 trusted immigration consultants for Canada PR with 100% client satisfaction."
  };
  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
 <BannerSlider/> 
 <Greenbox/> 
<AboutSection  data ={aboutdata} />
 <VisaSlider/> 
<Canadapnp/>
<CountDown />
 <Award/> 
 <WorkProcessSlider/>
<Testimonials/> 
 <Studyabrod/> 
 <InstaPost/> 
<Dreamcountry/>
 <Partners/> 
 <WhychooseSection/> 
 <FaqSection/>
<Coaching/>
<Team/> 
 <NewsSection isHome={true} /> 
  </div>
  );
}

