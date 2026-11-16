"use server";

import { registerUser, UserAlreadyExistsError } from "@/app/services/users";
import { redirect } from "next/navigation";

const MIN_LENGTH = 4;

const isValid = (value: string) => !!value && value.trim().length >= MIN_LENGTH;

interface CreateUserState {
  errors: {
    username?: string;
    name?: string;
    password?: string;
    passwordConfirm?: string;
  };
  values: {
    username: string;
    name: string;
    password: string;
    passwordConfirm: string;
  };
}

export const createUser = async (
  prevState: CreateUserState | null,
  formData: FormData,
): Promise<CreateUserState> => {
  const username = formData.get("username") as string;
  const name = formData.get("name") as string;
  const password = formData.get("password") as string;
  const passwordConfirm = formData.get("passwordConfirm") as string;
  const values = { username, name, password, passwordConfirm };

  const errors: CreateUserState["errors"] = {};

  if (!isValid(username)) {
    errors.username = `Username must be at least ${MIN_LENGTH} characters long`;
  }
  if (!name?.trim()) {
    errors.name = "Name is required";
  }
  if (!isValid(password)) {
    errors.password = `Password must be at least ${MIN_LENGTH} characters long`;
  }
  if (passwordConfirm !== password) {
    errors.passwordConfirm = "Passwords do not match";
  }

  if (Object.keys(errors).length > 0) {
    return { errors, values };
  }

  try {
    await registerUser(username, name, password);
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return { errors: { username: "Username already exists" }, values };
    }
    throw error;
  }

  redirect("/login");
};
