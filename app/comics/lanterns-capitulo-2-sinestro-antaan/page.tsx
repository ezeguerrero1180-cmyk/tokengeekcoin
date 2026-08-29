import type { Metadata } from "next";
import Comments from "../../components/Comments";
import NexoPromo from "../../components/NexoPromo";
import ArticleSeo from "../../components/ArticleSeo";
import { articleByPath } from "../../seo";

const articleUrl = "/comics/lanterns-capitulo-2-sinestro-antaan";
const heroImage = "/articles/lanterns-episode-2/hal-john.webp";
const seoArticle = articleByPath(articleUrl);

export const metadata: Metadata = {
  title: "Lanterns capítulo 2: Sinestro enciende la serie",
  description: "Análisis con spoilers del segundo episodio de Lanterns: el debut de Sinestro, la conexión entre Antaan y Atrocitus, los Manhunters y el veredicto 9/10.",
  alternates: { canonical: articleUrl },
  openGraph: {
    title: "Lanterns capítulo 2: Sinestro enciende la serie",
    description: "El episodio acelera, expande el lore cósmico y deja una pista enorme sobre Antaan y Atrocitus.",
    type: "article",
    url: articleUrl,
    images: [{ url: heroImage, width: 1500, height: 1001, alt: "John Stewart y Hal Jordan en el capítulo 2 de Lanterns" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lanterns capítulo 2: Sinestro enciende la serie",
    description: "Sinestro, Manhunters y la posible semilla de Atrocitus: el análisis de TokenGeekCoin.",
    images: [heroImage],
  },
};

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function LanternsEpisodeTwoReview() {
  return (
    <main className="article-page lanterns-page lanterns-episode-two">
      <ArticleSeo article={seoArticle} />
      <header className="site-header article-header">
        <a className="brand" href="/" aria-label="TokenGeekCoin, inicio"><span className="brand-mark">T.</span><span>TOKENGEEKCOIN.COM</span></a>
        <nav aria-label="Navegación principal"><a href="/#explorar">Explorar</a><a href="/#bitacora">Bitácora</a><a href="/#sobre-mi">Sobre mí</a></nav>
        <a className="header-cta" href="/">Volver <span aria-hidden="true">←</span></a>
      </header>

      <article>
        <header className="lanterns-hero">
          <img src={heroImage} alt="John Stewart y Hal Jordan miran hacia el cielo en el capítulo 2 de Lanterns" width="1500" height="1001" fetchPriority="high" />
          <div className="lanterns-hero-overlay" />
          <div className="lanterns-hero-copy">
            <div className="article-meta"><span>CÓMICS + SERIES</span><time dateTime="2026-08-25">25 AGO 2026</time><span>7 MIN DE LECTURA</span></div>
            <p className="lanterns-overline">HBO · TEMPORADA 1 · EPISODIO 2 · CON SPOILERS</p>
            <h1><em>Linternas en ascenso:</em> Sinestro enciende la serie</h1>
            <p className="lanterns-deck">El segundo capítulo pisa el acelerador, abre la puerta al lado cósmico del DCU y deja una inquietante conexión entre Antaan y Atrocitus.</p>
            <div className="article-author"><span className="author-avatar">EG</span><div><b><a href="/autor/ezequiel-guerrero">POR EZEQUIEL GUERRERO</a></b><small>Opinión · Spoilers del capítulo 2</small></div></div>
          </div>
          <span className="lanterns-ring" aria-hidden="true" />
        </header>

        <section className="lanterns-lead">
          <div>
            <p className="kicker">// LA SERIE DESPEGÓ</p>
            <p className="dropcap">¡Qué manera de cerrar el domingo por la noche! Si leíste mi análisis del estreno, sabés que el primer episodio me había dejado un sabor agridulce: una trama lenta, demasiados flashbacks y un universo enorme encerrado en la Tierra.</p>
            <p>La buena noticia es que <i>Lanterns</i> corrigió el rumbo. “Trust Fall” hace avanzar la investigación, fortalece la química entre Hal Jordan y John Stewart y suelta dos pistas que cambian la escala de la historia: los Manhunters y la llegada formal de Sinestro.</p>
          </div>
          <aside>
            <span>VEREDICTO TOKENGEEKCOIN</span>
            <strong>9<small>/10</small></strong>
            <p>Más ritmo, más mitología y un final que deja el anillo cargado para lo que viene.</p>
          </aside>
        </section>

        <section className="lanterns-chapter">
          <figure>
            <img src="/articles/lanterns-episode-2/sinestro.webp" alt="Ulrich Thomsen como Sinestro en el segundo episodio de Lanterns" width="2000" height="1333" loading="lazy" />
            <figcaption>Sinestro en su prisión · John Johnson/HBO Max</figcaption>
          </figure>
          <div className="lanterns-copy">
            <p className="kicker">01 · EL GRAN DEBUT</p>
            <h2>Sinestro entra como el <i>Hannibal Lecter</i> del cosmos.</h2>
            <p>La sorpresa indiscutible llega al final: Hal viaja a una prisión espacial y se encuentra cara a cara con Sinestro, interpretado por Ulrich Thomsen. No necesita un anillo amarillo ni una batalla gigantesca para dominar la escena; alcanza con su mirada, su historia con Hal y una pregunta incómoda sobre John Stewart.</p>
            <p>La serie revela que fue un Linterna, intentó un golpe contra los Guardianes y mató a uno de ellos antes de que Hal lo derrotara. Es una reinterpretación, pero conserva lo esencial: su obsesión con el orden, su inteligencia y su capacidad de convertir el miedo ajeno en un arma.</p>
            <blockquote>Sinestro todavía no viste de amarillo, pero ya está jugando con el miedo de Hal.</blockquote>
          </div>
        </section>

        <section className="lanterns-chapter lanterns-chapter-reverse">
          <figure>
            <img src="/articles/lanterns-episode-2/antaan-manhunters.jpg" alt="Antaan en Lanterns junto a una referencia del cómic sobre los Manhunters" width="1280" height="720" loading="lazy" />
            <figcaption>Antaan y la conexión con los Manhunters · HBO Max/DC</figcaption>
          </figure>
          <div className="lanterns-copy">
            <p className="kicker">02 · IRA EN ESTADO LATENTE</p>
            <h2>Antaan no es Atrocitus… <i>todavía.</i></h2>
            <p>El episodio no presenta oficialmente a Atrocitus. Quien secuestra a John es Antaan, interpretado por Paul Ben-Victor: un alienígena cuyo mundo fue destruido desde adentro por un Manhunter y que ahora vive consumido por la venganza.</p>
            <p>La conexión con los cómics es demasiado fuerte para ignorarla. Atrocitus también sobrevivió a una masacre provocada por los Manhunters y convirtió su furia en la energía de los Red Lanterns. Por ahora, Antaan puede ser una adaptación libre, un personaje espejo o la semilla de algo mayor. La serie todavía no confirmó cuál de esas opciones es la correcta.</p>
            <blockquote>La ira ya está en pantalla; el anillo rojo, por ahora, sigue siendo una teoría.</blockquote>
          </div>
        </section>

        <section className="lanterns-lore">
          <div className="lanterns-lore-heading">
            <p className="kicker">// EL LORE SE ABRE</p>
            <h2>Dos pistas que cambian<br /><i>todo el tablero.</i></h2>
            <p>El policial rural sigue presente, pero ahora la investigación está conectada con los errores más antiguos de los Guardianes y con una habilidad inexplicable de John.</p>
          </div>
          <div className="lore-grid">
            <article>
              <span>01</span>
              <p className="kicker">MANHUNTERS</p>
              <h3>La policía anterior a los anillos</h3>
              <p>Antes del Green Lantern Corps, los Guardianes crearon a los Manhunters. Estas máquinas terminaron rebelándose y provocando exterminios en distintos mundos. Ahora uno de ellos podría estar escondido en Rushville, mezclado entre los humanos.</p>
            </article>
            <article>
              <span>02</span>
              <p className="kicker">JOHN STEWART</p>
              <h3>Un constructo sin anillo</h3>
              <p>Durante su lección de vuelo, John crea un ave verde que continúa existiendo después de quitarse el anillo. Hal decide ocultárselo a los Guardianes y Sinestro parece saber que ese poder convierte al novato en una amenaza mucho mayor.</p>
            </article>
          </div>
        </section>

        <section className="lanterns-verdict">
          <div className="lanterns-verdict-image">
            <img src="/articles/lanterns-episode-2/john-stewart.webp" alt="John Stewart durante el segundo episodio de Lanterns" width="1500" height="999" loading="lazy" />
          </div>
          <div>
            <p className="kicker">// MI VEREDICTO GEEKCOINERO</p>
            <span className="score">9<small>/10</small></span>
            <h2>Ahora sí: <i>la serie se pone seria.</i></h2>
            <p>Este capítulo deja atrás buena parte de la pesadez del estreno. La investigación avanza, los constructos tienen más presencia y la dupla empieza a funcionar. Pero el gran triunfo es recordar que detrás del crimen terrestre hay una mitología inmensa esperando salir: Sinestro, los Manhunters, el posible germen de los Red Lanterns y un poder nuevo en John Stewart.</p>
            <div className="lanterns-schedule"><b>NUEVOS EPISODIOS</b><span>DOMINGOS · 22:00 ARG · HBO Y HBO MAX</span></div>
          </div>
        </section>

        <NexoPromo placement="article" />

        <section className="lanterns-related" aria-label="Artículo relacionado">
          <a href="/comics/lanterns-primer-episodio-ritmo-lento">
            <span>ANTES DE ESTE CAPÍTULO</span>
            <strong>Por qué el primer episodio de <i>Lanterns</i> se sentía tan lento</strong>
            <span aria-hidden="true">↗</span>
          </a>
        </section>

        <Comments
          articleSlug="lanterns-capitulo-2-sinestro-antaan"
          prompt="¿Qué sentiste cuando apareció Sinestro? ¿Antaan terminará convirtiéndose en Atrocitus o será solo un paralelismo?"
          placeholder="Dejá tu teoría sobre Sinestro, Antaan y los Manhunters…"
        />

        <footer className="article-sources lanterns-sources">
          <p>Análisis con spoilers del episodio 2, “Trust Fall”. La identidad de Sinestro, la historia de Antaan, los Manhunters y el horario fueron contrastados el 25 de agosto de 2026. Las imágenes pertenecen al episodio y se acreditan a HBO Max/DC.</p>
          <div><a href="https://people.com/lanterns-season-1-episode-2-ending-explained-12066255" target="_blank" rel="noreferrer">PEOPLE <Arrow /></a><a href="https://www.thewrap.com/creative-content/tv-shows/lanterns-antaan-manhunters-explained/" target="_blank" rel="noreferrer">THEWRAP <Arrow /></a><a href="https://www.hbo.com/content/lanterns" target="_blank" rel="noreferrer">HBO <Arrow /></a><a href="/">← INICIO</a></div>
        </footer>
      </article>
    </main>
  );
}

