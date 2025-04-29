<template>
  <div class="slider-container">
    <div class="image-wrapper">
      <img :src="currentImage" class="slider-image" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const images = [
  new URL('@/modules/imageSlider/assets/image1.jpg', import.meta.url).href,
  new URL('@/modules/imageSlider/assets/image2.jpg', import.meta.url).href,
  new URL('@/modules/imageSlider/assets/image3.jpg', import.meta.url).href,
];

const currentImage = ref(images[0]);
let index = 0;

const changeImage = () => {
  gsap.to(".slider-image", { opacity: 1, duration: 1, onComplete: () => {
    index = (index + 1) % images.length;
    currentImage.value = images[index];
    gsap.to(".slider-image", { opacity: 1, duration: 1 });
  }});
};

onMounted(() => {
  setInterval(changeImage, 3000);
});
</script>

<style scoped>
.slider-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px; /* Espacio para la barra de navegación */
  width: 100%;
}

.image-wrapper {
  width: 98vw; /* Ocupa casi toda la pantalla con un borde mínimo */
  max-width: 1900px; /* Ajuste máximo */
  height: 700px; /* Altura fija */
  border-radius: 15px; /* Bordes redondeados */
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  transition: opacity 2s ease-in-out;
}
</style>
