<script>

import axios from 'axios';
import { GoogleMap, Marker } from 'vue3-google-map';

export default {
  name: "get-request",
  components: {
    GoogleMap,
    Marker
  },
  data() {
    return {
      aparcamientos: [],
      token: null,
      comentario: "",
      nombreUsuario: ""
    };
  },
  created() {
    this.token = localStorage.getItem('Token');
    if(this.token != null){
      let nombre = localStorage.getItem('NombreUsuario');
      console.log(nombre)
      let indice = nombre.indexOf("@");
      // Cortar desde 0 hasta la aparición del @
      this.nombreUsuario = nombre.substring(0, indice);
    }
    var parametro = this.$route.params.id;
    axios.get("https://plwap8.deta.dev/appAparcamiento/aparcamientos").then(response => this.aparcamientos = response.data);

    //axios.get("https://plwap8.deta.dev/appAparcamiento/aparcamientos", { params: { id: parametro } }).then(response => this.aparcamiento = response.data);
    //axios.get("https://plwap8.deta.dev/appReservas/reservas/viviendasAsociada/" + parametro).then(res => this.reservas = res.data);
  },
  methods: {
    
    mapCenter() {
      return {
        lat: 36.7201600,
        lng: -4.4203400,
      }
    },
   
    getPosition(r) {
        return {
            lat: r.latitud,
            lng: r.longitud
        }
    }
  }
}

</script>

<template>

    <div class="mapa">
      <GoogleMap api-key="AIzaSyAVotfCRyxA9y3yBiOafDlwoessHlHleJk"
        style="width: 400px; height: 400px; align: center; padding-left: 25%; padding-right: 25%;"
        :center="this.mapCenter()" :zoom="12">
        
        <div v-for="(r,index) in aparcamientos" :key="index">
            <Marker :options="{position: getPosition(r)}"/>
        </div>

      </GoogleMap>
    </div>

</template>

<style scoped>
@import '../assets/mostrarInformacionStyle.css';
</style>

