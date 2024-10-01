<template>
  <div class="bg-gray-800 p-2 rounded-lg">
    <div class="flex justify-between items-center mb-2">
      <h2 class="text-lg font-bold">Navigation</h2>
      <input v-model="searchQuery" placeholder="Search for a location" class="bg-gray-700 text-white p-1 rounded-md w-1/2 text-sm" />
      <button class="text-xl"><i class="fas fa-compass"></i></button>
    </div>
    <div class="map-container relative h-64">
      <div ref="mapElement" class="map"></div>
      <div class="absolute top-2 left-2 space-y-1">
        <button class="bg-gray-700 p-1 rounded-full"><i class="fas fa-plus"></i></button>
        <button class="bg-gray-700 p-1 rounded-full"><i class="fas fa-minus"></i></button>
      </div>
    </div>
    <div class="mt-2 grid grid-cols-3 gap-2 text-sm">
      <div>
        <p class="text-gray-400">Next Turn</p>
        <p class="font-bold">{{ nextTurn }}</p>
      </div>
      <div>
        <p class="text-gray-400">Distance to Turn</p>
        <p class="font-bold">{{ distanceToTurn }}</p>
      </div>
      <div>
        <p class="text-gray-400">ETA</p>
        <p class="font-bold">{{ eta }}</p>
      </div>
    </div>
    <div class="mt-2 bg-gray-700 p-1 rounded-lg text-sm">
      <p>{{ detailedInstructions }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

const mapElement = ref<HTMLElement | null>(null);
const searchQuery = ref('');
let map: any = null;
let marker: any = null;
let L: any = null;

const nextTurn = ref('Turn right on Main St');
const distanceToTurn = ref('0.5 mi');
const eta = ref('10:30 AM');
const detailedInstructions = ref('In 0.5 miles, turn right onto Main St, then your destination will be on the left');

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