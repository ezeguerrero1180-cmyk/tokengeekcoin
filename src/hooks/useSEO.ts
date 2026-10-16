import { useEffect } from 'react';
import { Article } from '../types/article';
import { AppView } from '../App';

interface SEOOptions {
  article: Article | null;
  currentView: AppView;
  activeCategory: string | null;
}

const BASE_URL = 'https://www.tokengeekcoin.com';
const DEFAULT_TITLE = 'TokenGeekCoin — Noticias Geek, Tecnología, IA, Gaming y Finanzas Cripto';
const DEFAULT_DESCRIPTION = 'El portal definitivo para mentes curiosas y geeks: análisis de hardware, modelos de IA, novedades gaming en PS5 y PC, Bitcoin, macroeconomía y cómics al día.';
const DEFAULT_IMAGE = `${BASE_URL}/channel-banner.webp`;

function getCategorySlug(category: string): string {
  const norm = category.toUpperCase();
  if (norm.includes('TECNO') || norm.includes('IA')) return 'tecnologia-ia';
  if (norm.includes('HARDWARE')) return 'hardware';
  if (norm.includes('GAMING') || norm.includes('VIDEO')) return 'gaming';
  if (norm.includes('FINAN') || norm.includes('CRIPTO')) return 'finanzas-cripto';
  if (norm.includes('CÓMIC') || norm.includes('COMIC') || norm.includes('SERIE')) return 'comics-series';
  return encodeURIComponent(category.toLowerCase().replace(/\s+/g, '-'));
}

