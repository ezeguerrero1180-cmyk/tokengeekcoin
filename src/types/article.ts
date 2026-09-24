export interface ArticleFeature {
  title: string;
  eyebrow?: string;
  facts?: string | string[];
  image?: string;
  alt?: string;
  imageAlt?: string;
  imageCredit?: string;
  body?: string | string[];
}

export interface ArticleSource {
  name: string;
  url: string;
}

export interface ArticleAffiliate {
  url: string;
  title: string;
  copy: string;
  image: string;
}

export interface Article {
  slug: string;
  category: string;
  date: string;
  dateIso?: string;
  minutes: number;
  title: string;
  dek: string;
  personalAngle?: string;
  leadEyebrow?: string;
  leadTitle?: string;
  image: string;
  imageAlt?: string;
  imageCredit?: string;
  body: string[];
  features?: ArticleFeature[];
  bullets?: string[];
  sources?: ArticleSource[];
  sourceUrl?: string;
  sourceName?: string;
  affiliate?: ArticleAffiliate;
}

export type CategoryFilterType = 
  | 'TODAS'
  | 'HOY'
  | 'SOLO_HOY'
  | 'GAMING'
  | 'TECNOLOGÍA + IA'
  | 'FINANZAS + CRIPTO'
  | 'CÓMICS + SERIES';
