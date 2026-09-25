import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const distDir = path.resolve('dist');
const clientDir = path.join(distDir, 'client');
const serverDir = path.join(distDir, 'server');

// 1. Create static fallback HTML files for direct route access
const indexHtmlPath = path.join(distDir, 'index.html');
if (fs.existsSync(indexHtmlPath)) {
  const routes = ['ofertas', 'comparadores'];
  for (const route of routes) {
    const routeDir = path.join(distDir, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.copyFileSync(indexHtmlPath, path.join(routeDir, 'index.html'));
  }
}

// 2. Create dist/client if not existing
if (!fs.existsSync(clientDir)) {
  fs.mkdirSync(clientDir, { recursive: true });
}

// 3. Copy static files into dist/client for compatibility with setups expecting ./dist/client
const items = fs.readdirSync(distDir);
for (const item of items) {
  if (item === 'client' || item === 'server') continue;
  const src = path.join(distDir, item);
  const dest = path.join(clientDir, item);
  fs.cpSync(src, dest, { recursive: true });
}

// 4. Ensure worker bundle exists in dist/server/index.js
if (!fs.existsSync(serverDir)) {
  fs.mkdirSync(serverDir, { recursive: true });
}

try {
  execSync('./node_modules/.bin/esbuild worker/index.ts --bundle --format=esm --target=es2022 --platform=browser --outfile=dist/server/index.js', {
    stdio: 'inherit',
  });
  console.log('[Cloudflare Prepare] dist/client and dist/server/index.js prepared successfully.');
} catch (err) {
  console.error('[Cloudflare Prepare] Failed to bundle worker:', err);
  process.exit(1);
}
