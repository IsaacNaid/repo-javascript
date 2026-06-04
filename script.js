console.log("Hola ");

const nombre = "isaac";
let apellido = "naid";

console.log(nombre);
console.log(apellido);
//nombre="naid";

apellido = "bg";
console.log(apellido);


// =================================================================
// Objetos de JavaScript
// =================================================================
const persona = {
    nombre : "Isaac",
    apellido : "bg",
    edad : 18,

    apodos : [
        "daddy",
        "bebis",
        "nachas"
    ]
};

persona.apellido = "Isaac BG";
console.log(persona.nombre);
console.log("===================Fin Objetos====================");


// =================================================================
// Funciones (Ejemplos de sintaxis comentados)
// =================================================================

// function saludar(nombre){
//    return "hola" + nombre;
// }

// const saludar=(nombre)=>{
//    return "hola" + nombre;
// }

// const saludar=nombre=>{
//    return "hola" + nombre;
// }

const saludar = nombre => "hola " + nombre;

const saludo = saludar(persona.apellido);
console.log(saludo);
console.log("===================Fin Objetos====================");


// =================================================================
// Listas y Métodos de Arrays (Map)
// =================================================================
console.log("===================Listas====================");

const listaNumeros = [
    5, 10, 3, 8, 9
];

console.log(listaNumeros);
listaNumeros[3] = 7;
console.log(listaNumeros);

const numerosMultiplicados = listaNumeros.map(
    (numeroEnElQueVoy) => {
        return numeroEnElQueVoy * 3;
    }
);
console.log(numerosMultiplicados);

const numerosEnObjetos = listaNumeros.map(
    (numeroEnElQueVoy) => {
        return {
            valor : numeroEnElQueVoy
        };
    }
);
console.log(numerosEnObjetos);


// =================================================================
// Método Filter
// =================================================================
const numerosX = [90, 70, 30, 10, 50];
const numerosFiltrados = numerosX.filter(
    numX => numX > 50
);
console.log(numerosFiltrados);

// CORRECCIÓN: Se cambió de 'persona' a 'personas' para evitar el SyntaxError
const personas = [
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

const personasMayores = personas.filter(
    (personasX) => {
        return personasX.edad > 17;
    }
);
console.log(personasMayores);


// =================================================================
// Método Reduce
// =================================================================
const numerosY = [3, 6, 9, 12, 16];

const sumaNumero = numerosY.reduce(
    (variablePersistente, elemento) => variablePersistente + elemento,
    0
);

console.log(sumaNumero);

// Fin del script de práctica de JavaScript estándar
// =================================================================