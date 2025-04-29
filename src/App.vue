<script setup>
import { RouterView } from 'vue-router';
import Navigation from "./components/Navigation.vue";
import Footer from './components/Footer.vue';
</script>

<template>
  <div id="app">
    <Navigation />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden; /* Evita el scroll horizontal */
}

/* Estilos globales */
h2 {
  font-family: "Inter", sans-serif; /*  cambiar */
  color: #400C1F;
  font-size: 2rem; /* Ajusta el tamaño */
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>