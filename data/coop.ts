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

export const coopCategories: Category[] = [
  {
    id: "coop",
    label: "coop",
    color: "bg-stone-700",
    games: [
      {
        id: "wwf",
        title: "Why We Fight",
        cover: "/covers/wwf.png",
        desc: "Juega como grupos de eco-punks luchando contra fascismo.",
        url: "https://stopdroproll.itch.io/why-we-fight",
      },
      {
        id: "gr",
        title: "Going Rogue",
        cover: "/covers/gr.png",
        desc: "Un juego de ciencia ficción donde juegas en la rebelión y luchas contra fascismo.",
        url: "https://jumpgategames.itch.io/going-rogue",
      },
      {
        id: "br",
        title: "Border Riding",
        cover: "/covers/br.png",
        desc: "Un juego para dibujando mapas collaborativas y considera como fronteras crean división entre comunidades.",
        url: "https://stoutstoatpress.itch.io/border-riding",
      },
      {
        id: "wanderhome",
        title: "Wanderhome",
        cover: "/covers/wanderhome.png",
        desc: "Un juego de rol acogedor y pastoral en que juegas como un animal.",
        url: "https://possumcreekgames.com/pages/wanderhome",
      },
      {
        id: "twwlb",
        title: "The World We Left Behind",
        cover: "/covers/twwlb.png",
        desc: "",
        url: "https://blinkingbirchgames.itch.io/the-world-we-left-behind",
      },
      {
        id: "micro",
        title: "Microscope",
        cover: "/covers/micro.png",
        desc: "Creas historias epicas.",
        url: "https://lamemage.itch.io/microscope",
      },
      {
        id: "fom",
        title: "Fall of Magic",
        cover: "/covers/fom.png",
        desc: "Viajas con el Mago agonizante a través de un mundo de fantasía.",
        url: "https://heartofthedeernicorn.com/product/fall-of-magic-revised-edition/?v=0b3b97fa6688",
      },
      {
        id: "zone",
        title: "The Zone",
        cover: "/covers/zone.png",
        desc: "Un juego collaborativo sobre horror surrealista",
        url: "https://thezonerpg.com/",
      },
      {
        id: "bfb",
        title: "Beak, Feather, Bone",
        cover: "/covers/bfb.png",
        desc: "Un juego cooperativo para construcción del mundo y dibujo colaborativo de mapas.",
        url: "https://possible-worlds-games.itch.io/bfb",
      },
      {
        id: "quiet-year",
        title: "The Quiet Year",
        cover: "/covers/quiet-year.png",
        desc: "Vives en una communidad despues de la caída de civilación y tratas construir algo bien.",
        url: "https://buriedwithoutceremony.itch.io/the-quiet-year",
      },
      {
        id: "ffh",
        title: "Far from Home",
        cover: "/covers/ffh.png",
        desc: "Un juego sobre inmigrantes y sus experiencias",
        url: "https://ehronlime.itch.io/far-from-home",
      },
    ],
  },
];
