const cambiarTexto = () => {
    const parrafo = document.querySelector("#texto");
    parrafo.textContent = "¡El texto ha sido cambiado con éxito!";
  };
  
  const boton = document.querySelector("#btnCambiar");
  boton.addEventListener("click", cambiarTexto);
  