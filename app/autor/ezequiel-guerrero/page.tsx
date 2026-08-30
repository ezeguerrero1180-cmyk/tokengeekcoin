import type { Metadata } from "next";
import { Footer, Header } from "../../ui";
import { articles } from "../../site-data";

export const metadata: Metadata = {
  title: "Ezequiel Guerrero — Autor",
  description: "Ezequiel Guerrero, autor y creador de TokenGeekCoin desde Jujuy, Argentina.",
  alternates: { canonical: "/autor/ezequiel-guerrero" },
};

export default function Autor() {
  return <>
    <Header />
    <main className="author-v1">
      <section className="author-v1-hero">
        <div className="author-v1-marker" aria-hidden="true">E.</div>
        <div className="author-v1-hero-copy">
          <p className="kicker">// DETRÁS DE TOKENGEEKCOIN</p>
          <h1>Ezequiel<br /><i>Guerrero.</i></h1>
          <p className="author-v1-lead">Abogado de profesión, geek por elección y creador de un lugar donde una consola, una cripto y una IA pueden compartir la misma conversación sin ponerse traje de oficina.</p>
        </div>
        <div className="author-v1-stamp"><span>JUJUY · ARGENTINA</span><strong>EG</strong><span>DESDE EL NORTE</span></div>
      </section>

      <section className="author-v1-intro">
        <div><p className="kicker">// LA IDEA</p><h2>Menos humo.<br /><i>Más criterio.</i></h2></div>
        <div className="author-v1-prose">
          <p>TokenGeekCoin nació porque me gusta entender las cosas antes de repetirlas. Acá escribo sobre inteligencia artificial, inversiones, blockchain, gaming y cultura popular con una mirada cercana: qué pasó, qué significa y por qué merece —o no— tu tiempo.</p>
          <p>No me interesa vender FOMO. Prefiero explicar lo complejo con lenguaje claro, separar los hechos de las promesas y compartir esa mezcla de curiosidad, criterio y entusiasmo que nos vuelve geeks.</p>
        </div>
      </section>

      <section className="author-v1-fields">
        <article><span>01</span><p className="kicker">INTELIGENCIA ARTIFICIAL</p><h3>La tecnología cambia rápido; entender sus límites importa todavía más.</h3></article>
        <article><span>02</span><p className="kicker">FINANZAS Y BLOCKCHAIN</p><h3>Datos, riesgos y contexto antes de tomar cualquier decisión.</h3></article>
        <article><span>03</span><p className="kicker">GAMING Y CULTURA GEEK</p><h3>Noticias con entusiasmo, pero sin convertir cada tráiler en una profecía.</h3></article>
      </section>

      <section className="author-v1-connect">
        <div><p className="kicker">// CONECTEMOS</p><h2>Seguime por<br /><i>acá.</i></h2></div>
        <div className="author-v1-socials">
          <a href="https://www.facebook.com/fernandoezequiel.guerrero" target="_blank" rel="me noopener noreferrer"><span>01</span><strong>Facebook</strong><b>↗</b></a>
          <a href="https://www.linkedin.com/in/eze-guerrero-06585142b/" target="_blank" rel="me noopener noreferrer"><span>02</span><strong>LinkedIn</strong><b>↗</b></a>
          <a href="https://www.youtube.com/@eztec3/videos" target="_blank" rel="me noopener noreferrer"><span>03</span><strong>YouTube</strong><b>↗</b></a>
        </div>
      </section>

      <section className="author-v1-latest">
        <p className="kicker">// ÚLTIMAS PUBLICACIONES</p>
        <div>{articles.slice(0, 5).map((article, index) => <a key={article.slug} href={`/${article.slug}`}><span>{String(index + 1).padStart(2, "0")}</span><strong>{article.title}</strong><b>LEER ↗</b></a>)}</div>
      </section>
    </main>
    <Footer />
  </>;
}
