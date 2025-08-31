import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    // prevent esbuild from trying to bundle lightningcss during dev optimization
    exclude: ['lightningcss', 'lightningcss-node', '@parcel/watcher'],
  },
  ssr: {
    // ensure lightningcss is available during SSR builds
    noExternal: ['lightningcss'],
  },
  plugins: [
    tailwindcss(),
    react()
  ],
})
