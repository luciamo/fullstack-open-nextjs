import { notFound } from "next/navigation";
import { getBlogById } from "@/app/services/blogs";
import { likeBlog } from "@/app/actions/blogs";

const BlogPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const blog = await getBlogById(Number(id));

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <h1>{blog.title}</h1>
      <p>Author: {blog.author}</p>
      {blog.url && <p>
        URL: <a href={blog.url}>{blog.url}</a>
      </p>}
      <p>Likes: {blog.likes}</p>
      <form action={likeBlog}>
        <input type="hidden" name="id" value={blog.id} />
        <button type="submit">Like</button>
      </form>
    </main>
  );
};

export default BlogPage;
