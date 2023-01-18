<script>

export default{
    data: function(){
        return{
            busqueda : "",
            token: localStorage.getItem('Token'),
            email: localStorage.getItem('NombreUsuario'),
            usuario: localStorage.getItem('Usuario'),
            imagen: localStorage.getItem('Imagen'),
            conexion: localStorage.getItem('Conexion'),
            caducidad: localStorage.getItem('Caducidad')
        };
    }
  
};

</script>

<template>
    <table class="tabla-Grande" v-if="vivienda">

        <td class="celda-Anuncio"><img :src='imagen' width="375" /></td>

            <td class="celda-Anuncio">

            <table class="tabla-Info">
                <tr>
                <td class="bold-text">Email:&nbsp;</td>
                <td>{{ email }}</td>
                </tr>

                <tr>
                <td class="bold-text">Nombre:&nbsp;</td>
                <td>{{ usuario }}</td>
                </tr>

            </table>

        </td>
    </table>
</template>
