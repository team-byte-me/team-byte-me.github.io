import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://team-byte-me.github.io/',
	base: '/team-byte-me.github.io',
	integrations: [mdx(), sitemap()],
});
