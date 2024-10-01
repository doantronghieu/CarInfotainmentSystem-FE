<template>
  <div class="bg-gray-800 p-4 rounded-lg h-96">
    <h2 class="text-xl font-bold mb-2">Cluster Map</h2>
    <client-only>
      <LMap
        ref="map"
        style="height: 300px"
        :zoom="6"
        :center="[47.21322, -1.559482]"
        :use-global-leaflet="true"
        @ready="onMapReady"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          layer-type="base"
          name="OpenStreetMap"
        />
      </LMap>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import L from 'leaflet'

const map = ref(null)

const locations = [
  { name: 'New York', lat: 40.7128, lng: -74.0060 },
  { name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
  { name: 'Chicago', lat: 41.8781, lng: -87.6298 },
  // Add more locations as needed
]

const onMapReady = () => {
  if (map.value) {
    useLMarkerCluster({
      leafletObject: map.value.leafletObject,
      markers: locations
    })
  }
}
</script>