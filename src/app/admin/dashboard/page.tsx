// Path: src/app/admin/dashboard/page.tsx

"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BlogForm, { BlogFull } from "./BlogForm";

type BlogRow = {
  ID: number;
  post_title: string;
  post_name: string;
  post_date: string;
  description: string;
};

const PER_PAGE = 10;

export default function AdminDashboard() {
  const router = useRouter();

  const [blogs, setBlogs] = useState<BlogRow[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<BlogFull | null>(null);
  const [busyId, setBusyId] = useState<number | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `/api/admin/blogs?page=${page}&per_page=${PER_PAGE}&q=${encodeURIComponent(q)}`
      );
      if (res.status === 401) {
        router.replace("/admin");
        return;
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "can't load Blogs");
      setBlogs(data.data);
      setTotal(data.total);
      setTotalPages(data.total_pages);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [page, q, router]);

  useEffect(() => {
    load();
  }, [load]);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin");
    router.refresh();
  }

  function openCreate() {
    setEditing(null);
    setFormOpen(true);
  }

  async function openEdit(id: number) {
    setBusyId(id);
    try {
      const res = await fetch(`/api/admin/blogs/${id}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Blogs not loaded ");
      setEditing(data);
      setFormOpen(true);
    } catch (e: any) {
      alert(e.message);
    } finally {
      setBusyId(null);
    }
  }

  async function handleDelete(blog: BlogRow) {
    if (!confirm(`Are you sure want to delete "${blog.post_title}"`)) return;
    setBusyId(blog.ID);
    try {
      const res = await fetch(`/api/admin/blogs/${blog.ID}`, { method: "DELETE" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "unable to delete");
      if (blogs.length === 1 && page > 1) setPage(page - 1);
      else load();
    } catch (e: any) {
      alert(e.message);
    } finally {
      setBusyId(null);
    }
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setPage(1);
    setQ(search.trim());
  }

  function handleSaved() {
    setFormOpen(false);
    setEditing(null);
    load();
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center justify-between bg-white px-6 py-4 shadow">
        <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
        <button
          onClick={logout}
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
        >
          Logout
        </button>
      </header>

      <main className="mx-auto max-w-6xl p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Blogs</h2>
            <p className="text-sm text-gray-500">Total: {total}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Title ya slug search karo"
                className="w-56 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
              >
                Search
              </button>
            </form>
            <button
              onClick={openCreate}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              + create Blog
            </button>
          </div>
        </div>

        {error && (
          <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
        )}

        <div className="overflow-x-auto rounded-xl bg-white shadow">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-4 py-10 text-center text-gray-500">
                    Loading...
                  </td>
                </tr>
              ) : blogs.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-10 text-center text-gray-500">
                    Blogs not found
                  </td>
                </tr>
              ) : (
                blogs.map((b) => (
                  <tr key={b.ID} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-500">{b.ID}</td>
                    <td className="px-4 py-3">
                      <div className="font-medium text-gray-900">{b.post_title}</div>
                      <div className="text-xs text-gray-400">/{b.post_name}</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-gray-600">
                      {b.post_date?.slice(0, 10)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-right">
                      <a
                        href={`/blog/${b.post_name}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mr-2 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
                      >
                        View
                      </a>
                      <button
                        onClick={() => openEdit(b.ID)}
                        disabled={busyId === b.ID}
                        className="mr-2 rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-100 disabled:opacity-50"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(b)}
                        disabled={busyId === b.ID}
                        className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-100 disabled:opacity-50"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <span>
            Page {page} / {totalPages}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page <= 1}
              className="rounded-lg border border-gray-300 bg-white px-4 py-1.5 hover:bg-gray-50 disabled:opacity-50"
            >
              Prev
            </button>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page >= totalPages}
              className="rounded-lg border border-gray-300 bg-white px-4 py-1.5 hover:bg-gray-50 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </main>

      {formOpen && (
        <BlogForm
          initial={editing}
          onClose={() => {
            setFormOpen(false);
            setEditing(null);
          }}
          onSaved={handleSaved}
        />
      )}
    </div>
  );
}