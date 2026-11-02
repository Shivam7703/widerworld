// src/lib/api.ts

const LIVE_URL = "https://widerworld.in";

// Browser: same-origin (CORS nahi). Server: seedha live API.
const API_URL =
  typeof window !== "undefined" ? "/api/blogs/" : `${LIVE_URL}/api/blogs/`;

export async function getBlogs(page = 1, perPage = 12) {
  const res = await fetch(`${API_URL}?page=${page}&per_page=${perPage}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Failed to fetch blogs (${res.status})`);
  return res.json();
}

export async function getBlog({ slug }: { slug: string }) {
  const res = await fetch(`${API_URL}?slug=${encodeURIComponent(slug)}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Failed to fetch blog (${res.status})`);
  return res.json();
}