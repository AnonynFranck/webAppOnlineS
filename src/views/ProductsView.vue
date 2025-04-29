<template>
  <div class="category-page">
    <nav class="breadcrumb"><span>Inicio</span> / <span class="current">Categorías</span></nav>

    <div class="content">
      <aside class="category-panel" ref="categoryPanel">
        <div class="category-header">CATEGORÍAS</div>
        <ul>
          <li
            v-for="(category, index) in categories"
            :key="index"
            :class="{ active: selectedCategory === category.name }"
            @click="selectCategory(category.name)"
          >
            <div class="icon-wrapper">
              <img
                v-if="category.imgSrc"
                :src="category.imgSrc"
                :alt="category.name"
                class="category-img"
              />
              <div v-else class="placeholder-icon"></div>
            </div>
            <span class="category-name">{{ category.name }}</span>
          </li>
        </ul>
      </aside>

      <main class="category-content">
        <div class="product-grid">
          <div 
            v-for="(product, index) in getProductsByCategory(selectedCategory)" 
            :key="index" 
            class="product-card"
          >
            <div class="product-image-container">
              <img :src="product.image" :alt="product.title" class="product-image">
            </div>
            <div class="product-info">
              <h3 class="product-title">{{ product.title }}</h3>
              <p class="product-description">{{ product.description }}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
// Importación dinámica de imágenes para íconos
import envasesSvg from '@/assets/productView/envases.svg'
import bowlsSvg from '@/assets/productView/bowls.svg'
import cubiertosSvg from '@/assets/productView/cubiertos.svg'
import salserosSvg from '@/assets/productView/salseros.svg'
import bolsasSvg from '@/assets/productView/bolsas.svg'
import sorbetesSvg from '@/assets/productView/sorbetes.svg'
import platosSvg from '@/assets/productView/platos.svg'
import vasosFriosSvg from '@/assets/productView/vasos_frios.svg'
import vasosCalientesSvg from '@/assets/productView/vasos_calientes.svg'

// Importar las imágenes de los productos
import envasesCover from '@/assets/productCover/envases.jpg'
import bowlsCover from '@/assets/productCover/bowls.jpg'
import cubiertosCover from '@/assets/productCover/cubiertos.jpg'
import salserosCover from '@/assets/productCover/salseros.jpg'
import bolsasCover from '@/assets/productCover/bolsas.jpg'
import sorbetesCover from '@/assets/productCover/sorbetes.jpg'
import platosCover from '@/assets/productCover/platos.jpg'
import vasosFriosCover from '@/assets/productCover/vasos_frios.jpg'
import vasosCalientesCover from '@/assets/productCover/vasos_calientes.jpg'

const productsData = ref([
  {
    category: 'Envases biodegradables',
    products: [
      {
        title: 'Envase Rectangular',
        description: 'Envase biodegradable rectangular ideal para comida para llevar.',
        image: envasesCover
      }
    ]
  },
  {
    category: 'Bowls de bambú',
    products: [
      {
        title: 'Bowl Grande',
        description: 'Bowl de bambú resistente para ensaladas y platos principales.',
        image: bowlsCover
      }
    ]
  },
  {
    category: 'Cubiertos biodegradables',
    products: [
      {
        title: 'Cubiertos Biodegradables',
        description: 'Cubiertos biodegradables para uso diario.',
        image: cubiertosCover
      }
    ]
  },
  {
    category: 'Salseros biodegradables',
    products: [
      {
        title: 'Salseros Biodegradables',
        description: 'Salseros biodegradables para condimentos.',
        image: salserosCover
      }
    ]
  },
  {
    category: 'Bolsas de papel kraft',
    products: [
      {
        title: 'Bolsas de papel kraft',
        description: 'Bolsas kraft ecológicas y resistentes.',
        image: bolsasCover
      }
    ]
  },
  {
    category: 'Sorbetes biodegradables',
    products: [
      {
        title: 'Sorbetes Biodegradables',
        description: 'Sorbetes ecológicos para bebidas.',
        image: sorbetesCover
      }
    ]
  },
  {
    category: 'Platos biodegradables',
    products: [
      {
        title: 'Platos Biodegradables',
        description: 'Platos biodegradables para todo tipo de alimentos.',
        image: platosCover
      }
    ]
  },
  {
    category: 'Vasos para bebidas frías',
    products: [
      {
        title: 'Vasos para bebidas frías',
        description: 'Vasos sostenibles para bebidas frías.',
        image: vasosFriosCover
      }
    ]
  },
  {
    category: 'Vasos para bebidas calientes',
    products: [
      {
        title: 'Vasos para bebidas calientes',
        description: 'Vasos sostenibles para bebidas calientes.',
        image: vasosCalientesCover
      }
    ]
  }
])

