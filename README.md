# Full Stack Open: Next.js

Repositório com as soluções do curso [Full Stack Open: Next.js](https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-nextjs) (Universidade de Helsinki), feito com Next.js.

Segundo as instruções do curso, todos os exercícios ficam neste único repositório.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Exercícios

### Chapter 2

- **1. Blog list** — navbar (home/blogs) e rota `/blogs` com lista hardcoded de blogs (`id`, `title`, `author`, `url`, `likes`). Sem estilização customizada.
- **2. New blog** — rota `/blogs/new` com formulário (title, author, url) e Server Action (`createBlog`) que adiciona o blog à lista e redireciona para `/blogs`, com `revalidatePath` para funcionar também em produção.
