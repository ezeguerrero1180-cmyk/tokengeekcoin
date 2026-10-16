const fs = require('fs');
const path = require('path');

const articlesFilePath = path.join(__dirname, '../src/data/articlesData.json');
const rssFilePath = path.join(__dirname, '../public/rss.xml');
const articles = JSON.parse(fs.readFileSync(articlesFilePath, 'utf-8'));

function escapeXml(unsafe) {
  return (unsafe || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const BASE_URL = 'https://www.tokengeekcoin.com';
const buildDate = new Date().toUTCString();

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:media="http://search.yahoo.com/mrss/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>TokenGeekCoin — Noticias Geek, Tecnología, IA, Gaming y Finanzas Cripto</title>
    <link>${BASE_URL}/</link>
    <description>Análisis técnico independiente, novedades de hardware, modelos de IA, gaming y macroeconomía cripto explicados sin humo con cobertura diaria.</description>
    <language>es-ES</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${BASE_URL}/tab-icon.png</url>
      <title>TokenGeekCoin</title>
      <link>${BASE_URL}/</link>
    </image>
`;

// Include latest 50 articles in RSS feed for fast syndication
const latestArticles = articles.slice(0, 50);

for (const a of latestArticles) {
  const itemUrl = `${BASE_URL}/articulo/${a.slug}`;
  const pubDate = a.dateIso ? new Date(a.dateIso).toUTCString() : buildDate;
  const imgUrl = a.image && a.image.startsWith('http') ? a.image : `${BASE_URL}${a.image}`;

  const bodyHtml = (a.body || [])
    .map(p => `<p>${p}</p>`)
    .join('');

  const bulletsHtml = (a.bullets && a.bullets.length > 0)
    ? `<ul>${a.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`
    : '';

  const fullContent = `${bodyHtml}${bulletsHtml}`;

  xml += `    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>${itemUrl}</link>
      <guid isPermaLink="true">${itemUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <dc:creator>Ezequiel Guerrero</dc:creator>
      <category><![CDATA[${a.category}]]></category>
      <description><![CDATA[${a.dek || a.title}]]></description>
      <content:encoded><![CDATA[${fullContent}]]></content:encoded>
      <enclosure url="${imgUrl}" length="500000" type="image/jpeg"/>
      <media:content url="${imgUrl}" medium="image">
        <media:title><![CDATA[${a.imageAlt || a.title}]]></media:title>
      </media:content>
    </item>
`;
}

xml += `  </channel>
</rss>\n`;

fs.writeFileSync(rssFilePath, xml, 'utf-8');
console.log(`Generated RSS feed at public/rss.xml with ${latestArticles.length} entries.`);
