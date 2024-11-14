import { createApp } from 'vue'; // Certifique-se de importar corretamente para Vue 3
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app'); // Inicie a aplicação com createApp
