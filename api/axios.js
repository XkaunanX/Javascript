// Ejemplo de uso de Axios para hacer una solicitud GET

// Instala Axios con `npm install axios` si lo usas en un entorno Node.js
const axios = require('axios'); // En un entorno Node.js, debes importar Axios

const url = "https://jsonplaceholder.typicode.com/posts/1";

// Usando Axios para obtener datos
axios.get(url)
  .then(response => {
    console.log(response.data);  // Muestra los datos obtenidos
  })
  .catch(error => {
    console.error('Error:', error);  // Captura errores
  });
