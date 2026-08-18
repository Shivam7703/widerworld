// app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import React from "react";
import { servicedata } from "@/data/servicedata";
import { bann } from "@/assets";
import Banner from "@/components/global/banner";
import Servicedetails from "@/components/services/servicedetail";
import { createSlug } from "@/app/coaching/[slug]/page";

interface PageProps {
  params: {
    slug: string;
  };
}



// Generate static paths for blogs - removed Promise return type
// export function generateStaticParams() {
//   const blogsData = servicedata;
//   return blogsData.map((blog: any) => ({
//     slug: createSlug(blog.title),
//   }));
// }

export default function BlogPage({ params }: PageProps) {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const blogsData = servicedata;
  const singleService = blogsData.find(
    (blog: any) => createSlug(blog.title) === decodedSlug
  ); 

  if (!singleService) {
    notFound();
  }

  return (
    <main>
      <Banner
        img={bann}
        title={singleService.title}
        para={singleService?.metadesc}
        slug={`services/${createSlug(singleService.title)}`}
      />
      <Servicedetails data={singleService} />
    </main>
  );
}