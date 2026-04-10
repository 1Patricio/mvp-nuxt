<template>
  <UContainer>
    <UPageCTA 
      title="My Projects"
      description="Discover my personal projects"
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
          :src="card.image.path" 
          alt="Card Cover" 
          class="w-full object-cover" 
          loading="lazy"
        />

        <video
          v-else-if="card.video"
          :src="card.video.path"
          class="w-full object-cover"
          playsinline
          muted
          autoplay
          aria-hidden="true"
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
    title: 'MVP Rick and Morty!',
    description: 'Component-based architecture (SFCs), organized routing, reusable layout, and use of DaisyUI | Tailwind for visual consistency. I followed SEO best practices, accessibility, and asynchronous loading, focusing on clean code and performance',
    icon: 'i-lucide-swatch-book',
    to: 'https://rickandmortymvp.netlify.app/',
    target: '_blank',
    class:'hover:bg-neutral-100',
    video: {
      path: '/mvp-rick-and-morty.mp4'
    },
    orientation: 'vertical' as const
  },
  {
    title: 'Cards Marketplace!',
    description: 'Developed a Vue.js Trading Card Marketplace. Built with TypeScript, Pinia, and Quasar Framework for a responsive UI. Features secure routing (auth guards) and optimized loading via Virtual Scroll.',
    icon: 'i-lucide-swatch-book',
    to: 'https://github.com/1Patricio/cards-marketplace',
    target: '_blank',
    class:'hover:bg-neutral-100',
    video: {
      path: '/cards-marketplace.mp4'
    },
    orientation: 'vertical' as const
  },
])
</script>