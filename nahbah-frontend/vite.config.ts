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
        manualChunks: (id) => {
          // Split node_modules by package
          if (id.includes('node_modules')) {
            // React core libraries
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            
            // React Router
            if (id.includes('react-router')) {
              return 'router-vendor';
            }
            
            // i18next translation libraries
            if (id.includes('i18next') || id.includes('react-i18next')) {
              return 'i18n-vendor';
            }
            
            // All other vendor libraries
            return 'vendor';
          }
          
          // Split pages into separate chunks
          if (id.includes('/src/pages/')) {
            const pageName = id.split('/src/pages/')[1].split('.')[0].toLowerCase();
            return `page-${pageName}`;
          }
          
          // Split components
          if (id.includes('/src/components/')) {
            return 'components';
          }
          
          // Split API calls
          if (id.includes('/src/api/')) {
            return 'api';
          }
        },
      },
    },
    
    // Chunk size warning limit
    chunkSizeWarningLimit: 500,
  },
})
