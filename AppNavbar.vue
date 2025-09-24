<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/">Casa de Ríos</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/productos">Productos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/galeria">Galería</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/carrito">
              <i class="bi bi-cart me-1"></i> Carrito
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/contacto">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style scoped>
.navbar-brand {
  font-size: 1.5rem;
  color: #fff;
}
.nav-link {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
}
.nav-link:hover {
  color: #fff;
}
.nav-link.active {
  color: #fff !important;
  border-bottom: 2px solid #007bff;
}
.bi-cart {
  font-size: 1.1rem;
}
</style>