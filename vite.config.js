import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://95.46.96.78:7777', // Backend serveringiz URL manzili
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v1'), // Yo'lda o'zgarishlar kiritish
      },
    },
  },
})
