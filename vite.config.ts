import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import autoprefixer from 'autoprefixer';

export const pathResolver = (p: string) => resolve(__dirname, '.', p);

// https://vitejs.dev/config/
// Для GitHub Pages: VITE_BASE_PATH=/имя-репозитория/ (с слэшами по краям)
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  resolve: {
    alias: {
      '@': pathResolver('./src'),
    },
  },
});
