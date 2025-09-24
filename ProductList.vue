<template>
  <div class="product-list-section py-5">
    <div class="container my-5">
      <h2 class="text-center mb-5 text-primary fw-bold">Nuestros Productos</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="product in products" :key="product.id">
          <div class="card h-100 shadow-lg border-0 rounded-3 product-card">
            <img :src="product.image" class="card-img-top img-fluid" :alt="product.name">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title fw-bold text-dark">{{ product.name }}</h5>
              <p class="card-text text-muted">{{ product.description }}</p>
              <p class="fs-4 fw-bold text-success mt-auto">{{ product.price }} Bs.</p>
              <button @click="addToCart(product)" class="btn btn-primary mt-2 w-100">
                <i class="bi bi-cart-plus me-2"></i> Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: [
        { id: 1, name: 'Arroz Integral', description: 'Arroz de alta calidad, rico en fibra.', price: 15.50, image: 'https://tse2.mm.bing.net/th/id/OIP.k_xdZ2tT3dMj7tCkLAZ_UQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
        { id: 2, name: 'Aceite de Girasol', description: 'Ideal para cocinar y freír.', price: 25.00, image: 'https://tse4.mm.bing.net/th/id/OIP.SFtJ0zrEl5Zeti0BaREIigHaIg?w=545&h=626&rs=1&pid=ImgDetMain&o=7&rm=3' },
        { id: 3, name: 'Leche Fresca', description: 'Leche entera, deliciosa y nutritiva.', price: 8.00, image: 'https://tse3.mm.bing.net/th/id/OIP.sJ_88ITFO-mUeTmTxyVQ9AHaFb?w=1200&h=879&rs=1&pid=ImgDetMain&o=7&rm=3' },
        { id: 4, name: 'Azúcar Refinada', description: 'El endulzante perfecto para tus recetas.', price: 12.00, image: 'https://tse3.mm.bing.net/th/id/OIP.--nl94E0oKtHYt6xmxRNYAHaFg?rs=1&pid=ImgDetMain&o=7&rm=3' },
        { id: 5, name: 'Huevos de Granja', description: 'Huevos frescos y orgánicos.', price: 18.00, image: 'https://th.bing.com/th/id/R.65ca098cb8dd5dc501bb0905ad703088?rik=XDZzGoQR3mdJSQ&pid=ImgRaw&r=0' },
        { id: 6, name: 'Harina de Trigo', description: 'Harina multiusos para pan y repostería.', price: 10.00, image: 'https://tse2.mm.bing.net/th/id/OIP.PuGrOcSIzx3guyZqoxmm7wHaE7?rs=1&pid=ImgDetMain&o=7&rm=3' },
      ],
    };
  },
  methods: {
    addToCart(product) {
      alert(`¡${product.name} añadido al carrito!`);
    },
  },
};
</script>

<style scoped>
.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.btn-primary {
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #1a1104;
  border-color: #04562f;
}
</style>