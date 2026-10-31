// Path: src/app/api/admin/blogs/[id]/route.ts

import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { requireAdmin } from "@/lib/adminGuard";
import { parseBlogBody, revalidateBlog, safeJsonParse } from "@/lib/blogUtils";
import { ResultSetHeader, RowDataPacket } from "mysql2";

const TABLE = "Sh7_nextjs_blogs";

type Ctx = { params: { id: string } };

// GET /api/admin/blogs/:id -> ek blog (edit form ke liye)
export async function GET(_req: Request, { params }: Ctx) {
  const denied = await requireAdmin();
  if (denied) return denied;

  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT ID, post_title, post_name,
              DATE_FORMAT(post_date, '%Y-%m-%d %H:%i:%s') AS post_date,
              post_content, description, keyphrases, images
       FROM ${TABLE} WHERE ID = ? LIMIT 1`,
      [Number(params.id)]
    );
    if (rows.length === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    const blog = rows[0];
    blog.keyphrases = safeJsonParse(blog.keyphrases);
    blog.images = safeJsonParse(blog.images);
    return NextResponse.json(blog);
  } catch (error: any) {
    console.error("Admin blog GET error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT /api/admin/blogs/:id -> blog update karo
export async function PUT(req: Request, { params }: Ctx) {
  const denied = await requireAdmin();
  if (denied) return denied;

  try {
    const id = Number(params.id);
    const body = await req.json().catch(() => ({}));
    const parsed = parseBlogBody(body);
    if (parsed.error) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }
    const b = parsed.data!;

    const [old] = await pool.query<RowDataPacket[]>(
      `SELECT post_name FROM ${TABLE} WHERE ID = ? LIMIT 1`,
      [id]
    );
    if (old.length === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Slug kisi aur blog ka na ho
    const [dup] = await pool.query<RowDataPacket[]>(
      `SELECT ID FROM ${TABLE} WHERE post_name = ? AND ID <> ? LIMIT 1`,
      [b.post_name, id]
    );
    if (dup.length > 0) {
      return NextResponse.json(
        { error: "Ye slug kisi aur blog me use ho raha hai" },
        { status: 409 }
      );
    }

    await pool.query<ResultSetHeader>(
      `UPDATE ${TABLE}
       SET post_title = ?, post_name = ?, post_date = ?, post_content = ?,
           description = ?, keyphrases = ?, images = ?
       WHERE ID = ?`,
      [
        b.post_title,
        b.post_name,
        b.post_date,
        b.post_content,
        b.description,
        b.keyphrases,
        b.images,
        id,
      ]
    );

    revalidateBlog(old[0].post_name);
    revalidateBlog(b.post_name);
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Admin blog PUT error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE /api/admin/blogs/:id -> blog delete karo
export async function DELETE(_req: Request, { params }: Ctx) {
  const denied = await requireAdmin();
  if (denied) return denied;

  try {
    const id = Number(params.id);

    const [old] = await pool.query<RowDataPacket[]>(
      `SELECT post_name FROM ${TABLE} WHERE ID = ? LIMIT 1`,
      [id]
    );
    if (old.length === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    await pool.query<ResultSetHeader>(`DELETE FROM ${TABLE} WHERE ID = ?`, [id]);

    revalidateBlog(old[0].post_name);
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Admin blog DELETE error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}