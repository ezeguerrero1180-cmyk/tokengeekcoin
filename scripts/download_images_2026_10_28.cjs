const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(__dirname, '../public/articles/2026-10-28');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = [
  // AMD & Meta
  {
    name: 'amd-meta-datacenter-hero.jpg',
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1280&h=720&fit=crop&q=80'
  },
  {
    name: 'amd-instinct-silicio.jpg',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1280&h=720&fit=crop&q=80'
  },
  {
    name: 'meta-datacenter-energia.jpg',
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1280&h=720&fit=crop&q=80'
  },
  // Binance AI
  {
    name: 'binance-ai-trading-hero.jpg',
    url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1280&h=720&fit=crop&q=80'
  },
  {
    name: 'crypto-trading-bot-screen.jpg',
    url: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1280&h=720&fit=crop&q=80'
  },
  {
    name: 'binance-analisis-cartera.jpg',
    url: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=1280&h=720&fit=crop&q=80'
  },
  // Malware Yoba
  {
    name: 'malware-yoba-seguridad-hero.jpg',
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1280&h=720&fit=crop&q=80'
  },
  {
    name: 'chatgpt-claude-falso-instalador.jpg',
    url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1280&h=720&fit=crop&q=80'
  },
  {
    name: 'ciberseguridad-alerta-hacker.jpg',
    url: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1280&h=720&fit=crop&q=80'
  },
  // Ripple & Coinbase RLUSD
  {
    name: 'ripple-coinbase-rlusd-hero.jpg',
    url: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1280&h=720&fit=crop&q=80'
  },
  {
    name: 'ripple-rlusd-stablecoin.jpg',
    url: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=1280&h=720&fit=crop&q=80'
  },
  {
    name: 'coinbase-liquidez-mercado.jpg',
    url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1280&h=720&fit=crop&q=80'
  },
  // Logitech CoD MW4
  {
    name: 'logitech-cod-mw4-perifericos-hero.jpg',
    url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1280&h=720&fit=crop&q=80'
  },
  {
    name: 'logitech-g-mouse-teclado.jpg',
    url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1280&h=720&fit=crop&q=80'
  },
  {
    name: 'cod-modern-warfare-4-setup.jpg',
    url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1280&h=720&fit=crop&q=80'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 10000) {
      console.log(`Already exists: ${path.basename(dest)}`);
      return resolve();
    }
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        return reject(new Error(`Status ${response.statusCode} for ${url}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          const stats = fs.statSync(dest);
          if (stats.size < 5000) {
            fs.unlinkSync(dest);
            return reject(new Error(`Downloaded file too small (${stats.size} bytes)`));
          }
          console.log(`Saved: ${path.basename(dest)} (${(stats.size / 1024).toFixed(1)} KB)`);
          resolve();
        });
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting download of missing images to ${targetDir}...`);
  for (const img of images) {
    const dest = path.join(targetDir, img.name);
    try {
      await downloadFile(img.url, dest);
    } catch (err) {
      console.error(`Failed ${img.name}:`, err.message);
      process.exit(1);
    }
  }
  console.log('All 15 images processed successfully!');
}

run();
