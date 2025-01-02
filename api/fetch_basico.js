// Uso básico de fetch para obtener datos de una API

const url = "https://jsonplaceholder.typicode.com/posts/1"; // URL de ejemplo

// Usando fetch para obtener datos
fetch(url)
  .then(response => {
    if (!response.ok) {  // Verifica si la respuesta es exitosa (status 200-299)
      throw new Error('Red no válida');
    }
    return response.json();  // Convierte la respuesta en formato JSON
  })
  .then(data => {
    console.log(data);  // Muestra los datos obtenidos
  })
  .catch(error => {
    console.error('Hubo un error:', error);
  });
