// Uso de async/await para hacer solicitudes API de manera más legible

const url = "https://jsonplaceholder.typicode.com/posts/1";

// Función asíncrona que obtiene datos de la API
async function obtenerDatos() {
  try {
    const response = await fetch(url);  // Espera a que se complete la solicitud
    if (!response.ok) {  // Verifica si la respuesta fue exitosa
      throw new Error('Respuesta no válida');
    }
    const data = await response.json();  // Espera a que los datos se conviertan en JSON
    console.log(data);  // Muestra los datos obtenidos
  } catch (error) {
    console.error('Error:', error);  // Captura y muestra el error
  }
}

obtenerDatos();  // Llama a la función
