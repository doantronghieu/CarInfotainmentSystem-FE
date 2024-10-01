<template>
  <div class="bg-gray-800 p-4 rounded-lg">
    <h2 class="text-xl font-bold mb-2">Climate Control</h2>
    <div class="flex justify-between items-center">
      <div class="text-3xl font-bold">{{ temperature }}°</div>
      <div class="space-y-2">
        <button @click="increaseTemp" class="w-8 h-8 bg-blue-500 text-white rounded">+</button>
        <button @click="decreaseTemp" class="w-8 h-8 bg-blue-500 text-white rounded">-</button>
      </div>
    </div>
    <div class="mt-4">
      <label class="block text-sm font-medium text-gray-400">Fan Speed</label>
      <input type="range" class="w-full" min="0" max="5" v-model="fanSpeed" />
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

const temperature = ref(22)
const fanSpeed = ref(3)
const acOn = ref(false)
const autoOn = ref(true)
const airflowDirection = ref('Face')
const seatHeatLeft = ref(0)
const seatHeatRight = ref(0)

const increaseTemp = () => temperature.value++
const decreaseTemp = () => temperature.value--
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