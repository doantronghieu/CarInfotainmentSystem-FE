<template>
  <div class="bg-gray-800 p-4 rounded-lg">
    <h2 class="text-xl font-bold mb-2">Notifications</h2>
    <div v-for="notification in notifications" :key="notification.id" class="mb-2 p-2 bg-gray-700 rounded">
      <p class="font-semibold">{{ notification.title }}</p>
      <p class="text-sm text-gray-400">{{ notification.message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const notifications = ref([
  { id: 1, title: 'New Message', message: 'You have a new text message' },
  { id: 2, title: 'Calendar', message: 'Upcoming meeting in 15 minutes' },
  { id: 3, title: 'Battery Low', message: 'Phone battery below 20%' },
])
</script>