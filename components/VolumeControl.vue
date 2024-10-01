<template>
  <div class="flex items-center space-x-2">
    <i class="fas fa-volume-up"></i>
    <input type="range" min="0" max="100" v-model="volume" class="w-24" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const volume = ref(50)
</script>