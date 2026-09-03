import { notFound } from "next/navigation";
import { getUserWithBlogsByUsername } from "@/app/services/users";

const UserPage = async ({
  params,
}: {
  params: Promise<{ username: string }>;
}) => {
  const { username } = await params;
  const user = await getUserWithBlogsByUsername(username);

  if (!user) {
    notFound();
  }

  return (
    <main>
      <h1>{user.name}</h1>
      <ul>
        {user.blogs.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.url}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default UserPage;
