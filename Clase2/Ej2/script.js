let listado = [];

function agregarPelicula() {
  let pelicula = {
      key: "Titulo", value: document.getElementById("titulo").value,
      key: "Año", value: document.getElementById("anio").value,
      key: "ID", value: document.getElementById("id").value
  };

  listado.push(pelicula);
}

function mostrarPeliculas() {
  let peliculas = document.getElementById("peliculas");
  peliculas.innerHTML = listado;
}
  
  