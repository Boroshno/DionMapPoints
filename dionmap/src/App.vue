<template>
  <div id="app">
    <app-navbar></app-navbar>
    <app-sidebar></app-sidebar>
    <map-view></map-view>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue' 
import AppSidebar from './components/AppSidebar.vue'
import MapView from './components/MapView.vue'

export default {
  name: 'App',
  components: {
    AppNavbar, 
    AppSidebar,
    MapView,
  },
  mounted() {
    this.$store.dispatch('initializeMap');
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 60px;*/
  display: flex;
  flex-direction: column;
  height: 100vh; /* Sets the height to 100% of the viewport */
}

.content {
  margin-top: 41px;
  width: 100%;  /* Adds this line */
  display: flex;
  flex-direction: row;
  flex: 1; /* this will allow .content to take up all remaining vertical space */
}

body {
    display: flex;
    margin: 0px;
}

.navbar {
  width: 100%;
  height: 60px; /* adjust as needed */
}
</style>