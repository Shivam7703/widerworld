// Path: lib/auth.ts

export const COOKIE_NAME = "admin_session";

// Secret key ka hash banata hai (cookie me asli key kabhi nahi jaati)
export async function sessionToken(secret: string) {
  const data = new TextEncoder().encode(`admin-session:${secret}`);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Timing-safe string compare
export function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}