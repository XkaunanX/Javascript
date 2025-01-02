// Métodos avanzados de arreglos

let numeros = [1, 2, 3, 4, 5];

// map: Transformar cada elemento
let cuadrados = numeros.map(num => num * num);
console.log("Cuadrados:", cuadrados);

// filter: Filtrar elementos
let pares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", pares);

// reduce: Acumular valores
let suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log("Suma de números:", suma);

// some: Verificar si algún elemento cumple una condición
let hayMayorQueTres = numeros.some(num => num > 3);
console.log("¿Algún número es mayor que 3?:", hayMayorQueTres);

// every: Verificar si todos los elementos cumplen una condición
let todosSonPositivos = numeros.every(num => num > 0);
console.log("¿Todos los números son positivos?:", todosSonPositivos);

// find: Encontrar el primer elemento que cumple una condición
let primerImpar = numeros.find(num => num % 2 !== 0);
console.log("Primer número impar:", primerImpar);

// findIndex: Encontrar el índice del primer elemento que cumple una condición
let indicePrimerImpar = numeros.findIndex(num => num % 2 !== 0);
console.log("Índice del primer número impar:", indicePrimerImpar);
