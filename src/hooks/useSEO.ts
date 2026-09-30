import { useEffect } from 'react';
import { Article } from '../types/article';
import { AppView } from '../App';

interface SEOOptions {
  article: Article | null;
  currentView: AppView;
  activeCategory: string | null;
}

const BASE_URL = 'https://tokengeekcoin.com';
const DEFAULT_TITLE = 'TokenGeekCoin — Noticias Geek, Tecnología, IA, Gaming y Finanzas Cripto';
const DEFAULT_DESCRIPTION = 'El portal definitivo para mentes curiosas y geeks: análisis de hardware, modelos de IA, novedades gaming en PS5 y PC, Bitcoin, macroeconomía y cómics al día.';
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80';

export function useSEO({ article, currentView, activeCategory }: SEOOptions) {
  useEffect(() => {
    let title = DEFAULT_TITLE;
    let description = DEFAULT_DESCRIPTION;
    let canonicalUrl = `${BASE_URL}/`;
    let ogType = 'website';
    let ogImage = DEFAULT_IMAGE;

    if (article) {
      title = `${article.title} — TokenGeekCoin`;
      description = article.dek || article.body?.[0] || DEFAULT_DESCRIPTION;
      canonicalUrl = `${BASE_URL}/${article.slug}`;
      ogType = 'article';
      ogImage = article.image || DEFAULT_IMAGE;
    } else if (currentView === 'ofertas') {
      title = 'Ofertas Geek y Hardware — Descuentos en GPUs, Consolas y Gadgets | TokenGeekCoin';
      description = 'Selección diaria de ofertas geek verificadas: tarjetas gráficas, procesadores, accesorios PS5 y PC, consolas y hardware con el mayor descuento real.';
      canonicalUrl = `${BASE_URL}/ofertas`;
    } else if (currentView === 'comparadores') {
      title = 'Comparadores de Hardware, Consolas y Modelos de IA | TokenGeekCoin';
      description = 'Compara especificaciones técnicas de tarjetas gráficas, consolas de última generación y benchmarks de modelos de inteligencia artificial.';
      canonicalUrl = `${BASE_URL}/comparadores`;
    } else if (currentView === 'sobre-mi') {
      title = 'Sobre Ezequiel Guerrero — TokenGeekCoin | Periodismo Geek Independiente';
      description = 'Conoce a Ezequiel Guerrero: creador de TokenGeekCoin, divulgador de tecnología, gaming, finanzas descentralizadas y cómics desde Jujuy, Argentina.';
      canonicalUrl = `${BASE_URL}/sobre-mi`;
    } else if (activeCategory) {
      title = `${activeCategory} — Últimas Noticias y Análisis Geek | TokenGeekCoin`;
      description = `Explora todos los análisis, novedades y coberturas especializadas en ${activeCategory} preparadas por la redacción de TokenGeekCoin.`;
      canonicalUrl = `${BASE_URL}/#categoria-${encodeURIComponent(activeCategory.toLowerCase())}`;
    }

    // Update Document Title
    document.title = title;

    // Helper to safely update meta tags
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
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[property="og:image"]', 'content', ogImage);

    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:image"]', 'content', ogImage);

    // Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Manage Dynamic Schema.org JSON-LD for Articles
    const SCRIPT_ID = 'seo-dynamic-article-schema';
    let scriptTag = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (article) {
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
        'headline': article.title,
        'description': description,
        'image': [ogImage],
        'datePublished': article.dateIso || '2026-09-30T09:00:00Z',
        'dateModified': article.dateIso || '2026-09-30T09:00:00Z',
        'articleSection': article.category,
        'inLanguage': 'es',
        'author': {
          '@type': 'Person',
          'name': 'Ezequiel Guerrero',
          'jobTitle': 'Editor en Jefe',
          'url': `${BASE_URL}/sobre-mi`,
        },
        'publisher': {
          '@type': 'NewsMediaOrganization',
          'name': 'TokenGeekCoin',
          'url': BASE_URL,
          'logo': {
            '@type': 'ImageObject',
            'url': `${BASE_URL}/tab-icon.png`,
          },
        },
      };

      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = SCRIPT_ID;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(articleSchema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [article, currentView, activeCategory]);
}
