export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: true,
  modules: [
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/seo'
  ],
  app: {
    head: {
      meta: [
        {
          name: 'keywords',
          content: 'nuxt portfolio, nuxt develper, nuxt ui example'
        },
      ]
    }
  },
  site:{
    url: 'https://portifolio-anderson-patricio.netlify.app',
    name: 'Portfolio Anderson Patricio',
    description: 'Portfolio created with Vue, Nuxt, and Nuxt UI.',
    keywords: 'vue, vuejs, nuxt, nuxtui'
  },
  ogImage: {
    enabled: true
  },
  nitro: {
    preset: 'netlify',
    prerender: {
      routes: ['/']
    }
  }
})