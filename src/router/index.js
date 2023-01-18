import { createRouter, createWebHistory } from 'vue-router'
import componenteHome from '../components/componenteHome.vue'
import componenteVerUsuario from '../components/componenteVerUsuario.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/verUsuario',
      name: 'verUsuario',
      component: componenteVerUsuario
    },
    
    {
      path: '/',
      name: 'home',
      component: componenteHome
    },
    
  ]
})

export default router
