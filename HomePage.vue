<template>
  <div class="hero-section text-center text-white py-5">
    <div class="container my-5">
      <div class="p-5 bg-dark rounded-3 shadow-lg bg-opacity-75">
        <h1 class="display-4 fw-bold mb-3">Almacén Casa de Ríos Multi-Abarrotes</h1>
        <p class="fs-5 mb-4">
          Todo lo que necesitas para tu hogar, al alcance de tu mano.
          <br>¡Productos frescos, variados y de la mejor calidad!
        </p>
        <router-link to="/productos" class="btn btn-primary btn-lg mt-3">
          Ver Productos
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.hero-section {
  background: url('https://img.freepik.com/premium-photo/industrial-property-warehouse-building_87720-121226.jpg') no-repeat center center;
  background-size: cover;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg-opacity-75 {
  background-color: rgba(49, 174, 188, 0.75) !important;
}
.btn-primary {
  background-color: #48ff00;
  border-color: #e27a11;
  transition: all 0.3s ease;
}
.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
  transform: scale(1.05);
}
</style>