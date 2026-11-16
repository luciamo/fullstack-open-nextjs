"use client";
import { createBlog } from "@/app/actions/blogs";
import { useActionState } from "react";

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
  });

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
