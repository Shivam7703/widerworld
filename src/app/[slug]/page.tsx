// app/[slug]/page.tsx

import { cache } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { bann } from "@/assets";
import Banner from "@/components/global/banner";
import Blogdetails from "@/components/blog/blog-detail";
import { getBlog } from "@/lib/api";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Ek request mein sirf ek baar fetch hoga (metadata + page dono share karenge)
const fetchBlog = cache(async (slug: string) => {
  try {
    const res = await getBlog({ slug });
    const blog = Array.isArray(res)
      ? res[0]
      : Array.isArray(res?.data)
      ? res.data[0]
      : res?.data ?? res;

    if (!blog || blog.error || !blog.post_title) return null;
    return blog;
  } catch (err) {
    console.error("Blog fetch error:", err);
    return null;
  }
});

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await fetchBlog(slug);

  if (!blog) return { title: "Blog Not Found" };

  return {
    title: blog.post_title,
    description: blog.description || "",
    alternates: {
      canonical: `https://widerworld.in/${blog.post_name}/`,
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await fetchBlog(slug);

  if (!blog) notFound();

  return (
    <main>
      <Banner
        img={bann}
        title={blog.post_title}
        para={blog.description || ""}
        slug={`blogs/${blog.post_name}/`}
      />
      <Blogdetails data={blog} />
    </main>
  );
}