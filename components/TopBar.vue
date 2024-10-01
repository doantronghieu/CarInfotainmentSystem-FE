components/TopBar.vue
<template>
  <div class="flex justify-between items-center bg-gray-800 p-4 text-white">
    <div class="flex items-center space-x-4">
      <img :src="userAvatar" alt="User Avatar" class="w-12 h-12 rounded-full" />
      <div>
        <p class="text-xl font-bold">Hi, {{ userName }}</p>
        <p class="text-sm text-gray-400">{{ carModel }}</p>
      </div>
    </div>
    <div class="flex items-center space-x-4">
      <p class="text-2xl font-bold">{{ currentTime }}</p>
      <p class="text-lg">{{ currentTemp }}°C</p>
      <div class="flex space-x-2">
        <i class="fas fa-battery-three-quarters text-green-500"></i>
        <i class="fas fa-wifi"></i>
        <i class="fas fa-signal"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const userAvatar = ref('/placeholder-avatar.jpg')
const userName = ref('Razvan')
const carModel = ref('Tesla Model 3')
const currentTime = ref('')
const currentTemp = ref(25)

const updateDateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

onMounted(() => {
  updateDateTime()
  setInterval(updateDateTime, 60000)
})
</script>