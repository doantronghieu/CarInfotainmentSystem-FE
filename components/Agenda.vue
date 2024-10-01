<template>
  <div class="bg-gray-800 p-4 rounded-lg">
    <h2 class="text-xl font-bold mb-2">Today's Agenda</h2>
    <div v-for="event in events" :key="event.id" class="mb-2">
      <div class="flex justify-between">
        <span>{{ event.title }}</span>
        <span>{{ event.time }}</span>
      </div>
      <div class="text-sm text-gray-400">{{ event.duration }}</div>
    </div>
  </div>
</template>

<script setup>
const events = [
  { id: 1, title: 'Meeting with John', time: '10:00 AM', duration: '1 hour' },
  { id: 2, title: 'Lunch break', time: '12:00 PM', duration: '1 hour' },
  { id: 3, title: 'Project review', time: '2:00 PM', duration: '2 hours' },
]
</script>