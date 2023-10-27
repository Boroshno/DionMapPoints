<template>
  <div id="map-view" class="map-container"></div>
</template>

<script>
import { map, tileLayer } from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'MapView',  
  data() {
    return {
      map: null,
    };
  },
  methods: {
    initializeMap() {
      this.map = map('map-view').setView([51.505, -0.09], 13); 
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(this.map);
    },
  },
  mounted() {
    this.initializeMap();
  },
};
</script>

<style scoped>
#map-view {
  flex: 1; /* this will allow #map-view to take up all remaining horizontal space */
  height: 100%; /* make sure the map view takes up all the vertical space available */
}

</style>