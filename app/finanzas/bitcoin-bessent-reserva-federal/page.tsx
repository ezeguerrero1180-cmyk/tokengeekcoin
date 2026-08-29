import type { Metadata } from "next";
import Comments from "../../components/Comments";
import ArticleSeo from "../../components/ArticleSeo";
import { articleByPath } from "../../seo";

const articleUrl = "/finanzas/bitcoin-bessent-reserva-federal";
const heroImage = "/articles/bitcoin-bessent-fed/bitcoin.webp";
const seoArticle = articleByPath(articleUrl);

export const metadata: Metadata = {
  title: "Bitcoin, Scott Bessent y la Reserva Federal",
  description: "Qué cambió con las recompras de deuda del Tesoro de Scott Bessent, por qué Bitcoin reaccionó y por qué esta medida no es QE de la Reserva Federal.",
  alternates: { canonical: articleUrl },
  openGraph: {
    title: "Bitcoin al infinito: la jugada de Scott Bessent que encendió al mercado",
    description: "Bitcoin ronda los USD 77.500 y el Tesoro duplica recompras de deuda larga. Separamos los hechos de la narrativa del mercado.",
    type: "article",
    url: articleUrl,
    images: [{ url: heroImage, width: 2200, height: 1650, alt: "Moneda física con el símbolo de Bitcoin" }],
  },
  twitter: { card: "summary_large_image", title: "Bitcoin, Bessent y la Fed: qué pasó realmente", description: "La señal que encendió al mercado, sin confundir al Tesoro con la Reserva Federal.", images: [heroImage] },
};

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function BitcoinBessentArticle() {
  return (
    <main className="article-page bitcoin-page">
      <ArticleSeo article={seoArticle} />
      <header className="site-header article-header">
        <a className="brand" href="/" aria-label="TokenGeekCoin, inicio"><span className="brand-mark">T.</span><span>TOKENGEEKCOIN.COM</span></a>
        <nav aria-label="Navegación principal"><a href="/#explorar">Explorar</a><a href="/#bitacora">Bitácora</a><a href="/#sobre-mi">Sobre mí</a></nav>
        <a className="header-cta" href="/">Volver <span aria-hidden="true">←</span></a>
      </header>

      <article>
        <header className="bitcoin-hero">
          <img src={heroImage} alt="Una moneda de Bitcoin iluminada en dorado" width="2200" height="1650" fetchPriority="high" />
          <div className="bitcoin-hero-shade" />
          <div className="bitcoin-hero-copy">
            <div className="article-meta"><span>FINANZAS + CRIPTO</span><time dateTime="2026-08-21">21 AGO 2026</time><span>7 MIN DE LECTURA</span></div>
            <p className="bitcoin-overline">MERCADOS · TESORO DE EE. UU. · BITCOIN</p>
            <h1>Bitcoin al infinito<span>:</span> la jugada de Scott Bessent que encendió al mercado</h1>
            <p className="bitcoin-deck">BTC ronda los USD 77.500 mientras el Tesoro duplica sus recompras de deuda larga. La señal importa, pero no es QE ni dinero nuevo de la Reserva Federal.</p>
            <div className="article-author"><span className="author-avatar">EG</span><div><b><a href="/autor/ezequiel-guerrero">POR EZEQUIEL GUERRERO</a></b><small>Análisis de mercado · Contenido educativo</small></div></div>
          </div>
        </header>

        <section className="bitcoin-dashboard">
          <div><span>BTC</span><strong>≈ USD 77.500</strong><small>Nivel de referencia al publicar</small></div>
          <div><span>RECOMPRA MÁXIMA</span><strong>USD 2B → 4B</strong><small>Por operación en deuda larga</small></div>
          <div><span>INICIO</span><strong>09 SEP 2026</strong><small>Nuevo calendario del Tesoro</small></div>
        </section>

        <section className="bitcoin-opening">
          <div>
            <p className="kicker">// EL MOVIMIENTO</p>
            <p className="dropcap">Bitcoin volvió a moverse con violencia y la explicación más repetida apuntó a Washington. El secretario del Tesoro, Scott Bessent, anunció que las operaciones de recompra para los bonos de 10 a 30 años pasarán de un máximo de USD 2.000 millones a por lo menos USD 4.000 millones por operación.</p>
            <p>El dato es real. También lo es el entusiasmo del mercado. Lo que necesita matices es el salto desde esa noticia hasta la frase “Estados Unidos volvió a imprimir dinero”. La operación busca mejorar la liquidez de títulos viejos y menos negociados; el propio Tesoro prevé reemplazarlos mediante nueva emisión.</p>
          </div>
          <aside><span>LECTURA RÁPIDA</span><strong>SEÑAL<br />ALCISTA</strong><p>Pero no una prueba de que las recompras hayan causado por sí solas todo el rally de Bitcoin.</p></aside>
        </section>

        <section className="bitcoin-profile">
          <figure><img src="/articles/bitcoin-bessent-fed/scott-bessent.webp" alt="Retrato oficial del secretario del Tesoro Scott Bessent" width="1500" height="2100" loading="lazy" /><figcaption>Scott Bessent · Retrato oficial del Tesoro de EE. UU.</figcaption></figure>
          <div>
            <p className="kicker">01 · LA JUGADA DE BESSENT</p>
            <h2>Más liquidez para la deuda <i>que menos circula.</i></h2>
            <p>Las recompras se concentran en bonos “off-the-run”: emisiones antiguas que suelen negociarse menos que las más recientes. El Tesoro compra parte de esos títulos para mejorar el funcionamiento del mercado y, según su calendario trimestral, financia la operación con nueva deuda.</p>
            <p>Para los inversores, el anuncio funciona como una señal de apoyo a la liquidez del mercado de bonos. Esa percepción puede influir sobre rendimientos, dólar y apetito por riesgo, pero sus efectos no son automáticos ni garantizados.</p>
            <a href="https://home.treasury.gov/news/press-releases/sb0607" target="_blank" rel="noreferrer">LEER EL ANUNCIO OFICIAL <Arrow /></a>
          </div>
        </section>

        <section className="bitcoin-fed">
          <div className="bitcoin-fed-copy">
            <p className="kicker">02 · LA DIFERENCIA CLAVE</p>
            <h2>Tesoro <span>≠</span> Reserva Federal</h2>
            <p>El Tesoro administra la deuda y las finanzas del gobierno. La Reserva Federal conduce la política monetaria y puede modificar las reservas bancarias mediante sus propias operaciones de mercado abierto.</p>
            <div className="bitcoin-compare">
              <article><b>TESORO</b><p>Recompra bonos antiguos para apoyar la liquidez del mercado y emite deuda para financiarse.</p></article>
              <article><b>FED</b><p>Define la política monetaria. Sus compras de activos sí pueden ampliar reservas y adoptar la forma de QE.</p></article>
            </div>
            <p className="bitcoin-warning">Por eso, llamar a la medida de Bessent “impresión de dinero” confunde dos instituciones y dos mecanismos distintos.</p>
          </div>
          <figure><img src="/articles/bitcoin-bessent-fed/federal-reserve.jpg" alt="Edificio Marriner S. Eccles de la Reserva Federal en Washington" width="327" height="207" loading="lazy" /><figcaption>Reserva Federal · Washington, D. C.</figcaption></figure>
        </section>

        <section className="bitcoin-thesis">
          <div className="bitcoin-thesis-heading"><p className="kicker">// POR QUÉ BITCOIN REACCIONÓ</p><h2>Un rally, <i>varias fuerzas.</i></h2><p>No hay una única causa verificable. Estas son las narrativas que probablemente se combinaron.</p></div>
          <div className="bitcoin-thesis-grid">
            <article><span>01</span><h3>Liquidez percibida</h3><p>El mercado leyó una señal de apoyo a la negociación de deuda larga y a condiciones financieras menos tensas.</p></article>
            <article><span>02</span><h3>Dólar y rendimientos</h3><p>Las expectativas sobre tasas largas y dólar suelen cambiar el atractivo relativo de activos escasos como Bitcoin.</p></article>
            <article><span>03</span><h3>Política procripto</h3><p>La Reserva Estratégica de Bitcoin y el impulso oficial a stablecoins y tokenización fortalecen una narrativa favorable.</p></article>
          </div>
        </section>

        <section className="bitcoin-reserve">
          <p className="kicker">03 · RESERVA ESTRATÉGICA</p>
          <h2>Una pieza que ya estaba <i>sobre el tablero.</i></h2>
          <p>Estados Unidos creó la Reserva Estratégica de Bitcoin en marzo de 2025 con criptoactivos incautados. La orden permite estudiar adquisiciones adicionales únicamente mediante estrategias neutrales para el presupuesto. No fue una medida nueva de esta semana, pero sí forma parte del contexto político que alimenta la tesis de adopción institucional.</p>
          <a href="https://www.whitehouse.gov/presidential-actions/2025/03/establishment-of-the-strategic-bitcoin-reserve-and-united-states-digital-asset-stockpile/" target="_blank" rel="noreferrer">VER LA ORDEN EJECUTIVA <Arrow /></a>
        </section>

        <section className="bitcoin-playbook">
          <div><p className="kicker">// SIN FOMO</p><h2>La estrategia importa más que <i>el titular.</i></h2></div>
          <div className="bitcoin-rules">
            <p><b>01</b><span>No perseguir velas verdes: una subida rápida también aumenta el riesgo de corrección.</span></p>
            <p><b>02</b><span>Definir compras periódicas y un tamaño de posición acorde al riesgo personal.</span></p>
            <p><b>03</b><span>Separar los hechos oficiales de las interpretaciones que circulan en redes.</span></p>
          </div>
          <small>Este artículo es informativo y educativo. No constituye asesoramiento ni recomendación financiera.</small>
        </section>

        <Comments articleSlug="bitcoin-bessent-reserva-federal" prompt="¿Creés que esta señal del Tesoro sostiene el rally o el mercado está leyendo demasiado?" placeholder="Compartí tu lectura del mercado…" />

        <footer className="article-sources bitcoin-sources">
          <p>Datos y medidas verificados en fuentes oficiales del Tesoro, la Reserva Federal y la Casa Blanca el 21 de agosto de 2026. Foto de Bitcoin: Kanchanara/Unsplash. Retrato de Scott Bessent y edificio de la Fed: fuentes oficiales.</p>
          <div><a href="https://home.treasury.gov/news/press-releases/sb0607" target="_blank" rel="noreferrer">TESORO <Arrow /></a><a href="https://www.federalreserve.gov/monetarypolicy/openmarket.htm" target="_blank" rel="noreferrer">RESERVA FEDERAL <Arrow /></a><a href="https://www.whitehouse.gov/presidential-actions/2025/03/establishment-of-the-strategic-bitcoin-reserve-and-united-states-digital-asset-stockpile/" target="_blank" rel="noreferrer">CASA BLANCA <Arrow /></a><a href="/">← INICIO</a></div>
        </footer>
      </article>
    </main>
  );
}
