import { eq } from "drizzle-orm";
import { db } from "@/db";
import { blogs as blogsTable } from "@/db/schema";

import { getCurrentUser } from "./sessions";

export type Blog = {
  id: number;
  title: string;
  author: string;
  url: string;
  likes: number;
};

export const getBlogs = async () => db.query.blogs.findMany();

export const addBlog = async (title: string, author: string, url: string) => {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error("Not logged in");
  }

  return await db
    .insert(blogsTable)
    .values({ title, author, url, userId: user?.id });
};

export const getBlogById = async (id: number) =>
  await db.query.blogs.findFirst({
    where: (blog, { eq }) => eq(blog.id, id),
  });

export const incrementLikes = async (id: number) => {
  const blog = await getBlogById(id);
  if (!blog) {
    throw new Error(`Blog with id ${id} not found`);
  }
  await db
    .update(blogsTable)
    .set({ likes: blog.likes + 1 })
    .where(eq(blogsTable.id, id));
};
