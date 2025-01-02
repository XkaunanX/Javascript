// Declaración básica de clases

// Definir una clase llamada Persona
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Método de instancia
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  // Crear una instancia de la clase Persona
  const persona1 = new Persona("Juan", 30);
  persona1.saludar(); // "Hola, mi nombre es Juan y tengo 30 años."
  
  // Crear otra instancia
  const persona2 = new Persona("Ana", 25);
  persona2.saludar(); // "Hola, mi nombre es Ana y tengo 25 años."
  