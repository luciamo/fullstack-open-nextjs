import Link from "next/link";
import { getBlogs } from "@/app/services/blogs";

export default function BlogsPage() {
  const blogs = getBlogs();
  return (
    <main>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link> by {blog.author} — {blog.likes} likes
          </li>
        ))}
      </ul>
    </main>
  );
}
