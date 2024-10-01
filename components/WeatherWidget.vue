<!-- components/WeatherWidget.vue -->
<template>
  <div class="bg-gray-800 p-4 rounded-lg mt-4">
    <h2 class="text-lg font-bold mb-2">Weather</h2>
    <div class="flex items-center justify-between">
      <div>
        <p class="text-3xl font-bold">{{ temperature }}°C</p>
        <p class="text-sm text-gray-400">{{ condition }}</p>
        <p class="text-sm">{{ location }}</p>
      </div>
      <div class="text-5xl">{{ weatherIcon }}</div>
    </div>
    <div class="mt-2 grid grid-cols-3 gap-2 text-sm">
      <div>
        <p class="text-gray-400">Wind</p>
        <p>{{ windSpeed }} km/h</p>
      </div>
      <div>
        <p class="text-gray-400">Humidity</p>
        <p>{{ humidity }}%</p>
      </div>
      <div>
        <p class="text-gray-400">Pressure</p>
        <p>{{ pressure }} hPa</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const temperature = ref(28)
const condition = ref('Mainly Cloudy')
const location = ref('Bangkok')
const weatherIcon = ref('🌤️')
const windSpeed = ref(5.1)
const humidity = ref(93)
const pressure = ref(1015)
</script>