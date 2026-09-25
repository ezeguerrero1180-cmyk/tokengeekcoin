/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import rawArticles from './data/articlesData.json';
import { Article } from './types/article';
import { isNewPublication, sortArticlesTodayFirst } from './utils/articleUtils';
import { Header } from './components/Header';
import { StoryCard } from './components/ArticleCard';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { Footer } from './components/Footer';
import { SiteImage } from './components/SiteImage';
import { OfertasPage } from './components/OfertasPage';
import { ComparadoresPage } from './components/ComparadoresPage';
import { AdSenseUnit } from './components/AdSenseUnit';

export type AppView = 'home' | 'ofertas' | 'comparadores';

const getViewFromUrl = (): AppView => {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (
    path === '/ofertas' ||
    path === '/ofertas/' ||
    hash === '#ofertas' ||
    hash.startsWith('#/ofertas')
  ) {
    return 'ofertas';
  }

  if (
    path === '/comparadores' ||
    path === '/comparadores/' ||
    hash === '#comparadores' ||
    hash.startsWith('#/comparadores')
  ) {
    return 'comparadores';
  }

  return 'home';
};

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>(getViewFromUrl);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Sync with browser back/forward buttons & hash changes
  useEffect(() => {
    // Ensure Google AdSense script is active in head
    const adsenseSrc = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2403075217116144';
    if (!document.querySelector(`script[src*="ca-pub-2403075217116144"]`)) {
      const script = document.createElement('script');
      script.src = adsenseSrc;
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }

    const handleLocationChange = () => {
      setCurrentView(getViewFromUrl());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = useCallback((view: AppView, hash?: string) => {
    setCurrentView(view);
    if (view === 'ofertas') {
      window.history.pushState(null, '', '/ofertas');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'comparadores') {
      window.history.pushState(null, '', '/comparadores');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState(null, '', hash || '/');
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            return;
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, []);

  // State for active category clicked in "Mi Universo"
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // All articles sorted with today's first
  const allArticles: Article[] = useMemo(() => {
    return sortArticlesTodayFirst(rawArticles as Article[]);
  }, []);

  // ONLY NEW PUBLICATIONS (today's news - 25 SEP 2026)
  const newArticles: Article[] = useMemo(() => {
    return allArticles.filter(isNewPublication);
  }, [allArticles]);

  const leadArticle: Article = newArticles[0] || allArticles[0];
  const companionArticles: Article[] = newArticles.slice(1, 4);

  // Metadata for the 4 categories in "Mi Universo"
  const categoriesMeta = useMemo(() => {
    return [
      {
        id: 'TECNOLOGÍA + IA',
        num: '01',
        title: 'Tecnología & IA',
        desc: 'Herramientas, modelos de IA, novedades y cambios que ya están ocurriendo.',
      },
      {
        id: 'GAMING',
        num: '02',
        title: 'Gaming',
        desc: 'Lanzamientos, análisis, consolas, hardware y decisiones de compra.',
      },
      {
        id: 'FINANZAS + CRIPTO',
        num: '03',
        title: 'Finanzas & Cripto',
        desc: 'Mercados, Bitcoin, ETF, tasas de interés y hábitos explicados sin humo.',
      },
      {
        id: 'CÓMICS + SERIES',
        num: '04',
        title: 'Cómics & Series',
        desc: 'Historias, universos cinematográficos, adaptaciones y novelas gráficas.',
      },
    ].map((cat) => ({
      ...cat,
      count: allArticles.filter((a) => a.category === cat.id).length,
    }));
  }, [allArticles]);

  // Articles filtered when a category is selected in "Mi Universo"
  const categoryArticles: Article[] = useMemo(() => {
    if (!activeCategory) return [];
    return allArticles.filter((a) => a.category === activeCategory);
  }, [allArticles, activeCategory]);

  const handleCategoryClick = useCallback((categoryId: string) => {
    setActiveCategory((prev) => {
      if (prev === categoryId) {
        return null;
      }
      setTimeout(() => {
        const el = document.getElementById('categoria-noticias');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
      return categoryId;
    });
  }, []);

  return (
    <>
      {/* Header presente en todas las vistas */}
      <Header onNavigate={navigateTo} currentView={currentView} />

      {currentView === 'ofertas' && (
        <main className="classic-home">
          <OfertasPage onBackToHome={() => navigateTo('home')} />
        </main>
      )}

      {currentView === 'comparadores' && (
        <main className="classic-home">
          <ComparadoresPage onBackToHome={() => navigateTo('home')} />
        </main>
      )}

      {currentView === 'home' && (
        <main className="classic-home">
          {/* LO ÚLTIMO ARRIBA: Publicaciones del día en portada principal */}
          <section className="classic-section classic-latest" id="noticias" style={{ paddingTop: '42px' }}>
            <div className="classic-section-heading">
              <div>
                <p className="classic-kicker">LO ÚLTIMO · NOTICIAS DE HOY</p>
                <h2>Últimas noticias</h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase font-mono tracking-widest text-[#a8a29e] hidden sm:inline">
                  25 SEP 2026 · {newArticles.length} publicaciones de hoy
                </span>
              </div>
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
                    objectFit="contain"
                    aspectRatio="auto"
                    className="w-full h-full flex items-center justify-center bg-transparent"
                  />
                </div>
                <div className="classic-lead-copy">
                  <p className="classic-kicker">HOY · {leadArticle.category}</p>
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
                    Leer la noticia →
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

          {/* Anuncio AdSense entre portada y Mi Universo */}
          <div className="max-w-6xl mx-auto px-4 my-6">
            <AdSenseUnit label="PUBLICIDAD — GOOGLE ADSENSE" />
          </div>

          {/* MI UNIVERSO: Accesos a las cuatro categorías temáticas */}
          <section className="classic-section classic-territories" id="mi-universo">
            <div className="classic-section-heading">
              <div>
                <p className="classic-kicker">CUATRO PUNTOS, UN MISMO UNIVERSO</p>
                <h2>Mi universo</h2>
                <p style={{ marginTop: '10px', color: 'rgba(255,255,255,0.88)', maxWidth: '640px', lineHeight: 1.5 }}>
                  Haz clic en cualquiera de las cuatro ramas para desplegar y consultar todas sus noticias.
                </p>
              </div>
              {activeCategory && (
                <button
                  className="classic-button cursor-pointer"
                  onClick={() => setActiveCategory(null)}
                  style={{ background: '#1c1917', color: '#f5f5f4', border: '1px solid #78716c' }}
                >
                  ✕ Cerrar categoría
                </button>
              )}
            </div>

            <div className="classic-topic-grid">
              {categoriesMeta.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    className={`cursor-pointer ${isActive ? 'is-active ring-4 ring-[#d8ff3e]' : ''}`}
                    onClick={() => handleCategoryClick(cat.id)}
                    aria-expanded={isActive}
                  >
                    <span>{cat.num} · {isActive ? 'VIENDO NOTICIAS' : 'CLIC PARA EXPLORAR'}</span>
                    <h3>{cat.title}</h3>
                    <p>{cat.desc}</p>
                    <div style={{ marginTop: 'auto', paddingTop: '16px', fontWeight: 900, fontSize: '0.85rem' }}>
                      {isActive ? '▲ Ocultar noticias' : `▼ Ver noticias (${cat.count}) →`}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* SECCIÓN DESPLEGABLE: Solo se muestra al hacer clic en una categoría */}
          {activeCategory && (
            <section
              className="classic-section classic-latest"
              id="categoria-noticias"
              style={{
                background: '#09070e',
                borderTop: '5px solid var(--mg-acid)',
                borderBottom: '5px solid var(--mg-acid)',
              }}
            >
              <div className="classic-section-heading">
                <div>
                  <p className="classic-kicker" style={{ color: 'var(--mg-acid)' }}>
                    EXPLORANDO TERRITORIO
                  </p>
                  <h2 style={{ color: '#fff' }}>Noticias de {activeCategory}</h2>
                  <p style={{ marginTop: '6px', color: '#a8a29e', fontSize: '0.95rem' }}>
                    Mostrando {categoryArticles.length} artículos publicados en este territorio
                  </p>
                </div>
                <button
                  className="classic-button cursor-pointer"
                  onClick={() => setActiveCategory(null)}
                  style={{ background: 'var(--mg-acid)', color: '#000', fontWeight: 900 }}
                >
                  ✕ Ocultar sección
                </button>
              </div>

              <div className="classic-story-grid">
                {categoryArticles.map((article) => (
                  <StoryCard
                    key={article.slug}
                    article={article}
                    onSelect={setSelectedArticle}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Anuncio AdSense antes de Sobre mí */}
          <div className="max-w-6xl mx-auto px-4 my-6">
            <AdSenseUnit label="PUBLICIDAD RECOMENDADA" />
          </div>

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
      )}

      {/* Footer presente en todas las vistas */}
      <Footer onNavigate={navigateTo} />

      {/* Visor modal para lectura de artículos */}
      <ArticleReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </>
  );
}
