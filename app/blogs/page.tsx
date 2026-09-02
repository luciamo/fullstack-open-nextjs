type Blog = {
  id: number;
  title: string;
  author: string;
  url: string;
  likes: number;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
  },
  {
    id: 2,
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
  },
  {
    id: 3,
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
  },
  {
    id: 4,
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html",
    likes: 10,
  },
  {
    id: 5,
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
  },
];

export default function BlogsPage() {
  return (
    <main>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <a href={blog.url}>{blog.title}</a> by {blog.author} — {blog.likes} likes
          </li>
        ))}
      </ul>
    </main>
  );
}
