<template>
  <div class="contact-form-section py-5">
    <div class="container my-5">
      <h2 class="text-center mb-4 text-primary fw-bold">Contáctanos</h2>
      <div class="card p-4 shadow-lg mx-auto" style="max-width: 600px; border-radius: 15px;">
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label fw-bold">Nombre</label>
            <input type="text" class="form-control" id="name" v-model="form.name" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label fw-bold">Correo Electrónico</label>
            <input type="email" class="form-control" id="email" v-model="form.email" required>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label fw-bold">Mensaje</label>
            <textarea class="form-control" id="message" rows="4" v-model="form.message" required></textarea>
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary btn-lg">
              <i class="bi bi-send me-2"></i> Enviar Mensaje
            </button>
          </div>
        </form>
        <div v-if="successMessage" class="alert alert-success mt-3 text-center" role="alert">
          ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      successMessage: false
    };
  },
  methods: {
    submitForm() {
      console.log('Formulario enviado:', this.form);
      this.successMessage = true;
      setTimeout(() => {
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
        this.successMessage = false;
      }, 3000);
    }
  }
};
</script>

<style scoped>
.btn-primary {
  background-color: #ba78e0;
  border-color: #1c5088;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #b36800;
  border-color: #58bfd2;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>