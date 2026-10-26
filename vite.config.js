// Vite is the build tool + dev server (think: Gradle/Maven + a hot-reloading server).
// It turns our JSX source files into plain JS the browser understands.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    // This is what makes it a PWA: it generates
    //  1. a "web app manifest" (name, icon, colours) so phones offer "Add to Home Screen"
    //  2. a "service worker" that caches the app so it opens offline
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'DayToDay',
        short_name: 'DayToDay',
        description: 'Finish things, not start them.',
        theme_color: '#14233c',
        background_color: '#14233c',
        display: 'standalone', // no browser bars when launched from home screen
        icons: [{ src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }],
      },
    }),
  ],
})
