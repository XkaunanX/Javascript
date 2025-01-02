// Crear una promesa básica
const miPromesa = new Promise((resolve, reject) => {
    const exito = true; // Cambiar a `false` para simular un error
    setTimeout(() => {
      if (exito) {
        resolve("Promesa resuelta con éxito");
      } else {
        reject("Hubo un error");
      }
    }, 2000);
  });
  
  // Consumir la promesa con .then() y .catch()
  miPromesa
    .then((resultado) => {
      console.log(resultado); // "Promesa resuelta con éxito"
    })
    .catch((error) => {
      console.error(error); // "Hubo un error"
    });
  