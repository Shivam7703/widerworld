// app/[slug]/page.tsx

import { notFound } from "next/navigation";
import { bann } from "@/assets";
import Banner from "@/components/global/banner";
import Blogdetails from "@/components/blog/blog-detail";
// API functions import karein
import { getBlog } from "@/lib/api";

interface PageProps {
  params: {
    slug: string;
  };
}

// SEO Meta Tags
export async function generateMetadata({ params }: PageProps) {
  // Yaha hum imported getBlog use kar rahe hain
  const blog = await getBlog({ slug: params.slug });

  if (!blog || blog.error) return { title: "Blog Not Found" };

  return {
    title: blog.post_title,
    description: blog.description || "",
    alternates: {
      canonical: `https://www.widerworld.in/${blog.post_name}`,
    },
  };
}

// Static paths
// export async function generateStaticParams() {
//   try {
//     const API_URL = "https://widerworld.in/next-blog.php";
//     const res = await fetch(`${API_URL}?per_page=200`);
//     const json = await res.json();
//     return (json.data || []).map((blog: any) => ({ slug: blog.post_name }));
//   } catch {
//     return [];
//   }
// }

export default async function BlogPage({ params }: PageProps) {
  // Yaha bhi imported getBlog use kar rahe hain
  const blog = await getBlog({ slug: params.slug });

  if (!blog || blog.error) notFound();

  return (
    <main>
      <Banner
        img={bann}
        title={blog.post_title}
        para={blog.description || ""}
        slug={`blogs/${blog.post_name}`}
      />
      <Blogdetails data={blog} />
    </main>
  );
}