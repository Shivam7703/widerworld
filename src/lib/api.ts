// src/lib/api.ts

const BASE_URL = "https://widerworld.in";

export async function getBlogs(page = 1, perPage = 12) {
  const res = await fetch(
    `/api/blogs/?page=${page}&per_page=${perPage}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error(`Failed to fetch blogs (${res.status})`);
  return res.json();
}

export async function getBlog({ slug }: { slug: string }) {
  const res = await fetch(
    `/api/blogs/?slug=${encodeURIComponent(slug)}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error(`Failed to fetch blog (${res.status})`);
  return res.json();
}