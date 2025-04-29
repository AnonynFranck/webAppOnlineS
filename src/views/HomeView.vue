<template>
  <div class="home-container">
    <Navigation />
    <ImageSlider />
    <WhyChoose />
    <CustomerFavorites />
    <FindUs />
  </div>
</template>

<script setup>
import Navigation from "@/components/Navigation.vue";
import ImageSlider from "@/modules/imageSlider/components/ImageSlider.vue";
import WhyChoose from "@/modules/body/components/WhyChoose.vue";
import CustomerFavorites from "@/modules/body/components/CustomerFavorites.vue";
import FindUs from "@/modules/body/components/FindUs.vue";
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 100vh; /* Cambiar height a min-height para permitir crecimiento */
}
</style>
