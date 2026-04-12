import { bann } from "@/assets";
import BlogPage from "@/components/blog/blog-page";
import Banner from "@/components/global/banner";


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
