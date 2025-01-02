# JavaScript

JavaScript es un lenguaje de programación de alto nivel, conocido por su flexibilidad y potencia. Originalmente diseñado para la creación de páginas web interactivas, se ha expandido a aplicaciones del lado del servidor gracias a tecnologías como Node.js. Es uno de los lenguajes más utilizados en la web y se ejecuta directamente en el navegador o en entornos de ejecución como Node.js.

## En qué contexto nació JavaScript

JavaScript fue creado en 1995 por Brendan Eich mientras trabajaba en Netscape. Su propósito original era agregar interactividad a las páginas web, haciendo posible que los navegadores respondieran de manera dinámica a las acciones del usuario. Aunque inicialmente se utilizaba solo en el lado del cliente, con el tiempo ha evolucionado para ser útil también en el servidor.

## Versiones de JavaScript

A lo largo de los años, JavaScript ha pasado por diversas actualizaciones importantes, que han sido definidas por el estándar ECMAScript. Entre las versiones clave se encuentran ECMAScript 3 (1999), ECMAScript 5 (2009) y ECMAScript 6 (2015), que introdujeron nuevas características como las clases y las promesas. La comunidad continúa desarrollando nuevas versiones para mejorar el lenguaje y agregar nuevas funcionalidades.

## Qué es ECMAScript

ECMAScript es un estándar internacional que define las especificaciones del lenguaje de programación JavaScript. A través de este estándar, se establecen las reglas y funcionalidades que deben ser implementadas por los motores de JavaScript en los navegadores y otros entornos de ejecución. ECMAScript 6 (ES6) fue una actualización significativa, que introdujo características como las funciones flecha, clases y módulos.

ECMAScript 5 (ES5): Lanzado en 2009, ECMAScript 5 trajo mejoras importantes, como el soporte para "strict mode" (modo estricto) y métodos adicionales para arrays y objetos.

Ejemplo:

```javascript
"use strict"; // Modo estricto

// Uso de 'Object.defineProperty' para definir propiedades
var persona = {};
Object.defineProperty(persona, "nombre", {
  value: "Juan",
  writable: false, // No se puede modificar
  enumerable: true,
  configurable: false
});

console.log(persona.nombre); // "Juan"
persona.nombre = "Carlos"; // Error en modo estricto
```
ECMAScript 6 (ES6): ES6, lanzado en 2015, introdujo cambios significativos en el lenguaje, como las funciones flecha, clases, módulos, y la declaración de variables con `let` y `const`.

```javascript
// Funciones flecha
const saludar = (nombre) => {
  return `Hola, ${nombre}`;
};

console.log(saludar("Juan")); // "Hola, Juan"

// Clases
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

let persona = new Persona("Juan", 25);
persona.saludar(); // "Hola, soy Juan y tengo 25 años."
```

ECMAScript 7 (ES7): ES7, lanzado en 2016, fue una versión relativamente pequeña, que introdujo el operador `**` para exponentes y el método `Array.prototype.includes`.

```javascript
// Operador de exponentes
console.log(2 ** 3); // 8

// Método includes
let numeros = [1, 2, 3, 4];
console.log(numeros.includes(3)); // true
```

ECMAScript 8 (ES8): ES8, lanzado en 2017, introdujo async y await, que mejoraron la forma de manejar las promesas de manera asincrónica.

```javascript
// Uso de async/await
async function obtenerDatos() {
  let respuesta = await fetch("https://api.example.com/datos");
  let datos = await respuesta.json();
  console.log(datos);
}

obtenerDatos(); // Llamada asincrónica
```

ECMAScript 9 (ES9): ES9, lanzado en 2018, introdujo mejoras adicionales a las funciones, como las funciones `rest` y `spread`.

```javascript
// Rest y Spread
function sumar(a, b, ...otrosNumeros) {
  return a + b + otrosNumeros.reduce((acc, num) => acc + num, 0);
}

console.log(sumar(1, 2, 3, 4, 5)); // 15

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
```

