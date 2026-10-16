const fs = require('fs');
const path = require('path');

const articlesFilePath = path.join(__dirname, '../src/data/articlesData.json');
const sitemapFilePath = path.join(__dirname, '../public/sitemap.xml');
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

const staticUrls = [
  { loc: `${BASE_URL}/`, changefreq: 'daily', priority: '1.0' },
  { loc: `${BASE_URL}/ofertas`, changefreq: 'daily', priority: '0.9' },
  { loc: `${BASE_URL}/comparadores`, changefreq: 'weekly', priority: '0.8' },
  { loc: `${BASE_URL}/sobre-mi`, changefreq: 'monthly', priority: '0.7' },
  { loc: `${BASE_URL}/quienes-somos`, changefreq: 'monthly', priority: '0.6' },
  { loc: `${BASE_URL}/contacto`, changefreq: 'monthly', priority: '0.6' },
  { loc: `${BASE_URL}/categoria/tecnologia-ia`, changefreq: 'daily', priority: '0.8' },
  { loc: `${BASE_URL}/categoria/hardware`, changefreq: 'daily', priority: '0.8' },
  { loc: `${BASE_URL}/categoria/gaming`, changefreq: 'daily', priority: '0.8' },
  { loc: `${BASE_URL}/categoria/finanzas-cripto`, changefreq: 'daily', priority: '0.8' },
  { loc: `${BASE_URL}/categoria/comics-series`, changefreq: 'daily', priority: '0.8' },
  { loc: `${BASE_URL}/politica-de-privacidad`, changefreq: 'yearly', priority: '0.3' },
  { loc: `${BASE_URL}/terminos-y-condiciones`, changefreq: 'yearly', priority: '0.3' },
  { loc: `${BASE_URL}/aviso-legal`, changefreq: 'yearly', priority: '0.3' },
  { loc: `${BASE_URL}/politica-de-cookies`, changefreq: 'yearly', priority: '0.3' },
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

for (const s of staticUrls) {
  xml += `  <url>
    <loc>${s.loc}</loc>
    <changefreq>${s.changefreq}</changefreq>
    <priority>${s.priority}</priority>
  </url>
`;
}

for (const a of articles) {
  const url = `${BASE_URL}/articulo/${a.slug}`;
  const lastmod = a.dateIso ? a.dateIso.split('T')[0] : '2026-10-16';
  const pubDate = a.dateIso || '2026-10-16T08:00:00-03:00';
  const imgLoc = a.image && a.image.startsWith('http') ? a.image : `${BASE_URL}${a.image}`;

  xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <news:news>
      <news:publication>
        <news:name>TokenGeekCoin</news:name>
        <news:language>es</news:language>
      </news:publication>
      <news:publication_date>${pubDate}</news:publication_date>
      <news:title>${escapeXml(a.title)}</news:title>
    </news:news>
    <image:image>
      <image:loc>${imgLoc}</image:loc>
      <image:title>${escapeXml(a.imageAlt || a.title)}</image:title>
    </image:image>
  </url>
`;
}

xml += `</urlset>\n`;

fs.writeFileSync(sitemapFilePath, xml, 'utf-8');
console.log(`Generated canonical sitemap at public/sitemap.xml with ${articles.length} articles.`);
