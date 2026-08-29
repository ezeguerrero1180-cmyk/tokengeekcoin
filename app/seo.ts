export const SITE_URL = "https://www.tokengeekcoin.com";
export const SITE_NAME = "TokenGeekCoin";
export const AUTHOR_NAME = "Ezequiel Guerrero";
export const AUTHOR_PATH = "/autor/ezequiel-guerrero";
export const AUTHOR_URL = SITE_URL + AUTHOR_PATH;

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return new URL(path, SITE_URL).toString();
}

export type ArticleSeoData = {
  path: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  section: string;
  datePublished: string;
};

export const articles: ArticleSeoData[] = [
  {
    path: "/gaming/bombazos-gamescom-2026",
    title: "Gamescom 2026: bombazos, remakes y todo lo anunciado",
    description: "The Witcher 3 Remastered, Final Fantasy VII Revelation, Gears of War: E-Day, Metro 2039, Ananta, EXODUS y más anuncios de Opening Night Live.",
    image: "/articles/gamescom-2026/witcher-3.webp",
    imageAlt: "Geralt de Rivia en The Witcher 3, uno de los protagonistas de Gamescom 2026",
    section: "Gaming",
    datePublished: "2026-08-26T07:00:00-03:00",
  },
  {
    path: "/gaming/mejores-juegos-septiembre-2026",
    title: "Los mejores juegos de septiembre 2026 para todas las consolas",
    description: "Onimusha, Marvel's Wolverine, Hot Wheels Infinite Rush y Minecraft Dungeons II: fechas, plataformas y guía de compra.",
    image: "https://www.capcom.co.jp/ir/news/html/images/260603a.png",
    imageAlt: "Miyamoto Musashi en Onimusha: Way of the Sword",
    section: "Gaming",
    datePublished: "2026-08-25T12:00:00-03:00",
  },
  {
    path: "/comics/lanterns-capitulo-2-sinestro-antaan",
    title: "Lanterns capítulo 2: Sinestro enciende la serie",
    description: "Análisis con spoilers del segundo episodio de Lanterns: Sinestro, Antaan, Atrocitus, los Manhunters y el veredicto de TokenGeekCoin.",
    image: "/articles/lanterns-episode-2/hal-john.webp",
    imageAlt: "John Stewart y Hal Jordan en el capítulo 2 de Lanterns",
    section: "Cómics y series",
    datePublished: "2026-08-25T11:00:00-03:00",
  },
  {
    path: "/finanzas/guia-geek-inversionista-portafolio-crypto",
    title: "La guía definitiva del Geek Inversionista",
    description: "Cómo ordenar tu presupuesto, crear un fondo de emergencia y comenzar un portafolio cripto sin abandonar tus hobbies.",
    image: "/articles/geek-investor-guide/geek-investor-hero.webp",
    imageAlt: "Inversionista geek organizando su presupuesto y portafolio cripto",
    section: "Finanzas y cripto",
    datePublished: "2026-08-25T10:00:00-03:00",
  },
  {
    path: "/comics/anime-futuro-tecnologia-portafolio",
    title: "De la pantalla al portafolio: anime y futuro tecnológico",
    description: "IA con personalidad, interfaces cerebro-computadora y robots humanoides: dos futuros de anime enfrentados con la tecnología de 2026.",
    image: "/articles/anime-tech-future/anime-future-hero.webp",
    imageAlt: "Ilustración anime sobre inteligencia artificial y robótica",
    section: "Tecnología e IA",
    datePublished: "2026-08-25T09:00:00-03:00",
  },
  {
    path: "/finanzas/bitcoin-bessent-reserva-federal",
    title: "Bitcoin, Scott Bessent y la Reserva Federal: qué pasó realmente",
    description: "Qué cambió con las recompras de deuda del Tesoro, por qué Bitcoin reaccionó y por qué la medida no es QE de la Reserva Federal.",
    image: "/articles/bitcoin-bessent-fed/bitcoin.webp",
    imageAlt: "Bitcoin frente a gráficos financieros",
    section: "Finanzas y cripto",
    datePublished: "2026-08-21T12:00:00-03:00",
  },
  {
    path: "/gaming/lanzamientos-playstation-agosto-2026",
    title: "Lanzamientos de PlayStation de agosto 2026",
    description: "Madden NFL 27, Marvel Tōkon y Star Wars Zero Company analizados por precio, contenido y horas de diversión.",
    image: "/articles/playstation-august-2026/marvel-tokon.webp",
    imageAlt: "Arte oficial de MARVEL Tōkon Fighting Souls",
    section: "Gaming",
    datePublished: "2026-08-21T12:00:00-03:00",
  },
  {
    path: "/comics/lanterns-primer-episodio-ritmo-lento",
    title: "Por qué el primer episodio de Lanterns se siente tan lento",
    description: "Análisis del estreno de Lanterns: ritmo, uso del anillo, potencial del Green Lantern Corps y veredicto de TokenGeekCoin.",
    image: "/articles/lanterns-season-1/lanterns-investigation.jpg",
    imageAlt: "John Stewart y Hal Jordan investigan en Lanterns",
    section: "Cómics y series",
    datePublished: "2026-08-21T12:00:00-03:00",
  },
];

export function articleByPath(path: string) {
  const article = articles.find((item) => item.path === path);
  if (!article) throw new Error("Missing SEO article data for " + path);
  return article;
}
