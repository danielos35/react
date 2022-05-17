// Variables................................
const nombre = "Daniel";
let apellido = "Márquez";

console.log(nombre, apellido);

// Template string..........................

let getNombre = function (nombre) {
  return `Hola ${nombre}`;
};
console.log(`
    ${nombre}
    ${apellido}
    ${2 + 2}
    ${getNombre(nombre)}`);

// Objeto literales

const persona = {
  nombre: "Daniel",
  marquez: "Felipe",
  edad: 45,
};

const personaDos = {
  nombre,
  apellido,
};

console.log(persona, personaDos);

// Hacer copia de un objeto...................................

let testObjOne = {
  name: "Daniel",
  lastName: "Apellido",
};

let copiaDelObjeto = { ...testObjOne };

// Arreglos...................................................
// Crear arreglo con posiciones
// Argumento, numero de posiciones del arreglo
const arreglo = new Array(2);

// Retornar un objeto de manera implicita
const objeto = () => ({ nombre: "Daniel" });
console.log(objeto);
