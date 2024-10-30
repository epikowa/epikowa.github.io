// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { astroImageTools } from 'astro-imagetools';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/blog': '/blog/1'
  },
  integrations: [tailwind(), astroImageTools, mdx({
    syntaxHighlight: false,
    rehypePlugins: [
      /**
       * Adds ids to headings
       */
      rehypeSlug,
      [
        /**
         * Enhances code blocks with syntax highlighting, line numbers,
         * titles, and allows highlighting specific lines and words
         */

        rehypePrettyCode,
        {
          theme: 'github-dark',
        },
      ],
    ],
  }), icon()]
});