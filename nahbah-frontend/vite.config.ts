import path from "path"
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable minification
    minify: 'terser',
    
    // Rollup options for code splitting
    rollupOptions: {
      output: {
        // ✅ SAFER: Use object-based chunking instead of function
        manualChunks: {
          // Keep all React-related in one chunk
          'react-vendor': ['react', 'react-dom', 'react/jsx-runtime'],
          
          // Router in separate chunk
          'router-vendor': ['react-router-dom'],
          
          // i18n in separate chunk
          'i18n-vendor': ['react-i18next', 'i18next'],
        },
      },
    },
    
    // Chunk size warning limit
    chunkSizeWarningLimit: 500,
  },
})
