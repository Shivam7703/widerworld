// Path: src/lib/blogUtils.ts

import { revalidatePath } from "next/cache";

export function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function nowString() {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(
    d.getHours()
  )}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

// "2026-05-30T13:13" -> "2026-05-30 13:13:00"
export function normalizeDate(v?: string) {
  if (!v) return nowString();
  let s = String(v).replace("T", " ").slice(0, 19);
  if (s.length === 16) s += ":00";
  return s;
}

export function safeJsonParse(val: any) {
  if (!val) return null;
  try {
    return typeof val === "string" ? JSON.parse(val) : val;
  } catch {
    return val;
  }
}

// Request body ko validate + DB ke format me convert karta hai
export function parseBlogBody(body: any) {
  const post_title = String(body?.post_title || "").trim();
  const post_name = slugify(String(body?.post_name || post_title));

  if (!post_title) return { error: "Title zaroori hai" };
  if (!post_name) return { error: "Slug zaroori hai" };

  return {
    data: {
      post_title,
      post_name,
      post_date: normalizeDate(body?.post_date),
      post_content: String(body?.post_content || ""),
      description: String(body?.description || ""),
      keyphrases: body?.keyphrases ? JSON.stringify(body.keyphrases) : null,
      images: body?.images ? JSON.stringify(body.images) : null,
    },
  };
}

// Public blog pages ka cache refresh karta hai
export function revalidateBlog(slug?: string) {
  try {
    revalidatePath("/blog");
    if (slug) revalidatePath(`/blog/${slug}`);
  } catch {}
}