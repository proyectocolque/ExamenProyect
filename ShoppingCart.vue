<template>
  <div class="container my-5">
    <h2 class="text-center mb-4 text-primary">Tu Carrito de Compras</h2>
    <div v-if="cartItems.length === 0" class="alert alert-info text-center">
      Tu carrito está vacío. ¡Empieza a añadir productos!
    </div>
    <div v-else>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in cartItems" :key="item.id">
          <div>
            <h6 class="my-0">{{ item.name }}</h6>
            <small class="text-muted">{{ item.quantity }} x {{ item.price }} Bs.</small>
          </div>
          <span class="text-success fw-bold">{{ item.total }} Bs.</span>
        </li>
      </ul>
      <div class="d-flex justify-content-between align-items-center p-3 border-top fw-bold">
        <span>Total a Pagar:</span>
        <span class="fs-4 text-success">{{ totalAmount }} Bs.</span>
      </div>
      <div class="d-grid mt-4">
        <button @click="checkout" class="btn btn-success btn-lg">
          <i class="bi bi-bag-check me-2"></i> Finalizar Pedido
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data() {
    return {
      cartItems: [
        { id: 1, name: 'Arroz Integral', price: 15.50, quantity: 2, total: 31.00 },
        { id: 3, name: 'Leche Fresca', price: 8.00, quantity: 3, total: 24.00 },
      ],
    };
  },
  computed: {
    totalAmount() {
      return this.cartItems.reduce((acc, item) => acc + item.total, 0).toFixed(2);
    },
  },
  methods: {
    checkout() {
      alert(`¡Pedido finalizado! Total: ${this.totalAmount} Bs. Pronto te contactaremos.`);
    },
  },
};
</script>