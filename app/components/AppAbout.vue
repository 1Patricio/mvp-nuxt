<template>
  <UPageSection
    title="About Me"
    :description="bio"
    orientation="horizontal"
    :features="features"
    :links="links"
  >
    <NuxtImg
      :src="avatar"
      width="352"
      height="430"
      alt="Illustration"
      class="w-full max-w-sm md:max-w-sm lg:max-w-md rounded-lg"
      loading="lazy"
    />
  </UPageSection>
</template>

<script setup lang="ts">
import type { PageFeatureProps, ButtonProps } from '@nuxt/ui'

const features = ref<PageFeatureProps[]>([
  {
    title: 'Professional Experience',
    description:
      'I am a Full Stack Developer with over 3 years of experience building scalable and impactful solutions. My specialization lies in front-end technologies, particularly Vue.js and React.js, back-end systems with a strong focus on Java and Spring Boot, and mobile development with Flutter.',
    icon: 'mdi:work-outline',
  },
  {
    title: 'Systems Development Analysis',
    description:
      'Founder of the first Academic Association of the Systems Analysis and Development, and also the first academic association established at ULBRA Torres (RS, Brazil).',
    icon: 'mdi:university-outline',
  },
  {
    title: 'Certificates',
    description:
      '• IT Systems Project - Bradesco\n• Vue.JS - Cursa\n• Java - Rockeseat ',
    icon: 'mdi:certificate-outline',
  },
])

interface GithubUser {
  bio: string | null
  avatar_url: string | null
  login: string
  name: string
  html_url: string
  [key: string]: unknown
}

const config = useRuntimeConfig()

const { data } = await useFetch<GithubUser>('https://api.github.com/users/1patricio', {
  headers: config.public.githubToken ? {
    'Authorization': `Bearer ${config.public.githubToken}`
  } : {}
})


const avatar = computed(() => data.value?.avatar_url || '')
const bio = computed(() => data.value?.bio || 'Software Developer')
const githubUrl = computed(() => data.value?.html_url || 'https://www.github.com/1Patricio')

const links = ref<ButtonProps[]>([
  {
    label: 'LinkedIn',
    to: 'https://www.linkedin.com/in/andersongpatricio/',
    target: '_blank',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'uil:linkedin',
  },
  {
    label: 'Github',
    to: githubUrl.value,
    target: '_blank',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'uil:github',
  },
])
</script>

<style scoped>
:deep(*) {
  white-space: pre-line;
}
</style>