<template>
  <div class="bg-gray-800 p-4 rounded-lg">
    <h2 class="text-xl font-bold mb-2">Vehicle Info</h2>
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-2">
        <svg viewBox="0 0 100 50" class="w-full">
          <!-- Simplified car shape -->
          <rect x="20" y="10" width="60" height="30" rx="5" fill="#4A5568"/>
          <circle cx="30" cy="40" r="5" fill="#2D3748"/>
          <circle cx="70" cy="40" r="5" fill="#2D3748"/>
          <!-- Door indicators -->
          <circle cx="25" cy="25" r="2" :fill="doorsLocked ? '#48BB78' : '#F56565'"/>
          <circle cx="75" cy="25" r="2" :fill="doorsLocked ? '#48BB78' : '#F56565'"/>
        </svg>
      </div>
      <div>
        <p class="text-sm text-gray-400">Battery</p>
        <p class="text-lg font-semibold">{{ batteryLevel }}%</p>
      </div>
      <div>
        <p class="text-sm text-gray-400">Range</p>
        <p class="text-lg font-semibold">{{ range }} km</p>
      </div>
      <div>
        <p class="text-sm text-gray-400">Tire Pressure</p>
        <p class="text-lg font-semibold">{{ tirePressure }}</p>
      </div>
      <div>
        <p class="text-sm text-gray-400">Oil Life</p>
        <p class="text-lg font-semibold">{{ oilLife }}%</p>
      </div>
    </div>
    <div class="mt-4 text-center">
      <p>{{ doorsLocked ? 'Doors Locked' : 'Doors Unlocked' }} | {{ lightsOn ? 'Lights On' : 'Lights Off' }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const batteryLevel = ref(65)
const range = ref(320)
const tirePressure = ref('OK')
const oilLife = ref(80)
const doorsLocked = ref(true)
const lightsOn = ref(false)
</script>