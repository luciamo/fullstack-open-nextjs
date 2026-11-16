import Link from "next/link";
import { getBlogs } from "@/app/services/blogs";

export default async function Blogs({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const { filter } = await searchParams;
  const allBlogs = await getBlogs();
  const filtered = filter
    ? allBlogs.filter(
        (blog) =>
          blog.title?.toLowerCase().includes(filter.toLowerCase()) ?? "",
      )
    : [...allBlogs];
  const blogs = filtered.sort((a, b) => b.likes - a.likes);

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      <form className="mb-4">
        <input
          type="text"
          name="filter"
          defaultValue={filter}
          className="border rounded px-2 py-1"
        />
        <button type="submit" className="ml-2 border rounded px-3 py-1">
          Search
        </button>
      </form>
      <ul className="space-y-2">
        {blogs.map((blog) => (
          <li key={blog.id} className="border rounded p-3 hover:bg-gray-50">
            <Link
              href={`/blogs/${blog.id}`}
              className="text-blue-600 hover:underline"
            >
              {blog.title}
            </Link>{" "}
            by {blog.author} — {blog.likes} likes
          </li>
        ))}
      </ul>
    </main>
  );
}
