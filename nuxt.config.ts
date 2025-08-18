// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  css: ['vuetify/styles'],
  build: {
    transpile: ['vuetify'],
  },
  //pages: true,
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
