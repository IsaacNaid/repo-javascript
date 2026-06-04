console.log("Hola ");

const nombre="isaac";

let apellido="naid";

console.log(nombre);

console.log(apellido);
//nombre="naid";

apellido="bg";
console.log(apellido);


//Objetos de js
const persona= {
    nombre : "Isaac",
    apellido : "bg",
    edad : 18,

    apodos : [
        "daddy",
        "bebis",
        "nachas"
    ]

};

persona.apellido="Isaac BG";
console.log(persona.nombre);
console.log("===================Fin Objetos====================");


//funciones

//function saludar(nombre){
//    return "hola" + nombre;
//}

//const saludar=(nombre)=>{
//    return "hola" + nombre;
//}

//const saludar=nombre=>{
//   return "hola" + nombre;
//}


const saludar=nombre=>
   "hola " + nombre;

const saludo = saludar(persona.apellido);
console.log(saludo);
console.log("===================Fin Objetos====================");
console.log("===================Listas====================");

const listaNumeros = [

    5, 10, 3, 8, 9

];

console.log(listaNumeros);
listaNumeros  [3]= 7;
console.log(listaNumeros);

const numerosMultiplicados = listaNumeros.map(
    (numeroEnElQueVoy)=>{
        return numeroEnElQueVoy * 3;
    }
);
console.log(numerosMultiplicados);

const numerosEnObjetos = listaNumeros.map(
    (numeroEnElQueVoy)=>{
        return {
            valor : numeroEnElQueVoy
        }
    }
);
console.log(numerosEnObjetos);
// funcion filter
const numerosX = [90,70,30,10,50];
const numerosFiltrados = numerosX.filter(
    numX => numX > 50
);
console.log(numerosFiltrados);
const persona = [
    {
        nombre: "Isaac",
        edad : 18
    },
    {
        nombre: "naid",
        edad : 18
    },
    {
        nombre: "bg",
        edad : 18
    },
];