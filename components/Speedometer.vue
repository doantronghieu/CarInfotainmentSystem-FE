<template>
  <div class="bg-gray-800 p-2 rounded-lg">
    <h2 class="text-lg font-bold">Speedometer</h2>
    <div class="flex justify-between items-center">
      <div class="text-3xl font-bold">{{ speed }} km/h</div>
      <div class="text-xl">{{ powerConsumption }} kW</div>
    </div>
    <div class="mt-2 bg-gray-700 rounded-full h-2">
      <div class="bg-blue-500 h-full rounded-full" :style="{ width: `${(speed / maxSpeed) * 100}%` }"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const speed = ref(80)
const maxSpeed = 200
const powerConsumption = ref(45)
</script>