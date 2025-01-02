// Creación de eventos personalizados

// Crear un evento personalizado
const miEvento = new Event("miEvento");

// Seleccionar un elemento del DOM
const div = document.createElement("div");
div.textContent = "Haz clic para disparar un evento personalizado";
div.style.cursor = "pointer";
document.body.appendChild(div);

// Escuchar el evento personalizado
div.addEventListener("miEvento", () => {
  console.log("¡Evento personalizado disparado!");
});

// Disparar el evento al hacer clic
div.addEventListener("click", () => {
  div.dispatchEvent(miEvento);
});

// Evento personalizado con datos adicionales
const eventoConDatos = new CustomEvent("eventoConDatos", {
  detail: { mensaje: "Hola desde un evento personalizado", fecha: new Date() }
});

// Escuchar el evento con datos
div.addEventListener("eventoConDatos", (e) => {
  console.log("Datos del evento:", e.detail);
});

// Disparar el evento con datos al hacer doble clic
div.addEventListener("dblclick", () => {
  div.dispatchEvent(eventoConDatos);
});
