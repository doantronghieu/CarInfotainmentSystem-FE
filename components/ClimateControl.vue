<!-- components/ClimateControl.vue -->
<template>
  <div class="bg-gray-800 p-4 rounded-lg mt-4">
    <h2 class="text-xl font-bold mb-4">Climate Control</h2>
    <div class="flex justify-between items-center">
      <div class="text-center">
        <p class="text-sm text-gray-400">Left</p>
        <p class="text-3xl font-bold">{{ leftTemp }}°</p>
      </div>
      <div class="space-y-4">
        <button @click="increaseTemp('left')" class="w-8 h-8 bg-blue-500 text-white rounded-full">+</button>
        <button @click="decreaseTemp('left')" class="w-8 h-8 bg-blue-500 text-white rounded-full">-</button>
      </div>
      <div class="text-center">
        <i class="fas fa-fan text-3xl"></i>
        <p class="text-sm">{{ fanSpeed }}</p>
      </div>
      <div class="space-y-4">
        <button @click="increaseTemp('right')" class="w-8 h-8 bg-blue-500 text-white rounded-full">+</button>
        <button @click="decreaseTemp('right')" class="w-8 h-8 bg-blue-500 text-white rounded-full">-</button>
      </div>
      <div class="text-center">
        <p class="text-sm text-gray-400">Right</p>
        <p class="text-3xl font-bold">{{ rightTemp }}°</p>
      </div>
    </div>
    <div class="mt-4 grid grid-cols-3 gap-2">
      <button :class="{'bg-blue-500': acOn, 'bg-gray-600': !acOn}" 
              @click="toggleAC" 
              class="text-white py-2 px-4 rounded">
        A/C
      </button>
      <button :class="{'bg-blue-500': autoOn, 'bg-gray-600': !autoOn}" 
              @click="toggleAuto" 
              class="text-white py-2 px-4 rounded">
        Auto
      </button>
      <button @click="toggleAirflow" class="bg-gray-600 text-white py-2 px-4 rounded">
        {{ airflowDirection }}
      </button>
    </div>
    <div class="mt-4 grid grid-cols-2 gap-2">
      <button :class="{'bg-red-500': seatHeatLeft > 0, 'bg-gray-600': seatHeatLeft === 0}" 
              @click="toggleSeatHeat('left')" 
              class="text-white py-2 px-4 rounded">
        Left Seat {{ seatHeatLeft }}
      </button>
      <button :class="{'bg-red-500': seatHeatRight > 0, 'bg-gray-600': seatHeatRight === 0}" 
              @click="toggleSeatHeat('right')" 
              class="text-white py-2 px-4 rounded">
        Right Seat {{ seatHeatRight }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const leftTemp = ref(19)
const rightTemp = ref(24)
const fanSpeed = ref(3)
const acOn = ref(true)
const autoOn = ref(false)
const airflowDirection = ref('Face')
const seatHeatLeft = ref(0)
const seatHeatRight = ref(0)

const increaseTemp = (side) => {
  if (side === 'left' && leftTemp.value < 30) leftTemp.value++
  if (side === 'right' && rightTemp.value < 30) rightTemp.value++
}

const decreaseTemp = (side) => {
  if (side === 'left' && leftTemp.value > 16) leftTemp.value--
  if (side === 'right' && rightTemp.value > 16) rightTemp.value--
}

const toggleAC = () => acOn.value = !acOn.value
const toggleAuto = () => autoOn.value = !autoOn.value

const toggleAirflow = () => {
  const directions = ['Face', 'Feet', 'Defrost']
  const currentIndex = directions.indexOf(airflowDirection.value)
  airflowDirection.value = directions[(currentIndex + 1) % directions.length]
}

const toggleSeatHeat = (side) => {
  if (side === 'left') {
    seatHeatLeft.value = (seatHeatLeft.value + 1) % 4
  } else {
    seatHeatRight.value = (seatHeatRight.value + 1) % 4
  }
}
</script>