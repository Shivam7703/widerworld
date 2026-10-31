// app/api/blogs/route.js
import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { RowDataPacket } from 'mysql2';

interface Blog extends RowDataPacket {
  ID: number;
  post_name: string;
  post_title: string;
  post_content: string;
  post_date: string;
  images: any;
  keyphrases: any;
}

interface CountResult extends RowDataPacket {
  total: number;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const id = searchParams.get('id');

    const safeJsonParse = (val: any) => {
      if (!val) return null;
      try {
        return typeof val === 'string' ? JSON.parse(val) : val;
      } catch {
        return val;
      }
    };

    // 1. Single blog by slug
    if (slug) {
      const [rows] = await pool.query<Blog[]>(
        'SELECT * FROM Sh7_nextjs_blogs WHERE post_name = ? LIMIT 1',
        [slug]
      );

      if (rows.length === 0) {
        return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
      }

      const blog = rows[0];
      blog.images = safeJsonParse(blog.images);
      blog.keyphrases = safeJsonParse(blog.keyphrases);

      return NextResponse.json(blog);
    }

    // 2. Single blog by ID
    if (id) {
      const [rows] = await pool.query<Blog[]>(
        'SELECT * FROM Sh7_nextjs_blogs WHERE ID = ? LIMIT 1',
        [Number(id)]
      );

      if (rows.length === 0) {
        return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
      }

      const blog = rows[0];
      blog.images = safeJsonParse(blog.images);
      blog.keyphrases = safeJsonParse(blog.keyphrases);

      return NextResponse.json(blog);
    }

    // 3. Pagination & Fetching All Blogs
    const page = Number(searchParams.get('page')) || 1;
    const perPage = Number(searchParams.get('per_page')) || 10;
    const offset = (page - 1) * perPage;

    // Total count query
    const [countRows] = await pool.query<CountResult[]>(
      'SELECT COUNT(*) as total FROM Sh7_nextjs_blogs'
    );
    const total = countRows[0].total;
    const totalPages = Math.ceil(total / perPage);

    // Fetch paginated blogs
    const [blogs] = await pool.query<Blog[]>(
      'SELECT * FROM Sh7_nextjs_blogs ORDER BY post_date DESC LIMIT ? OFFSET ?',
      [perPage, offset]
    );

    const formattedBlogs = blogs.map((blog) => ({
      ...blog,
      images: safeJsonParse(blog.images),
      keyphrases: safeJsonParse(blog.keyphrases),
    }));

    return NextResponse.json({
      total,
      page,
      per_page: perPage,
      total_pages: totalPages,
      data: formattedBlogs,
    });

  } catch (error: any) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Connection or Query failed: ' + error.message },
      { status: 500 }
    );
  }
}