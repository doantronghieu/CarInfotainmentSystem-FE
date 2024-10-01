<template>
  <div class="bg-gray-800 p-4 rounded-lg">
    <h2 class="text-xl font-bold mb-2">Trip Information</h2>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <p class="text-sm text-gray-400">Total Distance</p>
        <p class="text-lg font-semibold">{{ totalDistance }} mi</p>
      </div>
      <div>
        <p class="text-sm text-gray-400">Time Traveled</p>
        <p class="text-lg font-semibold">{{ timeTraveled }}</p>
      </div>
      <div>
        <p class="text-sm text-gray-400">Avg. Speed</p>
        <p class="text-lg font-semibold">{{ avgSpeed }} mph</p>
      </div>
      <div>
        <p class="text-sm text-gray-400">Energy Used</p>
        <p class="text-lg font-semibold">{{ energyUsed }} kWh</p>
      </div>
    </div>
    <div class="mt-4 bg-gray-700 p-2 rounded-lg">
      <div class="flex justify-between items-center">
        <span>Battery Level:</span>
        <span>{{ batteryLevel }}%</span>
      </div>
      <div class="w-full bg-gray-600 rounded-full h-2.5 mt-2">
        <div class="bg-green-600 h-2.5 rounded-full" :style="{ width: `${batteryLevel}%` }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const totalDistance = ref(150)
const timeTraveled = ref('2h 30m')
const avgSpeed = ref(60)
const energyUsed = ref(35)
const batteryLevel = ref(65)
</script>