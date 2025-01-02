// Operadores ternarios

// Ejemplo básico
let edad = 20;
let mensaje = edad >= 18 ? "Eres mayor de edad." : "Eres menor de edad.";
console.log(mensaje);

// Asignar valores en base a condiciones
let esAdmin = true;
let acceso = esAdmin ? "Tienes acceso completo." : "Tienes acceso limitado.";
console.log(acceso);

// Operador ternario anidado
let hora = 14;
let saludo = hora < 12 
  ? "Buenos días." 
  : hora < 18 
    ? "Buenas tardes." 
    : "Buenas noches.";
console.log(saludo);

// Uso en funciones
const verificarParidad = numero => numero % 2 === 0 ? "Es par." : "Es impar.";
console.log(verificarParidad(4)); // Es par.
console.log(verificarParidad(7)); // Es impar.
