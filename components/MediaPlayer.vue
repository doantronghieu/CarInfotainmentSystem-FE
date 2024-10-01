<template>
  <div class="bg-gray-800 p-2 rounded-lg">
    <h2 class="text-lg font-bold mb-2">Now Playing</h2>
    <div class="flex items-center space-x-2">
      <img :src="albumCover" alt="Album Cover" class="w-12 h-12 rounded-md" />
      <div>
        <p class="font-semibold text-sm">{{ songTitle }}</p>
        <p class="text-xs text-gray-400">{{ artistName }}</p>
      </div>
    </div>
    <div class="mt-2">
      <input type="range" class="w-full" min="0" max="100" v-model="progress" />
    </div>
    <div class="mt-1 flex justify-center space-x-4">
      <button class="text-blue-400 hover:text-blue-300">⏮️</button>
      <button class="text-blue-400 hover:text-blue-300 text-2xl">{{ isPlaying ? '⏸️' : '▶️' }}</button>
      <button class="text-blue-400 hover:text-blue-300">⏭️</button>
    </div>
    <p class="text-xs text-center mt-1 text-gray-400">USB Connected</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const albumCover = ref('/placeholder-album-cover.jpg')
const songTitle = ref('No Tears Left to Cry')
const artistName = ref('Ariana Grande')
const progress = ref(50)
const isPlaying = ref(true)
</script>