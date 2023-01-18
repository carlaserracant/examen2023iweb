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