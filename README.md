# Full Stack Open

Repositório guarda-chuva com as soluções do curso [Full Stack Open](https://fullstackopen.com/).

Cada parte do curso vive em seu próprio repositório git, incluído aqui como **submodule**. Isso permite manter histórico e deploy independentes por parte (importante, por exemplo, para partes com backend que precisam de deploy próprio no Fly.io/Render).

## Estrutura

```
fullstack-open-nextjs/
├── part1-.../   (submodule)
├── part2-.../   (submodule)
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

## Adicionando uma nova parte

1. Crie o repositório remoto da parte (ex: no GitHub).
2. Adicione como submodule aqui:

```bash
git submodule add <url-do-repo-da-parte> partN-nome-da-parte
git commit -m "Add partN-nome-da-parte submodule"
```

## Atualizando um submodule já existente

Dentro da pasta do submodule, trabalhe normalmente (commit/push como um repo comum). Depois, no guarda-chuva, registre o novo commit referenciado:

```bash
cd partN-nome-da-parte
git add .
git commit -m "..."
git push

cd ..
git add partN-nome-da-parte
git commit -m "Update partN-nome-da-parte submodule reference"
```

## Puxando atualizações de todos os submodules

```bash
git submodule update --remote --merge
```
