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
        <EnergyManagement class="mt-2" />
      </div>
      <div class="col-span-4">
        <WeatherWidget />
        <MediaPlayer class="mt-2" />
        <ClimateControl class="mt-2" />
        <VehicleInfo class="mt-2" />
        <Notifications class="mt-2" />
        <DriverAssistance class="mt-2" />
      </div>
    </div>
    <QuickAccess class="mt-2" />
    <VoiceCommand />
    <ParkingAssistance v-if="showParkingAssistance" />
    <Settings v-if="showSettings" />
  </div>
</template>

<script setup>
import TopBar from '~/components/TopBar.vue'
import Speedometer from '~/components/Speedometer.vue'
import PowerUsage from '~/components/PowerUsage.vue'
import NavigationMap from '~/components/NavigationMap.vue'
import EnergyManagement from '~/components/EnergyManagement.vue'
import WeatherWidget from '~/components/WeatherWidget.vue'
import MediaPlayer from '~/components/MediaPlayer.vue'
import ClimateControl from '~/components/ClimateControl.vue'
import VehicleInfo from '~/components/VehicleInfo.vue'
import Notifications from '~/components/Notifications.vue'
import DriverAssistance from '~/components/DriverAssistance.vue'
import QuickAccess from '~/components/QuickAccess.vue'
import VoiceCommand from '~/components/VoiceCommand.vue'
import ParkingAssistance from '~/components/ParkingAssistance.vue'
import Settings from '~/components/Settings.vue'

const showParkingAssistance = ref(false)
const showSettings = ref(false)

// You can add methods here to toggle the visibility of ParkingAssistance and Settings
</script>