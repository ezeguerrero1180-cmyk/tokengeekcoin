import React from 'react';
import { Article } from '../types/article';
import { SiteImage } from './SiteImage';

interface ArticleCardProps {
  article: Article;
  onSelect: (article: Article) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onSelect }) => {
  return (
    <article
      className="story-card haskins-card cursor-pointer group flex flex-col justify-between overflow-hidden"
      onClick={() => onSelect(article)}
    >
      <div className="overflow-hidden bg-[#100b1d] relative">
        <div className="haskins-zoom-img transition-transform duration-500 ease-out">
          <SiteImage
            src={article.image}
            alt={article.imageAlt || article.title}
            category={article.category}
            aspectRatio="video"
          />
        </div>
      </div>
      <div className="card-body">
        <p className="eyebrow flex items-center gap-1.5">
          <span className="text-[var(--mg-orange)] text-[10px] haskins-spin">✦</span>
          <span>{article.category}</span>
        </p>
        <h3>
          <a
            href={`#${article.slug}`}
            className="font-display group-hover:text-[#ff5c35] transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              onSelect(article);
            }}
          >
            {article.title}
          </a>
        </h3>
        <p className="font-sans leading-relaxed text-sm text-stone-600 line-clamp-3">
          {article.dek}
        </p>
        <span className="font-sans text-xs text-stone-500 font-medium pt-3 mt-auto border-t border-stone-200">
          {article.date} · {article.minutes} min de lectura
        </span>
      </div>
    </article>
  );
};

export const StoryCard = ArticleCard;
