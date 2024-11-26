import { createRouter, createWebHistory } from 'vue-router'; // Atualização para Vue 3
import PaginaInicio from '../views/Inicio.vue';
import PaginaSobre from '../views/Sobre.vue';
import PaginaEventos from '../views/Eventos.vue';
import PaginaContato from '../views/Contato.vue';
import PaginaLogin from '../views/Login.vue';
import PaginaCadastro from '../views/CadastrarEventos.vue';

const routes = [
  { path: '/', component: PaginaInicio, name: 'Inicio' },
  { path: '/sobre', component: PaginaSobre, name: 'Sobre' },
  { path: '/eventos', component: PaginaEventos, name: 'Eventos' },
  { path: '/contato', component: PaginaContato, name: 'Contato' },
  { path: '/login', component: PaginaLogin, name: 'Login' },
  { path: '/cadastro', component: PaginaCadastro, name: 'Cadastro' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
