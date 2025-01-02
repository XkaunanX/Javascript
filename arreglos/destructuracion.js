// Desestructuración de arreglos

// Desestructuración básica
let colores = ["rojo", "verde", "azul"];
let [primero, segundo, tercero] = colores;
console.log("Primero:", primero);
console.log("Segundo:", segundo);
console.log("Tercero:", tercero);

// Omitir elementos
let [primerColor, , tercerColor] = colores; // Omite "verde"
console.log("Primer color:", primerColor);
console.log("Tercer color:", tercerColor);

// Desestructuración con valores predeterminados
let [a, b, c = "amarillo"] = ["negro", "blanco"];
console.log("a:", a); // negro
console.log("b:", b); // blanco
console.log("c:", c); // amarillo

// Desestructuración anidada
let puntos = [[1, 2], [3, 4], [5, 6]];
let [[x1, y1], [x2, y2], [x3, y3]] = puntos;
console.log("Punto 1:", x1, y1);
console.log("Punto 2:", x2, y2);
console.log("Punto 3:", x3, y3);

// Usar rest operator con desestructuración
let numeros = [10, 20, 30, 40, 50];
let [primeroNumero, segundoNumero, ...resto] = numeros;
console.log("Primero:", primeroNumero);
console.log("Segundo:", segundoNumero);
console.log("Resto:", resto);

// Intercambiar variables usando desestructuración
let x = 5, y = 10;
[x, y] = [y, x];
console.log("Después del intercambio: x =", x, ", y =", y);
