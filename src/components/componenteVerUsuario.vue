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
    <h1> {{ usuario }}</h1>
</template>
