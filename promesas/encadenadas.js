// Promesas encadenadas
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
  
  // Encadenar las promesas
  obtenerDatos()
    .then((datos) => {
      console.log(datos);
      return procesarDatos(datos);
    })
    .then((datosProcesados) => {
      console.log(datosProcesados);
      return guardarDatos(datosProcesados);
    })
    .then((resultadoFinal) => {
      console.log(resultadoFinal);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  