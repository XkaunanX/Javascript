// Uso básico de addEventListener

// Selecciona un botón del DOM
const boton = document.createElement("button");
boton.textContent = "Haz clic aquí";
document.body.appendChild(boton);

// Agregar un evento de clic al botón
boton.addEventListener("click", () => {
  alert("¡Botón clickeado!");
});

// Agregar un evento de mouseover
boton.addEventListener("mouseover", () => {
  console.log("El ratón está sobre el botón.");
});

// Agregar un evento de teclado (escuchar en el documento)
document.addEventListener("keydown", (evento) => {
  console.log(`Tecla presionada: ${evento.key}`);
});
