import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://endide.github.io',
  base: '/portfolio-ppp',
  integrations: [mdx(), sitemap(), icon()]
});
