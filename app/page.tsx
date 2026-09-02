import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Blog List</h1>
      <p>Welcome. See the <Link href="/blogs">blogs</Link> page for the list of blogs.</p>
    </main>
  );
}
