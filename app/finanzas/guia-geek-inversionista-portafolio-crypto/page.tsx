import type { Metadata } from "next";
import Comments from "../../components/Comments";
import NexoPromo from "../../components/NexoPromo";
import ArticleSeo from "../../components/ArticleSeo";
import { articleByPath } from "../../seo";

const articleUrl = "/finanzas/guia-geek-inversionista-portafolio-crypto";
const heroImage = "/articles/geek-investor-guide/geek-investor-hero.webp";
const seoArticle = articleByPath(articleUrl);

export const metadata: Metadata = {
  title: "La guía definitiva del Geek Inversionista",
  description: "Una guía práctica para ordenar tu presupuesto, crear un fondo de emergencia y comenzar un portafolio crypto sin abandonar tus hobbies.",
  alternates: { canonical: articleUrl },
  openGraph: {
    title: "La guía definitiva del Geek Inversionista",
    description: "Cómo armar tu primer portafolio crypto sin dejar de comprar cómics.",
    type: "article",
    url: articleUrl,
    images: [{ url: heroImage, width: 1672, height: 941, alt: "Inversionista geek organizando su presupuesto y portafolio crypto" }],
  },
  twitter: { card: "summary_large_image", title: "La guía definitiva del Geek Inversionista", description: "Presupuesto, fondo de emergencia y DCA explicados en modo geek.", images: [heroImage] },
};

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function GeekInvestorGuide() {
  return (
    <main className="article-page guide-page">
      <ArticleSeo article={seoArticle} />
      <header className="site-header article-header">
        <a className="brand" href="/" aria-label="TokenGeekCoin, inicio"><span className="brand-mark">T.</span><span>TOKENGEEKCOIN.COM</span></a>
        <nav aria-label="Navegación principal"><a href="/#explorar">Explorar</a><a href="/#bitacora">Bitácora</a><a href="/autor/ezequiel-guerrero">Sobre mí</a></nav>
        <a className="header-cta" href="/">Volver <span aria-hidden="true">←</span></a>
      </header>

      <article>
        <header className="guide-hero">
          <img src={heroImage} alt="Inversionista geek frente a gráficos, videojuegos, cómics y criptoactivos" width="1672" height="941" fetchPriority="high" />
          <div className="guide-hero-overlay" />
          <div className="guide-hero-copy">
            <div className="article-meta"><span>FINANZAS + CRIPTO</span><time dateTime="2026-08-25">25 AGO 2026</time><span>8 MIN DE LECTURA</span></div>
            <p className="guide-overline">PRESUPUESTO · HÁBITOS · DCA</p>
            <h1>La guía definitiva del <em>Geek Inversionista.</em></h1>
            <p className="guide-deck">Cómo armar tu primer portafolio crypto sin dejar de comprar cómics.</p>
            <div className="article-author"><span className="author-avatar">EG</span><div><b><a href="/autor/ezequiel-guerrero">POR EZEQUIEL GUERRERO</a></b><small>Finanzas personales · Contenido educativo</small></div></div>
          </div>
        </header>

        <section className="guide-opening">
          <div><p className="kicker">// LA MISIÓN</p><p className="dropcap">Ser geek puede ser caro: juegos, consolas, figuras, cómics y suscripciones compiten por el mismo presupuesto que tus metas financieras. La salida no es abandonar lo que te apasiona, sino asignarle un lugar consciente dentro de tu economía.</p><p>Esta guía convierte el ahorro y la inversión en un sistema fácil de seguir. No promete hacerte rico ni pagar mágicamente la próxima PlayStation: propone construir hábitos, reducir decisiones impulsivas y avanzar sin poner en riesgo el dinero que necesitás para vivir.</p></div>
          <aside><span>MISIÓN PRINCIPAL</span><strong>INVERTIR<br /><i>SIN</i><br />ABANDONAR</strong><p>Primero estabilizá tus gastos, deudas y reserva. Después subí el nivel de tu portafolio.</p></aside>
        </section>

        <section className="guide-level">
          <div><p className="kicker">01 · CAMBIO DE MENTALIDAD</p><h2>De “gasto” a <i>subir de nivel.</i></h2><p>Cada peso tiene una misión. Algunos sostienen tu presente, otros compran diversión y una parte puede trabajar para metas futuras. Invertir no garantiza ganancias: es una herramienta de largo plazo que exige aceptar volatilidad y posibles pérdidas.</p><p>Antes de exponerte a cripto, revisá deudas costosas y armá una reserva para imprevistos. Ese colchón evita tener que vender una inversión en mal momento para pagar una urgencia.</p></div>
          <div className="guide-level-mark" aria-hidden="true">LVL<br /><b>01</b></div>
        </section>

        <section className="guide-budget">
          <figure><img src="/articles/geek-investor-guide/four-budget-chests.webp" alt="Cuatro cofres que representan necesidades, hobbies, emergencia e inversión" width="1536" height="1024" loading="lazy" /><figcaption>Ilustración original · TokenGeekCoin</figcaption></figure>
          <div className="guide-budget-copy"><p className="kicker">02 · EL PRESUPUESTO TOKENGEEKCOIN</p><h2>Cuatro cofres, <i>un solo mapa.</i></h2><p>Usá este reparto como punto de partida y adaptalo a tu realidad. No es una regla universal: si alquiler, comida o deuda superan el 50%, ajustá las demás categorías antes de invertir.</p><div className="budget-grid"><article><strong>50%</strong><span>NECESIDADES</span><p>Vivienda, servicios, comida, transporte y deuda prioritaria.</p></article><article><strong>30%</strong><span>DESEOS GEEK</span><p>Juegos, cómics, figuras, streaming y salidas.</p></article><article><strong>10%</strong><span>EMERGENCIA</span><p>Reserva líquida, segura y accesible para imprevistos.</p></article><article><strong>10%</strong><span>INVERSIÓN</span><p>Cripto y tecnología, solo con capital que puedas arriesgar.</p></article></div></div>
        </section>

        <section className="guide-dca">
          <div><p className="kicker">03 · ESTRATEGIA DCA</p><h2>Constancia antes que <i>adivinación.</i></h2><p>Dollar-cost averaging significa invertir el mismo monto a intervalos regulares, sin intentar acertar el precio perfecto. Cuando el precio baja comprás más unidades; cuando sube, menos. Puede suavizar el precio promedio y reducir decisiones emocionales.</p><p className="guide-warning">DCA no elimina el riesgo, no evita pérdidas ni garantiza rentabilidad. En cripto, la volatilidad y la posibilidad de pérdida total siguen presentes.</p><a href="https://www.investor.gov/introduction-investing/investing-basics/glossary/dollar-cost-averaging" target="_blank" rel="noreferrer">VER DEFINICIÓN DE INVESTOR.GOV <Arrow /></a></div>
          <figure><img src="/articles/geek-investor-guide/dca-routine.webp" alt="Calendario que deposita cantidades iguales de monedas en una bóveda digital" width="1536" height="1024" loading="lazy" /><figcaption>La rutina vence al impulso · Ilustración original</figcaption></figure>
        </section>

        <section className="guide-actions">
          <div className="guide-actions-heading"><p className="kicker">// PARTIDA NUEVA</p><h2>Tu plan en <i>tres movimientos.</i></h2></div>
          <div className="guide-actions-grid"><article><span>01</span><h3>Calculá</h3><p>Anotá ingresos y gastos reales. Elegí un porcentaje sostenible, aunque al principio sea menor al 10%.</p></article><article><span>02</span><h3>Protegé</h3><p>Separá el fondo de emergencia y activá seguridad: contraseña única, 2FA y control de custodia.</p></article><article><span>03</span><h3>Automatizá</h3><p>Programá una compra periódica después de cobrar y revisá comisiones, límites y registro del proveedor.</p></article></div>
        </section>

        <section className="guide-safety"><div><p className="kicker">// MODO SEGURO · ARGENTINA</p><h2>Antes de tocar <i>Start.</i></h2></div><ul><li>Mantené la reserva de emergencia separada, segura y disponible.</li><li>Verificá que el proveedor de servicios de activos virtuales figure en los registros de la CNV.</li><li>Entendé comisiones, custodia y recuperación de cuenta antes de transferir fondos.</li><li>No inviertas dinero destinado a gastos básicos ni asumas que cripto tiene garantía de depósitos.</li></ul><small>Contenido educativo. No constituye asesoramiento financiero, legal ni una recomendación de compra.</small></section>

        <section className="guide-related"><p className="kicker">// SEGUÍ LEYENDO</p><a href="/finanzas/bitcoin-bessent-reserva-federal"><span>FINANZAS + CRIPTO</span><strong>Bitcoin, Scott Bessent y la Reserva Federal</strong><Arrow /></a></section>

        <NexoPromo placement="article" />
        <Comments articleSlug="guia-geek-inversionista-portafolio-crypto" prompt="¿Qué porcentaje de tu presupuesto geek destinarías a invertir?" placeholder="Contanos cómo organizarías tus cuatro cofres…" />

        <footer className="article-sources guide-sources"><p>Artículo adaptado del texto de Ezequiel Guerrero. Las proporciones son una plantilla orientativa y deben ajustarse a cada situación. Imágenes originales creadas para TokenGeekCoin.</p><div><a href="https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" target="_blank" rel="noreferrer">CFPB <Arrow /></a><a href="https://www.investor.gov/introduction-investing/investing-basics/glossary/dollar-cost-averaging" target="_blank" rel="noreferrer">INVESTOR.GOV <Arrow /></a><a href="https://www.argentina.gob.ar/noticias/alerta-del-bcra-y-la-cnv-sobre-los-riesgos-e-implicancias-de-los-criptoactivos" target="_blank" rel="noreferrer">BCRA + CNV <Arrow /></a><a href="https://www.argentina.gob.ar/cnv/alertas-al-inversor" target="_blank" rel="noreferrer">CNV <Arrow /></a><a href="/">← INICIO</a></div></footer>
      </article>
    </main>
  );
}
