export interface Game {
  id: number | string;
  title: string;
  cover: string;
  desc: string;
  url?: string;
}

export interface Category {
  id: string;
  label: string;
  color: string;
  games: Game[];
}

export const gmCategories: Category[] = [
  {
    id: "gm",
    label: "gm",
    color: "bg-stone-700",
    games: [
      {
        id: "dnd",
        title: "Dungeons & Dragons",
        cover: "/covers/dnd.png",
        desc: "El juego de rol mas famoso.",
        url: "https://stopdroproll.itch.io/why-we-fight",
      },
      {
        id: "nimble",
        title: "Nimble",
        cover: "/covers/nimble.png",
        desc: "Un juego de rol de aventura y acción. Como DnD pero menos reglas.",
        url: "https://nimblerpg.com/",
      },
      {
        id: "mosh",
        title: "Mothership",
        cover: "/covers/mosh.png",
        desc: "Un juego de rol de ciencia ficción y horror.",
        url: "https://www.tuesdayknightgames.com/collections/mothership-core-rules/products/mothership-players-survival-guide",
      },
      {
        id: "ce",
        title: "Cloud Empress",
        cover: "/covers/ce.png",
        desc: "",
        url: "https://cloudempress.com/",
      },

      {
        id: "dialect",
        title: "Dialect",
        cover: "/covers/dialect.png",
        desc: "Un juego sobre una communidad aislada, su idioma, y lo que significa cuando esa idioma se pierda.",
        url: "https://thornygames.com/pages/dialect",
      },
      {
        id: "sign",
        title: "Sign",
        cover: "/covers/sign.png",
        desc: "Un juego de rol jugado en silencio porque estás creando una idioma de signos.",
        url: "https://thornygames.com/pages/sign",
      },
      {
        id: "riverbank",
        title: "Riverbank",
        cover: "/covers/riverbank.png",
        desc: "Un juego de rol acogedor en que juegas como un animale.",
        url: "https://riverbankrpg.com/",
      },
      {
        id: "cairn",
        title: "Cairn",
        cover: "/covers/cairn.png",
        desc: "Un juego de rol de fantasía en un bosque.",
        url: "https://cairnrpg.com/",
      },
      {
        id: "troika",
        title: "Troika",
        cover: "/covers/troika.png",
        desc: "Un juego de rol de ciencia fantasía en un multiverso.",
        url: "https://www.troikarpg.com/",
      },
      {
        id: "hoc",
        title: "Heroes of Cerulea",
        cover: "/covers/hoc.png",
        desc: "Un juego de rol como videojuegos retros.",
        url: "https://blackfiskpub.itch.io/heroes-of-cerulea",
      },
    ],
  },
];
