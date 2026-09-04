"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { addBlog, incrementLikes } from "@/app/services/blogs";
import { auth } from "@/auth";

const MIN_LENGTH = 5;

const isValid = (value: string) => !!value && value.trim().length >= MIN_LENGTH;

export const createBlog = async (
  prevState: {
    error: string;
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

  if (!isValid(title) || !isValid(author) || !isValid(url)) {
    return {
      error: `All fields must be at least ${MIN_LENGTH} characters long`,
      values: { title, author, url },
    };
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
