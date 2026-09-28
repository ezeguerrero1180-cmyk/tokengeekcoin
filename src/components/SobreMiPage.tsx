import React from 'react';
import { Article } from '../types/article';
import { AdSenseUnit } from './AdSenseUnit';

interface SobreMiPageProps {
  onBackToHome: () => void;
  onSelectArticle: (article: Article) => void;
  latestArticles: Article[];
}

export const SobreMiPage: React.FC<SobreMiPageProps> = ({
  onBackToHome,
  onSelectArticle,
  latestArticles,
}) => {
  return (
    <main className="author-v1">
      {/* Botón de retorno rápido */}
      <div className="bg-[#120e1a] border-b border-[#2b2238] px-4 py-3 sm:px-8 flex items-center justify-between text-xs">
        <button
          onClick={onBackToHome}
          className="cursor-pointer text-[var(--mg-acid)] hover:text-white font-black tracking-wider uppercase flex items-center gap-2 transition-colors"
        >
          <span>←</span> Volver a la portada principal
        </button>
        <span className="text-stone-400 uppercase tracking-widest hidden sm:inline font-mono">
          Ezequiel Guerrero · Perfil de Autor
        </span>
      </div>

      <section className="author-v1-hero">
        <div className="author-v1-marker" aria-hidden="true">
          E.
        </div>
        <div className="author-v1-hero-copy">
          <p className="kicker">// DETRÁS DE TOKENGEEKCOIN</p>
          <h1>
            Ezequiel
            <br />
            <i>Guerrero.</i>
          </h1>
          <p className="author-v1-lead">
            Abogado de profesión, geek por elección y creador de un lugar donde una consola, una
            cripto y una IA pueden compartir la misma conversación sin ponerse traje de oficina.
          </p>
        </div>
        <div className="author-v1-stamp">
          <span>JUJUY · ARGENTINA</span>
          <strong>EG</strong>
          <span>DESDE EL NORTE</span>
        </div>
      </section>

      <section className="author-v1-intro">
        <div>
          <p className="kicker">// LA IDEA</p>
          <h2>
            Menos humo.
            <br />
            <i>Más criterio.</i>
          </h2>
        </div>
        <div className="author-v1-prose">
          <p>
            TokenGeekCoin nació porque me gusta entender las cosas antes de repetirlas. Acá escribo
            sobre inteligencia artificial, inversiones, blockchain, gaming y cultura popular con una
            mirada cercana: qué pasó, qué significa y por qué merece —o no— tu tiempo.
          </p>
          <p>
            No me interesa vender FOMO. Prefiero explicar lo complejo con lenguaje claro, separar los
            hechos de las promesas y compartir esa mezcla de curiosidad, criterio y entusiasmo que
            nos vuelve geeks.
          </p>
        </div>
      </section>

      {/* Anuncio AdSense en página de autor */}
      <div className="max-w-5xl mx-auto px-4 my-8">
        <AdSenseUnit label="PUBLICIDAD — PERFIL DE AUTOR" />
      </div>

      <section className="author-v1-fields">
        <article>
          <span>01</span>
          <p className="kicker">INTELIGENCIA ARTIFICIAL</p>
          <h3>La tecnología cambia rápido; entender sus límites importa todavía más.</h3>
        </article>
        <article>
          <span>02</span>
          <p className="kicker">FINANZAS Y BLOCKCHAIN</p>
          <h3>Datos, riesgos y contexto antes de tomar cualquier decisión.</h3>
        </article>
        <article>
          <span>03</span>
          <p className="kicker">GAMING Y CULTURA GEEK</p>
          <h3>Noticias con entusiasmo, pero sin convertir cada tráiler en una profecía.</h3>
        </article>
      </section>

      <section className="author-v1-connect">
        <div>
          <p className="kicker">// CONECTEMOS</p>
          <h2>
            Seguime por
            <br />
            <i>acá.</i>
          </h2>
        </div>
        <div className="author-v1-socials">
          <a
            href="https://www.facebook.com/fernandoezequiel.guerrero"
            target="_blank"
            rel="me noopener noreferrer"
            className="group"
          >
            <span>01</span>
            <strong className="group-hover:text-[var(--mg-acid)] transition-colors">
              Facebook
            </strong>
            <b>↗</b>
          </a>
          <a
            href="https://www.linkedin.com/in/eze-guerrero-06585142b/"
            target="_blank"
            rel="me noopener noreferrer"
            className="group"
          >
            <span>02</span>
            <strong className="group-hover:text-[var(--mg-acid)] transition-colors">
              LinkedIn
            </strong>
            <b>↗</b>
          </a>
          <a
            href="https://www.youtube.com/@eztec3/videos?sub_confirmation=1"
            target="_blank"
            rel="me noopener noreferrer"
            className="group"
          >
            <span>03</span>
            <strong className="group-hover:text-[var(--mg-acid)] transition-colors">
              YouTube
            </strong>
            <b>↗</b>
          </a>
        </div>
      </section>

      <section className="author-v1-latest">
        <p className="kicker">// ÚLTIMAS PUBLICACIONES</p>
        <div>
          {latestArticles.slice(0, 6).map((article, index) => (
            <a
              key={article.slug}
              href={`#${article.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onSelectArticle(article);
              }}
              className="cursor-pointer group"
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong className="group-hover:text-[var(--mg-acid)] transition-colors">
                {article.title}
              </strong>
              <b className="group-hover:translate-x-1 transition-transform">LEER ↗</b>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={onBackToHome}
            className="classic-button haskins-btn cursor-pointer inline-flex items-center gap-2"
          >
            ← Volver a explorar todas las noticias
          </button>
        </div>
      </section>
    </main>
  );
};
