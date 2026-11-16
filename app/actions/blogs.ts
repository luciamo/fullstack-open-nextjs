"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { addBlog, incrementLikes } from "@/app/services/blogs";
import { auth } from "@/auth";

const MIN_LENGTH = 5;

const isValid = (value: string) => !!value && value.trim().length >= MIN_LENGTH;

const message = (field: string) =>
  `${field} must be at least ${MIN_LENGTH} characters long`;

export const createBlog = async (
  prevState: {
    errors: { title?: string; author?: string; url?: string };
    values: { title: string; author: string; url: string };
  } | null,
  formData: FormData,
) => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const url = formData.get("url") as string;

  const errors = {
    title: isValid(title) ? undefined : message("Title"),
    author: isValid(author) ? undefined : message("Author"),
    url: isValid(url) ? undefined : message("URL"),
  };

  if (Object.values(errors).some(Boolean)) {
    return { errors, values: { title, author, url } };
  }

  await addBlog(title, author, url);

  revalidatePath("/blogs");
  redirect("/blogs");
};

export const likeBlog = async (formData: FormData) => {
  const id = Number(formData.get("id"));

  await incrementLikes(id);

  revalidatePath(`/blogs/${id}`);
  revalidatePath("/blogs");
};
