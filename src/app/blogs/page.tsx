import { bann } from "@/assets";
import Aboutchoose from "@/components/about/aboutchoose";
import Ourmission from "@/components/about/mission";
import BlogPage from "@/components/blog/blog-page";

import Banner from "@/components/global/banner";
import AboutSection from "@/components/home/AboutSection";
import CountDown from "@/components/home/Contdown";
import Testimonials from "@/components/home/testimonial";
import { countDown } from "@/data/homeData";

export default function Blogs() {
  return (
    <>
      <Banner
        img={bann}
        title={"Our Blogs"}
        para={
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        slug={"blogs"}
      />
      <BlogPage/>
    </>
  );
}
