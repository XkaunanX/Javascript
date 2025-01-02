// Funciones anónimas y callbacks

// Función anónima como expresión
const saludar = function(nombre) {
    return `Hola, ${nombre}!`;
  };
  console.log(saludar("Carlos"));
  
  // Función anónima como callback
  const numeros = [1, 2, 3, 4];
  const dobles = numeros.map(function(n) {
    return n * 2;
  });
  console.log("Dobles:", dobles);
  
  // Función autoejecutable (IIFE)
  (function() {
    console.log("Esta es una función autoejecutable.");
  })();
  