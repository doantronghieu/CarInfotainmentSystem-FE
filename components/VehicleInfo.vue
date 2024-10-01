<!-- components/VehicleInfo.vue -->
<template>
  <div class="bg-gray-800 p-4 rounded-lg">
    <div class="flex justify-between items-center">
      <h2 class="text-3xl font-bold">{{ speed }} <span class="text-lg font-normal">mph</span></h2>
      <p>{{ range }} miles range</p>
    </div>
    <div class="relative mt-4">
      <svg viewBox="0 0 100 50" class="w-full">
        <!-- Simplified car shape -->
        <rect x="20" y="10" width="60" height="30" rx="5" fill="#4A5568"/>
        <circle cx="30" cy="40" r="5" fill="#2D3748"/>
        <circle cx="70" cy="40" r="5" fill="#2D3748"/>
        <!-- Door indicators -->
        <circle cx="25" cy="25" r="2" :fill="doorsLocked ? '#48BB78' : '#F56565'"/>
        <circle cx="75" cy="25" r="2" :fill="doorsLocked ? '#48BB78' : '#F56565'"/>
      </svg>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="grid grid-cols-5 gap-2 w-full">
          <div v-for="gear in gears" :key="gear" 
               :class="{'bg-green-500 text-white': currentGear === gear, 'bg-gray-700': currentGear !== gear}" 
               class="text-center py-2 rounded text-lg font-bold">
            {{ gear }}
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 grid grid-cols-2 gap-4">
      <div>
        <p class="text-sm text-gray-400">Battery</p>
        <p class="text-lg font-semibold">{{ batteryLevel }}%</p>
      </div>
      <div>
        <p class="text-sm text-gray-400">Tire Pressure</p>
        <p class="text-lg font-semibold">{{ tirePressure }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const speed = ref(132)
const range = ref(344)
const gears = ['P', 'R', 'N', 'D', 'B']
const currentGear = ref('D')
const batteryLevel = ref(80)
const tirePressure = ref('OK')
const doorsLocked = ref(true)
</script>