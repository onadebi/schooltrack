import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: 4500,
  },
  build:{
    outDir: '../wwwroot',
    emptyOutDir: true,
  },
  plugins: [react()],
})
