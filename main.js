import Vue from 'vue'; // ¡Asegúrate de que esta línea esté aquí!
import App from './App.vue';
import router from './router'; 

// Importa los estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

Vue.config.productionTip = false;

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app');