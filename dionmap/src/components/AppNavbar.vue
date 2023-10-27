<template>
  <nav class="navbar">
    <button @click="toggleSidebar">Toggle Sidebar</button>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  methods: {
    toggleSidebar() {
      this.$store.commit('toggleSidebar');
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px;
}
</style>