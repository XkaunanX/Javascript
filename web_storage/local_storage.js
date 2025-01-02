// Uso de localStorage: Almacena datos de forma persistente

// Guardar datos en localStorage
localStorage.setItem('nombre', 'Juan');
localStorage.setItem('edad', '25');

// Recuperar datos de localStorage
const nombre = localStorage.getItem('nombre');
const edad = localStorage.getItem('edad');
console.log(`Nombre: ${nombre}, Edad: ${edad}`);

// Eliminar un item de localStorage
localStorage.removeItem('edad');

// Borrar todo el contenido de localStorage
// localStorage.clear();
