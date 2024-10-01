<!-- components/DashboardGrid.vue -->
<template>
  <div class="grid grid-cols-3 gap-2 p-2 bg-gray-900">
    <div class="col-span-2 row-span-2 bg-gray-800 rounded-lg p-4">
      <NavigationInfo />
    </div>
    <div class="bg-gray-800 rounded-lg p-4">
      <CarInfo />
    </div>
    <div class="bg-gray-800 rounded-lg p-4">
      <Transaction />
    </div>
    <div class="bg-gray-800 rounded-lg p-4">
      <WeatherInfo />
    </div>
    <div class="bg-gray-800 rounded-lg p-4">
      <ClimateControl />
    </div>
    <div class="bg-gray-800 rounded-lg p-4">
      <MediaPlayer />
    </div>
  </div>
</template>

<script setup>
import NavigationInfo from './NavigationInfo.vue'
import CarInfo from './CarInfo.vue'
import Transaction from './Transaction.vue'
import WeatherInfo from './WeatherInfo.vue'
import ClimateControl from './ClimateControl.vue'
import MediaPlayer from './MediaPlayer.vue'
</script>