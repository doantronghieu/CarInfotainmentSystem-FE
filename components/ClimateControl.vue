<template>
  <div class="bg-gray-800 p-2 rounded-lg">
    <h2 class="text-lg font-bold mb-2">Climate Control</h2>
    <div class="flex justify-between items-center">
      <div class="text-3xl font-bold">{{ temperature }}°</div>
      <input type="range" min="60" max="80" v-model="temperature" class="w-1/2" />
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-400">Fan Speed</label>
      <input type="range" class="w-full" min="0" max="5" v-model="fanSpeed" />
    </div>
    <div class="mt-2 flex justify-between">
      <button :class="{'bg-blue-500': acOn, 'bg-gray-600': !acOn}" 
              @click="toggleAC" 
              class="text-white py-1 px-2 rounded text-sm">
        A/C
      </button>
      <button :class="{'bg-blue-500': autoOn, 'bg-gray-600': !autoOn}" 
              @click="toggleAuto" 
              class="text-white py-1 px-2 rounded text-sm">
        Auto
      </button>
    </div>
    <button class="mt-2 w-full bg-gray-700 text-white py-1 px-2 rounded text-sm">
      More Cabin Controls
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const temperature = ref(69)
const fanSpeed = ref(3)
const acOn = ref(false)
const autoOn = ref(true)

const toggleAC = () => acOn.value = !acOn.value
const toggleAuto = () => autoOn.value = !autoOn.value
</script>