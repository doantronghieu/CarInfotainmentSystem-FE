<template>
  <div class="dashboard bg-gray-900 text-white h-screen flex flex-col p-2">
    <TopBar />
    <div class="flex-grow grid grid-cols-12 gap-2 mt-2">
      <div class="col-span-8">
        <div class="grid grid-cols-2 gap-2">
          <Speedometer />
          <PowerUsage />
        </div>
        <NavigationMap class="mt-2" />
      </div>
      <div class="col-span-4">
        <WeatherWidget />
        <MediaPlayer class="mt-2" />
        <ClimateControl class="mt-2" />
        <VehicleInfo class="mt-2" />
        <Agenda class="mt-2" />
      </div>
    </div>
    <QuickAccess class="mt-2" />
  </div>
</template>

<script setup>
import TopBar from '~/components/TopBar.vue'
import Speedometer from '~/components/Speedometer.vue'
import PowerUsage from '~/components/PowerUsage.vue'
import NavigationMap from '~/components/NavigationMap.vue'
import WeatherWidget from '~/components/WeatherWidget.vue'
import MediaPlayer from '~/components/MediaPlayer.vue'
import ClimateControl from '~/components/ClimateControl.vue'
import VehicleInfo from '~/components/VehicleInfo.vue'
import Agenda from '~/components/Agenda.vue'
import QuickAccess from '~/components/QuickAccess.vue'
</script>