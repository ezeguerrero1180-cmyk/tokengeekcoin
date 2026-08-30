import type { Metadata } from "next";
import Comments from "../../components/Comments";
import NexoPromo from "../../components/NexoPromo";
import ArticleSeo from "../../components/ArticleSeo";
import { articleByPath } from "../../seo";

const articleUrl = "/gaming/lanzamientos-playstation-agosto-2026";
const seoArticle = articleByPath(articleUrl);

const games = [
  {
    number: "01",
    title: "EA SPORTS Madden NFL 27",
    label: "EL REGRESO DE UN TITÁN",
    release: "13 AGO 2026",
    price: "USD 69,99",
    hours: "Potencialmente infinitas",
    verdict: "ALTA PRIORIDAD",
    image: "/articles/playstation-august-2026/madden-nfl-27.webp",
    alt: "Portada oficial de EA SPORTS Madden NFL 27",
    copy: "La nueva temporada llegó con el Persona Engine, un modo Franquicia más reactivo y mejoras en los duelos entre receptores y defensores. Es el candidato ideal para dominar las partidas del mes y seguir jugando durante toda la temporada real.",
    analysis: "Si sos fanático del fútbol americano, la comunidad, el competitivo online y las ligas justifican la compra del día uno. Cuantas más temporadas juegues, menor será el costo por hora.",
    source: "https://www.ea.com/games/madden-nfl/madden-nfl-27/faq",
    accent: "game-madden",
  },
  {
    number: "02",
    title: "MARVEL Tōkon: Fighting Souls",
    label: "EL FENÓMENO DE PELEAS",
    release: "06 AGO 2026",
    price: "USD 69,99",
    hours: "20 h de campaña + multijugador",
    verdict: "COMPRA INTELIGENTE",
    image: "/articles/playstation-august-2026/marvel-tokon.webp",
    alt: "Arte oficial de MARVEL Tōkon Fighting Souls",
    copy: "La colaboración entre Arc System Works, PlayStation Studios y Marvel Games reúne equipos de cuatro luchadores en combates explosivos. Su estilo anime y sus relevos constantes hacen que cada partida parezca una viñeta en movimiento.",
    analysis: "Es la mezcla perfecta entre gaming y cómics. Si tenés amigos para formar un equipo o querés competir online, la enorme rejugabilidad diluye rápidamente el precio inicial.",
    source: "https://www.playstation.com/en-us/games/marvel-tokon-fighting-souls/",
    accent: "game-tokon",
  },
  {
    number: "03",
    title: "STAR WARS Zero Company",
    label: "LA PROPUESTA TÁCTICA",
    release: "27 AGO 2026",
    price: "USD 59,99",
    hours: "30–40 h estimadas",
    verdict: "VALOR EXCEPCIONAL",
    image: "/articles/playstation-august-2026/star-wars-zero-company.jpg",
    alt: "Arte oficial de STAR WARS Zero Company",
    copy: "Este juego táctico por turnos nos pone al mando de un escuadrón durante las Guerras Clon. Coberturas, habilidades, decisiones permanentes y una base de operaciones prometen una experiencia para quienes prefieren pensar antes que disparar.",
    analysis: "Su precio de salida es menor al de otros estrenos importantes del mes y ofrece una campaña extensa. Para fanáticos de XCOM, Marvel's Midnight Suns y Star Wars, es la relación costo-diversión más atractiva de la lista.",
    source: "https://www.starwars.com/games-apps/star-wars-zero-company",
    accent: "game-starwars",
  },
];

