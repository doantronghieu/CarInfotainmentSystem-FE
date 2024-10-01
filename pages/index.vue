<template>
  <div class="dashboard bg-gray-900 text-white h-screen flex flex-col p-2">
    <TopBar />
    <div class="flex-grow grid grid-cols-12 gap-2 mt-2">
      <div class="col-span-7">
        <NavigationMap />
        <Speedometer class="mt-2" />
      </div>
      <div class="col-span-3">
        <WeatherWidget />
        <MediaPlayer class="mt-2" />
        <ClimateControl class="mt-2" />
      </div>
      <div class="col-span-2">
        <VehicleInfo />
      </div>
    </div>
    <QuickAccess class="mt-2" />
  </div>
</template>

<script setup>
import TopBar from '~/components/TopBar.vue'
import NavigationMap from '~/components/NavigationMap.vue'
import Speedometer from '~/components/Speedometer.vue'
import WeatherWidget from '~/components/WeatherWidget.vue'
import MediaPlayer from '~/components/MediaPlayer.vue'
import ClimateControl from '~/components/ClimateControl.vue'
import VehicleInfo from '~/components/VehicleInfo.vue'
import QuickAccess from '~/components/QuickAccess.vue'
</script>