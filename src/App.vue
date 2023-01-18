<script>
import { RouterLink, RouterView } from 'vue-router'

export default{
  data() {
    return {
      token : localStorage.getItem('Token')
    };
  }
}

</script>


<template>
  
  <header>

    <div class="logo">
      <h2 class="logo-nombre">
        <router-link to="/"> The Good House </router-link>
      </h2>
    </div>

    <nav>
      <router-link to="/"> Inicio </router-link>
      <router-link to="/listaViviendas" > Ver Anuncios </router-link>
      <router-link v-if="token" to="/crearAnuncio"> Crear Anuncios </router-link>
      <router-link v-if="token" to="/listaReservas"> Ver Reservas </router-link>
    </nav>

    <div class="logo">
      <a class="g_id_signin" data-type="standard" data-shape="pill" data-size="large" ></a>
    </div>

  </header>
  <div padding-top="20px">
    <router-view/>
  </div>

</template>

<style>
@import './assets/header_style.css';
</style>