export const metadata: Metadata = {
  title: "Lanzamientos de PlayStation de agosto 2026",
  description: "Madden NFL 27, Marvel Tōkon y Star Wars Zero Company bajo la métrica costo versus horas de diversión.",
  alternates: { canonical: articleUrl },
  openGraph: {
    title: "Los lanzamientos de PlayStation de agosto: ¿vale la pena romper la alcancía?",
    description: "Tres estrenos de PS5 analizados con la mirada gaming y financiera de TokenGeekCoin.",
    type: "article",
    url: articleUrl,
    images: [{ url: "/articles/playstation-august-2026/marvel-tokon.webp", alt: "MARVEL Tōkon Fighting Souls" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lanzamientos de PlayStation de agosto | TokenGeekCoin",
    description: "Madden NFL 27, Marvel Tōkon y Star Wars Zero Company: precio, horas y veredicto.",
    images: ["/articles/playstation-august-2026/marvel-tokon.webp"],
  },
};

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function PlayStationAugustReleases() {
  return (
    <main className="article-page playstation-article">
      <ArticleSeo article={seoArticle} />
      <header className="site-header article-header">
        <a className="brand" href="/" aria-label="TokenGeekCoin, inicio"><span className="brand-mark">T.</span><span>TOKENGEEKCOIN.COM</span></a>
        <nav aria-label="Navegación principal"><a href="/#explorar">Explorar</a><a href="/#bitacora">Bitácora</a><a href="/autor/ezequiel-guerrero">Sobre mí</a></nav>
        <a className="header-cta" href="/">Volver <span aria-hidden="true">←</span></a>
      </header>

      <article>
        <header className="article-hero">
          <div className="article-hero-copy">
            <div className="article-meta"><span>GAMING</span><time dateTime="2026-08-21">21 AGO 2026</time><span>7 MIN DE LECTURA</span></div>
            <h1>Los lanzamientos de PlayStation para este mes: <em>¿vale la pena romper la alcancía?</em></h1>
            <p>Analizamos Madden NFL 27, Marvel Tōkon y Star Wars Zero Company bajo una métrica que combina dos de nuestras obsesiones: precio y horas de diversión.</p>
            <div className="article-author"><span className="author-avatar">EG</span><div><b><a href="/autor/ezequiel-guerrero">POR EZEQUIEL GUERRERO</a></b><small>Gaming + finanzas personales</small></div></div>
          </div>
          <div className="article-hero-art" aria-hidden="true"><span>PLAY</span><span>INVEST</span><strong>08/26</strong></div>
        </header>

        <div className="article-intro">
          <p className="dropcap">El calendario de lanzamientos de PlayStation no da tregua. Si todavía estás intentando terminar los juegos del mes pasado o tu billetera sigue recuperándose de las ofertas de la PS Store, tenemos malas noticias —o excelentes, según cómo se mire—: agosto llegó cargado de títulos capaces de reclamar tu atención y tu presupuesto.</p>
          <aside><span>LA MÉTRICA</span><strong>COSTO ÷ HORAS DE DIVERSIÓN</strong><p>Cuanto más jugás, menos te cuesta cada hora de entretenimiento.</p></aside>
          <p>En TokenGeekCoin no nos limitamos a contar qué juegos salen. Revisamos sus precios, su potencial de rejugabilidad y el momento ideal para comprar. Así podés decidir si vale la pena pagar el precio de lanzamiento o esperar una oferta.</p>
        </div>

        <section className="games-list" aria-label="Lanzamientos analizados">
          {games.map((game) => (
            <article className={`game-feature ${game.accent}`} key={game.title}>
              <div className="game-media"><img src={game.image} alt={game.alt} loading="lazy" /><span>{game.number}</span></div>
              <div className="game-content">
                <p className="kicker">// {game.label}</p>
                <h2>{game.title}</h2>
                <div className="game-facts"><span><small>LANZAMIENTO</small>{game.release}</span><span><small>PRECIO DE REFERENCIA</small>{game.price}</span><span><small>TIEMPO ESTIMADO</small>{game.hours}</span></div>
                <p>{game.copy}</p>
                <div className="verdict"><span>VEREDICTO TOKEN</span><strong>{game.verdict}</strong><p>{game.analysis}</p></div>
                <a href={game.source} target="_blank" rel="noreferrer">FUENTE OFICIAL <Arrow /></a>
              </div>
            </article>
          ))}
        </section>

        <section className="wallet-advice">
          <div><p className="kicker">// EL CONSEJO TOKEN</p><h2>Antes de comprar,<br /><i>hacé las cuentas.</i></h2></div>
          <ol>
            <li><span>01</span><div><h3>¿Lo vas a jugar hoy?</h3><p>Si tenés una lista de juegos pendientes, esperá. Cuando los termines, es probable que el nuevo título ya tenga descuento.</p></div></li>
            <li><span>02</span><div><h3>¿Afecta tus objetivos?</h3><p>No abandones tu ahorro o inversión mensual por un juego que podés disfrutar de la misma forma dentro de unas semanas.</p></div></li>
            <li><span>03</span><div><h3>¿Vas a financiarlo?</h3><p>Si la compra genera intereses o una deuda difícil de pagar, el verdadero costo será mucho mayor que el precio mostrado en la tienda.</p></div></li>
          </ol>
        </section>

        <NexoPromo placement="article" />
        <Comments
          articleSlug="lanzamientos-playstation-agosto-2026"
          prompt="Contanos qué juego elegirías, cuál esperarías comprar en oferta o qué lanzamiento deberíamos analizar después."
        />

        <footer className="article-sources">
          <p>Información de lanzamiento verificada el 21 de agosto de 2026. Los precios corresponden a referencias en dólares de tiendas de Estados Unidos y pueden variar según región, edición e impuestos.</p>
          <a href="/">← VOLVER A TOKENGEEKCOIN.COM</a>
        </footer>
      </article>
    </main>
  );
}
