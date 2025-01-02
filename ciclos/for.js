// Bucle for básico
for (let i = 0; i < 5; i++) {
    console.log(`Iteración: ${i}`);
  }
  
  // Iterar sobre un arreglo
  const frutas = ["manzana", "banana", "pera"];
  for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta en índice ${i}: ${frutas[i]}`);
  }
  
  // Uso de for...of (para valores de un iterable)
  for (const fruta of frutas) {
    console.log(`Fruta: ${fruta}`);
  }
  
  // Uso de for...in (para claves de un objeto)
  const persona = { nombre: "Juan", edad: 25 };
  for (const clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
  }
  