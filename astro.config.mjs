import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        i18n: {
          structure: 'multiple_folders',
          locales: ['en', 'cs'],
        },
        collections: [
          {
            name: 'posts',
            label: 'Blog Posts',
            folder: 'src/posts',
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Post Title', i18n: true },
              { name: 'slug', widget: 'string', label: 'Post URL', i18n: true },
              { name: 'body', widget: 'markdown', label: 'Post Body', i18n: true },
            ],
            i18n: true,
          },
        ],
      },
    }),
  ],
});
