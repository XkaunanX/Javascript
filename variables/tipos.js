// Tipos de datos en JavaScript

// Tipos primitivos
let cadena = "Hola, mundo"; // String
let numeroEntero = 42; // Number (entero)
let numeroDecimal = 3.14; // Number (decimal)
let booleano = true; // Boolean
let indefinido; // undefined (sin asignar valor)
let nulo = null; // null (valor intencionalmente vacío)
let simbolo = Symbol("simbolo"); // Symbol (valor único)

console.log("Cadena:", cadena, "- Tipo:", typeof cadena);
console.log("Número entero:", numeroEntero, "- Tipo:", typeof numeroEntero);
console.log("Número decimal:", numeroDecimal, "- Tipo:", typeof numeroDecimal);
console.log("Booleano:", booleano, "- Tipo:", typeof booleano);
console.log("Indefinido:", indefinido, "- Tipo:", typeof indefinido);
console.log("Nulo:", nulo, "- Tipo:", typeof nulo);
console.log("Símbolo:", simbolo, "- Tipo:", typeof simbolo);

// Fechas y horas
let fechaActual = new Date(); // Objeto Date para manejar fechas y horas
let fechaEspecifica = new Date(2024, 11, 25, 10, 30, 0); // Año, mes (0 = Enero), día, hora, minuto, segundo
console.log("Fecha actual:", fechaActual, "- Tipo:", typeof fechaActual);
console.log("Fecha específica:", fechaEspecifica);

// Métodos de fechas y horas
console.log("Año actual:", fechaActual.getFullYear());
console.log("Mes actual (0-11):", fechaActual.getMonth()); // Enero es 0
console.log("Día del mes:", fechaActual.getDate());
console.log("Hora actual:", fechaActual.getHours());
console.log("Minutos actuales:", fechaActual.getMinutes());
console.log("Segundos actuales:", fechaActual.getSeconds());

// Tipos complejos (objetos y estructuras más avanzadas)
let objeto = {
  nombre: "Carlos",
  edad: 30,
};
console.log("Objeto:", objeto, "- Tipo:", typeof objeto);

let arreglo = [1, 2, 3, 4]; // Array, técnicamente un objeto
console.log("Arreglo:", arreglo, "- Tipo:", typeof arreglo);

let funcion = function () {
  console.log("Esto es una función");
};
console.log("Función:", funcion, "- Tipo:", typeof funcion);

// Ejemplo de números con coma
let suma = 3.5 + 2.7; // Suma de números decimales
let multiplicacion = 1.5 * 2; // Multiplicación con decimales
console.log("Suma (decimal):", suma);
console.log("Multiplicación (decimal):", multiplicacion);

// Ejemplo de typeof
console.log("typeof 42:", typeof 42); // number
console.log("typeof 'Hola':", typeof "Hola"); // string
console.log("typeof true:", typeof true); // boolean
console.log("typeof undefined:", typeof undefined); // undefined
console.log("typeof null:", typeof null); // object (peculiaridad histórica)
console.log("typeof {}:", typeof {}); // object
console.log("typeof []:", typeof []); // object (arreglos son objetos)
console.log("typeof Symbol():", typeof Symbol()); // symbol
console.log("typeof Date:", typeof new Date()); // object
