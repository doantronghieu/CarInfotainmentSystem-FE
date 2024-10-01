<template>
  <div class="bg-gray-800 p-2 rounded-lg">
    <h2 class="text-lg font-bold">Weather</h2>
    <div class="flex items-center justify-between">
      <div>
        <p class="text-2xl font-bold">{{ temperature }}°C</p>
        <p class="text-sm text-gray-400">{{ condition }}</p>
      </div>
      <div class="text-4xl">{{ weatherIcon }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const temperature = ref(22)
const condition = ref('Partly Cloudy')
const weatherIcon = ref('🌤️')
</script>