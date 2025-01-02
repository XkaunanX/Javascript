// Métodos útiles de objetos

const usuario = {
    id: 1,
    nombre: "Ana",
    correo: "ana@example.com",
  };
  
  // Object.keys: Obtiene las claves del objeto
  const claves = Object.keys(usuario);
  console.log("Claves del objeto:", claves);
  
  // Object.values: Obtiene los valores del objeto
  const valores = Object.values(usuario);
  console.log("Valores del objeto:", valores);
  
  // Object.entries: Obtiene un array de pares clave-valor
  const entradas = Object.entries(usuario);
  console.log("Entradas del objeto:", entradas);
  
  // Object.assign: Copia propiedades de un objeto a otro
  const copia = Object.assign({}, usuario);
  console.log("Copia del objeto:", copia);
  
  // Object.freeze: Congela el objeto para que no pueda ser modificado
  const objetoCongelado = Object.freeze(usuario);
  usuario.nombre = "Maria"; // No se modifica porque está congelado
  console.log("Objeto congelado:", usuario);
  