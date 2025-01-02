// Métodos estáticos en JavaScript

// Definir una clase con un método estático
class Calculadora {
    static sumar(a, b) {
      return a + b;
    }
  
    static restar(a, b) {
      return a - b;
    }
  }
  
  // Llamar a métodos estáticos sin necesidad de crear una instancia
  console.log(Calculadora.sumar(5, 3)); // 8
  console.log(Calculadora.restar(10, 4)); // 6
  
  // Métodos estáticos pueden ser útiles para funciones que no dependen de las instancias
  