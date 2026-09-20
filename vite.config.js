import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' if using custom domain bilishsayaju.com.np, or '/<repo-name>/' if using username.github.io/<repo-name>/
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})