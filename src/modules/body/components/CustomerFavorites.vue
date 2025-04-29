  <template>
    <section class="customer-favorites">
      <h2>Favoritos del cliente</h2>
      <div class="product-grid">
        <div v-for="(product, index) in products" :key="index" class="product-card">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const products = [
  { name: "EcoCup", image: new URL("@/modules/body/assets/image1.jpg", import.meta.url).href, description: "Sustainable coffee cup" },
  { name: "BioStraw", image: new URL("@/modules/body/assets/image2.jpg", import.meta.url).href, description: "Biodegradable straw" },
  { name: "Green Box", image: new URL("@/modules/body/assets/image3.jpg", import.meta.url).href, description: "Recyclable food container" }
  ];

  </script>
  
  <style scoped>
  .customer-favorites {
    padding: 50px;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    margin: 40px 5%;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .product-grid {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .product-card {
    background: #f1f1f1;
    padding: 20px;
    border-radius: 10px;
    width: 200px;
    text-align: center;
  }
  
  .product-card img {
    width: 100%;
    border-radius: 10px;
  }
  </style>
  