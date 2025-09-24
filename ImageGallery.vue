<template>
  <div class="gallery-section py-5">
    <div class="container my-5">
      <h2 class="text-center mb-5 text-white fw-bold">Nuestra Galería</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="(image, index) in images" :key="index">
          <div class="card h-100 shadow-lg border-0 rounded-3 overflow-hidden gallery-card">
            <img :src="image.url" class="card-img-top img-fluid" :alt="image.alt">
            <div class="card-body text-center">
              <h5 class="card-title fw-bold text-dark">{{ image.title }}</h5>
              <p class="card-text text-muted">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGallery',
  data() {
    return {
      images: [
        { url: 'https://cdn.postindustria.com/wp-content/uploads/2022/03/HwCompVision-1-1280x797.jpg', alt: 'Pasillo de Abarrotes', title: 'Pasillos Organizados', description: 'Encuentra todo de manera fácil y rápida.' },
        { url: 'https://sbshoppingbasket.com/wp-content/uploads/big-data-retail.jpg', alt: 'Sección de Limpieza', title: 'Todo para el Hogar', description: 'Amplia variedad de productos de limpieza.' },
        { url: 'https://i.pinimg.com/originals/fc/cf/9b/fccf9bace85abc54b01f7fa729dc95e6.jpg', alt: 'Fachada', title: 'Nuestra Tienda', description: 'Te esperamos con los brazos abiertos en Casa de Ríos.' },
        { url: 'https://s3-media0.fl.yelpcdn.com/bphoto/rabkdSAnYeyUCqRUV19Khw/348s.jpg', alt: 'Snacks', title: 'Snacks y Dulces', description: 'Disfruta de la mejor selección de aperitivos.' }
      ],
    };
  },
};
</script>

<style scoped>
.gallery-section {
  background: linear-gradient(to right, #c9ab7d, #4988cc);
}

.gallery-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.gallery-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

.gallery-card img {
  height: 250px;
  object-fit: cover;
}
</style>