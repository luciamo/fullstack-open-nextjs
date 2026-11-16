"use client";

import { createUser } from "@/app/actions/users";
import { useActionState } from "react";

export default function RegisterPage() {
  const [state, formAction] = useActionState(createUser, {
    errors: {
      username: undefined,
      password: undefined,
      passwordConfirm: undefined,
      name: undefined,
    },
    values: {
      username: "",
      password: "",
      passwordConfirm: "",
      name: "",
    },
  });

  return (
    <div>
      <h2>Register</h2>
      <form action={formAction}>
        <div>
          <label>
            Username
            <input
              type="text"
              name="username"
              required
              defaultValue={state.values.username}
            />
          </label>
          {state.errors.username && (
            <p style={{ color: "red" }}>{state.errors.username}</p>
          )}
        </div>
        <div>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              defaultValue={state.values.name}
            />
          </label>
          {state.errors.name && (
            <p style={{ color: "red" }}>{state.errors.name}</p>
          )}
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              required
              defaultValue={state.values.password}
            />
          </label>
          {state.errors.password && (
            <p style={{ color: "red" }}>{state.errors.password}</p>
          )}
        </div>
        <div>
          <label>
            Confirm Password
            <input
              type="password"
              name="passwordConfirm"
              required
              defaultValue={state.values.passwordConfirm}
            />
          </label>
          {state.errors.passwordConfirm && (
            <p style={{ color: "red" }}>{state.errors.passwordConfirm}</p>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
