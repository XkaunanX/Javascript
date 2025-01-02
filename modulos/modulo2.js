// Importar el módulo1.js y usar sus exportaciones

import { saludar, edad, persona } from './modulo1.js';

// Usar las funciones y variables importadas
console.log(saludar("Ana"));       // "Hola, Ana!"
console.log(`Edad: ${edad}`);     // "Edad: 25"
console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`); // "Nombre: Juan, Edad: 30"
