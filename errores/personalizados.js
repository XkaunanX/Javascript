// Creación de errores personalizados

class ErrorDeConexion extends Error {
    constructor(message) {
      super(message);  // Llamar al constructor de la clase base `Error`
      this.name = "ErrorDeConexion";  // Establecer el nombre del error
      this.code = 500;  // Código de error personalizado
    }
  }
  
  function conexionAPIDatabase() {
    throw new ErrorDeConexion("Fallo de conexión a la base de datos");
  }
  
  try {
    conexionAPIDatabase();
  } catch (error) {
    if (error instanceof ErrorDeConexion) {
      console.error(`${error.name} (${error.code}): ${error.message}`);
    } else {
      console.error("Error desconocido:", error);
    }
  }
  