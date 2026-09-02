export type Blog = {
  id: number;
  title: string;
  author: string;
  url: string;
  likes: number;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Refactoring My Toaster's Firmware",
    author: "Priya Ashworth",
    url: "https://blogosphere.dev/refactoring-toaster-firmware",
    likes: 14,
  },
  {
    id: 2,
    title: "Why I Stopped Naming My Variables x",
    author: "Declan Voss",
    url: "https://blogosphere.dev/stopped-naming-variables-x",
    likes: 3,
  },
  {
    id: 3,
    title: "A Beginner's Guide to Yelling at Compilers",
    author: "Marisol Kaine",
    url: "https://blogosphere.dev/yelling-at-compilers",
    likes: 27,
  },
  {
    id: 4,
    title: "The Case for Naming Servers After Cheese",
    author: "Priya Ashworth",
    url: "https://blogosphere.dev/servers-named-after-cheese",
    likes: 9,
  },
  {
    id: 5,
    title: "I Tried Pair Programming With My Dog",
    author: "Declan Voss",
    url: "https://blogosphere.dev/pair-programming-with-my-dog",
    likes: 51,
  },
];

let nextId = 6;

export const getBlogs = () => {
  return blogs;
};

export const addBlog = (title: string, author: string, url: string) => {
  blogs.push({ id: nextId++, title, author, url, likes: 0 });
};
