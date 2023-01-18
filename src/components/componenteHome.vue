<script>

import axios from 'axios';
import { GoogleMap, Marker } from 'vue3-google-map';
import {useGeolocation} from './useGeolocation'
import {Loader} from '@googlemaps/js-api-loader'
const GOOGLE_MAPS_API_KEY = 'AIzaSyAVotfCRyxA9y3yBiOafDlwoessHlHleJk'

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
  },

  setup() {
        const {coords} = useGeolocation()
        const currPos = computed(() => ({
            lat: coords.value.latitude,
            lng: coords.value.longitude
        }))
        
        const loader = new Loader({
            apiKey: GOOGLE_MAPS_API_KEY, libraries: ['places']
        });
        let mapDiv = ref(null)
        let map = ref(null)
        let marker = ref(null)
        let resul_lat = ref(null);
        let resul_lng = ref(null);
        let resul_dir = ref(null);
        
        //initMap
        loader.load().then(() => {
            let center;
            if (sessionStorage.getItem('center')) {
                console.log('session')
                center = JSON.parse(sessionStorage.getItem('center'))
                document.getElementById('place-input').value = sessionStorage.getItem('placeInput')
                resul_lng.value = center.lng;
                resul_lat.value = center.lat;
                
            } else {
                center = currPos.value;
                resul_lng.value = center.lng;
                resul_lat.value = center.lat;
            }

            

            map.value = new google.maps.Map(mapDiv.value, {
                //centrado en posicion actual
                center: center,
                zoom: 18
            })
            marker = new google.maps.Marker({
                map: map.value,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: center
            })
            //autocompletar
            const placeInput = document.getElementById("place-input");
            const options = {
                componentRestrictions: {country: "es"},
                types: ['geocode']
            }
            const autocomplete = new google.maps.places.Autocomplete(placeInput, options);
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                //obtener el lugar
                let place = autocomplete.getPlace();
                resul_dir.value = place.formatted_address;
                sessionStorage.setItem('placeInput', placeInput.value)
                center = place.geometry.location;
                //guardar center por busqueda plces
                sessionStorage.setItem('center', JSON.stringify(center))
                //centrar el mapa en el lugar
                map.value.setCenter(center)
                //poner marcador en ese lugar
                marker.setPosition(center)
                sessionStorage.setItem('map', map.value);
                sessionStorage.setItem('marker', marker.value);
                resul_lat.value = center.lat();
                resul_lng.value = center.lng();
                
            });
        })
        return {
            //mapa
            mapDiv,
            //coordenadas
            resul_lat, resul_lng, resul_dir
        }
    },
}

</script>

<template>

    <div class="mapa">
      <GoogleMap api-key="AIzaSyAVotfCRyxA9y3yBiOafDlwoessHlHleJk"
        style="width: 400px; height: 400px; align: center; padding-left: 25%; padding-right: 25%;"
        :center="this.mapCenter()" :zoom="14">
        
        <div v-for="(r,index) in aparcamientos" :key="index">
            <Marker :options="{position: getPosition(r)}"/>
        </div>

      </GoogleMap>
    </div>

    <div>
        <!-- Autocomplete location search input -->
        <label for="direccion">Direccion*</label><br>
            <input class="w-full" id="place-input" type="text" required />
            <br>
    </div>

    <div>
        <h2>Información de los aparcamientos</h2>
        <div v-for="(r,index) in aparcamientos" :key="index">
            <table class="tabla-Info">

                <tr>
                <td class="bold-text">Identificador del aparcamiento: </td>
                <td>{{ r.poID }}</td>
                </tr>

                <tr>
                <td class="bold-text">Nombre: </td>
                <td>{{ r.nombre }}</td>
                </tr>

                <tr>
                <td class="bold-text">Direccion: </td>
                <td>{{ r.direccion }}</td>
                </tr>

                <tr>
                <td class="bold-text">Latitud: </td>
                <td>{{ r.latitud }}</td>
                </tr>

                <tr>
                <td class="bold-text">Longitud: </td>
                <td>{{ r.longitud }}</td>
                </tr>

                <tr>
                <td class="bold-text">Capacidad: </td>
                <td>{{ r.capacidad }}</td>
                </tr>

                <tr>
                <td class="bold-text">Libres: </td>
                <td>{{ r.libres }}</td>
                </tr>

                <tr>
                <td class="bold-text">Correo del propietario: </td>
                <td>{{ r.correo }}</td>
                </tr>
                
            </table>
        </div>
    </div>

</template>

<style scoped>
@import '../assets/mostrarInformacionStyle.css';
</style>

