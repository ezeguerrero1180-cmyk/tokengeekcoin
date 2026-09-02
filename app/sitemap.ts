import type { MetadataRoute } from "next";
import { articles } from "./site-data";

// La fecha de portada acompaña cada tanda editorial publicada desde GitHub.

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.tokengeekcoin.com";
  return [
    { url: `${base}/`, lastModified: new Date("2026-09-02"), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/noticias`, lastModified: new Date("2026-09-02"), changeFrequency: "daily", priority: .9 },
    { url: `${base}/tecnologia`, lastModified: new Date("2026-09-02"), changeFrequency: "daily", priority: .85 },
    { url: `${base}/gaming`, lastModified: new Date("2026-09-02"), changeFrequency: "daily", priority: .85 },
    { url: `${base}/finanzas`, lastModified: new Date("2026-09-02"), changeFrequency: "daily", priority: .85 },
    { url: `${base}/comics`, lastModified: new Date("2026-09-02"), changeFrequency: "daily", priority: .85 },
    { url: `${base}/ofertas`, lastModified: new Date("2026-08-25"), changeFrequency: "daily", priority: .8 },
    { url: `${base}/comparadores`, lastModified: new Date("2026-08-25"), changeFrequency: "weekly", priority: .8 },
    { url: `${base}/autor/ezequiel-guerrero`, lastModified: new Date("2026-08-25"), changeFrequency: "monthly", priority: .6 },
    { url: `${base}/privacidad`, lastModified: new Date("2026-08-25"), changeFrequency: "yearly", priority: .3 },
    ...articles.map((article) => ({
      url: `${base}/${article.slug}`,
      lastModified: new Date(article.dateIso ?? (article.date.includes("25") ? "2026-08-25" : "2026-08-21")),
      changeFrequency: "monthly" as const,
      priority: .8,
      images: [article.image.startsWith("http") ? article.image : `${base}${article.image}`],
    })),
  ];
}
