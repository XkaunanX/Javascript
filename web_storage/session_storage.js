// Uso de sessionStorage: Almacena datos temporalmente (mientras dure la sesión del navegador)

sessionStorage.setItem('sesion_usuario', 'activo');

// Recuperar datos de sessionStorage
const sesion = sessionStorage.getItem('sesion_usuario');
console.log(`Sesión del usuario: ${sesion}`);

// Eliminar un item de sessionStorage
sessionStorage.removeItem('sesion_usuario');

// Borrar todo el contenido de sessionStorage
// sessionStorage.clear();
