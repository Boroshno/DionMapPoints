<template>
  <div class="sidebar" :class="{ open: sidebarOpen }">
    <h2>My Places</h2>
    <div v-for="(place, index) in places" :key="index">
      <input type="checkbox" :id="place.name" v-model="place.visible">
      <label :for="place.name">{{ place.name }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',
  computed: {
    places() {
      return this.$store.state.places;
    },
    sidebarOpen() {
      return this.$store.state.sidebarOpen;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  height: 100%;
  background-color: #f5f5f5;
  padding: 10px;
  overflow: auto;
  transition: transform 0.3s ease-in-out;
  position: fixed;
  left: 0;
  transform: translateX(-100%);
  flex-basis: 200px;
}
.sidebar.open {
  transform: translateX(0);
}
</style>