ECMAScript 10 (ES10): ES10, lanzado en 2019, introdujo métodos adicionales para trabajar con arrays y objetos, como `Array.prototype.flat`, `Object.fromEntries` y mejoras en `String.prototype.trim`.

```javascript
// Flat para aplanar arrays
let arr = [1, [2, 3], [4, [5, 6]]];
console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6]

// Object.fromEntries
let entradas = [["nombre", "Juan"], ["edad", 30]];
console.log(Object.fromEntries(entradas)); // { nombre: "Juan", edad: 30 }
```

ECMAScript 11 (ES11): ES11, lanzado en 2020, introdujo varias mejoras, como el operador `??` (nullish coalescing), el `BigInt` para números enteros grandes y mejoras en las cadenas de texto.

```javascript
// Nullish coalescing (??)
let valor = null;
console.log(valor ?? "Valor por defecto"); // "Valor por defecto"

// BigInt
let numeroGrande = 9007199254740991n;
console.log(numeroGrande + 1n); // 9007199254740992n
```

ECMAScript 12 (ES12): ES12, lanzado en 2021, agregó características como los `Logical Assignment Operators` y la mejora de las funciones `String.prototype.replaceAll`.

```javascript
// Logical Assignment Operators
let a = null;
let b = "Valor";
a ??= b;
console.log(a); // "Valor"

// replaceAll
let texto = "Hola Mundo. Hola universo.";
console.log(texto.replaceAll("Hola", "Adiós")); // "Adiós Mundo. Adiós universo."
```

## Por qué tienen tanta retrocompatibilidad

JavaScript es conocido por su retrocompatibilidad, lo que significa que las versiones más recientes del lenguaje siguen siendo capaces de ejecutar código de versiones anteriores. Esto es crucial para asegurar que las aplicaciones existentes no dejen de funcionar con cada nueva actualización del lenguaje, permitiendo la transición gradual y sin problemas de versiones antiguas a nuevas.

## Características Principales

### Bajo o alto nivel

JavaScript es un lenguaje de alto nivel, lo que implica que abstrae los detalles complejos de la gestión de memoria y otros aspectos de bajo nivel, permitiendo a los desarrolladores enfocarse más en la lógica de su aplicación que en los aspectos técnicos de la ejecución del código.

### Uso de punteros

A diferencia de otros lenguajes como C o C++, JavaScript no permite el uso explícito de punteros. La memoria es gestionada automáticamente por el motor JavaScript a través de la recolección de basura, lo que simplifica el desarrollo y reduce los errores relacionados con el manejo de memoria.

### Paradigma y explicación de los paradigmas

JavaScript es un lenguaje multi-paradigma, lo que significa que admite varios estilos de programación. Principalmente, es utilizado en programación orientada a objetos (POO), pero también soporta programación funcional y basada en eventos. En la programación orientada a objetos, JavaScript utiliza un sistema basado en prototipos, a diferencia de la herencia clásica de otros lenguajes.

### Tipo de tipado

JavaScript utiliza tipado dinámico, lo que significa que las variables no tienen un tipo específico al ser declaradas, y su tipo puede cambiar a lo largo de la ejecución del programa. Esto le da flexibilidad al código, pero también puede conducir a errores si no se maneja cuidadosamente.

### Compilado o interpretado

JavaScript es un lenguaje interpretado. Esto significa que el código fuente se ejecuta directamente sin necesidad de ser compilado previamente. El navegador o el entorno de ejecución, como Node.js, interpreta el código en tiempo real.

### Operadores

JavaScript incluye una variedad de operadores que permiten realizar operaciones sobre los datos. Estos incluyen operadores aritméticos, de comparación, lógicos, y de asignación, entre otros. Los operadores son fundamentales para manipular datos y controlar el flujo de ejecución de los programas.

### Es del lado del servidor, o del cliente, o ambos?

