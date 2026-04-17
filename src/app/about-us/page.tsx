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
import { aboutdata2} from "@/data/homeData";

export default function About() {
  return (
    <>
      <Banner
        img={bann}
        title={"About Us"}
        para={
          "Helping individuals and families achieve their global dreams with expert guidance, reliable visa solutions, and personalized support at every step."
        }
        slug={"about-us"}
      />
      <AboutSection data ={aboutdata2} />
            <Mission /> 
<OurHistory/>
<CEOMessage/>
<CountDown />
<Award/>
<WhychooseSection/>

      
      
    </>
  );
}
