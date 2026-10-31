// Path: app/api/admin/login/route.ts

import { NextResponse } from "next/server";
import { COOKIE_NAME, safeEqual, sessionToken } from "@/lib/auth";

export async function POST(req: Request) {
  const { key } = await req.json().catch(() => ({}));
  const secret = process.env.ADMIN_SECRET_KEY;

  if (!secret || typeof key !== "string" || !safeEqual(key, secret)) {
    return NextResponse.json({ error: "Galat secret key" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, await sessionToken(secret), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 ghante
  });
  return res;
}