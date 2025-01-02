// Ejemplo de uso de `this`

// En un objeto
const persona = {
    nombre: "Carlos",
    edad: 25,
    saludar: function () {
      console.log(`Hola, me llamo ${this.nombre}.`);
    },
  };
  persona.saludar(); // Hola, me llamo Carlos
  
  // En una función global
  function mostrarThis() {
    console.log(this);
  }
  mostrarThis(); // En el navegador: Window | En Node.js: objeto global
  
  // En el contexto de una clase
  class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    presentarse() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  const juan = new Persona("Juan", 30);
  juan.presentarse();
  