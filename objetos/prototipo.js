// Prototipos y herencia

// Crear un prototipo básico
function Animal(nombre) {
    this.nombre = nombre;
  }
  
  Animal.prototype.hablar = function () {
    console.log(`${this.nombre} hace un sonido.`);
  };
  
  // Crear un objeto heredado
  function Perro(nombre, raza) {
    Animal.call(this, nombre); // Heredar propiedades
    this.raza = raza;
  }
  
  // Heredar métodos
  Perro.prototype = Object.create(Animal.prototype);
  Perro.prototype.constructor = Perro;
  
  // Añadir métodos específicos al hijo
  Perro.prototype.ladrar = function () {
    console.log(`${this.nombre} dice: ¡Guau guau!`);
  };
  
  // Usar el prototipo
  const perro = new Perro("Firulais", "Labrador");
  perro.hablar(); // Firulais hace un sonido.
  perro.ladrar(); // Firulais dice: ¡Guau guau!
  
  // Verificar herencia
  console.log(perro instanceof Perro); // true
  console.log(perro instanceof Animal); // true
  