const categories = ref([
  { name: 'Envases biodegradables', icon: 'envases.svg', imgSrc: envasesSvg },
  { name: 'Bowls de bambú', icon: 'bowls.svg', imgSrc: bowlsSvg },
  { name: 'Cubiertos biodegradables', icon: 'cubiertos.svg', imgSrc: cubiertosSvg },
  { name: 'Salseros biodegradables', icon: 'salseros.svg', imgSrc: salserosSvg },
  { name: 'Bolsas de papel kraft', icon: 'bolsas.svg', imgSrc: bolsasSvg },
  { name: 'Sorbetes biodegradables', icon: 'sorbetes.svg', imgSrc: sorbetesSvg },
  { name: 'Platos biodegradables', icon: 'platos.svg', imgSrc: platosSvg },
  { name: 'Vasos para bebidas frías', icon: 'vasos_frios.svg', imgSrc: vasosFriosSvg },
  { name: 'Vasos para bebidas calientes', icon: 'vasos_calientes.svg', imgSrc: vasosCalientesSvg },
])

const selectedCategory = ref(categories.value[0].name)
const categoryPanel = ref(null)

const selectCategory = (name) => {
  selectedCategory.value = name
}

const getProductsByCategory = (categoryName) => {
  const categoryData = productsData.value.find(item => item.category === categoryName)
  return categoryData ? categoryData.products : []
}

const handleScroll = () => {
  const panel = categoryPanel.value
  if (!panel) return

  const footer = document.querySelector('footer')
  if (!footer) return

  const panelRect = panel.getBoundingClientRect()
  const footerTop = footer.getBoundingClientRect().top
  const paddingBottom = 20 // Espacio entre el panel y el footer

  if (footerTop <= panelRect.bottom + paddingBottom) {
    // Si el panel toca el footer, fijarlo en posición relativa
    panel.style.position = 'absolute'
    panel.style.top = 'auto'
    panel.style.bottom = `${paddingBottom + window.innerHeight - footerTop}px`
  } else {
    // Si hay espacio, mantener el panel fijo
    panel.style.position = 'fixed'
    panel.style.top = '15%'
    panel.style.bottom = 'auto'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Aplicar posición inicial
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.category-page {
  padding: 6%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.breadcrumb {
  font-size: 15px;
  color: #777;
  padding-left: 5px;
  margin-bottom: 20px;
}

.breadcrumb .current {
  font-weight: bold;
  color: #400c1f;
}

.content {
  display: flex;
  position: relative;
}

.category-panel {
  width: 280px;
  background: #f5f5f5;
  border-radius: 18px 0 0 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 100px;
  left: calc(50% - 600px + 20px);
  z-index: 10;
  overflow: hidden;
  transition: all 0.3s ease;
  /* Puedes ajustar esta posición para alinear perfectamente */
  /* left: 20px; */ /* Usar este valor para ajustar manualmente */
}

.category-header {
  background: #8d1b45;
  color: white;
  padding: 24px 15px;
  font-weight: bold;
  text-align: left;
  font-size: 16px;
  letter-spacing: 0.5px;
}

.category-panel ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-panel li {
  display: flex;
  align-items: center;
  padding: 24px 15px;
  cursor: pointer;
  border-bottom: 0px solid #eaeaea; /* #eaeaea */
  background: #ffffff;
  transition: all 0.2s ease;
  position: relative;
  color: #400C1F;
}

.category-panel li:hover {
  background: #eaeaea;
}

.category-panel li.active {
  background: #E9EAEB;
  position: relative;
}

.category-panel li.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  background: #8d1b45;
}

.icon-wrapper {
  width: 24px;
  height: 24px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.category-img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.placeholder-icon {
  width: 20px;
  height: 20px;
  background-color: #ddd;
  border-radius: 4px;
}

.category-name {
  font-size: 14px;
  line-height: 1.4;
  word-break: normal;
  white-space: normal;
}

.category-content {
  margin-left: 325px; /* alinear */
  flex-grow: 2;
  padding: 7px;
}

/* Product Grid Styles - Cuadros alargados */
.product-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Dos columnas para cuadros más alargados */
  gap: 25px;
  margin-top: 0;
}

.product-card {
  background: #E9EAEB;
  /* border-radius: 0px; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex; 
  flex-direction: column;
  height: auto;
  /* Puedes ajustar el ancho máximo si es necesario */
  /* max-width: 500px; */ /* Ajusta según sea necesario */
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.product-image-container {
  width: 100%;
  height: 270px; /* Altura aumentada para la imagen */
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-info {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px;
  color: #8d1b45;
}

.product-description {
  font-size: 14px;
  color: #5a5a5a;
  margin: 0;
  line-height: 1.5;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .category-panel {
    left: 20px;
  }
  
  .category-content {
    margin-left: 300px;
  }
}

@media (max-width: 992px) {
  .product-grid {
    grid-template-columns: 1fr; /* Una columna en pantallas medianas para mantener cuadros alargados */
  }
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }

  .category-panel {
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    margin-bottom: 20px;
    border-radius: 10px;
  }

  .category-content {
    margin-left: 0;
  }
}
</style>