let lineas = "<br><br>****************************************<br> <br> ";
const espacio = () => document.write("<br><br>------------------------------------------------<br><br>");

/** TIPADO DINAMICO
 * let number = 4; 
let string = "Hola Mundo String";
let verdad = true;
let falso = false;
let undeF ; 
console.log (typeof(number))
console.log (number, string,verdad,falso, undeF) 
number ="Jesica"
console.log (typeof(number))
 */

/**  OBJETOS
 * Agrupacion de datos deun mismo tipo
 **/

let nombre = "Harry";
let apellido = "Potter";
let edad = 35;

let persona = {}; /**Objeto literal vacio */

let personaje = {
    nombre: "Harry",
    apellido: "Potter",
    edad: 16,
};

console.log(personaje);

personaje.nombre = "Luna";  //puedo acceder a las propiedades (o llave valor) con punto
personaje["apellido"] = "Lovegood";  //o notacion corchetes 
personaje.edad = 35;

console.log(personaje)

delete personaje.edad; // borrar - objeto - propiedad 
console.log(personaje)



/**ARRAY - COLECCION 
 * 
 * **/

let animales = [
    "perro", "gato", "elefante", "jirafa", "tigre", "león", "mono",
    "canguro", "koala", "pingüino"
];

console.log("<br> Los animales son:", animales)

console.log(animales[1]);
animales[3] = "Dragon"; //si el indice esta ocupado, lo pisa. 

console.log("<br> Ahora Los animales son:", animales)

animales.push("PUSH") //PUSH empuja un nueva prop al final. 

console.log("<br>Ahora Los animales PUSH son:", animales)
console.log(animales.length);
delete animales[2]; //elimina el valor, quedando el indice vacio y el length igual
console.log(animales.length);
console.log("<br> Los animales son:", animales)



document.write(lineas)
//ARRAYS ASOCIATIVOS

let libro1 = {
    nombre: "Bajar es lo peor",
    autor: "Mariana Enriquez",
    anioPublicacion: 2013,
    paginas: 200
};

let libro2 = {
    nombre: "Las cosas que perdimos en el fuego",
    autor: "Mariana Enriquez",
    anioPublicacion: 2016,
    paginas: 250
};

let libro3 = {
    nombre: "Nuestra parte de noche",
    autor: "Mariana Enriquez",
    anioPublicacion: 2019,
    paginas: 300
};

document.write("<br> Array : ", libro1) //Array : [object Object]
document.write("<br> Arrays: ", libro1[1]) //undefined
document.write("<br> Array asociativo con punto: ", libro1.nombre)
document.write("<br> Arrays asociativo con corchetes: ", libro1["nombre"])

let nombreLibro = libro1.nombre;

document.write("<br>El nombre del libro de ", libro1.autor, " es: ", nombreLibro, " del anio ", libro1.anioPublicacion)


document.write(lineas)




/**
 * DECLARATION  : declaro algoi que voy a utilizar en un futuro
 * let - const - function - function* - async function* - class - export/import 
* STATEMENT  : tareas 
* it - for else-switch
EXPRESION púedes hacer un console.log
* Cuando obtienes un valor de un codigo., cuando hace algo, 
**/

/***
 * 
 * OPERADORES ARITMETICOS
 */


let a = 15;
let b = 3;

console.log(a + b);
console.log(a * b);
console.log(a % b);  // MODULO /LO QUE SOBRA DE LA DIVISION 
console.log(a ** b) //potencia

console.log("A es: ", a);
console.log(a++);
console.log("A es: ", ++a);

let i = 20;
console.log(i == 20); //solo comparata el valor 
console.log(i === "20"); // compara el valor y el tipo de dato
//SIEMPRE USAR TRIPLE OPERADOR DE COMPARACION 



document.write("BUCLES E ITERACION ");

numeroParaSumar = 9;

if (numeroParaSumar < 10) {
    numeroParaSumar++;
    document.write("Es menor que 10 ");
}

//dowhile 

document.write(lineas);

let nroDoWhile = 2;
do {
    document.write(nroDoWhile, "<br>");
    nroDoWhile++;
    //    console.log("ahora es:" , nroDoWhile)
}
while (nroDoWhile < 4);

