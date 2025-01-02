// Selección de elementos en el DOM

// Seleccionar un elemento por su ID
const titulo = document.getElementById("titulo");
console.log(titulo.innerText); // Muestra el texto del elemento con id="titulo"

// Seleccionar todos los elementos con una clase específica
const botones = document.getElementsByClassName("boton");
console.log(botones);  // Muestra un HTMLCollection de elementos con la clase "boton"

// Seleccionar elementos usando un selector CSS
const parrafos = document.querySelectorAll("p");
parrafos.forEach(parrafo => {
  console.log(parrafo.innerText);  // Muestra el texto de cada párrafo
});
