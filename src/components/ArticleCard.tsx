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
      className="story-card cursor-pointer"
      onClick={() => onSelect(article)}
    >
      <SiteImage
        src={article.image}
        alt={article.imageAlt || article.title}
        category={article.category}
        aspectRatio="video"
      />
      <div className="card-body">
        <p className="eyebrow">{article.category}</p>
        <h3>
          <a
            href={`#${article.slug}`}
            onClick={(e) => {
              e.preventDefault();
              onSelect(article);
            }}
          >
            {article.title}
          </a>
        </h3>
        <p>{article.dek}</p>
        <span>
          {article.date} · {article.minutes} min
        </span>
      </div>
    </article>
  );
};

export const StoryCard = ArticleCard;
