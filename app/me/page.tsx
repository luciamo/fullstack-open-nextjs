import { redirect } from "next/navigation";
import { getCurrentUser } from "@/app/services/sessions";
import { generateToken } from "@/app/actions/users";

export default async function Me() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">API Token</h2>
      {user.token ? (
        <p>
          Current token: <code>{user.token}</code>
        </p>
      ) : (
        <p>No token has been generated yet.</p>
      )}
      <form action={generateToken} className="mt-4">
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded"
        >
          Generate New Token
        </button>
      </form>
    </main>
  );
}
