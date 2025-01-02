// Crear y modificar elementos en el DOM

// Crear un nuevo elemento de párrafo
const nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "Este es un párrafo creado dinámicamente.";

// Agregar el nuevo párrafo al final del cuerpo del documento
document.body.appendChild(nuevoParrafo);

// Modificar el texto de un elemento existente
const titulo = document.getElementById("titulo");
titulo.innerText = "Nuevo título dinámico";

// Cambiar el estilo de un elemento
const boton = document.querySelector(".boton");
boton.style.backgroundColor = "red";  // Cambia el color de fondo del botón
