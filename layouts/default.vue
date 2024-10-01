<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen bg-gray-900 text-white p-4">
    <TopBar />
    <main class="mt-4">
      <Nuxt />
    </main>
  </div>
</template>

<script setup>
import TopBar from '~/components/TopBar.vue'
</script>