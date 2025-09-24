<template>
  <footer class="bg-dark text-white text-center py-4 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3 mb-md-0">
          <h5 class="text-primary">Contacto</h5>
          <ul class="list-unstyled">
            <li><i class="bi bi-geo-alt-fill me-2"></i> Dirección: Av. Principal s/n, Casa del Rio</li>
            <li><i class="bi bi-telephone-fill me-2"></i> Teléfono: +591 72494148</li>
            <li><i class="bi bi-envelope-fill me-2"></i> Email: colque@gmail.com</li>
          </ul>
        </div>
        <div class="col-md-4 mb-3 mb-md-0">
          <h5 class="text-primary">Redes Sociales</h5>
          <a href="#" class="text-white mx-2"><i class="bi bi-facebook fs-4"></i></a>
          <a href="#" class="text-white mx-2"><i class="bi bi-instagram fs-4"></i></a>
          <a href="#" class="text-white mx-2"><i class="bi bi-whatsapp fs-4"></i></a>
        </div>
        <div class="col-md-4">
          <h5 class="text-primary">Enlaces Rápidos</h5>
          <ul class="list-unstyled">
            <li><router-link to="/politica" class="text-white text-decoration-none">Política de Privacidad</router-link></li>
            <li><router-link to="/terminos" class="text-white text-decoration-none">Términos de Servicio</router-link></li>
          </ul>
        </div>
      </div>
      <hr class="my-3 border-secondary">
      <p class="mb-0">&copy; 2025 Casa del Rio Multi-Abarrotes. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.bg-dark {
  background-color: #5f4e4a !important;
}
.text-white a {
  transition: color 0.3s ease;
}
.text-white a:hover {
  color: #045245 !important;
}
</style>