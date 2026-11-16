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
    <main>
      <h1>Create a new blog</h1>
      <form action={formAction}>
        <div>
          <label>
            Title
            <input
              type="text"
              name="title"
              required
              defaultValue={state.values?.title || ""}
            />
          </label>
        </div>
        <div>
          <label>
            Author
            <input
              type="text"
              name="author"
              required
              defaultValue={state.values?.author || ""}
            />
          </label>
        </div>
        <div>
          <label>
            URL
            <input
              type="text"
              name="url"
              required
              defaultValue={state.values?.url || ""}
            />
          </label>
        </div>
        <button type="submit">Create</button>
        {state.errors.title && (
          <p style={{ color: "red" }}>{state.errors.title}</p>
        )}
        {state.errors.author && (
          <p style={{ color: "red" }}>{state.errors.author}</p>
        )}
        {state.errors.url && <p style={{ color: "red" }}>{state.errors.url}</p>}
      </form>
    </main>
  );
}
