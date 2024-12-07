import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';  // To handle the path module

export default defineConfig({
  root: 'src/',
  publicDir: '../public',
  base: './',  // Use a relative base URL
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Ensure JSX is enabled for .js files
  },
  server: {
    host: true,
    open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env),
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@vid': path.resolve(__dirname, 'src/assets/vid'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
    },
  },
});
