import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Keep the existing capitalized folder working on case-sensitive Vercel builds.
  publicDir: 'Public',
})
