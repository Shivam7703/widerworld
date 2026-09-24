import BlogClient from "@/components/blog/blg-client";

const title = "Visa & Immigration Blogs: Latest Updates, Guides & Tips";
const description =
  "Explore expert blogs on immigration, study abroad, work visas, PR pathways, career tips, and the latest updates to help you make informed decisions.";

export const metadata = {
  title,
  description,
  keywords: [
    "Immigration Blogs",
    "Visa Blogs",
    "Study Abroad Guides",
    "Work Visa Updates",
    "PR Pathways",
    "Immigration News",
  ],
  alternates: {
    canonical: "https://www.widerworld.in/blog/",
  },
  openGraph: {
    title,
    description,
    url: "https://www.widerworld.in/blog/",
    siteName: "Wider World Immigration",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: title,
    url: "https://www.widerworld.in/blog/",
    description,
    publisher: {
      "@type": "Organization",
      name: "Wider World Immigration",
      url: "https://www.widerworld.in/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient />
    </>
  );
}