import Vue from 'vue';
import VueRouter from 'vue-router';
// Import the new HomePage component
import HomePage from '../components/HomePage.vue';
import ProductList from '../components/ProductList.vue';
import ImageGallery from '../components/ImageGallery.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
import ContactForm from '../components/ContactForm.vue';

Vue.use(VueRouter);

const routes = [
  // The home route now points to the new HomePage component
  { path: '/', component: HomePage }, 
  { path: '/productos', component: ProductList },
  { path: '/galeria', component: ImageGallery },
  { path: '/carrito', component: ShoppingCart },
  { path: '/contacto', component: ContactForm },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;