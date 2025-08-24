<template>
  <div>
    <nuxt-layout>
      <NuxtPage />
    </nuxt-layout>
  </div>
</template>

<script setup>
import { useDirection } from '~/composables/useDirection';

const { direction } = useDirection();
useHead({
  htmlAttrs: {
    dir: direction,
  },
});
</script>
