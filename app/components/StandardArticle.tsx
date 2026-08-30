import type { Article } from "../site-data";
import { AdSlot, MobileMenu } from "../ui";
import Comments from "../comments";
import NexoPromo from "./NexoPromo";
import SiteImage from "./SiteImage";

type StandardArticleProps = {
  article: Article;
  schema: Record<string, unknown>;
  published: string;
};

function theme(category: string) {
  if (category.includes("FINANZAS")) return "finance";
  if (category.includes("TECNOLOGÍA")) return "technology";
  if (category.includes("CÓMICS")) return "comics";
  return "gaming";
}

function categoryPath(category: string) {
  if (category.includes("FINANZAS")) return "/finanzas";
  if (category.includes("TECNOLOGÍA")) return "/tecnologia";
  if (category.includes("CÓMICS")) return "/comics";
  return "/gaming";
}

function shortCategory(category: string) {
  if (category.includes("FINANZAS")) return "FIN";
  if (category.includes("TECNOLOGÍA")) return "TECH";
  if (category.includes("CÓMICS")) return "POP";
  return "PLAY";
}

function articleDateMark(article: Article) {
  const month = article.dateIso?.slice(5, 7);
  const year = article.dateIso?.slice(2, 4);

  return month && year ? `${month}/${year}` : "TGC";
}

export default function StandardArticle({ article, schema, published }: StandardArticleProps) {
  const backPath = categoryPath(article.category);
  const articleTheme = theme(article.category);
  const body = article.body.slice(1);
  const isToday = article.dateIso ? article.dateIso >= "2026-08-28" : false;
  const showEditorialSourceBlock = !article.dateIso || article.dateIso < "2026-08-30";
  const imageSource = (index: number) => article.sources?.[index] ?? article.sources?.at(-1);

  return <main className={`article-page standard-article standard-${articleTheme}${isToday ? " standard-today" : ""}`}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="site-header article-header">
      <a className="brand" href="/" aria-label="TokenGeekCoin, inicio"><span className="brand-mark">T.</span><span>TOKENGEEKCOIN.COM</span></a>
      <nav aria-label="Navegación principal"><a href="/noticias">Noticias</a><a href="/ofertas">Ofertas Geek</a><a href="/comparadores">Comparadores</a></nav>
      <a className="header-cta" href={backPath}>Volver <span aria-hidden="true">←</span></a>
      <MobileMenu />
    </header>

    <article>
      <header className="article-hero standard-article-hero">
        <div className="article-hero-copy">
          <div className="article-meta"><span>{article.category}</span><time dateTime={published}>{article.date}</time><span>{article.minutes} MIN DE LECTURA</span></div>
          <h1>{article.title}</h1>
          <p>{article.dek}</p>
          <div className="article-author"><span className="author-avatar">EG</span><div><b><a href="/autor/ezequiel-guerrero">POR EZEQUIEL GUERRERO</a></b><small>TokenGeekCoin · análisis personal</small></div></div>
        </div>
        <div className="article-hero-art" aria-hidden="true"><span>{shortCategory(article.category)}</span><span>EDITORIAL TGC</span><strong>{articleDateMark(article)}</strong></div>
      </header>

      <div className="article-intro standard-article-intro">
        <p className="dropcap">{article.body[0]}</p>
      </div>

      {article.personalAngle && <blockquote className="standard-personal-angle"><span>// MI LECTURA PERSONAL</span><p>{article.personalAngle}</p></blockquote>}

      <section className="games-list standard-story-list" aria-label="Desarrollo de la noticia">
        <article className="game-feature standard-lead-feature">
          <figure className="game-media"><SiteImage src={article.image} alt={article.imageAlt ?? article.title} width={1600} height={900} sizes="(max-width: 900px) 100vw, 50vw"/><span>01</span>{imageSource(0) && <figcaption className="image-credit"><a href={imageSource(0)!.url} target="_blank" rel="noopener noreferrer">Imagen: {imageSource(0)!.name} ↗</a></figcaption>}</figure>
          <div className="game-content standard-surface-dark standard-dark-panel">
            <p className="kicker">// {article.leadEyebrow ?? "EL ANÁLISIS"}</p>
            <h2>{article.leadTitle ?? "Lo que tenés que saber"}</h2>
            <div className="game-facts"><span><small>CATEGORÍA</small>{shortCategory(article.category)}</span><span><small>LECTURA</small>{article.minutes} MIN</span><span><small>PUBLICADO</small>{article.date}</span></div>
            {body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <AdSlot />
          </div>
        </article>

        {article.features?.map((feature, index) => <article className="game-feature standard-feature" key={feature.title}>
          <figure className="game-media"><SiteImage src={feature.image} alt={feature.alt} width={1600} height={900} sizes="(max-width: 900px) 100vw, 50vw"/><span>{String(index + 2).padStart(2, "0")}</span>{imageSource(index + 1) && <figcaption className="image-credit"><a href={imageSource(index + 1)!.url} target="_blank" rel="noopener noreferrer">Imagen: {imageSource(index + 1)!.name} ↗</a></figcaption>}</figure>
          <div className={`game-content ${index % 2 === 0 ? "standard-surface-light" : "standard-surface-dark standard-dark-panel"}`}><p className="kicker">// {feature.eyebrow}</p><h2>{feature.title}</h2><div className="standard-feature-facts">{feature.facts}</div>{feature.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </article>)}
      </section>

      <NexoPromo placement="article" />

      <Comments slug={article.slug} />

      <footer className="article-sources standard-article-footer">
        <div><p>Contenido editorial de TokenGeekCoin. Verificá precios, disponibilidad y condiciones antes de tomar decisiones financieras o de compra.</p>{showEditorialSourceBlock && article.sources && !article.hideSources && <p>{article.sources.map((source, index) => <span key={`${source.url}-${index}`}>{index > 0 && " · "}<a href={source.url} target="_blank" rel="noopener noreferrer">{source.name}</a></span>)}</p>}</div>
        <a href={backPath}>VOLVER A {shortCategory(article.category)} ↗</a>
      </footer>
    </article>
  </main>;
}