export function useSEO({ article, currentView, activeCategory }: SEOOptions) {
  useEffect(() => {
    let title = DEFAULT_TITLE;
    let description = DEFAULT_DESCRIPTION;
    let canonicalUrl = `${BASE_URL}/`;
    let ogType = 'website';
    let ogImage = DEFAULT_IMAGE;
    let keywords = 'noticias geek, tecnología, inteligencia artificial, hardware teardown, gaming, playstation, xbox series x, pc gaming, bitcoin, criptomonedas, finanzas descentralizadas, cómics marvel dc, análisis técnico, tokendeck';

    if (article) {
      title = `${article.title} — TokenGeekCoin`;
      description = article.dek || article.body?.[0] || DEFAULT_DESCRIPTION;
      canonicalUrl = `${BASE_URL}/articulo/${article.slug}`;
      ogType = 'article';
      ogImage = article.image
        ? (article.image.startsWith('http') ? article.image : `${BASE_URL}${article.image}`)
        : DEFAULT_IMAGE;
      keywords = `${article.category}, ${article.title}, noticias ${article.category.toLowerCase()}, TokenGeekCoin, análisis técnico, Ezequiel Guerrero`;
    } else if (currentView === 'ofertas') {
      title = 'Ofertas Geek y Hardware — Descuentos en GPUs, Consolas y Gadgets | TokenGeekCoin';
      description = 'Selección diaria de ofertas geek verificadas: tarjetas gráficas, procesadores, accesorios PS5 y PC, consolas y hardware con el mayor descuento real.';
      canonicalUrl = `${BASE_URL}/ofertas`;
      keywords = 'ofertas hardware, descuentos tarjetas gráficas, rebajas consolas, procesadores gaming, chollos geek';
    } else if (currentView === 'comparadores') {
      title = 'Comparadores de Hardware, Consolas y Modelos de IA | TokenGeekCoin';
      description = 'Compara especificaciones técnicas de tarjetas gráficas, consolas de última generación y benchmarks de modelos de inteligencia artificial.';
      canonicalUrl = `${BASE_URL}/comparadores`;
      keywords = 'comparador gpu, comparar consolas ps5 xbox, benchmarks ia, especificaciones hardware, comparador procesadores';
    } else if (currentView === 'sobre-mi') {
      title = 'Sobre Ezequiel Guerrero — TokenGeekCoin | Periodismo Geek Independiente';
      description = 'Conoce a Ezequiel Guerrero: creador de TokenGeekCoin, divulgador de tecnología, gaming, finanzas descentralizadas y cómics desde Jujuy, Argentina.';
      canonicalUrl = `${BASE_URL}/sobre-mi`;
      keywords = 'Ezequiel Guerrero, TokenGeekCoin fundador, periodista geek, divulgador tecnología Jujuy Argentina';
    } else if (activeCategory) {
      const catSlug = getCategorySlug(activeCategory);
      title = `${activeCategory} — Últimas Noticias y Análisis Geek | TokenGeekCoin`;
      description = `Explora todos los análisis, novedades y coberturas especializadas en ${activeCategory} preparadas por la redacción de TokenGeekCoin.`;
      canonicalUrl = `${BASE_URL}/categoria/${catSlug}`;
      keywords = `${activeCategory}, noticias ${activeCategory.toLowerCase()}, actualidad geek, TokenGeekCoin`;
    }

    // Update Document Title
    document.title = title;

    // Helper to safely update or create meta tags
    const setMetaTag = (selector: string, attr: string, value: string) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        const parts = selector.replace(/[\[\]"]/g, '').split('=');
        if (parts.length === 2) {
          meta.setAttribute(parts[0], parts[1]);
          document.head.appendChild(meta);
        }
      }
      meta.setAttribute(attr, value);
    };

    setMetaTag('meta[name="description"]', 'content', description);
    setMetaTag('meta[name="keywords"]', 'content', keywords);
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[property="og:image"]', 'content', ogImage);
    setMetaTag('meta[property="og:image:width"]', 'content', '1200');
    setMetaTag('meta[property="og:image:height"]', 'content', '630');
    setMetaTag('meta[property="og:site_name"]', 'content', 'TokenGeekCoin');
    setMetaTag('meta[property="og:locale"]', 'content', 'es_ES');

    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMetaTag('meta[name="twitter:site"]', 'content', '@TokenGeekCoin');
    setMetaTag('meta[name="twitter:creator"]', 'content', '@TokenGeekCoin');
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:image"]', 'content', ogImage);

    // Article-specific OpenGraph meta tags
    if (article) {
      setMetaTag('meta[property="article:published_time"]', 'content', article.dateIso || '2026-10-16T08:00:00-03:00');
      setMetaTag('meta[property="article:modified_time"]', 'content', article.dateIso || '2026-10-16T08:00:00-03:00');
      setMetaTag('meta[property="article:section"]', 'content', article.category);
      setMetaTag('meta[property="article:author"]', 'content', `${BASE_URL}/sobre-mi`);
      setMetaTag('meta[name="news_keywords"]', 'content', `${article.category}, ${article.title}`);
    } else {
      document.querySelector('meta[property="article:published_time"]')?.remove();
      document.querySelector('meta[property="article:modified_time"]')?.remove();
      document.querySelector('meta[property="article:section"]')?.remove();
      document.querySelector('meta[property="article:author"]')?.remove();
    }

    // Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Dynamic Schema.org JSON-LD Structured Data
    const SCRIPT_ID = 'seo-dynamic-schema';
    let scriptTag = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (article) {
      const catSlug = getCategorySlug(article.category);
      const articleWordCount = (article.body || []).join(' ').split(/\s+/).length;

      const dynamicSchema = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'NewsArticle',
            '@id': `${canonicalUrl}#article`,
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': canonicalUrl,
            },
            'headline': article.title,
            'alternativeHeadline': article.leadTitle || article.title,
            'description': description,
            'image': [ogImage],
            'datePublished': article.dateIso || '2026-10-16T08:00:00-03:00',
            'dateModified': article.dateIso || '2026-10-16T08:00:00-03:00',
            'articleSection': article.category,
            'inLanguage': 'es-ES',
            'wordCount': articleWordCount,
            'author': {
              '@type': 'Person',
              '@id': `${BASE_URL}/sobre-mi#author`,
              'name': 'Ezequiel Guerrero',
              'jobTitle': 'Editor en Jefe',
              'url': `${BASE_URL}/sobre-mi`,
              'sameAs': [
                'https://www.linkedin.com/in/eze-guerrero-06585142b/',
                'https://www.youtube.com/@eztec3/videos'
              ]
            },
            'publisher': {
              '@type': 'NewsMediaOrganization',
              '@id': `${BASE_URL}/#organization`,
              'name': 'TokenGeekCoin',
              'url': `${BASE_URL}/`,
              'logo': {
                '@type': 'ImageObject',
                'url': `${BASE_URL}/tab-icon.png`,
                'width': 512,
                'height': 512,
              },
            },
            'speakable': {
              '@type': 'SpeakableSpecification',
              'cssSelector': ['.article-title', '.lead-paragraph', 'h1', 'h2']
            }
          },
          {
            '@type': 'BreadcrumbList',
            '@id': `${canonicalUrl}#breadcrumb`,
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Portada',
                'item': `${BASE_URL}/`,
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': article.category,
                'item': `${BASE_URL}/categoria/${catSlug}`,
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': article.title,
                'item': canonicalUrl,
              },
            ],
          },
        ],
      };

      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = SCRIPT_ID;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(dynamicSchema);
    } else if (activeCategory) {
      const catSlug = getCategorySlug(activeCategory);
      const categorySchema = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'CollectionPage',
            '@id': `${canonicalUrl}#collection`,
            'url': canonicalUrl,
            'name': `${activeCategory} — TokenGeekCoin`,
            'description': description,
            'inLanguage': 'es-ES',
            'isPartOf': {
              '@type': 'WebSite',
              '@id': `${BASE_URL}/#website`,
            },
          },
          {
            '@type': 'BreadcrumbList',
            '@id': `${canonicalUrl}#breadcrumb`,
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Portada',
                'item': `${BASE_URL}/`,
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': activeCategory,
                'item': canonicalUrl,
              },
            ],
          },
        ],
      };

      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = SCRIPT_ID;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(categorySchema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [article, currentView, activeCategory]);
}
