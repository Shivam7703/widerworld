// Path: src/app/admin/dashboard/BlogForm.tsx

"use client";

import { useState } from "react";

export type BlogFull = {
  ID: number;
  post_title: string;
  post_name: string;
  post_date: string;
  post_content: string;
  description: string;
  keyphrases: any;
  images: any;
};

const MAX_SIZE = 5 * 1024 * 1024;
const ALLOWED = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"];

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function toLocalInput(v?: string) {
  if (!v) {
    return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 16);
  }
  return v.replace(" ", "T").slice(0, 16);
}

function buildKeyphrases(old: any, focus: string) {
  const base = old && typeof old === "object" ? JSON.parse(JSON.stringify(old)) : {};
  if (!focus.trim() && !base.focus) return old ?? null;
  base.focus = { ...(base.focus || {}), keyphrase: focus.trim() };
  return base;
}

// DB format: [{ "image:loc": "/wp-content/uploads/2026/05/xyz.webp" }]
function buildImages(old: any, loc: string) {
  if (!loc.trim()) return null;
  const arr = Array.isArray(old) ? JSON.parse(JSON.stringify(old)) : [];
  arr[0] = { ...(arr[0] || {}), "image:loc": loc.trim() };
  return arr;
}

type Props = {
  initial: BlogFull | null;
  onClose: () => void;
  onSaved: () => void;
};

export default function BlogForm({ initial, onClose, onSaved }: Props) {
  const isEdit = !!initial;

  const [title, setTitle] = useState(initial?.post_title || "");
  const [slug, setSlug] = useState(initial?.post_name || "");
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const [date, setDate] = useState(toLocalInput(initial?.post_date));
  const [description, setDescription] = useState(initial?.description || "");
  const [focus, setFocus] = useState(initial?.keyphrases?.focus?.keyphrase || "");
  const [content, setContent] = useState(initial?.post_content || "");

  // Image: imageLoc = DB me saved path, file = naya select kiya hua
  const [imageLoc, setImageLoc] = useState(initial?.images?.[0]?.["image:loc"] || "");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function onTitleChange(v: string) {
    setTitle(v);
    if (!slugTouched) setSlug(slugify(v));
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!ALLOWED.includes(f.type)) {
      setError("only JPG, PNG, WEBP, GIF ya AVIF image allowed ");
      e.target.value = "";
      return;
    }
    if (f.size > MAX_SIZE) {
      setError("Image is bigger than 5MB ");
      e.target.value = "";
      return;
    }
    setError("");
    setFile(f);
    setPreview(URL.createObjectURL(f));
  }

  function removeImage() {
    setFile(null);
    setPreview("");
    setImageLoc("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      // 1. Naya image select hui hai to pehle upload karo
      let finalImage = imageLoc;
      if (file) {
        const fd = new FormData();
        fd.append("file", file);
        fd.append("title", title);
        const up = await fetch("/api/admin/upload", { method: "POST", body: fd });
        const upData = await up.json().catch(() => ({}));
        if (!up.ok) throw new Error(upData.error || "Unable to upload Image");
        finalImage = upData.path;
      }

      // 2. Blog save karo (image ka path DB me jayega)
      const res = await fetch(
        isEdit ? `/api/admin/blogs/${initial!.ID}` : "/api/admin/blogs",
        {
          method: isEdit ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            post_title: title,
            post_name: slug,
            post_date: date,
            description,
            post_content: content,
            keyphrases: buildKeyphrases(initial?.keyphrases, focus),
            images: buildImages(initial?.images, finalImage),
          }),
        }
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "unable to save");
      onSaved();
    } catch (err: any) {
      setError(err.message);
      setSaving(false);
    }
  }

  const input =
    "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200";
  const label = "mb-1 block text-sm font-medium text-gray-700";
  const shownImage = preview || imageLoc;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 p-4">
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-6 w-full max-w-4xl rounded-2xl bg-white p-6 shadow-xl"
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            {isEdit ? `Blog Edit karo (ID: ${initial!.ID})` : "new blog"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3 py-1 text-2xl leading-none text-gray-500 hover:bg-gray-100"
          >
            ×
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className={label}>Title *</label>
            <input
              className={input}
              value={title}
              onChange={(e) => onTitleChange(e.target.value)}
              required
            />
          </div>

          <div>
            <label className={label}>Slug (URL) *</label>
            <input
              className={input}
              value={slug}
              onChange={(e) => {
                setSlugTouched(true);
                setSlug(slugify(e.target.value));
              }}
              required
            />
          </div>

          <div>
            <label className={label}>Date</label>
            <input
              type="datetime-local"
              className={input}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className={label}>Focus Keyphrase</label>
            <input
              className={input}
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
            />
          </div>

          {/* Image upload */}
          <div className="md:col-span-2">
            <label className={label}>Blog Image</label>
            <div className="flex flex-wrap items-start gap-4">
              {shownImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={shownImage}
                  alt="Preview"
                  className="h-28 w-44 rounded-lg border border-gray-200 object-cover"
                />
              ) : (
                <div className="flex h-28 w-44 items-center justify-center rounded-lg border border-dashed border-gray-300 text-xs text-gray-400">
                  Image Not found
                </div>
              )}

              <div className="min-w-0 flex-1">
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
                  onChange={onFileChange}
                  className="block w-full text-sm text-gray-600 file:mr-3 file:rounded-lg file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-indigo-700 hover:file:bg-indigo-100"
                />
                <p className="mt-2 break-all text-xs text-gray-500">
                  {file
                    ? `upload on save: ${file.name}`
                    : imageLoc
                    ? `Saved path: ${imageLoc}`
                    : "Max 5MB. name date + time + title."}
                </p>
                {shownImage && (
                  <button
                    type="button"
                    onClick={removeImage}
                    className="mt-2 text-xs font-medium text-red-600 hover:underline"
                  >
                    Remove Image
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className={label}>
              Description{" "}
              <span className="font-normal text-gray-400">({description.length} chars)</span>
            </label>
            <textarea
              className={input}
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className={label}>Content (HTML)</label>
            <textarea
              className={`${input} font-mono`}
              rows={16}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>

        {error && (
          <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
        )}

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-60"
          >
            {saving ? "Saving..." : isEdit ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}