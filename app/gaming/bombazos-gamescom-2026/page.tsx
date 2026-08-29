import type { Metadata } from "next";
import ArticleSeo from "../../components/ArticleSeo";
import Comments from "../../components/Comments";
import { articleByPath } from "../../seo";

const articleUrl = "/gaming/bombazos-gamescom-2026";
const seoArticle = articleByPath(articleUrl);

export const metadata: Metadata = {
  title: "Gamescom 2026: los bombazos y anuncios de Opening Night Live",
  description:
    "The Witcher 3 Remastered, Final Fantasy VII Revelation, Gears of War: E-Day, Metro 2039, Ananta, EXODUS y más anuncios de Gamescom 2026.",
  alternates: { canonical: articleUrl },
  openGraph: {
    title: "Gamescom 2026: bombazos, remakes y todo lo anunciado",
    description:
      "Los anuncios más importantes de Opening Night Live, con fechas confirmadas, imágenes y el veredicto de TokenGeekCoin.",
    type: "article",
    url: articleUrl,
    images: ["/articles/gamescom-2026/witcher-3.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gamescom 2026: los anuncios que encendieron la noche",
    description: "Geralt, Cloud, Marcus Fenix y una avalancha de juegos para 2026 y 2027.",
    images: ["/articles/gamescom-2026/witcher-3.webp"],
  },
};

const announcements = [
  {
    className: "game-witcher",
    number: "01",
    title: "The Witcher 3: Wild Hunt — Remastered",
    kicker: "Geralt cerró la noche con dos anuncios",
    image: "/articles/gamescom-2026/witcher-3.webp",
    alt: "Geralt de Rivia recorriendo el mundo de The Witcher 3",
    facts: [["FECHA", "29 SEP 2026"], ["PLATAFORMAS", "PS5 · XBOX SERIES · PC"], ["CLAVE", "MEJORA GRATUITA"]],
    copy: (
      <>
        <p>CD Projekt Red cerró el evento con una remasterización que mejora gráficos, combate, movimiento, habilidades y animaciones. La actualización será gratuita para quienes ya tengan el juego en las plataformas compatibles.</p>
        <p>El estudio también mostró <strong>Songs of the Past</strong>, una nueva expansión de historia para 2027. Son dos lanzamientos diferentes: el remaster llega primero; la aventura inédita de Geralt llegará después.</p>
      </>
    ),
    verdict: "Si ya tenés el juego, la mejora gratuita convierte este anuncio en el negocio más fácil de toda la feria.",
  },
  {
    className: "game-revelation",
    number: "02",
    title: "Final Fantasy VII Revelation",
    kicker: "El cierre de la trilogía apunta a lo más alto",
    image: "/articles/gamescom-2026/final-fantasy-vii-revelation.webp",
    alt: "Cid Highwind combate contra una criatura en Final Fantasy VII Revelation",
    facts: [["VENTANA", "PRIMAVERA 2027"], ["GÉNERO", "JRPG DE ACCIÓN"], ["CLAVE", "CAPÍTULO FINAL"]],
    copy: (
      <>
        <p>Square Enix desplegó un avance cargado de combates masivos, aeronaves, chocobos y amenazas conocidas por los seguidores del clásico. Todo indica que el tercer capítulo buscará llevar la escala del remake mucho más lejos.</p>
        <p>La fecha exacta todavía no fue anunciada, pero la ventana oficial lo coloca entre los grandes lanzamientos de la primavera de 2027.</p>
      </>
    ),
    verdict: "El candidato natural a JRPG imprescindible de 2027, aunque todavía conviene esperar precio y ediciones.",
  },
  {
    className: "game-gears",
    number: "03",
    title: "Gears of War: E-Day",
    kicker: "La brutalidad de la vieja escuela vuelve renovada",
    image: "/articles/gamescom-2026/gears-eday.webp",
    alt: "Marcus Fenix y Dom Santiago contemplan una ciudad destruida en Gears of War E-Day",
    facts: [["FECHA", "06 OCT 2026"], ["PLATAFORMAS", "XBOX SERIES · PC"], ["SERVICIO", "GAME PASS DÍA UNO"]],
    copy: (
      <>
        <p>El nuevo gameplay de campaña devuelve a Marcus Fenix y Dom Santiago al comienzo de la guerra Locust. Coberturas, combate cercano y una atmósfera más oscura se apoyan en Unreal Engine 5 para reconstruir el Día de la Emergencia.</p>
        <p>Se lanza el 6 de octubre y estará disponible desde el primer día en Game Pass Ultimate y PC Game Pass.</p>
      </>
    ),
    verdict: "Para suscriptores de Game Pass, es uno de los estrenos con mejor relación entre impacto y gasto de 2026.",
  },
  {
    className: "game-metro2039",
    number: "04",
    title: "Metro 2039",
    kicker: "Moscú vuelve a ser un infierno hermoso",
    image: "/articles/gamescom-2026/metro-2039.webp",
    alt: "Escena de combate bajo la lluvia en la Moscú postapocalíptica de Metro 2039",
    facts: [["VENTANA", "FEB 2027"], ["PLATAFORMAS", "PS5 · XBOX SERIES · PC"], ["GÉNERO", "FPS · SIGILO"]],
    copy: (
      <>
        <p>4A Games mostró una aventura para un jugador que combina exploración, supervivencia, combate y sigilo en una Moscú devastada. El nuevo protagonista, conocido como Stranger, deberá regresar al Metro bajo el régimen de Hunter.</p>
        <p>El apartado técnico fue uno de los grandes protagonistas del tráiler, tanto en los túneles como en las zonas abiertas de la superficie.</p>
      </>
    ),
    verdict: "Uno para mirar muy de cerca si buscás campaña individual, tensión y una ambientación con personalidad propia.",
  },
  {
    className: "game-ananta",
    number: "05",
    title: "Ananta",
    kicker: "El anime de mundo abierto ya tiene fecha",
    image: "/articles/gamescom-2026/ananta.webp",
    alt: "Personajes recorriendo una ciudad moderna en automóvil en Ananta",
    facts: [["FECHA", "15 ENE 2027"], ["PLATAFORMAS", "PS5 · PC · MÓVILES"], ["GÉNERO", "RPG MUNDO ABIERTO"]],
    copy: (
      <>
        <p>El llamado “Anime GTA” confirmó su estreno global y enseñó nuevas zonas urbanas, vehículos y combate. Su principal atractivo sigue siendo una ciudad colorida que mezcla exploración libre, desplazamiento ágil y múltiples personajes jugables.</p>
        <p>La fecha de enero le permite llegar varios meses antes que GTA VI y construir su propia comunidad sin competir en la misma semana.</p>
      </>
    ),
    verdict: "Una apuesta distinta y visualmente irresistible; habrá que comprobar cómo funciona su monetización en el lanzamiento.",
  },
  {
    className: "game-exodus",
    number: "06",
    title: "EXODUS",
    kicker: "Ciencia ficción con consecuencias a escala cósmica",
    image: "/articles/gamescom-2026/exodus.webp",
    alt: "Soldado protegido por un escudo de energía frente a una máquina en EXODUS",
    facts: [["FECHA", "07 ABR 2027"], ["PLATAFORMAS", "PS5 · XBOX SERIES · PC"], ["GÉNERO", "RPG DE ACCIÓN"]],
    copy: (
      <>
        <p>Archetype Entertainment presentó a Salt, un pulpo inteligente que pilota un meca de combate, y confirmó la fecha definitiva. El RPG de ciencia ficción combina decisiones, compañeros y viajes donde la dilatación temporal transforma el mundo mientras el protagonista está lejos.</p>
        <p>La nota original indicaba el 17 de abril; la fecha oficial anunciada es el <strong>7 de abril de 2027</strong>.</p>
      </>
    ),
    verdict: "Tiene ADN de Mass Effect, pero su propuesta temporal puede darle una identidad mucho más ambiciosa.",
  },
  {
    className: "game-mewgenics",
    number: "07",
    title: "Mewgenics",
    kicker: "Gatos, genética y estrategia por turnos",
    image: "/articles/gamescom-2026/mewgenics.webp",
    alt: "Combate táctico por turnos protagonizado por gatos en Mewgenics",
    facts: [["FECHA", "08 SEP 2026"], ["PLATAFORMAS", "PS5 · XBOX SERIES · SWITCH 2"], ["GÉNERO", "TÁCTICA · ROGUELITE"]],
    copy: (
      <>
        <p>El extraño y celebrado juego de Edmund McMillen lleva a consolas su mezcla de crianza, genética y combates tácticos sobre escenarios generados proceduralmente. Cada generación de gatos hereda rasgos que cambian las próximas expediciones.</p>
        <p>Es la sorpresa ideal para quienes prefieren sistemas profundos y partidas impredecibles antes que una superproducción cinematográfica.</p>
      </>
    ),
    verdict: "La compra de culto de la lista: menos espectáculo, más decisiones y una cantidad absurda de gatos.",
  },
  {
    className: "game-heroes",
    number: "08",
    title: "Heroes of Might and Magic III Remake",
    kicker: "Erathia regresa reconstruida desde cero",
    image: "/articles/gamescom-2026/heroes-iii.webp",
    alt: "Ciudad nevada y mapa estratégico del clásico Heroes of Might and Magic III",
    facts: [["VENTANA", "2027"], ["PLATAFORMAS", "PS5 · XBOX SERIES · PC"], ["MOTOR", "SNOWDROP"]],
    copy: (
      <>
        <p>Ubisoft anunció una reconstrucción moderna del clásico de 1999 con mundo 3D, cámara libre, resolución 4K, iluminación dinámica, clima y estaciones. También incluirá las campañas y facciones originales junto con sus dos expansiones.</p>
        <p>La imagen corresponde al clásico HD y sirve como referencia del legado visual; el remake de 2027 está siendo reconstruido con el motor Snowdrop.</p>
      </>
    ),
    verdict: "Nostalgia de alto riesgo: si respeta la estrategia original y moderniza la interfaz, puede ser un regreso enorme.",
  },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function GamescomPage() {
  return (
    <main className="article-page gamescom-page">
      <ArticleSeo article={seoArticle} />
      <header className="site-header article-header">
        <a className="brand" href="/" aria-label="TokenGeekCoin, inicio"><span className="brand-mark">T.</span><span>TOKENGEEKCOIN.COM</span></a>
        <nav aria-label="Navegación principal"><a href="/noticias#gaming">Gaming</a><a href="/noticias">Noticias</a><a href="/#sobre-mi">Sobre mí</a></nav>
        <a className="header-cta" href="/noticias#gaming">Volver <span aria-hidden="true">←</span></a>
      </header>

      <article>
        <header className="article-hero gamescom-hero">
          <div className="article-hero-copy">
            <div className="article-meta"><span>GAMING</span><time dateTime="2026-08-26">26 AGO 2026</time><span>12 MIN DE LECTURA</span></div>
            <h1>Bombazos, remakes y hype: todo lo anunciado en Gamescom 2026</h1>
            <p>The Witcher, Final Fantasy, Gears, Metro y varias sorpresas convirtieron Opening Night Live en una hoja de ruta explosiva para 2026 y 2027.</p>
            <div className="article-author"><span className="author-avatar">EG</span><div><b><a href="/autor/ezequiel-guerrero">POR EZEQUIEL GUERRERO</a></b><small>Gaming + billetera geek</small></div></div>
          </div>
          <div className="article-hero-art" aria-hidden="true"><span>ONL</span><span>COLONIA · ALEMANIA</span><strong>GC26</strong></div>
        </header>

        <div className="article-intro">
          <p className="dropcap">¡Qué locura de noche! Después de dos horas de anuncios presentados por Geoff Keighley, Gamescom dejó una certeza: la industria adelantó su artillería pesada para el cierre de 2026 y el arranque de 2027.</p>
          <p>En TokenGeekCoin repasamos las revelaciones más fuertes, corregimos las fechas con información oficial y analizamos dónde vale la pena poner nuestros preciados ahorros.</p>
          <aside><span>APERTURA DE GAMESCOM 2026</span><strong>8 ANUNCIOS · 2 AÑOS DE HYPE</strong><p>Fechas y plataformas actualizadas al 26 de agosto de 2026.</p></aside>
        </div>

        <section className="games-list gamescom-list" aria-label="Principales anuncios de Gamescom 2026">
          {announcements.map((game) => (
            <article className={`game-feature ${game.className}`} key={game.title}>
              <div className="game-media"><img src={game.image} alt={game.alt} width="1920" height="1080" loading="lazy"/><span>{game.number}</span></div>
              <div className="game-content">
                <p className="kicker">// {game.kicker}</p><h2>{game.title}</h2>
                <div className="game-facts">{game.facts.map(([label,value]) => <span key={label}><small>{label}</small>{value}</span>)}</div>
                {game.copy}
                <div className="verdict"><span>VEREDICTO TOKEN</span><strong>{game.facts[2][1]}</strong><p>{game.verdict}</p></div>
              </div>
            </article>
          ))}
        </section>

        <section className="wallet-advice">
          <div><p className="kicker">// VEREDICTO INVERSOR</p><h2>Dosificá el hype.<br/><i>Cuidá la billetera.</i></h2></div>
          <ol>
            <li><span>01</span><div><h3>Aprovechá las mejoras gratuitas</h3><p>Si ya tenés The Witcher 3, el remaster no exige una compra nueva.</p></div></li>
            <li><span>02</span><div><h3>Usá las suscripciones con intención</h3><p>Gears of War: E-Day estará en Game Pass desde el primer día.</p></div></li>
            <li><span>03</span><div><h3>No reserves por impulso</h3><p>Los juegos de 2027 todavía pueden cambiar. Esperá análisis, rendimiento y precios regionales.</p></div></li>
          </ol>
        </section>

        <Comments articleSlug="bombazos-gamescom-2026" prompt="¿Cuál fue el anuncio que más te sorprendió?" placeholder="¿Geralt, Cloud, Marcus, Metro o una de las sorpresas?" />

        <footer className="article-sources">
          <p>Fuentes verificadas el 26 de agosto de 2026: <a href="https://www.exodusgame.com/en-US/news/exodus-launches-april-7-2027-official-release-date-trailer" target="_blank" rel="noreferrer">EXODUS</a>, <a href="https://news.xbox.com/en-us/2026/06/07/gears-of-war-eday-direct-xbox-games-showcase-2026/" target="_blank" rel="noreferrer">Xbox</a>, <a href="https://www.xbox.com/es-ES/games/metro-2039" target="_blank" rel="noreferrer">Metro 2039</a>, <a href="https://blog.playstation.com/2026/08/25/gamescom-opening-night-live-highlights-19-games-coming-to-playstation/" target="_blank" rel="noreferrer">PlayStation</a> y <a href="https://news.ubisoft.com/en-us/article/54MdgBHzrGnGT0mwKtT9aq/heroes-of-might-and-magic-iii-remake-return-to-erathia-in-2027" target="_blank" rel="noreferrer">Ubisoft</a>.</p>
          <a href="/noticias#gaming">VOLVER A GAMING <Arrow/></a>
        </footer>
      </article>
    </main>
  );
}