JavaScript tradicionalmente se utiliza del lado del cliente, ejecutándose en los navegadores para crear aplicaciones interactivas. Sin embargo, con la introducción de Node.js, también se puede ejecutar del lado del servidor, lo que hace de JavaScript un lenguaje versátil que permite desarrollar aplicaciones completas tanto en el frontend como en el backend.

### Objetos y clases en JavaScript

En JavaScript, los objetos son colecciones de propiedades que pueden contener datos y métodos. La introducción de clases en ECMAScript 6 permitió una sintaxis más familiar y estructurada para crear objetos y manejar la herencia. Aunque JavaScript usa clases, su modelo de herencia sigue siendo basado en prototipos.

```javascript
// Definir una clase en JavaScript
class Persona {
  // Constructor de la clase
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Metodo de la clase
  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Crear una instancia de la clase Persona
let persona1 = new Persona("Juan", 30);
persona1.saludar(); // "Hola, soy Juan y tengo 30 años."

// Herencia: Definir una clase hija que extiende de Persona
class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    super(nombre, edad); // Llamar al constructor de la clase base
    this.carrera = carrera;
  }

  // Metodo adicional de la clase hija
  estudiar() {
    console.log(`${this.nombre} está estudiando ${this.carrera}.`);
  }
}

// Crear una instancia de la clase Estudiante
let estudiante1 = new Estudiante("Ana", 22, "Ingeniería");
estudiante1.saludar(); // "Hola, soy Ana y tengo 22 años."
estudiante1.estudiar(); // "Ana está estudiando Ingeniería."
```

### Cómo es importar en JavaScript y qué tantas formas existen

En JavaScript, es posible importar módulos de diferentes maneras. La forma más moderna es a través de la palabra clave `import`, introducida en ECMAScript 6. Sin embargo, también se pueden utilizar herramientas como `require` en entornos como Node.js. Cada método tiene sus ventajas y desventajas dependiendo del contexto en que se utilice.

Importacion nombrada y Exportacion nombrada

```javascript
// archivo utilidades.js
export const PI = 3.1416;
export function sumar(a, b) {
  return a + b;
}

// archivo principal.js
import { PI, sumar } from './utilidades.js';

console.log(PI); // 3.1416
console.log(sumar(2, 3)); // 5
```

Exportacion por defecto

```javascript
// archivo calculadora.js
export default function multiplicar(a, b) {
  return a * b;
}

// archivo principal.js
import multiplicar from './calculadora.js';

console.log(multiplicar(2, 3)); // 6
```

Exportacion completa de un modulo

```javascript
// archivo utilidades.js
export const PI = 3.1416;
export function sumar(a, b) {
  return a + b;
}

// archivo principal.js
import * as utilidades from './utilidades.js';

console.log(utilidades.PI); // 3.1416
console.log(utilidades.sumar(2, 3)); // 5
```

Importacion asincronica

```javascript
// archivo principal.js
async function cargarModulo() {
  const { default: multiplicar } = await import('./calculadora.js');
  console.log(multiplicar(2, 3)); // 6
}

cargarModulo();
```

### Por qué tiene tantas formas de escribir funciones

JavaScript ofrece varias maneras de escribir funciones, como funciones tradicionales, funciones flecha, funciones anónimas y generadoras. Cada tipo de función tiene características y usos específicos, lo que permite a los desarrolladores elegir la mejor opción según el contexto de su aplicación.

Función Declarada

```javascript
function suma(a, b) {
  return a + b;
}
```

Función Expresión

```javascript
// Función anónima
const suma = function(a, b) {
  return a + b;
};
```

Función Flecha

```javascript
const suma = (a, b) => a + b;
```

Función Anónima

```javascript
const resultado = function(a, b) {
  return a + b;
};
```

Función Generadora

```javascript
function* contar() {
  yield 1;
  yield 2;
  yield 3;
}

const contador = contar();
console.log(contador.next().value); // 1
console.log(contador.next().value); // 2
console.log(contador.next().value); // 3

```

