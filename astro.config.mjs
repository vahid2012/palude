import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://palude.ir',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  trailingSlash: 'always',
});
