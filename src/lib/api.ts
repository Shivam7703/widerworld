// lib/api.js - ek jagah se manage karo

const API_URL = "https://widerworld.in/next-blog.php"

export async function getBlogs(page = 1, perPage = 12) {
  const res = await fetch(
    `${API_URL}?page=${page}&per_page=${perPage}`,
    { next: { revalidate: 3600 } }
  )
  return res.json()
}

export async function getBlog({slug}:any) {
  const res = await fetch(
    `${API_URL}?slug=${slug}`,
    { next: { revalidate: 3600 } }
  )
  return res.json()
}