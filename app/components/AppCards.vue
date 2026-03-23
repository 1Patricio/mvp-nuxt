<template>
  <UContainer>
    <UPageCTA 
      title="My Projects"
      description="Conheça os cases de sucesso da nossa empresa"
      variant="naked"
    />
    <UPageGrid>
      <UPageCard
        v-for="(card, index) in cards"
        :key="index"
        v-bind="card"
      >
        <nuxt-img 
          v-if="card.image"
          :src="card.image.path " 
          alt="Tailwind CSS" 
          class="w-full" 
        />
      </UPageCard>
    </UPageGrid>
  </UContainer>
</template>

<script setup lang="ts">

const cards = ref([
  {
    title: 'Open Stock',
    description: 'Product and category management built with Vue 3, Vuetify, and Vite, using JWT authentication and a REST API.',
    icon: 'i-lucide-swatch-book',
    to: 'https://open-stock.netlify.app/',
    target: '_blank',
    class:'hover:bg-neutral-100',
    image: {
      path: '/openstock.png', 
    },
    orientation: 'vertical' as const
  },
  {
    title: 'Site Abaetéfest',
    description: 'Site do maior app de festa.',
    icon: 'i-lucide-swatch-book',
    to: 'https://app.abaetefest.com.br/',
    target: '_blank',
    class:'hover:bg-neutral-100',
    image: {
      path: '/abaetefest.png',
    },
    orientation: 'vertical' as const
  },
  {
    title: 'App de Festa',
    description: 'Learn how to customize Nuxt UI components using Tailwind CSS.',
    icon: 'i-lucide-swatch-book',
    to: 'https://play.google.com/store/apps/details?id=br.com.abaetefest.app.twa&hl=pt_BR',
    target: '_blank',
    class:'hover:bg-neutral-100',
    image: {
      path: '/app-fest.png',
    },
    orientation: 'vertical' as const
  },
])
</script>