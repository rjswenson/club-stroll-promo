import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://clubstrollkc.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
