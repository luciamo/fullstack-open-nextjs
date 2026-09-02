import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog List",
  description: "Full Stack Open - Blog List exercise",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link> | <Link href="/blogs">Blogs</Link> |{" "}
          <Link href="/blogs/new">Create new</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
