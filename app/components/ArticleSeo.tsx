import JsonLd from "./JsonLd";
import {
  absoluteUrl,
  AUTHOR_NAME,
  AUTHOR_URL,
  SITE_NAME,
  SITE_URL,
  type ArticleSeoData,
} from "../seo";

export default function ArticleSeo({ article }: { article: ArticleSeoData }) {
  const articleUrl = absoluteUrl(article.path);
  const imageUrl = absoluteUrl(article.image);

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "NewsArticle",
            "@id": articleUrl + "#article",
            mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
            headline: article.title,
            description: article.description,
            image: [{ "@type": "ImageObject", url: imageUrl, caption: article.imageAlt }],
            datePublished: article.datePublished,
            author: {
              "@type": "Person",
              "@id": AUTHOR_URL + "#person",
              name: AUTHOR_NAME,
              url: AUTHOR_URL,
              sameAs: ["https://www.linkedin.com/in/eze-guerrero-06585142b/"],
            },
            publisher: {
              "@type": "Organization",
              "@id": SITE_URL + "/#organization",
              name: SITE_NAME,
              url: SITE_URL,
              logo: {
                "@type": "ImageObject",
                url: SITE_URL + "/logo-512.svg",
                width: 512,
                height: 512,
              },
            },
            articleSection: article.section,
            inLanguage: "es-AR",
            isAccessibleForFree: true,
          },
          {
            "@type": "BreadcrumbList",
            "@id": articleUrl + "#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: article.section, item: SITE_URL + "/noticias" },
              { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
            ],
          },
        ],
      }}
    />
  );
}

