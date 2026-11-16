"use client";
import { createBlog } from "@/app/actions/blogs";
import { useNotification } from "@/app/components/NotificationContext";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

export default function NewBlogPage() {
  const [state, formAction] = useActionState(createBlog, {
    errors: {
      title: undefined,
      author: undefined,
      url: undefined,
    },
    values: {
      title: "",
      author: "",
      url: "",
    },
    success: false,
  });
  const { showNotification } = useNotification();
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      showNotification("blog created");
      router.push("/blogs");
    }
  }, [state, showNotification, router]);

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create a new blog</h1>
      <form action={formAction} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Title
            <input
              type="text"
              name="title"
              required
              defaultValue={state.values?.title || ""}
              className="mt-1 block w-full border rounded px-2 py-1"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Author
            <input
              type="text"
              name="author"
              required
              defaultValue={state.values?.author || ""}
              className="mt-1 block w-full border rounded px-2 py-1"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            URL
            <input
              type="text"
              name="url"
              required
              defaultValue={state.values?.url || ""}
              className="mt-1 block w-full border rounded px-2 py-1"
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded"
        >
          Create
        </button>
        {state.errors.title && (
          <p className="text-sm text-red-600">{state.errors.title}</p>
        )}
        {state.errors.author && (
          <p className="text-sm text-red-600">{state.errors.author}</p>
        )}
        {state.errors.url && (
          <p className="text-sm text-red-600">{state.errors.url}</p>
        )}
      </form>
    </main>
  );
}
