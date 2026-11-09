import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://albertfrank-kaiminghuang.github.io',
  output: 'static',

  redirects: {
    '/life': '/life/music',
  },
});
