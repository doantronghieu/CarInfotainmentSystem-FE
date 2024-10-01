<template>
  <div class="bg-gray-800 p-2 rounded-lg">
    <h2 class="text-lg font-bold mb-2">Vehicle Info</h2>
    <div class="grid grid-cols-2 gap-2 text-sm">
      <div>
        <p class="text-gray-400">Battery</p>
        <p class="font-semibold">{{ batteryLevel }}%</p>
      </div>
      <div>
        <p class="text-gray-400">Range</p>
        <p class="font-semibold">{{ range }} km</p>
      </div>
      <div>
        <p class="text-gray-400">Power Consumption</p>
        <p class="font-semibold">{{ powerConsumption }} kWh/100km</p>
      </div>
      <div>
        <p class="text-gray-400">Charging</p>
        <p class="font-semibold">{{ chargingStatus }}</p>
      </div>
    </div>
    <div class="mt-2 bg-gray-700 p-1 rounded-lg text-xs text-center">
      <p>All doors locked | Lights off</p>
    </div>
    <div class="mt-2 grid grid-cols-2 gap-2">
      <button class="bg-gray-700 text-white py-1 px-2 rounded text-sm">Drive Safe Mode</button>
      <button class="bg-gray-700 text-white py-1 px-2 rounded text-sm">Head-up Display</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const batteryLevel = ref(65)
const range = ref(324)
const powerConsumption = ref(18.5)
const chargingStatus = ref('Not charging')
</script>