import { bann } from "@/assets";
import Aboutchoose from "@/components/about/aboutchoose";
import CEOMessage from "@/components/about/founder";
import OurHistory from "@/components/about/history";
import Mission from "@/components/about/mission";

import Banner from "@/components/global/banner";
import AboutSection from "@/components/home/AboutSection";
import Award from "@/components/home/award";
import CountDown from "@/components/home/Contdown";
import Testimonials from "@/components/home/testimonial";
import WhychooseSection from "@/components/home/whychoose";
import { aboutdata2, countDown } from "@/data/homeData";

export default function About() {
  return (
    <>
      <Banner
        img={bann}
        title={"About Us"}
        para={
          "Experienced visa consultants in Noida deliver clear guidance, professional support, and reliable immigration solutions for global opportunities."
        }
        slug={"about-us"}
      />
      <AboutSection data ={aboutdata2} />
            <Mission /> 
<OurHistory/>
<CEOMessage/>
<CountDown data={countDown}/>
<Award/>
<WhychooseSection/>

      {/* 
      <CountDown data={countDown} />
      <Aboutchoose/>
      <Testimonials/> */}
      
    </>
  );
}
