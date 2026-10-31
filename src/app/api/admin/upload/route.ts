import { NextRequest, NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";

export const runtime = "nodejs";

// Server par asli wp-content/uploads folder ka absolute path .env mein do
// Example: UPLOAD_DIR=/var/www/widerworld/wp-content/uploads
const UPLOAD_DIR =
  process.env.UPLOAD_DIR ||
  path.join(process.cwd(), "public_html", "wp-content", "uploads");

const MAX_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/avif": "avif",
};

function slugify(s: string) {
  return (
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "image"
  );
}

export async function POST(req: NextRequest) {
  // IMPORTANT: yahan wahi admin auth check lagayein jo /api/admin/blogs route mein hai
  // (cookie/session verify). Bina login ke upload allow nahi hona chahiye.

  try {
    const form = await req.formData();
    const file = form.get("file");
    const title = String(form.get("title") || "image");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "File nahi mili" }, { status: 400 });
    }

    const ext = ALLOWED[file.type];
    if (!ext) {
      return NextResponse.json(
        { error: "Sirf JPG, PNG, WEBP, GIF ya AVIF allowed hai" },
        { status: 400 }
      );
    }
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: "File 5MB se badi hai" },
        { status: 400 }
      );
    }

    const now = new Date();
    const year = String(now.getFullYear());
    const month = String(now.getMonth() + 1).padStart(2, "0");

    const dir = path.join(UPLOAD_DIR, year, month);
    await mkdir(dir, { recursive: true });

    const filename = `${slugify(title)}-${crypto
      .randomBytes(4)
      .toString("hex")}.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(path.join(dir, filename), buffer);

    return NextResponse.json({
      path: `/wp-content/uploads/${year}/${month}/${filename}`,
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: e.message || "Upload failed" },
      { status: 500 }
    );
  }
}