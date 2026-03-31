<template>
  <UFooter>
    <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>

    <template #right>
      <UButton
        icon="i-simple-icons-discord"
        color="neutral"
        variant="ghost"
        to="https://discord.com/channels/@me/311287489161854977"
        target="_blank"
        aria-label="Discord"
      />
      <UButton
        icon="ic:baseline-whatsapp"
        color="neutral"
        variant="ghost"
        to="http://wa.me/48991509084"
        target="_blank"
        aria-label="Whatsapp"
      />
    </template>
  </UFooter>
</template>
