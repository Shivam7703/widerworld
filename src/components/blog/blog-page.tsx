import Blogs from "../home/blog";
import BlogAside from "./side";

export default function BlogPage() {
  return (
    <div className="lg:px-28 md:p-20 sm:p-12 p-7">
                <h4 className="text-blue-800 font-bold sm:text-lg mx-auto text-sm mb-2 text-center border-blue-700 w-max border-b px-3 py-2">
Latest Update                </h4>
      <h2 className="text-zinc-800 font-extrabold !leading-tight text-2xl md:text-4xl text-center max-w-2xl mx-auto mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>

              <div className="flex flex-wrap justify-between gap-y-7 relative min-h-screen w-full">
        <div className="md:w-[63%] w-full">
      <Blogs isHome={false} />
      </div>

      <div className="md:w-[30%] w-full md:sticky top-10 space-y-5 sm:space-y-12 h-full">
        <BlogAside />
      </div>
      </div>
    </div>
  );
}