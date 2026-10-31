// Path: src/app/api/admin/blogs/route.ts

import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { requireAdmin } from "@/lib/adminGuard";
import { parseBlogBody, revalidateBlog } from "@/lib/blogUtils";
import { ResultSetHeader, RowDataPacket } from "mysql2";

const TABLE = "Sh7_nextjs_blogs";

// GET /api/admin/blogs?page=1&per_page=10&q=search
export async function GET(req: Request) {
  const denied = await requireAdmin();
  if (denied) return denied;

  try {
    const { searchParams } = new URL(req.url);
    const page = Math.max(Number(searchParams.get("page")) || 1, 1);
    const perPage = Math.min(
      Math.max(Number(searchParams.get("per_page")) || 10, 1),
      100
    );
    const q = (searchParams.get("q") || "").trim();
    const offset = (page - 1) * perPage;

    const where = q ? "WHERE post_title LIKE ? OR post_name LIKE ?" : "";
    const params: any[] = q ? [`%${q}%`, `%${q}%`] : [];

    const [countRows] = await pool.query<RowDataPacket[]>(
      `SELECT COUNT(*) AS total FROM ${TABLE} ${where}`,
      params
    );
    const total = countRows[0].total as number;

    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT ID, post_title, post_name,
              DATE_FORMAT(post_date, '%Y-%m-%d %H:%i:%s') AS post_date,
              description
       FROM ${TABLE} ${where}
       ORDER BY post_date DESC
       LIMIT ? OFFSET ?`,
      [...params, perPage, offset]
    );

    return NextResponse.json({
      total,
      page,
      per_page: perPage,
      total_pages: Math.max(Math.ceil(total / perPage), 1),
      data: rows,
    });
  } catch (error: any) {
    console.error("Admin blogs GET error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/admin/blogs  -> naya blog banao
export async function POST(req: Request) {
  const denied = await requireAdmin();
  if (denied) return denied;

  try {
    const body = await req.json().catch(() => ({}));
    const parsed = parseBlogBody(body);
    if (parsed.error) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }
    const b = parsed.data!;

    // Slug unique hona chahiye
    const [dup] = await pool.query<RowDataPacket[]>(
      `SELECT ID FROM ${TABLE} WHERE post_name = ? LIMIT 1`,
      [b.post_name]
    );
    if (dup.length > 0) {
      return NextResponse.json(
        { error: "Ye slug pehle se exist karta hai" },
        { status: 409 }
      );
    }

    const [result] = await pool.query<ResultSetHeader>(
      `INSERT INTO ${TABLE}
        (post_title, post_name, post_date, post_content, description, keyphrases, images)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        b.post_title,
        b.post_name,
        b.post_date,
        b.post_content,
        b.description,
        b.keyphrases,
        b.images,
      ]
    );

    revalidateBlog(b.post_name);
    return NextResponse.json({ ok: true, ID: result.insertId }, { status: 201 });
  } catch (error: any) {
    console.error("Admin blogs POST error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}