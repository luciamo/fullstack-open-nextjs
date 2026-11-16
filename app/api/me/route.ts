import { NextRequest, NextResponse } from "next/server";
import { getUserByToken } from "@/app/services/users";

export const GET = async (req: NextRequest) => {
  const header = req.headers.get("authorization");
  const [bearer, token] = header?.split(" ") ?? [];

  if (bearer !== "Bearer" || !token) {
    return NextResponse.json(
      { message: "Invalid authorization header" },
      { status: 401 },
    );
  }

  const user = await getUserByToken(token);

  if (!user) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  return NextResponse.json({
    id: user.id,
    username: user.username,
    name: user.name,
    createdBlogs: user.blogs.map(({ author, title, url }) => ({
      title,
      author,
      url,
    })),
  });
};
