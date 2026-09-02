import { notFound } from "next/navigation";
import { getBlogById } from "@/app/services/blogs";

const BlogPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const blog = getBlogById(Number(id));

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <h1>{blog.title}</h1>
      <p>Author: {blog.author}</p>
      <p>
        URL: <a href={blog.url}>{blog.url}</a>
      </p>
      <p>Likes: {blog.likes}</p>
    </main>
  );
};

export default BlogPage;
