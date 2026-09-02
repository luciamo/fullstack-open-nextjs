# Full Stack Open

Repositório guarda-chuva com as soluções do curso [Full Stack Open](https://fullstackopen.com/).

Cada exercício vive em seu próprio repositório git, incluído aqui como **submodule**. Isso permite manter histórico e deploy independentes por exercício (importante, por exemplo, para exercícios com backend que precisam de deploy próprio no Fly.io/Render).

## Estrutura

```
fullstack-open-nextjs/
├── blog-list/   (submodule)
├── ...
└── ...
```

## Clonando este repositório

```bash
git clone --recurse-submodules <url-deste-repo>
```

Se já clonou sem `--recurse-submodules`:

```bash
git submodule update --init --recursive
```

## Adicionando um novo exercício

1. Crie o repositório remoto do exercício (ex: no GitHub).
2. Adicione como submodule aqui:

```bash
git submodule add <url-do-repo-do-exercicio> nome-do-exercicio
git commit -m "Add nome-do-exercicio submodule"
```

## Atualizando um submodule já existente

Dentro da pasta do submodule, trabalhe normalmente (commit/push como um repo comum). Depois, no guarda-chuva, registre o novo commit referenciado:

```bash
cd nome-do-exercicio
git add .
git commit -m "..."
git push

cd ..
git add nome-do-exercicio
git commit -m "Update nome-do-exercicio submodule reference"
```

## Puxando atualizações de todos os submodules

```bash
git submodule update --remote --merge
```
