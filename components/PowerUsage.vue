<template>
  <div class="bg-gray-800 p-4 rounded-lg">
    <div class="relative w-48 h-48 mx-auto">
      <svg class="w-full h-full" viewBox="0 0 100 100">
        <circle class="text-gray-700" stroke-width="10" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
        <circle class="text-green-500" stroke-width="10" :stroke-dasharray="circumference" :stroke-dashoffset="dashoffset" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
      </svg>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <span class="text-3xl font-bold">{{ powerUsage }}</span>
        <span class="text-sm">kW</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const powerUsage = ref(45)
const maxPower = 100
const circumference = 2 * Math.PI * 40
const dashoffset = computed(() => circumference * (1 - powerUsage.value / maxPower))
</script>