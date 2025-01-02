// Herencia en JavaScript

// Clase base (superclase)
class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    // Método de la superclase
    saludar() {
      console.log(`Hola, soy un animal llamado ${this.nombre}.`);
    }
  }
  
  // Clase derivada (subclase)
  class Perro extends Animal {
    constructor(nombre, raza) {
      super(nombre); // Llamada al constructor de la clase base
      this.raza = raza;
    }
  
    // Método adicional de la subclase
    ladrar() {
      console.log("¡Guau, guau!");
    }
  }
  
  // Crear una instancia de la subclase Perro
  const perro1 = new Perro("Max", "Labrador");
  perro1.saludar(); // "Hola, soy un animal llamado Max."
  perro1.ladrar();  // "¡Guau, guau!"
  
  // Crear una instancia de la clase base Animal
  const animal1 = new Animal("Elefante");
  animal1.saludar(); // "Hola, soy un animal llamado Elefante."
  