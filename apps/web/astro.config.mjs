import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  site: 'https://{{project-name}}.pages.dev',
  vite: {
    resolve: {
      alias: {
        '@app/shared': '../../packages/shared/src/index.ts',
      },
    },
  },
});
