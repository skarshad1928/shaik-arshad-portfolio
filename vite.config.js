import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/shaik-arshad-portfolio/', // Must match your GitHub repo name exactly
})
