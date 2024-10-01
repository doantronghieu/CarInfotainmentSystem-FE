<template>
  <div class="flex justify-between items-center text-sm">
    <div class="flex items-center space-x-4">
      <button class="text-xl"><i class="fas fa-home"></i></button>
      <div class="flex items-center space-x-2">
        <i class="fas fa-volume-up"></i>
        <input type="range" min="0" max="100" v-model="volume" class="w-24" />
      </div>
    </div>
    <div class="text-center">
      <p>{{ currentDate }}</p>
      <p class="text-lg font-bold">{{ currentTime }}</p>
    </div>
    <div class="flex items-center space-x-4">
      <button @click="toggleDayNightMode" class="text-xl">
        <i :class="isDayMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
      </button>
      <button class="text-xl"><i class="fas fa-user"></i></button>
      <button class="text-xl"><i class="fas fa-cog"></i></button>
      <button class="text-xl"><i class="fas fa-search"></i></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const volume = ref(50)
const currentDate = ref('')
const currentTime = ref('')
const isDayMode = ref(true)

const updateDateTime = () => {
  const now = new Date()
  currentDate.value = now.toLocaleDateString()
  currentTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const toggleDayNightMode = () => {
  isDayMode.value = !isDayMode.value
  // You would typically emit an event here to update the entire app's theme
}

onMounted(() => {
  updateDateTime()
  setInterval(updateDateTime, 1000)
})
</script>