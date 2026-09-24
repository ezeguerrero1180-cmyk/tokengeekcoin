export type NewsCategory = 
  | 'Todas'
  | 'Actualidad'
  | 'Economía'
  | 'Tecnología'
  | 'Mundo'
  | 'Deportes'
  | 'Cultura'
  | 'Ciencia y Clima';

export interface Author {
  name: string;
  role: string;
  avatar?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  content: string[]; // Multi-paragraph content for full reading experience
  category: Exclude<NewsCategory, 'Todas'>;
  author: Author;
  publishedAt: string; // ISO string
  relativeTimeStr?: string;
  imageUrl: string;
  imageCaption?: string;
  isBreaking?: boolean;
  isHero?: boolean;
  readTime: string; // e.g. "4 min de lectura"
  location?: string;
  tags: string[];
  viewsCount: number;
  commentsCount: number;
}

export type ViewFilter = 'today-first' | 'today-only' | 'all';
