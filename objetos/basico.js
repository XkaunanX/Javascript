// Creación y manipulación de objetos

// Crear un objeto básico
const persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function () {
      return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    },
  };
  
  console.log("Nombre:", persona.nombre);
  console.log("Edad:", persona.edad);
  console.log(persona.saludar());
  
  // Agregar propiedades a un objeto
  persona.ocupacion = "Desarrollador";
  console.log("Ocupación:", persona.ocupacion);
  
  // Eliminar propiedades
  delete persona.edad;
  console.log("Después de eliminar edad:", persona);
  