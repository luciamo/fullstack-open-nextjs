# Full Stack Open: Next.js

Solutions for the [Full Stack Open: Next.js](https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-nextjs) course (University of Helsinki), built with Next.js.

Per the course instructions, all exercises live in this single repository.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Exercises

### Chapter 2

- **1. Blog list**: navbar (home/blogs) and the `/blogs` route rendering a hardcoded list of blogs (`id`, `title`, `author`, `url`, `likes`).
- **2. New blog**: `/blogs/new` route with a form (title, author, url) and a Server Action (`createBlog`) that adds the blog to the list and redirects to `/blogs`, using `revalidatePath` so it also works in production.
