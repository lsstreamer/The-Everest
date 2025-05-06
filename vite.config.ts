import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/The-Everest/',
  plugins: [react()],
  build: {
    target: 'es2015',
  },
})
