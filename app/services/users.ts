import { db } from "@/db";

export const getUsers = async () => db.query.users.findMany();

export const getUserWithBlogsByUsername = async (username: string) =>
  await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.username, username),
    with: {
      blogs: true,
    },
  });
