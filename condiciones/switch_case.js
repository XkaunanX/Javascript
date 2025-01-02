// Uso de switch

let dia = 3;

switch (dia) {
  case 1:
    console.log("Es lunes.");
    break;
  case 2:
    console.log("Es martes.");
    break;
  case 3:
    console.log("Es miércoles.");
    break;
  case 4:
    console.log("Es jueves.");
    break;
  case 5:
    console.log("Es viernes.");
    break;
  case 6:
    console.log("Es sábado.");
    break;
  case 7:
    console.log("Es domingo.");
    break;
  default:
    console.log("Día inválido.");
    break;
}

// Ejemplo con strings
let fruta = "manzana";

switch (fruta) {
  case "manzana":
    console.log("Las manzanas son rojas o verdes.");
    break;
  case "banana":
    console.log("Las bananas son amarillas.");
    break;
  case "naranja":
    console.log("Las naranjas son naranjas.");
    break;
  default:
    console.log("Fruta desconocida.");
    break;
}
