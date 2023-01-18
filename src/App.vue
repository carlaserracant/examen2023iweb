<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {
    return {
      token: localStorage.getItem('Token'),
      currentRoute: '/'
    };
  },
  watch: {
    $route(to) {
      this.currentRoute = to.path
    }
  },
  methods: {
    //Borramos los datos guardados
    cerrarSesion() {
      localStorage.clear();
      this.token = undefined;
      location.reload();
    }
  }
}
</script>


<template>

  <header>

    <div class="logo">
      <h2 class="logo-nombre">
        <router-link to="/"> Parking </router-link>
      </h2>
    </div>

    <nav>
      <router-link to="/"> Inicio </router-link>
      <router-link to="/subirImagen">Subir imagen de aparcamiento</router-link>
      <router-link to="/verImagen">Imagenes</router-link>
      <router-link href="" v-if="token" to="/verUsuario">Información Usuario</router-link>
      <router-link v-if="currentRoute === '/' && token" to="/" @click="cerrarSesion()">Cerrar sesión</router-link>
    </nav>

    <div class="logo" v-if="!token">
      <a class="g_id_signin" data-type="standard" data-shape="pill" data-size="large"></a>
    </div>

  </header>

  <div padding-top="20px">
    <router-view />
  </div>

</template>

<style>
@import './assets/header_style.css';
</style>