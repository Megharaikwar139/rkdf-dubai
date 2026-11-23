import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? '/rkdf-dubai/' : '/';

  return {
    base,
    plugins: [
      react(),
      // Automatically rewrite hardcoded /assets/ URLs to include the base path in production
      {
        name: 'assets-base-rewriter',
        enforce: 'pre',
        transform(code, id) {
          if ((id.endsWith('.tsx') || id.endsWith('.ts')) && base !== '/') {
            return {
              code: code.replace(/(["'])\/assets\//g, `$1${base}assets/`),
              map: null,
            };
          }
          return null;
        },
      },
    ],
    server: {
      port: 3000,
      host: true,
    },
  };
});
