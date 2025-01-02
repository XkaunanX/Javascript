// Ejemplo de let, const y var

// Declaración con 'let'
let edad = 25; // Variable que puede cambiar su valor
console.log("Edad inicial:", edad);
edad = 30; // Cambiando el valor
console.log("Edad después del cambio:", edad);

// Declaración con 'const'
const PI = 3.1416; // Variable constante, no puede cambiar
console.log("Valor de PI:", PI);
// PI = 3.15; // Esto dará un error: Assignment to constant variable

// Declaración con 'var' (se desaconseja usar en la mayoría de los casos)
var nombre = "Juan"; // Variable global o de función
console.log("Nombre inicial:", nombre);
nombre = "Pedro"; // Cambiando el valor
console.log("Nombre después del cambio:", nombre);

// Diferencias entre let, const y var
if (true) {
  let variableLet = "Dentro del bloque"; // Alcance dentro del bloque
  const variableConst = "Constante dentro del bloque";
  var variableVar = "Var dentro del bloque"; // Alcance en toda la función

  console.log(variableLet);
  console.log(variableConst);
  console.log(variableVar);
}
// console.log(variableLet); // Error: variableLet no está definida fuera del bloque
// console.log(variableConst); // Error: variableConst no está definida fuera del bloque
console.log(variableVar); // Funciona: variableVar tiene alcance global o de función
