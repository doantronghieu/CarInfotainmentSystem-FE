<!-- components/MediaPlayer.vue -->
<template>
  <div class="bg-gray-800 p-4 rounded-lg mt-4">
    <h2 class="text-lg font-bold mb-2">Now Playing</h2>
    <div class="flex items-center space-x-4">
      <img :src="albumCover" alt="Album Cover" class="w-16 h-16 rounded-md" />
      <div>
        <p class="font-semibold">{{ songTitle }}</p>
        <p class="text-sm text-gray-400">{{ artistName }}</p>
      </div>
    </div>
    <div class="mt-4">
      <input type="range" class="w-full" min="0" max="100" v-model="progress" />
      <div class="flex justify-between text-sm text-gray-400 mt-1">
        <span>{{ formatTime(currentTime) }}</span>
        <span>{{ formatTime(duration) }}</span>
      </div>
    </div>
    <div class="mt-4 flex justify-center space-x-6">
      <button class="text-2xl text-blue-400 hover:text-blue-300"><i class="fas fa-step-backward"></i></button>
      <button @click="togglePlay" class="text-3xl text-blue-400 hover:text-blue-300">
        <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
      </button>
      <button class="text-2xl text-blue-400 hover:text-blue-300"><i class="fas fa-step-forward"></i></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const albumCover = ref('/placeholder-album-cover.jpg')
const songTitle = ref('Nemesis')
const artistName = ref('Benjamin Clementine')
const progress = ref(36)
const isPlaying = ref(true)
const currentTime = ref(36)
const duration = ref(215)

const togglePlay = () => {
  isPlaying.value = !isPlaying.value
}

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}
</script>