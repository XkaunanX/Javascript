// Declaraciones de funciones simples

// Función con declaración estándar
function saludar(nombre) {
    return `Hola, ${nombre}!`;
  }
  console.log(saludar("Juan"));
  
  // Función con parámetros predeterminados
  function sumar(a = 0, b = 0) {
    return a + b;
  }
  console.log("Suma con valores:", sumar(5, 3));
  console.log("Suma sin valores:", sumar());
  
  // Función que no retorna un valor
  function mostrarMensaje(mensaje) {
    console.log(`Mensaje: ${mensaje}`);
  }
  mostrarMensaje("Este es un mensaje básico.");
  