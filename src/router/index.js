import { createRouter, createWebHistory } from 'vue-router'
import componenteHome from '../components/componenteHome.vue'
import componenteListaAnuncio from '../components/componenteListaAnuncios.vue'
import saveComponent from '../components/saveComponent.vue'
import componenteVerReserva from '../components/componenteVerReserva.vue'
import componenteVerAnuncio from '../components/componenteVerAnuncio.vue'
import componenteListaReservas from '../components/componenteListaReservas.vue'
import componenteTiempo from '../components/componenteTiempo.vue'
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
