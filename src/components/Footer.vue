<template>
    <footer class="footer">
        <button class="catalog-button">Ir a catálogo de productos</button>

        <div class="social-links">
        <a href="#" title="Facebook">
            <img src="@/assets/facebook.svg" alt="Facebook" />
        </a>
        <a href="#" title="Instagram">
            <img src="@/assets/instagram.svg" alt="Instagram" />
        </a>
        <a href="#" title="Tiktok">
            <img src="@/assets/tiktok.svg" alt="Tiktok" />
        </a>
        </div>
    </footer>
</template>

<style scoped>
    .footer {
    background-color: #1a1a1a;
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    margin-top: auto; /* Esto empujará el footer al fondo cuando hay poco contenido */
    box-sizing: border-box; /* Importante: incluye padding en el cálculo del ancho */
}

.catalog-button {
    background-color: #ff9800;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
    margin-left: 20px; /* Margen para que no quede pegado */
}

.catalog-button:hover {
    background-color: #e68900;
}

.social-links {
    display: flex;
    gap: 20px;
    margin-right: 20px; /* Margen para que no quede pegado */
}

.social-links a img {
    width: 30px;
    height: 30px;
    filter: invert(1); /* Hace los íconos blancos */
}
</style>
