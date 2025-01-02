// Archivo principal que importa los módulos

import { saludar } from './modulo1.js';
import { persona } from './modulo2.js';

// Llamada a las funciones importadas y muestra de los datos
console.log(saludar("Carlos"));  // "Hola, Carlos!"
console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}`); // "Persona: Juan, Edad: 30"
