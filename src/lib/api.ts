// src/lib/api.ts

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  return 'https://www.widerworld.in/';
};

const API_URL = `${getBaseUrl()}/api/blogs`;

export async function getBlogs(page = 1, perPage = 12) {
  const res = await fetch(
    `${API_URL}?page=${page}&per_page=${perPage}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error('Failed to fetch blogs');
  return res.json();
}

export async function getBlog({ slug }: { slug: string }) {
  const res = await fetch(
    `${API_URL}?slug=${slug}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error('Failed to fetch blog');
  return res.json();
}