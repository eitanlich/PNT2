function comprobarCondiciones() {
    // Obtener los valores de los campos del formulario
    const hayPelota = document.getElementById("hayPelota").checked;
    const jugadoresEquipoA = document.getElementById("equipoA").value;
    const jugadoresEquipoB = document.getElementById("equipoB").value;
    const mayoresDe18 = document.getElementById("mayores18").checked;
    const climaBueno = document.getElementById("buenClima").checked;
  
    // Actualizar los valores de las condiciones
    const condiciones = [
      { key: "Debe haber pelota", value: hayPelota },
      { key: "El equipo A tiene 11 jugadores", value: (jugadoresEquipoA == 11) },
      { key: "El equipo B tiene 11 jugadores", value: (jugadoresEquipoB == 11) },
      { key: "Todos los jugadores son mayores de 18", value: mayoresDe18 },
      { key: "Las condiciones climaticas son buenas", value: climaBueno }
    ];
    /* condiciones[0] = hayPelota;
    condiciones[1] = (jugadoresEquipoA == 11);
    condiciones[2] = (jugadoresEquipoB == 11);
    condiciones[3] = mayoresDe18;
    condiciones[4] = climaBueno; */
  
    // Comprobar si todas las condiciones se cumplen
    let todasLasCondicionesCumplidas = true;
    let resultado;
  
    for (let i = 0; i < condiciones.length; i++) {
      if (!condiciones[i].value) {
        todasLasCondicionesCumplidas = false;
        resultado = `El partido no puede comenzar porque "${condiciones[i].key}" no se cumple.`;
        break;
      }
      else {
        resultado = "El partido puede comenzar.";
      }
    }
  
    // Mostrar el resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = resultado;
    if (todasLasCondicionesCumplidas) {
      resultadoDiv.style.color = "green";
    } else {
      resultadoDiv.style.color = "red";
    }
}
  
  