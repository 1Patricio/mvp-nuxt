<template>
  <UContainer class="pb-20">
    <UPageCTA
      title="My Skills"
      variant="naked"
      :ui="{
        container: 'pb-4!'
      }"
    />
    <UPageLogos
      marquee
      :items="[
        'logos:html-5',
        'logos:vue',
        'vscode-icons:file-type-quasar',
        'logos:daisyui',
        'skill-icons:vuetify-light',
        'material-icon-theme:nuxt',
        'logos:pinia',
        'devicon:react',
        'skill-icons:javascript',
        'skill-icons:typescript',
        'bxl:spring-boot',
        'devicon:java',
        'skill-icons:docker',
      ]"
    />
  </UContainer>
</template>