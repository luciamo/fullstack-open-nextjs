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
    <main>
      <h1>Blogs</h1>
      <form>
        <input type="text" name="filter" defaultValue={filter} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link> by{" "}
            {blog.author} — {blog.likes} likes
          </li>
        ))}
      </ul>
    </main>
  );
}
