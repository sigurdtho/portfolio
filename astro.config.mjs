import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // Swap to your own domain when deploying
  // site: 'https://yourname.no',
});
