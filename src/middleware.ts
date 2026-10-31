// Path: src/middleware.ts

import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, safeEqual, sessionToken } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const secret = process.env.ADMIN_SECRET_KEY;
  const cookie = req.cookies.get(COOKIE_NAME)?.value;
  const isLoggedIn =
    !!secret && !!cookie && safeEqual(cookie, await sessionToken(secret));

  // trailing slash hata do: "/admin/" -> "/admin"
  const pathname = req.nextUrl.pathname.replace(/\/+$/, "") || "/";

  // Login page
  if (pathname === "/admin") {
    if (isLoggedIn) return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    return NextResponse.next();
  }

  // Baaki /admin/* protected
  if (!isLoggedIn) return NextResponse.redirect(new URL("/admin", req.url));
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};