<!-- <template>
    <section class="find-us">
      <h2>Find Us</h2>
      <div class="map-container">
        <iframe
          width="100%"
          height="400"
          style="border: 0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          :src="mapSrc"
        ></iframe>
      </div>
    </section>
  </template>
 Recordar restringir el acceso de hacer peticiones a la API 
  <script setup>
  const mapSrc = "https://www.google.com/maps/embed/v1/place?q=YOUR_BUSINESS_LOCATION&key=AIzaSyDqrxP1E5ZRmNe9vtbjuVQYd6NBZxbQh0U";
  </script>
  
  <style scoped>
  .find-us {
    padding: 50px;
    text-align: center;
    background-color: #f9f9f9;
    border-radius: 10px;
    margin: 40px 5%;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .map-container {
    margin-top: 20px;
  }
  </style>
   -->

<!-- <template>
  <section class="find-us">
    <h2>Find Us</h2>
    <div id="map"></div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'

onMounted(() => {
  const map = L.map('map').setView([-12.0464, -77.0428], 13) 
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
  L.marker([-12.0464, -77.0428]).addTo(map).bindPopup('Nuestra ubicación').openPopup()
})
</script>

<style scoped>
#map {
  /* height: 400px; */
  height: 900px;
  width: 100%;
  border-radius: 10px;
}
</style> -->

<template>
  <section class="find-us">
    <h2>Encuentranos</h2>
    <div ref="mapContainer" class="map"></div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'

const mapContainer = ref(null)

onMounted(async () => {
  const loader = new Loader({
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    version: 'weekly',
  })

  const { Map } = await loader.importLibrary('maps')
  const { AdvancedMarkerElement } = await loader.importLibrary('marker')

  const map = new Map(mapContainer.value, {
    center: { lat: -12.049689, lng: -77.033981 },
    zoom: 14,
    mapId: 'DEMO_MAP_ID',
  })

  new AdvancedMarkerElement({
    map,
    position: { lat: -12.049689, lng: -77.033981 },
    title: 'My company',
  })
})
</script>

<style scoped>
.map {
  height: 400px;
  width: 900px;
  border-radius: 10px;
}
</style>
