import type { Metadata } from "next";
import Comments from "../../components/Comments";
import NexoPromo from "../../components/NexoPromo";
import ArticleSeo from "../../components/ArticleSeo";
import { articleByPath } from "../../seo";

const articleUrl = "/comics/lanterns-primer-episodio-ritmo-lento";
const heroImage = "/articles/lanterns-season-1/lanterns-investigation.jpg";
const seoArticle = articleByPath(articleUrl);

export const metadata: Metadata = {
  title: "Por qué Lanterns se siente tan lenta",
  description: "Análisis del primer episodio de Lanterns: su ritmo, el uso del anillo, el potencial del Green Lantern Corps y el veredicto de TokenGeekCoin.",
  alternates: { canonical: articleUrl },
  openGraph: {
    title: "Por qué Lanterns se siente tan lenta",
    description: "El debut de HBO tiene misterio y potencial, pero todavía guarda demasiado poder en el anillo.",
    type: "article",
    url: articleUrl,
    images: [{ url: heroImage, width: 1600, height: 900, alt: "John Stewart y Hal Jordan en Lanterns" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Por qué Lanterns se siente tan lenta",
    description: "Analizamos el primer episodio y las historias que el universo Green Lantern todavía puede aprovechar.",
    images: [heroImage],
  },
};

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function LanternsReview() {
  return (
    <main className="article-page lanterns-page">
      <ArticleSeo article={seoArticle} />
      <header className="site-header article-header">
        <a className="brand" href="/" aria-label="TokenGeekCoin, inicio"><span className="brand-mark">T.</span><span>TOKENGEEKCOIN.COM</span></a>
        <nav aria-label="Navegación principal"><a href="/#explorar">Explorar</a><a href="/#bitacora">Bitácora</a><a href="/autor/ezequiel-guerrero">Sobre mí</a></nav>
        <a className="header-cta" href="/">Volver <span aria-hidden="true">←</span></a>
      </header>

      <article>
        <header className="lanterns-hero">
          <img src={heroImage} alt="John Stewart y Hal Jordan observan el horizonte en Lanterns" width="1600" height="900" fetchPriority="high" />
          <div className="lanterns-hero-overlay" />
          <div className="lanterns-hero-copy">
            <div className="article-meta"><span>CÓMICS + SERIES</span><time dateTime="2026-08-21">21 AGO 2026</time><span>6 MIN DE LECTURA</span></div>
            <p className="lanterns-overline">HBO · TEMPORADA 1 · EPISODIO 1</p>
            <h1>Por qué <em>Lanterns</em> se siente tan lenta</h1>
            <p className="lanterns-deck">El debut tiene misterio y un universo enorme detrás, pero todavía guarda demasiado poder en el anillo.</p>
            <div className="article-author"><span className="author-avatar">EG</span><div><b><a href="/autor/ezequiel-guerrero">POR EZEQUIEL GUERRERO</a></b><small>Opinión · Sin spoilers importantes</small></div></div>
          </div>
          <span className="lanterns-ring" aria-hidden="true" />
        </header>

        <section className="lanterns-lead">
          <div>
            <p className="kicker">// LA PRIMERA IMPRESIÓN</p>
            <p className="dropcap">El universo de Green Lantern tiene todo para ser la respuesta de DC a las grandes óperas espaciales: planetas alienígenas, guerras entre espectros emocionales y un anillo capaz de materializar cualquier idea que sostenga la voluntad de su portador.</p>
            <p>Después del primer episodio de <i>Lanterns</i>, sin embargo, me quedó un sabor agridulce. El estreno avanza con demasiada calma, el carisma de los protagonistas todavía está contenido y el verdadero poder visual del anillo apenas asoma.</p>
          </div>
          <aside>
            <span>VEREDICTO INICIAL</span>
            <strong>8<small>/10</small></strong>
            <p>Una buena base con muchísimo margen para acelerar y volverse cósmica.</p>
          </aside>
        </section>

        <section className="lanterns-chapter">
          <figure>
            <img src="/articles/lanterns-season-1/lanterns-john-hal.jpg" alt="Kyle Chandler interpreta a Hal Jordan en Lanterns" width="1600" height="900" loading="lazy" />
            <figcaption>Hal Jordan en Rushville · Imagen oficial de HBO/DC</figcaption>
          </figure>
          <div className="lanterns-copy">
            <p className="kicker">01 · EL PODER BAJO MÍNIMOS</p>
            <h2>Un anillo de poder para hacer <i>constructos aburridos.</i></h2>
            <p>El mayor atractivo visual de un Linterna Verde es la creatividad de sus constructos. En los cómics, Kyle Rayner o John Stewart pueden crear desde mecas complejos hasta murallas tácticas diseñadas según su experiencia y personalidad.</p>
            <p>En este primer capítulo, el uso del anillo se siente limitado. Escudos, esferas y rayos verdes cumplen su función, pero no transmiten todavía la imaginación infinita que debería convertir cada combate en una sorpresa.</p>
            <blockquote>El anillo más poderoso del cosmos todavía parece una linterna glorificada.</blockquote>
          </div>
        </section>

        <section className="lanterns-chapter lanterns-chapter-reverse">
          <figure>
            <img src="/articles/lanterns-season-1/lanterns-rushville.jpg" alt="Kelly Macdonald como la sheriff Kerry en Lanterns" width="1600" height="900" loading="lazy" />
            <figcaption>La investigación terrestre marca el tono · Imagen oficial de HBO/DC</figcaption>
          </figure>
          <div className="lanterns-copy">
            <p className="kicker">02 · EL RITMO DE LA INVESTIGACIÓN</p>
            <h2>La Tierra no es el problema. <i>La espera sí.</i></h2>
            <p>La serie elige el policial y el misterio rural antes que la ópera espacial. Esa decisión puede funcionar: John Stewart y Hal Jordan investigan un asesinato en el corazón de Estados Unidos, una premisa oficial que busca combinar el universo DC con un drama detectivesco.</p>
            <p>El problema aparece cuando las subtramas cotidianas tardan demasiado en revelar qué aportan. Por ahora, pasamos más tiempo esperando la chispa entre los protagonistas que explorando los peligros del Sector 2814.</p>
            <a href="https://www.hbo.com/content/lanterns" target="_blank" rel="noreferrer">VER FICHA OFICIAL EN HBO <Arrow /></a>
          </div>
        </section>

        <section className="lanterns-lore">
          <div className="lanterns-lore-heading">
            <p className="kicker">// EL LORE QUE QUEREMOS VER</p>
            <h2>Dos caminos para<br /><i>encender la serie.</i></h2>
            <p>DC tiene décadas de historias capaces de llevar este misterio terrestre hacia algo mucho más grande.</p>
          </div>
          <div className="lore-grid">
            <article>
              <span>01</span>
              <p className="kicker">GREEN LANTERN CORPS</p>
              <h3>Los Guerreros Esmeralda</h3>
              <p>Oa, el entrenamiento del Cuerpo y veteranos como Kilowog podrían ampliar la escala sin abandonar el conflicto entre John y Hal. La fuerza policial intergaláctica merece convertirse en un personaje más.</p>
            </article>
            <article>
              <span>02</span>
              <p className="kicker">THE BLACKEST NIGHT</p>
              <h3>La Noche Más Oscura</h3>
              <p>Héroes y villanos resucitados como Black Lanterns, alianzas entre espectros emocionales y una amenaza que alcance a todo DC: material de alto impacto para una futura temporada.</p>
            </article>
          </div>
        </section>

        <section className="lanterns-verdict">
          <div className="lanterns-verdict-image">
            <img src="/articles/lanterns-season-1/lanterns-cast.jpg" alt="John Stewart camina entre humo y escombros con una linterna verde" width="1600" height="900" loading="lazy" />
          </div>
          <div>
            <p className="kicker">// VEREDICTO TOKENGEEKCOIN</p>
            <span className="score">8<small>/10</small></span>
            <h2>El anillo todavía tiene <i>carga.</i></h2>
            <p>Es apenas el comienzo. Aunque el ritmo y el despliegue visual no alcanzaron todo lo que esperaba, la producción, el misterio y el potencial del universo siguen ahí. Mi voto es de confianza: quiero ver cómo crece la dupla y cuándo la historia decide mirar hacia las estrellas.</p>
            <div className="lanterns-schedule"><b>NUEVOS EPISODIOS</b><span>DOMINGOS · 22:00 ARG · HBO Y HBO MAX</span></div>
          </div>
        </section>

        <NexoPromo placement="article" />
        <Comments
          articleSlug="lanterns-primer-episodio-ritmo-lento"
          prompt="¿Qué te pareció el primer episodio? ¿La dupla tiene futuro o el anillo comenzó con poca batería?"
          placeholder="Dejá tu veredicto sobre Lanterns…"
        />

        <footer className="article-sources lanterns-sources">
          <p>Opinión basada en el primer episodio. La premisa, el reparto y el horario fueron verificados en los sitios oficiales de HBO y DC el 21 de agosto de 2026. Imágenes oficiales © HBO/DC.</p>
          <div><a href="https://www.hbo.com/content/lanterns" target="_blank" rel="noreferrer">HBO <Arrow /></a><a href="https://www.dc.com/tv/lanterns-2026" target="_blank" rel="noreferrer">DC <Arrow /></a><a href="/">← INICIO</a></div>
        </footer>
      </article>
    </main>
  );
}
