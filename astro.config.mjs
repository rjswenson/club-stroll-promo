import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://club-stroll.7un.me',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
