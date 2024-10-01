<!-- components/NavigationInfo.vue -->
<template>
  <div>
    <h2 class="text-xl font-bold text-blue-400 mb-2">Navigation</h2>
    <p class="text-2xl font-bold mb-2">{{ navigationInfo }}</p>
    <p class="text-lg mb-4">{{ eta }}</p>
    <div class="w-full h-2 bg-gray-700 rounded-full">
      <div class="h-full bg-blue-500 rounded-full" :style="{ width: progressWidth }"></div>
    </div>
    <p class="mt-2 text-sm">{{ nextEvent }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const navigationInfo = ref('Traffic is low, chance of rain 73%.')
const eta = ref('32 minutes to 3303 Scott Blvd.')
const nextEvent = ref('Design session at 12pm')
const progress = ref(30) // Progress percentage

const progressWidth = computed(() => `${progress.value}%`)
</script>