import { db } from "@/db";

export const getUsers = async () => db.query.users.findMany();

export const getUserById = async (id: number) =>
  await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.id, id),
  });
