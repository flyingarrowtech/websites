import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion', 'gsap', '@gsap/react'],
          'ui-vendor': ['lucide-react', 'clsx', 'tailwind-merge'],
          'helmet-vendor': ['react-helmet-async'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2015',
  },
})
