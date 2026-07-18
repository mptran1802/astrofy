import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mptran1802.github.io', // Added your GitHub Pages URL just in case
  base: '/astrofy', // Matches your repository name for GitHub Pages
  integrations: [mdx(), tailwind()], // <-- Removed sitemap() here
});