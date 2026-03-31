<template>
  <UHeader >
    <template #title>
      Anderson Patricio
    </template>

    <UNavigationMenu :items="items" />

    <template #right> 
      <UColorModeButton />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '#home',
  },
  {
    label: 'Projects',
    to: '#projects',
  },
  {
    label: 'Skills',
    to: '#skills',
  },
  {
    label: 'About',
    to: '#about',
  },
  {
    label: 'Github',
    to: 'https://github.com/1Patricio',
    target: '_blank',
    icon: 'mdi:github'
  },
])
</script>
