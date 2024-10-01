<template>
  <div class="bg-gray-800 p-4 rounded-lg">
    <h2 class="text-xl font-bold mb-2">Vehicle Info</h2>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <p class="text-sm text-gray-400">Battery</p>
        <p class="text-lg font-semibold">{{ batteryLevel }}%</p>
      </div>
      <div>
        <p class="text-sm text-gray-400">Range</p>
        <p class="text-lg font-semibold">{{ range }} km</p>
      </div>
      <div>
        <p class="text-sm text-gray-400">Next Service</p>
        <p class="text-lg font-semibold">{{ nextService }} km</p>
      </div>
      <div>
        <p class="text-sm text-gray-400">Tire Pressure</p>
        <p class="text-lg font-semibold">OK</p>
      </div>
    </div>
    <div class="mt-4">
      <button class="w-full bg-blue-500 text-white py-2 px-4 rounded">
        Vehicle Details
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const batteryLevel = ref(65)
const range = ref(324)
const nextService = ref(15000)
</script>