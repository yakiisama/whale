import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte({
    emitCss: false,
  })],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'Whale',
      fileName: (format) => `${format}/index.js`,
      formats: ['es', 'umd'],
    },
    target: 'es2015',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
