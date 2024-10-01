<template>
  <div class="bg-gray-800 p-4 rounded-lg">
    <h2 class="text-xl font-bold mb-2">Driver Assistance</h2>
    <div class="grid grid-cols-2 gap-4">
      <div :class="{'bg-red-500': laneDeparture, 'bg-gray-700': !laneDeparture}" class="p-2 rounded">
        <p class="font-semibold">Lane Departure</p>
        <p class="text-sm">{{ laneDeparture ? 'Warning!' : 'OK' }}</p>
      </div>
      <div :class="{'bg-yellow-500': forwardCollision, 'bg-gray-700': !forwardCollision}" class="p-2 rounded">
        <p class="font-semibold">Forward Collision</p>
        <p class="text-sm">{{ forwardCollision ? 'Caution!' : 'Clear' }}</p>
      </div>
      <div :class="{'bg-blue-500': cruiseControlActive, 'bg-gray-700': !cruiseControlActive}" class="p-2 rounded">
        <p class="font-semibold">Cruise Control</p>
        <p class="text-sm">{{ cruiseControlActive ? 'Active' : 'Inactive' }}</p>
      </div>
      <div :class="{'bg-green-500': blindSpotMonitoring, 'bg-gray-700': !blindSpotMonitoring}" class="p-2 rounded">
        <p class="font-semibold">Blind Spot</p>
        <p class="text-sm">{{ blindSpotMonitoring ? 'Monitoring' : 'Off' }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const laneDeparture = ref(false)
const forwardCollision = ref(false)
const cruiseControlActive = ref(true)
const blindSpotMonitoring = ref(true)

// You can add methods here to toggle these states or update them based on car sensors
</script>