import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild', // O 'terser' si prefieres una minificación más optimizada
    // Para desactivar la minificación completamente
    // minify: false,
  },
})
