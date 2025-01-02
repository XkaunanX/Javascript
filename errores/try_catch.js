// Uso básico de try-catch

function dividir(a, b) {
    try {
      if (b === 0) {
        throw new Error("No se puede dividir por cero.");
      }
      return a / b;
    } catch (error) {
      console.error("Error:", error.message);  // Captura y muestra el mensaje de error
      return null;
    }
  }
  
  // Probar la función
  console.log(dividir(10, 2));  // 5
  console.log(dividir(10, 0));  // Error: No se puede dividir por cero.
  