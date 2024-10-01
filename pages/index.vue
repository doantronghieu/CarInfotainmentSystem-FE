<template>
  <div class="dashboard bg-gray-900 text-white p-4 h-screen">
    <div class="grid grid-cols-4 gap-4">
      <div class="col-span-3">
        <ClientOnly>
          <NavigationMap />
        </ClientOnly>
      </div>
      <div class="col-span-1 space-y-4">
        <MediaPlayer />
        <ClimateControl />
        <VehicleInfo />
      </div>
    </div>
    <QuickAccess class="mt-4" />
  </div>
</template>

<script setup>
import NavigationMap from '~/components/NavigationMap.vue'
import MediaPlayer from '~/components/MediaPlayer.vue'
import ClimateControl from '~/components/ClimateControl.vue'
import VehicleInfo from '~/components/VehicleInfo.vue'
import QuickAccess from '~/components/QuickAccess.vue'
</script>