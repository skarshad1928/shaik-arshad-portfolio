import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to https://<username>.github.io/<repo-name>/ via GitHub Pages,
// set `base` to '/<repo-name>/'. For a root domain or username.github.io repo,
// leave it as '/'.
export default defineConfig({
  plugins: [react()],
  base: './',
})
