import { fileURLToPath } from 'node:url';

import ViteVuePlugin from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    resolve: {
      alias: [
        {
          find: '~',
          replacement: fileURLToPath(new URL('src', import.meta.url)),
        }
      ],
    },
    plugins: [
      ViteVuePlugin()
    ],
  };
});
