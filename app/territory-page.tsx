import { articles } from "./site-data";
import { AdSlot, Footer, Header, StoryCard } from "./ui";

export type Territory = {
  category: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  path: string;
};

export const territories: Territory[] = [
  {
    category: "TECNOLOGÍA + IA",
    eyebrow: "TECNOLOGÍA E INTELIGENCIA ARTIFICIAL",
    title: "Tecnología",
    accent: "e IA.",
    description: "Herramientas, inteligencia artificial, dispositivos y cambios que ya están transformando nuestro mundo.",
    path: "/tecnologia",
  },
  {
    category: "GAMING",
    eyebrow: "VIDEOJUEGOS",
    title: "Universo",
    accent: "Gaming.",
    description: "Anuncios, lanzamientos, análisis y decisiones de compra con entusiasmo, opinión y la billetera bajo control.",
    path: "/gaming",
  },
  {
    category: "FINANZAS + CRIPTO",
    eyebrow: "MERCADOS Y ACTIVOS DIGITALES",
    title: "Finanzas",
    accent: "y Cripto.",
    description: "Bitcoin, mercados, hábitos e inversiones explicados con claridad, sin promesas mágicas ni FOMO.",
    path: "/finanzas",
  },
  {
    category: "CÓMICS + SERIES",
    eyebrow: "CULTURA GEEK",
    title: "Cómics",
    accent: "y Series.",
    description: "Personajes, episodios, historias y universos que merecen una conversación después de los créditos.",
    path: "/comics",
  },
];

export default function TerritoryPage({ territory }: { territory: Territory }) {
  const stories = articles.filter((article) => article.category === territory.category);

  return <>
    <Header />
    <main className="page territory-page">
      <header className="page-intro territory-intro">
        <p className="eyebrow">{territory.eyebrow}</p>
        <h1>{territory.title} <em>{territory.accent}</em></h1>
        <p>{territory.description}</p>
        <p className="territory-count">{stories.length} {stories.length === 1 ? "NOTICIA PUBLICADA" : "NOTICIAS PUBLICADAS"}</p>
      </header>
      <nav className="territory-nav" aria-label="Secciones de noticias">
        {territories.map((item) => <a key={item.path} href={item.path} aria-current={item.path === territory.path ? "page" : undefined}>{item.category}</a>)}
      </nav>
      <section aria-label={`Noticias de ${territory.category}`}>
        <div className="story-grid">{stories.map((article) => <StoryCard key={article.slug} article={article} />)}</div>
      </section>
      <AdSlot format="leaderboard" />
    </main>
    <Footer />
  </>;
}
