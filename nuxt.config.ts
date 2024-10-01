// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/leaflet',
    'nuxt-mdi',
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome',
  ],
  // leaflet: {
  //   markerCluster: true
  // },
  css: [
    '~/assets/css/main.css',
    'leaflet/dist/leaflet.css',
    '@fortawesome/fontawesome-free/css/all.css',
  ],
  // build: {
  //   transpile: ['leaflet'],
  // },
  // vite: {
  //   ssr: {
  //     noExternal: ['leaflet'],
  //   },
  // },
})