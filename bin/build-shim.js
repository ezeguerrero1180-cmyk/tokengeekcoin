#!/usr/bin/env node
import { execSync } from 'node:child_process';

console.log('[TokenGeekCoin Build] Executing build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('[TokenGeekCoin Build] Build completed successfully.');
} catch (error) {
  console.error('[TokenGeekCoin Build] Build failed:', error);
  process.exit(1);
}
