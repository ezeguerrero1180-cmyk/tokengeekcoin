import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "../../site-data";
import StandardArticle from "../../components/StandardArticle";

type Props = { params: Promise<{ category: string; slug: string }> };

const dedicatedRoutes = new Set([
  "gaming/bombazos-gamescom-2026",
  "gaming/lanzamientos-playstation-agosto-2026",
  "gaming/mejores-juegos-septiembre-2026",
  "comics/anime-futuro-tecnologia-portafolio",
  "comics/lanterns-capitulo-2-sinestro-antaan",
  "comics/lanterns-primer-episodio-ritmo-lento",
  "finanzas/bitcoin-bessent-reserva-federal",
  "finanzas/guia-geek-inversionista-portafolio-crypto",
]);

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 300;

export function generateStaticParams() {
  return articles.filter((article) => !dedicatedRoutes.has(article.slug)).map((article) => {
    const [category, slug] = article.slug.split("/");
    return { category, slug };
  });
}

function find(category: string, slug: string) {
  return articles.find((article) => article.slug === `${category}/${slug}`);
}

function publishedDate(date: string, iso?: string) {
  if (iso) return iso;
  return date.includes("25") ? "2026-08-25T12:00:00-03:00" : "2026-08-21T12:00:00-03:00";
}

function absoluteImage(image: string) {
  return image.startsWith("http://") || image.startsWith("https://") ? image : `https://www.tokengeekcoin.com${image}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const route = await params;
  const article = find(route.category, route.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.dek,
    alternates: { canonical: `/${article.slug}` },
    openGraph: { title: article.title, description: article.dek, url: `/${article.slug}`, type: "article", images: [{ url: article.image, alt: article.imageAlt }] },
    twitter: { card: "summary_large_image", title: article.title, description: article.dek, images: [article.image] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const route = await params;
  const article = find(route.category, route.slug);
  if (!article) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.dek,
    image: [article.image, ...(article.features?.map((feature) => feature.image) ?? [])].map(absoluteImage),
    datePublished: publishedDate(article.date, article.dateIso),
    author: { "@type": "Person", name: "Ezequiel Guerrero", url: "https://www.tokengeekcoin.com/autor/ezequiel-guerrero" },
    publisher: { "@type": "Organization", name: "TokenGeekCoin" },
    mainEntityOfPage: `https://www.tokengeekcoin.com/${article.slug}`,
  };

  return <StandardArticle article={article} schema={schema} published={publishedDate(article.date, article.dateIso)} />;
}
