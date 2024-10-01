<template>
  <div class="bg-gray-800 p-4 rounded-lg">
    <h2 class="text-xl font-bold mb-2">Parking Assistance</h2>
    <div class="relative w-64 h-64 mx-auto">
      <!-- Car outline -->
      <div class="absolute inset-10 border-2 border-white rounded-lg"></div>
      <!-- Sensors -->
      <div v-for="(sensor, index) in sensors" :key="index" 
           :style="{ top: `${sensor.y}%`, left: `${sensor.x}%` }" 
           :class="sensorColor(sensor.distance)"
           class="absolute w-3 h-3 rounded-full"></div>
    </div>
    <p class="text-center mt-4">{{ parkingStatus }}</p>
  </div>
</template>

<script setup>
const sensors = ref([
  { x: 0, y: 50, distance: 100 },
  { x: 100, y: 50, distance: 50 },
  { x: 50, y: 0, distance: 75 },
  { x: 50, y: 100, distance: 25 },
])

const sensorColor = (distance) => {
  if (distance > 75) return 'bg-green-500'
  if (distance > 50) return 'bg-yellow-500'
  return 'bg-red-500'
}

const parkingStatus = computed(() => {
  const minDistance = Math.min(...sensors.value.map(s => s.distance))
  if (minDistance < 30) return 'Caution: Very Close'
  if (minDistance < 50) return 'Warning: Getting Close'
  return 'Safe Distance'
})
</script>