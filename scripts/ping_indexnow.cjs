const fs = require('fs');
const path = require('path');

const articlesFilePath = path.join(__dirname, '../src/data/articlesData.json');
const articles = JSON.parse(fs.readFileSync(articlesFilePath, 'utf-8'));

const HOST = 'www.tokengeekcoin.com';
const KEY = 'tokengeekcoin2026indexnow';
const KEY_LOCATION = `https://${HOST}/tokengeekcoin-indexnow-key.txt`;

// Take top 20 latest URLs
const urlList = [
  `https://${HOST}/`,
  `https://${HOST}/ofertas`,
  `https://${HOST}/comparadores`,
  ...articles.slice(0, 20).map(a => `https://${HOST}/articulo/${a.slug}`)
];

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlList
};

async function pingIndexNow() {
  console.log(`[IndexNow] Pinging search engines for ${urlList.length} URLs...`);
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });
    console.log(`[IndexNow] Response status: ${res.status} ${res.statusText}`);
  } catch (err) {
    console.error('[IndexNow] Ping warning (offline or non-critical):', err.message);
  }
}

pingIndexNow();
