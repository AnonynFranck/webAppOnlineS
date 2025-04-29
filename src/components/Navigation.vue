<template>
  <header class="header-container">
    <RouterLink to="/" class="logo-container">
      <img src="@/assets/logo.svg" alt="Brand Logo" />
    </RouterLink>
    <nav class="nav-container">
      <ul class="nav-list">
        <li><RouterLink to="/manufacturing">Fabricacion directa</RouterLink></li>
        <li><RouterLink to="/products">Productos</RouterLink></li>
        <li><RouterLink to="/about">Nosotros</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #400C1F;
  padding: 10px 5%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

/* Ajuste del logo */
.logo-container {
  display: flex;
  align-items: center;
}

.logo-container img {
  height: 50px;
  /* margin-right: 5px; Aumenta la separación entre el logo y el menú */
  margin-left: 350px;
}

/* Asegura que la barra de navegación se alinee bien */
.nav-container {
  flex-grow: 1;
  display: flex;
  justify-content: center; /* Centra el menú en la página */
}

.nav-list {
  display: flex;
  gap: 50px; /* Espaciado entre los elementos del menú */
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-list li a {
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ebfdc5;
  padding: 7px 20px;
  transition: color 0.5s, background-color 0.5s;
}

.nav-list li a:hover {
  color: #A63429;
}
</style>
