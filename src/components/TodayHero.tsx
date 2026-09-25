import React from 'react';
import { Article } from '../types/article';
import { SiteImage } from './SiteImage';
import { Clock, Bookmark, ArrowRight, Flame, Sparkles } from 'lucide-react';

interface TodayHeroProps {
  todayArticles: Article[];
  onSelectArticle: (article: Article) => void;
  isBookmarked: (slug: string) => boolean;
  onToggleBookmark: (article: Article) => void;
}

export const TodayHero: React.FC<TodayHeroProps> = ({
  todayArticles,
  onSelectArticle,
  isBookmarked,
  onToggleBookmark,
}) => {
  if (!todayArticles || todayArticles.length === 0) return null;

  const leadArticle = todayArticles[0];
  const sideArticles = todayArticles.slice(1, 4);
  const extraToday = todayArticles.slice(4);

  return (
    <section className="mb-12 border-b-2 border-stone-900 pb-10">
      {/* Section Header / Kicker */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-stone-300 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#ff5c35] animate-pulse" />
          <h2 className="text-xs md:text-sm font-black tracking-widest uppercase text-stone-900 flex items-center gap-1.5">
            <span>EN PORTADA</span>
            <span className="text-stone-400">/</span>
            <span className="text-[#ff5c35]">NOTICIAS DE HOY</span>
          </h2>
        </div>
        <div className="text-xs text-stone-500 font-medium">
          Edición 24 SEP 2026 · {todayArticles.length} noticias publicadas hoy
        </div>
      </div>

      {/* Main Grid: Hero Article + Side Stories */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Lead Article (Left 7 or 8 columns) */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between group">
          {/* Main Hero Image */}
          <div
            className="cursor-pointer overflow-hidden rounded-xs mb-4 shadow-sm"
            onClick={() => onSelectArticle(leadArticle)}
          >
            <SiteImage
              src={leadArticle.image}
              alt={leadArticle.imageAlt || leadArticle.title}
              category={leadArticle.category}
              aspectRatio="video"
              priority={true}
              className="w-full"
            />
          </div>

          {/* Lead Content */}
          <div>
            {/* Metadata (Zero-pill text discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600 mb-2">
              <span className="font-bold text-[#ff5c35] uppercase tracking-wider">
                {leadArticle.category}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-stone-900">HOY</span>
              <span aria-hidden="true">·</span>
              <span>{leadArticle.minutes} min de lectura</span>
              <span aria-hidden="true">·</span>
              <span>Por Ezequiel Guerrero</span>
            </div>

            {/* Title */}
            <h3
              onClick={() => onSelectArticle(leadArticle)}
              className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-stone-950 leading-tight hover:text-[#ff5c35] transition-colors cursor-pointer mb-3"
            >
              {leadArticle.title}
            </h3>

            {/* Dek / Subtitle */}
            <p className="text-sm md:text-base text-stone-700 leading-relaxed line-clamp-3 mb-4">
              {leadArticle.dek}
            </p>

            {/* Action Bar */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => onSelectArticle(leadArticle)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-stone-950 text-[#d8ff3e] hover:bg-stone-800 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
              >
                <span>Leer Noticia Completa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onToggleBookmark(leadArticle)}
                className={`p-2 border rounded-sm transition-colors text-xs flex items-center gap-1.5 ${
                  isBookmarked(leadArticle.slug)
                    ? 'border-stone-900 bg-stone-900 text-[#d8ff3e]'
                    : 'border-stone-300 hover:border-stone-500 text-stone-700'
                }`}
                title={isBookmarked(leadArticle.slug) ? 'Guardado' : 'Guardar para leer después'}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">
                  {isBookmarked(leadArticle.slug) ? 'Guardado' : 'Guardar'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Side Column: Other Today's News (Right 5 or 4 columns) */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col divide-y divide-stone-200">
          <div className="pb-3 mb-2 flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-[#ff5c35]" />
              También ocurrido hoy
            </span>
            <span className="text-[11px] text-stone-500 font-sans font-bold">Edición matutina</span>
          </div>

          {sideArticles.map((article) => (
            <article
              key={article.slug}
              className="py-4 first:pt-2 group cursor-pointer"
              onClick={() => onSelectArticle(article)}
            >
              <div className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-8">
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-500 mb-1">
                    <span className="font-bold text-stone-900 uppercase">
                      {article.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#ff5c35] font-semibold">Hoy</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.minutes} min</span>
                  </div>
                  <h4 className="font-sans text-sm sm:text-base font-bold text-stone-900 group-hover:text-[#ff5c35] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-2 mt-1">
                    {article.dek}
                  </p>
                </div>
                <div className="col-span-4 overflow-hidden rounded-xs">
                  <SiteImage
                    src={article.image}
                    alt={article.imageAlt || article.title}
                    category={article.category}
                    aspectRatio="video"
                    className="w-full"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Extra Today Articles Strip (if more than 4 today's articles) */}
      {extraToday.length > 0 && (
        <div className="mt-8 pt-6 border-t border-stone-200">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4">
            Más novedades de hoy en el portal:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extraToday.map((article) => (
              <div
                key={article.slug}
                onClick={() => onSelectArticle(article)}
                className="flex gap-4 items-start p-3 bg-white/70 border border-stone-200 rounded-sm hover:border-stone-400 transition-all cursor-pointer group shadow-2xs"
              >
                <div className="w-24 shrink-0 rounded-xs overflow-hidden">
                  <SiteImage
                    src={article.image}
                    alt={article.imageAlt || article.title}
                    category={article.category}
                    aspectRatio="video"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 text-[11px] text-stone-500 mb-0.5">
                    <span className="font-bold text-stone-800">{article.category}</span>
                    <span>·</span>
                    <span className="text-[#ff5c35]">Hoy</span>
                  </div>
                  <h5 className="font-sans text-xs sm:text-sm font-bold text-stone-900 group-hover:text-[#ff5c35] transition-colors line-clamp-2">
                    {article.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
