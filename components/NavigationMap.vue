<template>
  <div class="bg-gray-800 p-4 rounded-lg">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">Navigation</h2>
      <input v-model="searchQuery" @keyup.enter="searchLocation" placeholder="Search for a location" class="bg-gray-700 text-white p-2 rounded-md w-1/2" />
    </div>
    <div class="map-container">
      <div ref="mapElement" class="map"></div>
    </div>
    <div class="mt-4 grid grid-cols-3 gap-4">
      <div>
        <p class="text-sm text-gray-400">Next Stop</p>
        <p class="font-bold">{{ nextStop }}</p>
      </div>
      <div>
        <p class="text-sm text-gray-400">Destination</p>
        <p class="font-bold">{{ destination }}</p>
      </div>
      <div>
        <p class="text-sm text-gray-400">Arrival Time</p>
        <p class="font-bold">{{ arrivalTime }}</p>
      </div>
      <div>
        <p class="text-sm text-gray-400">Time Left</p>
        <p class="font-bold">{{ timeLeft }}</p>
      </div>
      <div>
        <p class="text-sm text-gray-400">Distance Left</p>
        <p class="font-bold">{{ distanceLeft }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const mapElement = ref<HTMLElement | null>(null);
const searchQuery = ref('');
let map: any = null;
let marker: any = null;
let L: any = null;

const nextStop = ref('Las Vegas, NV');
const destination = ref('Denver, CO');
const arrivalTime = ref('3:30 PM');
const timeLeft = ref('2h 45m');
const distanceLeft = ref('500 mi');

const initMap = async () => {
  if (process.client && mapElement.value) {
    L = await import('leaflet');
    await import('leaflet/dist/leaflet.css');

    map = L.map(mapElement.value).setView([36.1699, -115.1398], 8); // Las Vegas coordinates
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add route
    const route = [
      [36.1699, -115.1398], // Las Vegas
      [39.7392, -104.9903]  // Denver
    ];
    L.polyline(route, {color: 'blue'}).addTo(map);

    // Add markers
    L.marker([36.1699, -115.1398]).addTo(map).bindPopup('Las Vegas');
    L.marker([39.7392, -104.9903]).addTo(map).bindPopup('Denver');
  }
};

const searchLocation = async () => {
  // Implementation remains the same
};

onMounted(() => {
  initMap();
});

onBeforeUnmount(() => {
  if (map) map.remove();
});
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 400px;
}
.map {
  width: 100%;
  height: 100%;
}
</style>