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
console.log(copiaDelObjeto);

// Arreglos...................................................
// Crear arreglo con posiciones
// Argumento, numero de posiciones del arreglo
const arreglo = new Array(2);
console.log(arreglo);

// Retornar un objeto de manera implicita
const objeto = () => ({ nombre: "Daniel" });
console.log(objeto);

// Desestructuracion

let personaOBJ = {
  nameOBJ: "Daniel",
  lastNameOBJ: "Márquez",
};

let { nameOBJ: nombreI, lastNameOBJ: apellidoI } = personaOBJ;
console.log(nombreI, apellidoI);

// Desestructurar como argumento de  una función
let imprimirPersona = function ({ nameOBJ, lastNameOBJ, tel = 123 }) {
  console.log(nameOBJ, lastNameOBJ, tel);
};

imprimirPersona(personaOBJ);

// Desestructuración anidada
let paisColombia = {
  capital: "Botogota",
  otras: {
    primera: "Medellin",
    segunda: "Manizales",
  },
};

let {
  pais,
  otras: { primera, segunda },
} = paisColombia;
console.log(pais, primera, segunda);

// Desestructurar arreglos
const personajes = ["Chavo", "tarzan", "Mouse"];
let [, , p3] = personajes;
let [p1, p2, p_3] = personajes;
console.log(p1, p2, p_3, p3);

// Funciones
let funcionalidades = [
  (nombre) => {
    console.log("Hola ", nombre);
  },
  122,
];
funcionalidades[0]("Daniel");

let [funcion, numero] = funcionalidades;
funcion("Felipe");
console.log(numero);


// PROMESAS

let objetoAConsultar = [
  {nombre:'Daniel'},
  {nombre:'Pedro'},
  {nombre:'Felipe'},
  {nombre:'Nestor'},
]


let consultarNombre = function(posición){

  return new Promise((resolve, reject)=>{
    // Lanza respuesta al then
    if(objetoAConsultar[posición]){
      resolve(objetoAConsultar[posición]);
    }else{
      reject('Dato no exite');
    }
  
    // Lanza respuesta al catch
  }); 
  
}

consultarNombre(2).then(console.log).catch(console.log)


// fetch.............................
// const API_KEY = 'BATA8D9T2GkMUePGXGwJQq1NGNFGdqJg';
// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)

// peticion
//   .then(res=>{return res.json()})
//   .then(({data})=>{
//     let {url} = data.images.original
//     const img = document.createElement('img')
//     img.src = url;
//     document.body.append(img)
//   }
//     )

// Con Await y async

let getImagen = async function(){

  try{

    const API_KEY = 'BATA8D9T2GkMUePGXGwJQq1NGNFGdqJg';
    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const {data} = await respuesta.json();
    let {url} = data.images.original
    const img = document.createElement('img')
    img.src = url;
    document.body.append(img)


  }catch(err){
    console.log(err);
  }
 
}

getImagen()

// EStado:
  // Información de un componente en un punto determinado del tiempo
  console.log('Estado');