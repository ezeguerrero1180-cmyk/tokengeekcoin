import type { Metadata } from "next";
import Comments from "../../components/Comments";
import NexoPromo from "../../components/NexoPromo";
import ArticleSeo from "../../components/ArticleSeo";
import { articleByPath } from "../../seo";

const articleUrl = "/gaming/mejores-juegos-septiembre-2026";
const seoArticle = articleByPath(articleUrl);

export const metadata: Metadata = {
  title: "Mejores juegos de septiembre 2026 para todas las consolas",
  description:
    "Onimusha: Way of the Sword, Marvel's Wolverine, Hot Wheels Infinite Rush y Minecraft Dungeons II: fechas, plataformas y guía de compra.",
  openGraph: {
    title: "Los mejores juegos de septiembre para todas las consolas",
    description:
      "Cuatro lanzamientos destacados de septiembre de 2026, con imágenes oficiales y guía para cuidar el presupuesto gamer.",
    type: "article",
    url: articleUrl,
    images: ["https://www.capcom.co.jp/ir/news/html/images/260603a.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Los mejores juegos de septiembre para todas las consolas",
    description: "Cuatro lanzamientos, cuatro estilos y una sola billetera.",
    images: ["https://www.capcom.co.jp/ir/news/html/images/260603a.png"],
  },
  alternates: { canonical: articleUrl },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

const games = [
  {
    className: "game-onimusha",
    number: "01",
    title: "Onimusha: Way of the Sword",
    kicker: "El regreso samurái que encabeza el mes",
    image: "https://www.capcom.co.jp/ir/news/html/images/260603a.png",
    alt: "Imagen oficial de Onimusha: Way of the Sword con Miyamoto Musashi",
    copy: (
      <>
        <p>
          Capcom recupera una de sus sagas de acción más queridas con Miyamoto Musashi como
          protagonista. La aventura nos lleva a una Kioto del período Edo invadida por una
          fuerza sobrenatural conocida como Malice, entre combates con espada, criaturas Genma
          y una atmósfera oscura.
        </p>
        <p>
          Es la propuesta más intensa de la selección: una campaña centrada en el choque cuerpo
          a cuerpo, la precisión y el espectáculo cinematográfico.
        </p>
      </>
    ),
    facts: [
      ["LANZAMIENTO", "04 SEP 2026"],
      ["PLATAFORMAS", "PS5 · XBOX SERIES · SWITCH 2 · PC"],
      ["VEREDICTO", "COMPRA OBLIGADA"],
    ],
    verdict: "La prioridad para quienes buscaban una gran aventura de acción samurái.",
  },
  {
    className: "game-wolverine",
    number: "02",
    title: "Marvel's Wolverine",
    kicker: "Garras, mutantes y una historia original",
    image:
      "https://gmedia.playstation.com/is/image/SIEPDC/marvels-wolverine-screenshot-06-en-08june26?$1600px$",
    alt: "Captura oficial de Marvel's Wolverine para PlayStation 5",
    copy: (
      <>
        <p>
          Insomniac Games cambia las telarañas por las garras y construye una aventura original
          de Logan. El juego promete acción contundente, escenarios variados y encuentros con
          personajes del universo mutante, incluido Omega Red.
        </p>
        <p>
          Su exclusividad en PlayStation 5 lo convierte en uno de los grandes argumentos de la
          consola para la segunda mitad del año.
        </p>
      </>
    ),
    facts: [
      ["LANZAMIENTO", "15 SEP 2026"],
      ["PLATAFORMA", "PLAYSTATION 5"],
      ["VEREDICTO", "ALTA PRIORIDAD"],
    ],
    verdict: "Una de las exclusivas más esperadas de PS5 y una cita clave para fans de Marvel.",
  },
  {
    className: "game-hotwheels",
    number: "03",
    title: "Hot Wheels Infinite Rush",
    kicker: "Velocidad arcade para jugar sin freno",
    image: "https://milestone.it/wp-content/uploads/2026/06/slide-infinite-rush-new-2.webp",
    alt: "Arte oficial de Hot Wheels Infinite Rush con vehículos compitiendo",
    copy: (
      <>
        <p>
          Milestone amplía la fórmula de carreras arcade con cuatro islas para explorar y más de
          150 vehículos. La propuesta mezcla velocidad, acrobacias y colección, con partidas
          pensadas tanto para competir como para pasar un buen rato en familia.
        </p>
        <p>
          El juego ofrece cross-play entre PC, PlayStation 5 y Xbox Series; la versión de Switch
          2 queda fuera de ese emparejamiento compartido.
        </p>
      </>
    ),
    facts: [
      ["LANZAMIENTO", "10 SEP 2026"],
      ["PLATAFORMAS", "PS5 · XBOX SERIES · SWITCH 2 · PC"],
      ["VEREDICTO", "COMPRA INTELIGENTE"],
    ],
    verdict: "La alternativa más accesible para quienes priorizan diversión inmediata y variedad.",
  },
  {
    className: "game-minecraft",
    number: "04",
    title: "Minecraft Dungeons II",
    kicker: "Cooperativo, botín y Game Pass desde el primer día",
    image:
      "https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/key-art/Dungeons-II_FullBleedA_Art01_Tablet_768x600.jpg",
    alt: "Arte oficial de Minecraft Dungeons II con sus héroes y criaturas",
    copy: (
      <>
        <p>
          La secuela vuelve a combinar el universo de bloques con exploración de mazmorras,
          combate cooperativo y una lluvia constante de equipamiento. Es una opción ideal para
          grupos que quieren avanzar juntos sin entrar en un juego competitivo.
        </p>
        <p>
          Además de llegar a todas las consolas actuales y PC, estará incluido desde el día uno
          en Game Pass, una ventaja importante para organizar el gasto del mes.
        </p>
      </>
    ),
    facts: [
      ["LANZAMIENTO", "29 SEP 2026"],
      ["PLATAFORMAS", "PS5 · XBOX SERIES · SWITCH 1/2 · PC"],
      ["VEREDICTO", "VALOR EXCEPCIONAL"],
    ],
    verdict: "La mejor relación entre contenido y costo para quienes ya tienen Game Pass.",
  },
];

export default function SeptemberGamesPage() {
  return (
    <main className="article-page september-games">
      <ArticleSeo article={seoArticle} />
      <header className="site-header article-header">
        <a className="brand" href="/" aria-label="TokenGeekCoin, inicio"><span className="brand-mark">T.</span><span>TOKENGEEKCOIN.COM</span></a>
        <nav aria-label="Navegación principal"><a href="/noticias#gaming">Gaming</a><a href="/#bitacora">Bitácora</a><a href="/autor/ezequiel-guerrero">Sobre mí</a></nav>
        <a className="header-cta" href="/noticias#gaming">Volver <span aria-hidden="true">←</span></a>
      </header>

      <article>
      <header className="article-hero">
        <div className="article-hero-copy">
          <div className="article-meta"><span>GAMING</span><time dateTime="2026-08-25">25 AGO 2026</time><span>9 MIN DE LECTURA</span></div>
          <h1>Los mejores juegos de septiembre para todas las consolas</h1>
          <p>
            Cuatro mundos, cuatro estilos y una sola billetera: estas son las grandes partidas
            que llegan en septiembre de 2026.
          </p>
          <div className="article-author"><span className="author-avatar">EG</span><div><b><a href="/autor/ezequiel-guerrero">POR EZEQUIEL GUERRERO</a></b><small>Gaming + presupuesto geek</small></div></div>
        </div>
        <div className="article-hero-art" aria-hidden="true">
          <span>SEP</span>
          <span>MULTIPLATAFORMA</span>
          <strong>09/26</strong>
        </div>
      </header>

      <div className="article-intro">
        <p className="dropcap">
          Septiembre no da respiro: samuráis, mutantes, autos imposibles y mazmorras de bloques
          compiten por nuestro tiempo. Analizamos qué ofrece cada estreno y para qué tipo de
          jugador puede ser la mejor compra.
        </p>
        <aside><span>LA SELECCIÓN</span><strong>4 JUEGOS · TODAS LAS CONSOLAS</strong><p>Fechas y plataformas comprobadas en sus sitios oficiales.</p></aside>
      </div>

      <section className="games-list" aria-label="Juegos destacados de septiembre">
        {games.map((game) => (
          <article className={"game-feature " + game.className} key={game.title}>
            <div className="game-media">
              <img src={game.image} alt={game.alt} loading="lazy" />
              <span className="game-number">{game.number}</span>
            </div>
            <div className="game-content">
              <p className="kicker">// {game.kicker}</p>
              <h2>{game.title}</h2>
              <div className="game-facts">
                {game.facts.map(([label, value]) => (
                  <span key={label}><small>{label}</small>{value}</span>
                ))}
              </div>
              {game.copy}
              <div className="verdict">
                <span>VEREDICTO TOKEN</span>
                <strong>{game.facts[2][1]}</strong>
                <p>{game.verdict}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="wallet-advice">
        <div><p className="kicker">// PRESUPUESTO GEEK</p><h2>Que el FOMO<br/><i>no juegue por vos.</i></h2></div>
        <ol>
          <li><span>01</span><div><h3>Aprovechá tu suscripción</h3><p>Si ya pagás Game Pass, Minecraft Dungeons II puede ser tu punto de entrada.</p></div></li>
          <li><span>02</span><div><h3>Elegí una prioridad</h3><p>Una compra que realmente vas a jugar vale más que cuatro juegos acumulando polvo.</p></div></li>
          <li><span>03</span><div><h3>Cuidá tu estrategia</h3><p>El entretenimiento no debería comerse tu fondo de emergencia ni tus inversiones.</p></div></li>
        </ol>
      </section>

      <NexoPromo placement="article" />
      <Comments
        articleSlug="mejores-juegos-septiembre-2026"
        prompt="¿Cuál de estos cuatro juegos vas a jugar primero?"
        placeholder="Contanos cuál elegís y en qué plataforma..."
      />

      <footer className="article-sources">
        <p>
          Fuentes oficiales verificadas el 25 de agosto de 2026:{" "}
          <a href="https://www.capcom.co.jp/ir/english/news/html/e260702.html" target="_blank" rel="noreferrer">
            Capcom
          </a>
          ,{" "}
          <a href="https://www.playstation.com/en-us/games/marvels-wolverine/" target="_blank" rel="noreferrer">
            PlayStation
          </a>
          ,{" "}
          <a href="https://milestone.it/games/hot-wheels-infinite-rush/" target="_blank" rel="noreferrer">
            Milestone
          </a>
          ,{" "}
          <a href="https://www.minecraft.net/en-us/about-dungeons-ii" target="_blank" rel="noreferrer">
            Minecraft
          </a>{" "}
          y{" "}
          <a href="https://www.xbox.com/en-US/games/minecraft-dungeons-ii" target="_blank" rel="noreferrer">
            Xbox
          </a>
          . Las condiciones de compra y suscripción pueden cambiar.
        </p>
        <a href="/noticias#gaming">VOLVER A GAMING <Arrow /></a>
      </footer>
      </article>
    </main>
  );
}
