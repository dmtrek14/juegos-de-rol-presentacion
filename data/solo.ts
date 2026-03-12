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

export const soloCategories: Category[] = [
  {
    id: "fate",
    label: "Reglas solas que usas con juegos de rol de grupos",
    color: "bg-stone-700",
    games: [
      {
        id: "satt",
        title: "The Solo Adventurer's Toolbox",
        cover: "covers/satt.png",
        desc: "",
        url: "https://www.dmsguild.com/en/product/252355/the-solo-adventurer-s-toolbox",
      },
      {
        id: "mythic",
        title: "Mythic Game Master Emulator",
        cover: "covers/mythic.png",
        desc: "",
        url: "https://wordmillgames.itch.io/mythic-game-master-emulator-second-edition",
      },
      {
        id: "bd",
        title: "Barrow Delver",
        cover: "covers/bd.png",
        desc: "Reglas solas para usar con Cairn",
        url: "https://manadawnttg.itch.io/barrow-delver",
      },
      {
        id: "tel",
        title: "Thousand Empty Light",
        cover: "covers/tel.png",
        desc: "Reglas solas para usar con Mothership",
        url: "https://alfredvalley.itch.io/thousand-empty-light",
      },
    ],
  },
  {
    id: "journal",
    label: "Escribir (principalmente)",
    color: "bg-zinc-700",
    games: [
      {
        id: "tyov",
        title: "Thousand Year Old Vampire",
        cover: "covers/tyov.jpg",
        desc: "Eres un vampiro que ha vivido por mil años y en este juego excribir sobre tu vida y tus experiencias.",
        url: "https://thousandyearoldvampire.com/collections/basic-book-selection/products/thousand-year-old-vampire",
      },
      {
        id: "spine",
        title: "Spine",
        cover: "covers/spine.png",
        desc: "Eres una investigadora que ha heredado un libro extraño con pasajes sobre immortalidad. Te estas volviendo obsesionada con el libro y el solo via escapar es hacer pintandas en el libro.",
        url: "https://backwards-tabletop.itch.io/spine",
      },
      {
        id: "koriko",
        title: "Koriko: A Magical Year",
        cover: "covers/koriko.png",
        desc: "",
        url: "https://mouseholepress.itch.io/koriko",
      },
      {
        id: "beloved",
        title: "Beloved",
        cover: "covers/beloved.png",
        desc: "",
        url: "https://urania-games.itch.io/beloved",
      },
      {
        id: "citg",
        title: "Carved in the Garden",
        cover: "covers/citg.png",
        desc: "",
        url: "https://cassi-mothwin.itch.io/carved-by-the-garden",
      },
      {
        id: "anam",
        title: "Anamnesis",
        cover: "covers/anam.png",
        desc: "",
        url: "https://blinkingbirchgames.itch.io/anamnesis",
      },
    ],
  },
  {
    id: "dibujar",
    label: "Dibujar (principalmente)",
    color: "bg-gray-700",
    games: [
      {
        id: "ezb",
        title: "Exclusion Zone Botanist",
        cover: "covers/ezb.png",
        desc: "Eres un botánico asignado a explorar y documentar la flora de la Zona Exclusión",
        url: "https://exeuntpress.itch.io/exclusion-zone-botanist",
      },
      {
        id: "delve",
        title: "Delve",
        cover: "covers/delve.png",
        desc: "Eres un explorador que dibuja mapas y encuentra tesoros en una cueva oscura",
        url: "https://blackwellwriter.itch.io/delve-a-solo-map-drawing-game",
      },
    ],
  },
  {
    id: "otros",
    label: "Otros",
    color: "bg-slate-800",
    games: [
      {
        id: "novel-dungeon",
        title: "A Novel Dungeon",
        cover: "covers/novel-dungeon.png",
        desc: "",
        url: "https://serialprizes.itch.io/novel-dungeon",
      },
      {
        id: "j1t",
        title: "Just One Sword",
        cover: "covers/j1t.png",
        desc: "",
        url: "https://onetorch.itch.io/just-one-sword",
      },

      {
        id: "1680",
        title: "Void 1680 AM",
        cover: "covers/1680.png",
        desc: "",
        url: "https://bannerlessgames.itch.io/void-1680-am",
      },
    ],
  },
];