### JavaScript está orientado a eventos?

Sí, JavaScript está diseñado para ser un lenguaje orientado a eventos. En el desarrollo web, esto significa que se pueden asociar funciones a eventos como clics, desplazamientos o cambios en formularios. Este modelo facilita la interacción del usuario con la página de manera dinámica.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de evento en JavaScript</title>
</head>
<body>

  <button id="miBoton">Haz clic aquí</button>

  <script>
    // Seleccionamos el botón
    const boton = document.getElementById('miBoton');

    // Asociamos un evento de clic al botón
    boton.addEventListener('click', function() {
      alert('¡Haz hecho clic en el botón!');
    });
  </script>

</body>
</html>
```

### Qué es el DOM, virtual DOM y sus eventos?

El DOM (Document Object Model) es una representación estructural de los documentos HTML y XML. Permite que los programas modifiquen la estructura y el contenido de las páginas web de manera dinámica. El virtual DOM es una técnica usada por bibliotecas como React para mejorar el rendimiento al actualizar solo las partes de la interfaz que han cambiado, en lugar de toda la página. Los eventos del DOM, como `click`, `submit`, y `mouseover`, permiten interactuar con el usuario.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Eventos del DOM</title>
</head>
<body>

  <button id="boton">Haz clic aquí</button>
  <p id="mensaje"></p>

  <form id="formulario">
    <input type="text" id="inputTexto" placeholder="Escribe algo...">
    <button type="submit">Enviar</button>
  </form>

  <script>
    // Evento click en el botón
    document.getElementById('boton').addEventListener('click', function() {
      document.getElementById('mensaje').innerText = '¡Has hecho clic en el botón!';
    });

    // Evento submit en el formulario
    document.getElementById('formulario').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe
      const texto = document.getElementById('inputTexto').value;
      alert('Formulario enviado con el texto: ' + texto);
    });
  </script>

</body>
</html>
```

### Qué son los JSON

JSON (JavaScript Object Notation) es un formato de intercambio de datos que utiliza un formato de texto ligero y fácil de leer. Es muy utilizado para transmitir datos entre el servidor y las aplicaciones web, debido a su simplicidad y compatibilidad con JavaScript.

```json
{
  "nombre": "Juan",
  "edad": 30,
  "esEstudiante": false,
  "cursos": ["Matematicas", "Historia", "Ciencias"],
  "direccion": {
    "calle": "Av. Libertador",
    "numero": 1234,
    "ciudad": "Buenos Aires"
  }
}
```

## API y Consumo de APIs

Las APIs permiten que diferentes aplicaciones se comuniquen entre sí. JavaScript proporciona herramientas como `fetch` y `axios` para consumir APIs de manera sencilla. Las APIs pueden ser utilizadas para obtener datos o realizar acciones sobre un servidor de manera asincrónica.

GET

```javascript
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

POST

```javascript
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    age: 30
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

PUT

```javascript
fetch('https://api.example.com/data/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Jane Doe',
    age: 28
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

DELETE

```javascript
fetch('https://api.example.com/data/1', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Herramientas y Bibliotecas

- **api_async**: Una técnica que permite manejar operaciones asincrónicas sin bloquear el flujo de ejecución del código.
  
- **axios.js**: Axios es una biblioteca popular para realizar solicitudes HTTP en JavaScript, ofreciendo una interfaz más fácil de usar y más poderosa que `XMLHttpRequest`.

- **fetch_basico.js**: `fetch` es una API moderna que proporciona una forma más sencilla y poderosa de realizar solicitudes HTTP en comparación con las técnicas anteriores.

JavaScript continúa siendo un lenguaje fundamental para el desarrollo web moderno, gracias a su flexibilidad y su capacidad para integrarse con otras tecnologías. A medida que evoluciona, sigue siendo una de las herramientas más poderosas en la creación de aplicaciones dinámicas e interactivas.
