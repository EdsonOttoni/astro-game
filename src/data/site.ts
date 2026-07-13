export const site = {
  name: "Saruê Arcano",
  tagline: "Magias proibidas, café quente e jogos feitos com a alma.",
  description:
    "O grimório do Saruê Arcano. Acompanhe o desenvolvimento de jogos indie, leia os diários de criação e encontre refúgio nas entrelinhas de nossos mundos.",
  url: "https://edsonottoni.github.io/astro-game",
  social: {
    twitter: "https://twitter.com/",
    discord: "https://discord.gg/",
    youtube: "https://youtube.com/",
  },
  email: "contato@saruearcano.com",
} as const;

export const categories = {
  news: "Notícias",
  patch: "Patch notes",
  announcement: "Divulgação",
} as const;

export type Category = keyof typeof categories;
