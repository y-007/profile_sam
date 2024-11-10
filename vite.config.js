import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/profile_sam/',
  build: {
    rollupOptions: {
      input: 'index.html',
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
      external: [
        '/profile_sam/assets/index-DjStq1bM.css',
        '/profile_sam/assets/index-wqGJMUur.js',
      ],
    },
  },
});
 