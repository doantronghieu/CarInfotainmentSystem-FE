<template>
  <div class="fixed bottom-4 right-4">
    <button @click="toggleListening" :class="{'bg-red-500': isListening, 'bg-blue-500': !isListening}" class="rounded-full p-4 text-white">
      <i class="fas fa-microphone"></i>
    </button>
    <div v-if="isListening" class="mt-2 bg-gray-800 p-2 rounded">
      Listening: {{ transcript }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isListening = ref(false)
const transcript = ref('')

const toggleListening = () => {
  isListening.value = !isListening.value
  if (isListening.value) {
    // Start voice recognition here
    transcript.value = 'Voice command simulation...'
  } else {
    // Stop voice recognition here
    transcript.value = ''
  }
}
</script>