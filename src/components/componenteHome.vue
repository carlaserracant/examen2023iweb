<script>

export default{
    data: function(){
        return{
            busqueda : "",
            token: localStorage.getItem('Token')
        };
    },
    methods: {
    getPlaceholder() {
      return "Busque una vivienda segun su provincia";
    },
    getBusqueda(){
        return " " + this.busqueda;
    }
    }
  
};

</script>


<template>
 
    <div>
        <h1>The Good House</h1>
        <h3>Bienvenido a The Good House, su pagina de reservas de confianza</h3>
    </div>

    <div class="buscar">
        <input v-model="busqueda" :placeholder="getPlaceholder()" />
        <router-link :to="{ name: 'ListaViviendasLocalidad', params: { localidad: getBusqueda()  }}" ><a class="boton_personalizado" href="">Buscar</a></router-link>
    </div>

    <table class="tabla-Inicio">    
        <tr v-if="token">
            <td class="text-button"><router-link to="/crearAnuncio" ><a class="boton_personalizado">Crear anuncio</a></router-link></td>
            <td class="text-cell">¿Tiene viviendas vacias y le gustaria ganar un dinero? Entonces comienze registrando su casa en nuestra aplicación.
                                    ¡Introduciendo pocos datos podra convertir su casa en una residencia vacacional y ganarse un dinero extra!
            </td>
        </tr>

        <tr>
            <td class="text-cell">¿Esta buscando donde pasar las vacaciones? Entonces mire todas las ofertas de residencias vacacionales que ofrecen nuestros usuarios.
                                    Cuando le guste una podra reservarlá en las fechas que usted prefieras, realizando un pago seguro a traves de PayPal. ¿A qué espera?
            </td>
            <td class="text-button"><router-link to="/listaViviendas" ><a class="boton_personalizado" href="">Ver anuncios</a></router-link></td>
        </tr>

        <tr>
            <td class="text-button"><router-link to="/verTiempo" ><a class="boton_personalizado" href="">Consultar tiempo</a></router-link></td>
            <td class="text-cell">¿No se decide a donde ir de vacaciones? Consulte el tiempo de sus zonas vacacionales preferidas. No querrá ir a la 
                                    playa con lluvia o a esquiar sin nieve, ¿verdad?
            </td>
        </tr>

    </table>

</template>

<style setup>
@import '../assets/componenteHomeStyle.css';
</style>