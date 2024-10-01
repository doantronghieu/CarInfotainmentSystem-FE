<template>
  <div class="bg-gray-800 p-4 rounded-lg">
    <div class="grid grid-cols-8 gap-2">
      <button v-for="(item, index) in quickAccessItems" :key="index" 
              @click="item.action" 
              class="flex flex-col items-center justify-center p-2 bg-gray-700 rounded-lg hover:bg-gray-600">
        <i :class="item.icon" class="text-2xl mb-1 text-blue-400"></i>
        <span class="text-xs">{{ item.label }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const quickAccessItems = ref([
  { icon: 'fas fa-home', label: 'Home', action: () => console.log('Home clicked') },
  { icon: 'fas fa-music', label: 'Music', action: () => console.log('Music clicked') },
  { icon: 'fas fa-map-marker-alt', label: 'Navigation', action: () => console.log('Navigation clicked') },
  { icon: 'fas fa-phone', label: 'Phone', action: () => console.log('Phone clicked') },
  { icon: 'fas fa-cog', label: 'Settings', action: () => console.log('Settings clicked') },
  { icon: 'fas fa-car', label: 'Vehicle', action: () => console.log('Vehicle clicked') },
  { icon: 'fas fa-user', label: 'Profile', action: () => console.log('Profile clicked') },
  { icon: 'fas fa-plus', label: 'Add', action: () => console.log('Add clicked') },
])
</script>