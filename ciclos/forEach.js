const numeros = [1, 2, 3, 4, 5];

// Uso de forEach
numeros.forEach((num, indice) => {
  console.log(`Índice: ${indice}, Número: ${num}`);
});

// Calcular suma usando forEach
let suma = 0;
numeros.forEach(num => {
  suma += num;
});
console.log(`Suma total: ${suma}`);

// Uso de map: Transformar cada elemento
const cuadrados = numeros.map(num => num * num);
console.log("Cuadrados:", cuadrados);

// Uso de map para crear un nuevo arreglo
const nombres = ["Ana", "Luis", "Pedro"];
const saludos = nombres.map(nombre => `Hola, ${nombre}!`);
console.log("Saludos:", saludos);

// Diferencia entre forEach y map
let resultadoForEach = numeros.forEach(num => num * 2); // No devuelve nada
console.log("Resultado de forEach:", resultadoForEach);

let resultadoMap = numeros.map(num => num * 2); // Devuelve un nuevo arreglo
console.log("Resultado de map:", resultadoMap);
