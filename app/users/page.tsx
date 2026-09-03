import Link from "next/link";
import { getUsers } from "@/app/services/users";

export default async function Users({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const { filter } = await searchParams;
  const allUsers = await getUsers();
  const users = filter
    ? allUsers.filter(
        (user) => user.name?.toLowerCase().includes(filter.toLowerCase()) ?? "",
      )
    : [...allUsers];

  return (
    <main>
      <h1>Users</h1>
      <form>
        <input type="text" name="filter" defaultValue={filter} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.username}>
            <Link href={`/users/${user.username}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
