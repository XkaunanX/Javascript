// Uso de async/await
const obtenerDatos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Datos obtenidos");
      }, 1000);
    });
  };
  
  const procesarDatos = (datos) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${datos} procesados`);
      }, 1000);
    });
  };
  
  const guardarDatos = (datosProcesados) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${datosProcesados} guardados`);
      }, 1000);
    });
  };
  
  // Función asincrónica para manejar las promesas
  const manejarFlujoDeDatos = async () => {
    try {
      const datos = await obtenerDatos();
      console.log(datos);
  
      const datosProcesados = await procesarDatos(datos);
      console.log(datosProcesados);
  
      const resultadoFinal = await guardarDatos(datosProcesados);
      console.log(resultadoFinal);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  // Ejecutar la función
  manejarFlujoDeDatos();
  