//Lo ejecuta una vez al DO aunque luego la condicion no se cumpla

console.log("<br> <br>  FOR <br> ")

let nombresArray = [];  // Declarar el array fuera del bucle para acumular los nombres

function practicaFor() {
    for (let i = 0; i < 7; i++) {
        nombresArray.push(prompt("Ingrese su nombre: "));  // Agregar el nombre al array
        if (i == 4) {
            break;
        }
        console.log(i)
    }
    console.log("<br>Los nombres son: " + nombresArray.join(', '));
}
espacio();

//------------------------------------------------



//document.write("FOR IN - Recorre y muestra el INdice del array  <br> ")

let animalsIn = ["perro", "gato", "pez"];
function practicaForIn() {
    for (element in animalsIn) {
        document.write("Indice: ", element, "<br>")
    }
}
practicaForIn();
espacio();


//document.write("FOR OF - recorre y muestra el elemento del array <br>")

let animals = ["perro", "gato", "pez"];

function practicaForOf() {
    for (element of animals) {
        document.write("Elemento: ", element, "<br>")
    }
}

//practicaForOf();
espacio();

document.write("< Array de array > <br>")

let mujeres = ["☆ Anna ", "☆ Cinder", "☆ Mary", "☆ Jane"];
let personas = ["Gabriel", "Roberto", mujeres, "Julio", "Steve"];

forPersonas:
for (let i in personas) {
    if (i == 2) { //si esto da true
        for (let j of mujeres) { //recorre el array completo
            break forPersonas; // Sale del bucle etiquetado 'forPersonas'
            document.write(" <br>", j, "<br>")
        }
    } else {
        document.write(" <br>- ", personas[i], "<br>")
    }
}
espacio();

document.write("Funciones con return <br>");

function conReturn() {
    let a = 10 + 1;
    return "Operacion exitosa"
}
//document.write(conReturn());
espacio();

document.write("Funciones con argumentos  <br>");
function calcular(a, b) { //con argumentos
    document.write("El resultado es: ", a + 11);
}
//calcular(200, 1);
espacio();

document.write("Funcion flecha  <br>");

const calculoFuncionFlecha = (a, b) => {
    document.write("Los numeros ingresados son: ", a, " y ", b)
    document.write("<br>El resultado funcion flecha es: ", a * 15);
}
/*
calculoFuncionFlecha(200, 100); */
espacio();

//Problema 1: 

let free = true; //flag 
const time = (hora) => {
        let edad = prompt("Cual es tu edad? ");
        if (edad >= 18) {
            if (time > 2 && time < 7) {
                document.write("Tu edad es ", edad, " podes ingresar  y pasas gratis <br>");
            } else {
                document.write("Tu edad es ", edad, " podes ingresar, pagas $5000 <br>");
            }
        } else {
            document.write("Tu edad es ", edad, " no podes ingresar <br>");
        }
    }
/*
time (11);
time (3);
time (4);*/

espacio();

/***
 *Supongamos que estás creando un programa para verificar el acceso a un evento nocturno. Tienes un evento que comienza a 
 las 9 PM y termina a las 4 AM. Además, las personas menores de 21 años deben pagar una tarifa de $10, mientras que las personas mayores de 21 pueden ingresar gratis.
Tu tarea es escribir una función flecha llamada verificarAcceso que tome la hora actual (en formato de 24 horas) y la edad de una persona como parámetros, y devuelva un mensaje indicando si la persona puede ingresar al evento y si hay alguna tarifa.
 */


const verificarAcceso = (hora) => {
    if ((hora >= 21 && hora <= 24) || (hora >= 0 && hora < 4)) {
        let edad = prompt("Cual es tu edad?");
        if (edad < 21) {
            document.write("Tu tarifa es de $10 <br>");
            document.write("Horario de entrada: " ,hora , "<br><br>");
            } else {
                document.write("Tu tarifa es gratis porque tienes: " ,edad , " de edad y son las " , hora,  "hrs. <br>")
            }
    } else {
        document.write("El evento esta cerrado al publico.  <br>")
        document.write("Horario: " ,hora , "<br><br>");
    }
}
/***
 * verificarAcceso(22);
verificarAcceso(2);
verificarAcceso(3);
verificarAcceso(5);
 */





















