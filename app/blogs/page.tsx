import Link from "next/link";
import { getBlogs } from "../services/blogs";

export default function BlogsPage() {
  const blogs = getBlogs();
  return (
    <main>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <a href={blog.url}>{blog.title}</a> by {blog.author} — {blog.likes} likes
          </li>
        ))}
      </ul>
      <p>
        <Link href="/blogs/new">Create new</Link>
      </p>
    </main>
  );
}
