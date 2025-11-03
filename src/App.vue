<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary, #ffffff);
  color: var(--text-primary, #212529);
}

main {
  flex: 1;
  padding-top: 80px; /* Espacio para el navbar fixed */
  background-color: var(--bg-primary, #ffffff);
}
</style>
