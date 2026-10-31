// Path: src/lib/adminGuard.ts

import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { COOKIE_NAME, safeEqual, sessionToken } from "@/lib/auth";

// Admin API routes me sabse pehle ye call karo.
// Login nahi hai to 401 response return karta hai, warna null.
export async function requireAdmin() {
  const secret = process.env.ADMIN_SECRET_KEY;
  const cookie = cookies().get(COOKIE_NAME)?.value;
  const ok = !!secret && !!cookie && safeEqual(cookie, await sessionToken(secret));
  if (!ok) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}