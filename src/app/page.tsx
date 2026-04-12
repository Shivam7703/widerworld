import AboutSection from "@/components/home/AboutSection";

import Blogs from "@/components/home/blog";
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

export default function Home() {
  return (
    <div className="">
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
<Dreamcountry/>
<Partners/>
<WhychooseSection/>
<FaqSection/>
<Coaching/>
<Team/>
<Blogs isHome={true} />

  </div>
  );
}

