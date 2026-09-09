import type { MetadataRoute } from "next";
import { articles } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.tokengeekcoin.com";
  const newest = articles.reduce((latest, article) => {
    const value = new Date(article.dateIso ?? "2026-08-21");
    return value > latest ? value : latest;
  }, new Date("2026-08-21"));
  const latestFor = (prefix: string) => articles
    .filter((article) => article.slug.startsWith(`${prefix}/`))
    .reduce((latest, article) => {
      const value = new Date(article.dateIso ?? "2026-08-21");
      return value > latest ? value : latest;
    }, new Date("2026-08-21"));
  return [
    { url: `${base}/`, lastModified: newest, changeFrequency: "daily", priority: 1 },
    { url: `${base}/noticias`, lastModified: newest, changeFrequency: "daily", priority: .9 },
    { url: `${base}/tecnologia`, lastModified: latestFor("tecnologia"), changeFrequency: "daily", priority: .85 },
    { url: `${base}/gaming`, lastModified: latestFor("gaming"), changeFrequency: "daily", priority: .85 },
    { url: `${base}/finanzas`, lastModified: latestFor("finanzas"), changeFrequency: "daily", priority: .85 },
    { url: `${base}/comics`, lastModified: latestFor("comics"), changeFrequency: "weekly", priority: .8 },
    { url: `${base}/ofertas`, lastModified: new Date("2026-08-25"), changeFrequency: "daily", priority: .8 },
    { url: `${base}/comparadores`, lastModified: new Date("2026-08-25"), changeFrequency: "weekly", priority: .8 },
    { url: `${base}/autor/ezequiel-guerrero`, lastModified: new Date("2026-09-09"), changeFrequency: "monthly", priority: .6 },
    { url: `${base}/politica-editorial`, lastModified: new Date("2026-09-09"), changeFrequency: "monthly", priority: .5 },
    { url: `${base}/contacto`, lastModified: new Date("2026-09-09"), changeFrequency: "yearly", priority: .4 },
    { url: `${base}/privacidad`, lastModified: new Date("2026-09-09"), changeFrequency: "yearly", priority: .3 },
    { url: `${base}/terminos`, lastModified: new Date("2026-09-09"), changeFrequency: "yearly", priority: .3 },
    ...articles.map((article) => ({
      url: `${base}/${article.slug}`,
      lastModified: new Date(article.dateIso ?? (article.date.includes("25") ? "2026-08-25" : "2026-08-21")),
      changeFrequency: "monthly" as const,
      priority: .8,
      images: [article.image.startsWith("http") ? article.image : `${base}${article.image}`],
    })),
  ];
}
