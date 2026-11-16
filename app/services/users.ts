import { eq } from "drizzle-orm";
import { db } from "@/db";
import { users } from "@/db/schema";
import bcrypt from "bcryptjs";
import { getCurrentUser } from "./sessions";

export const getUsers = async () => db.query.users.findMany();

export const getUserWithBlogsByUsername = async (username: string) =>
  await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.username, username),
    with: {
      blogs: true,
    },
  });

export class UserAlreadyExistsError extends Error {}

export const registerUser = async (
  username: string,
  name: string,
  password: string,
) => {
  const passwordHash = await bcrypt.hash(password, 10);

  const userAlreadyExists = await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.username, username),
  });

  if (userAlreadyExists) {
    throw new UserAlreadyExistsError("User already exists");
  }

  const newUser = await db.insert(users).values({
    username,
    name,
    passwordHash,
  });

  return newUser;
};

export const setUserToken = async (token: string) => {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error("User not found");
  }
  await db.update(users).set({ token }).where(eq(users.id, user.id));
};
