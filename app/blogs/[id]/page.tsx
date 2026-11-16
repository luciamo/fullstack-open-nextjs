import { notFound } from "next/navigation";
import { getBlogById } from "@/app/services/blogs";
import { likeBlog } from "@/app/actions/blogs";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog = await getBlogById(Number(id));

  if (!blog) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
      <div className="border rounded p-4 space-y-2">
        <p>Author: {blog.author}</p>
        {blog.url && (
          <p>
            URL:{" "}
            <a href={blog.url} className="text-blue-600 hover:underline">
              {blog.url}
            </a>
          </p>
        )}
        <p>Likes: {blog.likes}</p>
        <form action={likeBlog}>
          <input type="hidden" name="id" value={blog.id} />
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm"
          >
            Like
          </button>
        </form>
      </div>
    </main>
  );
};

export default BlogPage;
