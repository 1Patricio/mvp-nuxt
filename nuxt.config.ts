export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: true,
  runtimeConfig: {
    public: {
      githubToken: process.env.NUXT_PUBLIC_GITHUB_TOKEN
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/seo'
  ],
  image: {
    domains: ['avatars.githubusercontent.com'],
    provider: 'ipx',
    ipx: {
      maxAge: 60 * 60 * 24 * 7
    }
  },
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
    url: 'https://andersongoularte.netlify.app/',
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