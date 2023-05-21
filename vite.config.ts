import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },

  resolve: {
    alias: {
      // Convert the paths object from tsconfig to Vite's alias format
      '~': path.resolve(__dirname, './src'),
    },
  },

  base: '/coffee-delivery/',
})
