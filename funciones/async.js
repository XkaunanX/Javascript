// Funciones asincrónicas

// Función que retorna una promesa
function obtenerDatos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const exito = true;
        if (exito) {
          resolve("Datos obtenidos exitosamente.");
        } else {
          reject("Error al obtener los datos.");
        }
      }, 2000);
    });
  }
  
  // Uso de async/await
  async function procesarDatos() {
    try {
      console.log("Obteniendo datos...");
      const resultado = await obtenerDatos();
      console.log(resultado);
    } catch (error) {
      console.error(error);
    }
  }
  
  procesarDatos();
  
  // Ejemplo con fetch (API)
  async function obtenerUsuarios() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      console.log("Usuarios obtenidos:", datos);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  }
  
  obtenerUsuarios();
  