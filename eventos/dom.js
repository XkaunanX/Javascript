// Eventos en el DOM

// Crear un elemento de lista dinámicamente
const lista = document.createElement("ul");
document.body.appendChild(lista);

// Agregar elementos a la lista
["Elemento 1", "Elemento 2", "Elemento 3"].forEach(texto => {
  const item = document.createElement("li");
  item.textContent = texto;
  lista.appendChild(item);
});

// Agregar un evento a cada elemento de la lista
lista.addEventListener("click", (evento) => {
  if (evento.target.tagName === "LI") {
    console.log(`Has hecho clic en: ${evento.target.textContent}`);
  }
});

// Evento de cambio en un input
const input = document.createElement("input");
input.type = "text";
document.body.appendChild(input);

input.addEventListener("input", (evento) => {
  console.log(`Texto actual: ${evento.target.value}`);
});
