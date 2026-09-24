// Safeguard to prevent "Cannot set property fetch of #<Window> which has only a getter"
try {
  if (typeof window !== 'undefined') {
    const desc = Object.getOwnPropertyDescriptor(window, 'fetch');
    if (!desc || (!desc.set && desc.configurable)) {
      const orig = window.fetch ? window.fetch.bind(window) : null;
      let curr = orig;
      Object.defineProperty(window, 'fetch', {
        get() {
          return curr;
        },
        set(val) {
          curr = val;
        },
        configurable: true,
        enumerable: true,
      });
    }
  }
} catch {
  // ignore
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
