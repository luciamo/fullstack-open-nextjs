import { notFound } from "next/navigation";
import { getUserById } from "@/app/services/users";

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const user = await getUserById(Number(id));

  if (!user) {
    notFound();
  }

  return (
    <main>
      <h1>{user.name}</h1>
    </main>
  );
};

export default UserPage;
