import { createRouter, createWebHistory } from 'vue-router'
import PokemonCreate from "@/views/PokemonCreate.vue";
import PokemonEdit from "@/views/PokemonEdit.vue";
import PokemonIndex from "@/views/PokemonIndex.vue";
import LoginVue from '@/views/LoginVue.vue';

const routes = [
  {
      path: '/',
      name: 'login',
      component: LoginVue
  },
  {
      path: '/pokemons',
      name: 'pokemons.index',
      component: PokemonIndex
  },
  {
      path: '/pokemon/create',
      name: 'pokemon.create',
      component: PokemonCreate
  },
  {
      path: '/pokemon/:id',
      name: 'pokemon.edit',
      component: PokemonEdit,
      props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/');
  } else {
    next();
  }
});

export default router
