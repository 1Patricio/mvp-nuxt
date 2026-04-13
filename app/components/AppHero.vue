<template>
  <UPageHero
    title="Welcome!"
    orientation="horizontal"
    :ui="{
      container: 'lg:pb-16'
    }"
  >
      <template #description>
      <p>
        My name is Anderson, I am a Software Developer, focused on developing web applications and systems aimed at organizing, automating, and improving process efficiency. Since I started programming, I have sought to understand not only how to write code, but how to create solutions that truly make sense for those who will use the system on a daily basis.
      </p>

      <p class="mt-3">
        I have experience mainly with JavaScript, Flutter, Node.js, and Vue.js, working on both the backend and frontend. I have completed projects involving system integration, business rules, data manipulation, and the construction of functional and objective interfaces. I enjoy developing well-structured applications with clean, clear, and easy-to-maintain code.
      </p>
    </template>
    <nuxt-img
      src="/me.jpg"
      alt="Photo Profile"
      class="rounded-lg shadow-2xl ring ring-default w-full max-w-xs md:max-w-sm lg:max-w-md"
    />
  </UPageHero>
</template>