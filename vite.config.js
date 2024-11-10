import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/profile_sam/',  // Ensure this is correct
  build: {
    rollupOptions: {
      input: 'index.html',  // Ensure this matches your entry file
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
