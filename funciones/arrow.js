// Funciones flecha

// Función flecha básica
const saludar = (nombre) => `Hola, ${nombre}!`;
console.log(saludar("Ana"));

// Función flecha con un solo parámetro (paréntesis opcional)
const cuadrado = n => n * n;
console.log("Cuadrado de 4:", cuadrado(4));

// Función flecha con varios parámetros y varias líneas de código
const sumar = (a, b) => {
  const resultado = a + b;
  return resultado;
};
console.log("Suma de 2 + 3:", sumar(2, 3));

// Función flecha como callback
const numeros = [1, 2, 3, 4];
const cuadrados = numeros.map(n => n * n);
console.log("Cuadrados:", cuadrados);
