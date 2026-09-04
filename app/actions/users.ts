"use server";

import { registerUser } from "@/app/services/users";
import { redirect } from "next/navigation";

export const createUser = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;

  if (!username || !password || !name) {
    redirect("/register?error=All fields are required");
  }

  try {
    await registerUser(username, name, password);
  } catch {
    redirect("/register?error=User already exists");
  }

  redirect("/login");
};
