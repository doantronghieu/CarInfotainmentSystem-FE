<template>
  <div class="bg-gray-800 p-4 rounded-lg">
    <h2 class="text-xl font-bold mb-2">Climate Control</h2>
    <div class="flex justify-between items-center">
      <div class="text-4xl font-bold">{{ temperature }}°</div>
      <div class="space-y-2">
        <button @click="increaseTemp" class="w-8 h-8 bg-blue-500 text-white rounded">+</button>
        <button @click="decreaseTemp" class="w-8 h-8 bg-blue-500 text-white rounded">-</button>
      </div>
    </div>
    <div class="mt-4">
      <label class="block text-sm font-medium text-gray-400">Fan Speed</label>
      <input type="range" class="w-full" min="0" max="5" v-model="fanSpeed" />
    </div>
    <div class="mt-4 flex justify-between">
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
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const temperature = ref(69)
const fanSpeed = ref(3)
const acOn = ref(false)
const autoOn = ref(true)

const increaseTemp = () => temperature.value++
const decreaseTemp = () => temperature.value--
const toggleAC = () => acOn.value = !acOn.value
const toggleAuto = () => autoOn.value = !autoOn.value
</script>