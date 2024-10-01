<template>
  <div class="bg-gray-800 p-2 rounded-lg">
    <div class="grid grid-cols-8 gap-2">
      <button v-for="(item, index) in quickAccessItems" :key="index" class="flex flex-col items-center justify-center p-1 bg-gray-700 rounded-lg hover:bg-gray-600">
        <i :class="item.icon" class="text-lg mb-1 text-blue-400"></i>
        <span class="text-xs">{{ item.label }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const quickAccessItems = [
  { icon: 'fas fa-film', label: 'Watch' },
  { icon: 'fas fa-music', label: 'Listen' },
  { icon: 'fas fa-gamepad', label: 'Play' },
  { icon: 'fas fa-book', label: 'Read' },
  { icon: 'fab fa-youtube', label: 'YouTube' },
  { icon: 'fas fa-map-marker-alt', label: 'Nav' },
  { icon: 'fas fa-cog', label: 'Settings' },
  { icon: 'fas fa-utensils', label: 'Dine' }
]
</script>