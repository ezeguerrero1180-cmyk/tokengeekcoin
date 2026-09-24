/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import rawArticles from './data/articlesData.json';
import { Article } from './types/article';
import { isNewPublication, sortArticlesTodayFirst } from './utils/articleUtils';
import { Header } from './components/Header';
import { StoryCard } from './components/ArticleCard';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { Footer } from './components/Footer';
import { SiteImage } from './components/SiteImage';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // All articles sorted with today's first
  const allArticles: Article[] = useMemo(() => {
    return sortArticlesTodayFirst(rawArticles as Article[]);
  }, []);

  // ONLY NEW PUBLICATIONS (today & yesterday's news)
  const newArticles: Article[] = useMemo(() => {
    return allArticles.filter(isNewPublication);
  }, [allArticles]);

  const leadArticle: Article = newArticles[0] || allArticles[0];
  const companionArticles: Article[] = newArticles.slice(1);

  // The 4 distinct portals
  const worlds = useMemo(() => {
    const portals = [
      { category: 'TECNOLOGÍA + IA', tone: 'tech' },
      { category: 'GAMING', tone: 'violet' },
      { category: 'FINANZAS + CRIPTO', tone: 'acid' },
      { category: 'CÓMICS + SERIES', tone: 'orange' },
    ];
    return portals.map((portal) => ({
      ...portal,
      article:
        newArticles.find((a) => a.category === portal.category) ||
        allArticles.find((a) => a.category === portal.category) ||
        allArticles[0],
    }));
  }, [newArticles, allArticles]);

  return (
    <>
      <main className="classic-home">
        {/* Header exacto del modelo original */}
        <Header />

        {/* Portada banner */}
        <section className="classic-banner" aria-label="Portada TokenGeekCoin">
          <SiteImage
            src="/channel-banner.webp"
            alt="TokenGeekCoin: gaming, inversiones, tecnología y cómics"
            priority
          />
          <div className="classic-banner-shade" />
          <a className="classic-banner-button" href="#noticias">
            Explorar noticias <span>→</span>
          </a>
        </section>

        {/* Intro con Curiosidad en modo ON */}
        <section className="classic-intro">
          <div className="classic-intro-copy">
            <p className="classic-kicker">GAMING · FINANZAS · TECNOLOGÍA · CULTURA GEEK</p>
            <h1>
              Curiosidad en
              <br />
              <em>modo ON.</em>
            </h1>
            <p className="classic-lead">
              Un espacio personal para entender el multiverso digital, descubrir historias y tomar
              mejores decisiones sin apagar la pasión geek.
            </p>
            <div className="classic-actions">
              <a className="classic-button" href="#noticias">
                Explorar noticias
              </a>
              <a className="classic-link" href="#territorios">
                Ver Ofertas Geek →
              </a>
            </div>
          </div>
          <div className="classic-orbit" aria-hidden="true">
            <span className="classic-orbit-ring" />
            <span className="classic-orbit-core">T.</span>
            <span className="classic-orbit-chip chip-one">XP</span>
            <span className="classic-orbit-chip chip-two">₿</span>
            <span className="classic-orbit-chip chip-three">AI</span>
          </div>
        </section>

        {/* Marquee ticker */}
        <div className="classic-marquee" aria-hidden="true">
          <div className="classic-marquee-track">
            <span>
              JUGAR · APRENDER · INVERTIR · IMAGINAR · JUGAR · APRENDER · INVERTIR · IMAGINAR ·&nbsp;
            </span>
            <span>
              JUGAR · APRENDER · INVERTIR · IMAGINAR · JUGAR · APRENDER · INVERTIR · IMAGINAR ·&nbsp;
            </span>
          </div>
        </div>

        {/* LO ÚLTIMO: Publicaciones nuevas como se muestran */}
        <section className="classic-section classic-latest" id="noticias">
          <div className="classic-section-heading">
            <div>
              <p className="classic-kicker">LO ÚLTIMO</p>
              <h2>Explorar noticias</h2>
            </div>
            <a className="classic-link" href="#noticias">
              Ver todas →
            </a>
          </div>

          {leadArticle && (
            <div className="classic-lead-story">
              <div
                className="classic-lead-image cursor-pointer"
                onClick={() => setSelectedArticle(leadArticle)}
              >
                <SiteImage
                  src={leadArticle.image}
                  alt={leadArticle.imageAlt || leadArticle.title}
                  priority={true}
                />
              </div>
              <div className="classic-lead-copy">
                <p className="classic-kicker">NUEVA · {leadArticle.category}</p>
                <h3>
                  <a
                    href={`#${leadArticle.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedArticle(leadArticle);
                    }}
                  >
                    {leadArticle.title}
                  </a>
                </h3>
                <p>{leadArticle.dek}</p>
                <span>
                  {leadArticle.date} · {leadArticle.minutes} min de lectura
                </span>
                <button
                  className="classic-button cursor-pointer"
                  onClick={() => setSelectedArticle(leadArticle)}
                >
                  Leer la noticia
                </button>
              </div>
            </div>
          )}

          <div className="classic-story-grid">
            {companionArticles.map((article) => (
              <StoryCard
                key={article.slug}
                article={article}
                onSelect={setSelectedArticle}
              />
            ))}
          </div>
        </section>

        {/* Mis territorios */}
        <section className="classic-section classic-territories" id="territorios">
          <div className="classic-section-heading">
            <div>
              <p className="classic-kicker">CUATRO PUNTOS, UN MISMO UNIVERSO</p>
              <h2>Mis territorios</h2>
            </div>
          </div>
          <div className="classic-topic-grid">
            <a href="#noticias">
              <span>01</span>
              <h3>
                Tecnología
                <br />
                & IA
              </h3>
              <p>Herramientas, futuro y cambios que ya están ocurriendo.</p>
            </a>
            <a href="#noticias">
              <span>02</span>
              <h3>Gaming</h3>
              <p>Lanzamientos, análisis y decisiones de compra.</p>
            </a>
            <a href="#noticias">
              <span>03</span>
              <h3>
                Finanzas
                <br />
                & cripto
              </h3>
              <p>Mercados y hábitos explicados sin humo.</p>
            </a>
            <a href="#noticias">
              <span>04</span>
              <h3>
                Cómics
                <br />
                & series
              </h3>
              <p>Historias, personajes y universos que vale explorar.</p>
            </a>
          </div>
        </section>

        {/* Portales destacados */}
        <section className="classic-section classic-world-section" id="portales">
          <div className="classic-section-heading">
            <div>
              <p className="classic-kicker">PORTALES DESTACADOS</p>
              <h2>La última noticia de cada mundo</h2>
            </div>
            <a className="classic-link" href="#noticias">
              Ver todas →
            </a>
          </div>
          <div className="classic-world-grid">
            {worlds.map((world) => (
              <article className={`classic-world ${world.tone}`} key={world.category}>
                <div
                  className="classic-world-media cursor-pointer"
                  onClick={() => setSelectedArticle(world.article)}
                >
                  <SiteImage
                    src={world.article.image}
                    alt={world.article.imageAlt || world.article.title}
                  />
                  <span>Última noticia</span>
                </div>
                <div>
                  <p className="classic-kicker">{world.category}</p>
                  <h3>
                    <a
                      href={`#${world.article.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedArticle(world.article);
                      }}
                    >
                      {world.article.title}
                    </a>
                  </h3>
                  <p>{world.article.dek}</p>
                  <div className="classic-world-footer">
                    <span>
                      {world.article.date} · {world.article.minutes} min
                    </span>
                    <button
                      className="classic-link cursor-pointer"
                      onClick={() => setSelectedArticle(world.article)}
                    >
                      Leer ahora →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Sobre mí */}
        <section className="classic-about" id="sobre-mi">
          <div>
            <p className="classic-kicker">EL HUMANO DETRÁS DE LA PANTALLA</p>
            <h2>
              Abogado de profesión,
              <br />
              <em>geek por elección.</em>
            </h2>
          </div>
          <div>
            <p>
              Soy Ezequiel Guerrero. Escribo desde Jujuy sobre tecnología, mercados, videojuegos,
              cómics y las ideas que conectan esos mundos.
            </p>
            <div className="classic-socials">
              <a
                href="https://www.linkedin.com/in/eze-guerrero-06585142b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seguir en LinkedIn ↗
              </a>
              <a
                href="https://www.youtube.com/@eztec3/videos?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Suscribirse en YouTube ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Visor modal para lectura de artículos */}
      <ArticleReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </>
  );
}
