# Saruê Arcano — site de jogos

Blog + catálogo de jogos em **Astro** e **Tailwind**. Conteúdo em Markdown.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Publicar conteúdo

- **Post:** crie um `.md` em `src/content/posts/`
- **Jogo:** crie um `.md` (e capa) em `src/content/games/`

Troque dados do estúdio em [`src/data/site.ts`](src/data/site.ts).

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

O site usa o domínio customizado [saruearcano.com.br](https://saruearcano.com.br):

- `site` / `base` em [`astro.config.mjs`](astro.config.mjs)
- arquivo [`CNAME`](CNAME) na raiz (domínio para o GitHub Pages)
- Deploy automático em [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

No GitHub: **Settings → Pages → Source: GitHub Actions** e domínio customizado `saruearcano.com.br`.

Após o push em `main`, o site fica em:
https://saruearcano.com.br/
