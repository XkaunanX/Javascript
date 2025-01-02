// Uso de cookies: Almacena datos como pequeños archivos de texto en el navegador

// Crear una cookie con un nombre y un valor
document.cookie = "usuario=Juan; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/";

// Leer cookies
console.log(document.cookie);

// Crear una cookie con parámetros adicionales
document.cookie = "preferencia_color=azul; max-age=86400; path=/"; // Expira en un día

// Eliminar una cookie (estableciendo su fecha de expiración en el pasado)
document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
