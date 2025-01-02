// Métodos básicos de arreglos

// Crear un arreglo
let frutas = ["manzana", "banana", "naranja"];

// push: Agregar elementos al final
frutas.push("pera");
console.log("Después de push:", frutas);

// pop: Eliminar el último elemento
let ultimaFruta = frutas.pop();
console.log("Después de pop:", frutas, "- Última fruta:", ultimaFruta);

// unshift: Agregar elementos al inicio
frutas.unshift("mango");
console.log("Después de unshift:", frutas);

// shift: Eliminar el primer elemento
let primeraFruta = frutas.shift();
console.log("Después de shift:", frutas, "- Primera fruta:", primeraFruta);

// indexOf: Encontrar el índice de un elemento
let indiceBanana = frutas.indexOf("banana");
console.log("Índice de 'banana':", indiceBanana);

// splice: Agregar/eliminar elementos en cualquier posición
frutas.splice(1, 1, "kiwi", "uva"); // Reemplaza "banana" con "kiwi" y "uva"
console.log("Después de splice:", frutas);

// slice: Crear un subarreglo
let subarreglo = frutas.slice(1, 3); // Desde índice 1 hasta 2 (excluye 3)
console.log("Subarreglo:", subarreglo);
