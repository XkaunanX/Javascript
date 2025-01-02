// Bucle while básico
let contador = 0;
while (contador < 5) {
  console.log(`Contador: ${contador}`);
  contador++;
}

// Uso de do...while (siempre ejecuta al menos una vez)
let numero = 0;
do {
  console.log(`Número: ${numero}`);
  numero++;
} while (numero < 3);

// Ejemplo con condición de salida
let suma = 0;
let num = 1;
while (num <= 5) {
  suma += num;
  num++;
}
console.log(`Suma total: ${suma}`);
