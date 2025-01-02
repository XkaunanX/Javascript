// Manejo de eventos en el DOM

// Seleccionar un botón con el id "miBoton"
const miBoton = document.getElementById("miBoton");

// Agregar un event listener al botón para escuchar un clic
miBoton.addEventListener("click", function() {
  alert("¡Haz hecho clic en el botón!");
});

// Manejo de eventos con una función anónima
const cambiarColor = document.getElementById("cambiarColor");
cambiarColor.addEventListener("click", function() {
  document.body.style.backgroundColor = "lightblue";
});

// Uso de un evento con parámetros adicionales
document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();  // Evita que se envíe el formulario
  console.log("Formulario enviado");
});
