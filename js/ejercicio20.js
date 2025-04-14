// Objeto que relaciona países con sus capitales
const paisesYCapitales = {
    "Argentina": "Buenos Aires",
    "Brasil": "Brasilia",
    "Chile": "Santiago",
    "Perú": "Lima",
    "México": "Ciudad de México",
    "Colombia": "Bogotá"
  };
  
  // Obtener los elementos <select>
  const selectPais = document.querySelector("#pais");
  const selectCapital = document.querySelector("#capital");
  
  // Evento cuando el usuario cambia de país
  selectPais.addEventListener("change", () => {
    const paisSeleccionado = selectPais.value;
  
    // Limpiar la lista de capitales
    selectCapital.innerHTML = "";
  
    if (paisesYCapitales[paisSeleccionado]) {
      const capital = paisesYCapitales[paisSeleccionado];
  
      const opcionCapital = document.createElement("option");
      opcionCapital.value = capital;
      opcionCapital.textContent = capital;
      selectCapital.appendChild(opcionCapital);
  
      console.log(`País seleccionado: ${paisSeleccionado}`);
      console.log(`Capital correspondiente: ${capital}`);
    } else {
      const opcion = document.createElement("option");
      opcion.textContent = "-- Seleccioná un país primero --";
      selectCapital.appendChild(opcion);
    }
  });
 