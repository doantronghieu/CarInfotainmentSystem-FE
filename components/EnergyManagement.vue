<template>
  <div class="bg-gray-800 p-4 rounded-lg">
    <h2 class="text-xl font-bold mb-2">Energy Management</h2>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <p class="text-sm text-gray-400">Battery Level</p>
        <p class="text-2xl font-bold">{{ batteryLevel }}%</p>
      </div>
      <div>
        <p class="text-sm text-gray-400">Range</p>
        <p class="text-2xl font-bold">{{ range }} km</p>
      </div>
      <div>
        <p class="text-sm text-gray-400">Charging Status</p>
        <p class="text-lg font-semibold">{{ chargingStatus }}</p>
      </div>
      <div>
        <p class="text-sm text-gray-400">Power Flow</p>
        
      </div>
    </div>
    <div class="mt-4">
      <p class="text-sm text-gray-400">Regenerative Braking</p>
      <div class="w-full bg-gray-600 rounded-full h-2.5 mt-2">
        <div class="bg-green-500 h-2.5 rounded-full" :style="{ width: `${regenBraking}%` }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const batteryLevel = ref(65)
const range = ref(320)
const chargingStatus = ref('Not Charging')
const regenBraking = ref(30)
</script>