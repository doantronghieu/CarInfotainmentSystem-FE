<template>
  <div class="bg-gray-800 p-4 rounded-lg">
    <h2 class="text-xl font-bold mb-4">Settings</h2>
    <div class="space-y-4">
      <div v-for="(setting, index) in settings" :key="index" class="flex justify-between items-center">
        <span>{{ setting.label }}</span>
        <div v-if="setting.type === 'toggle'">
          <button @click="toggleSetting(index)" 
                  :class="setting.value ? 'bg-blue-500' : 'bg-gray-600'"
                  class="relative inline-flex items-center h-6 rounded-full w-11">
            <span :class="setting.value ? 'translate-x-6' : 'translate-x-1'" 
                  class="inline-block w-4 h-4 transform bg-white rounded-full transition-transform" />
          </button>
        </div>
        <select v-else-if="setting.type === 'select'" v-model="setting.value" class="bg-gray-700 rounded p-1">
          <option v-for="option in setting.options" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const settings = ref([
  { label: 'Notifications', type: 'toggle', value: true },
  { label: 'Auto-Lock', type: 'toggle', value: false },
  { label: 'Language', type: 'select', value: 'English', options: ['English', 'Spanish', 'French'] },
  { label: 'Units', type: 'select', value: 'Metric', options: ['Metric', 'Imperial'] },
])

const toggleSetting = (index) => {
  settings.value[index].value = !settings.value[index].value
}
</script>