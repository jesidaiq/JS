/*let cantidad = prompt("Cuantos alumnos son? ");
let alumnosTotales = [];

for (let i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno" + (i + 1)), 0];
}

for (let i = 0; i < 5; i++) {
    for (let alum = 0; alum < alumnosTotales.length; alum++) {
        let presencia = prompt("El alumno está P o A: ", alumnosTotales[alum][0]);
        if (presencia.toLowerCase() === "p") { //method returns this string converted 
            alumnosTotales[alum][1]++;
        }
    }
}

for (let al in alumnosTotales) {
    let presentes = alumnosTotales[al][1];
    let ausentes = 5 - presentes;
    let resultado = `${alumnosTotales[al][0]}: cantidad de ausencias: ${ausentes} y presentes: ${presentes}.`;
    if (ausentes >= 2) {
        resultado += "★ Reprobado por ausencias.";
    } else {
         resultado += "☆ Aprobado! ";
    }
    console.log(resultado); 
}
*/



/**
 * Crea un programa que permita ingresar las notas de los estudiantes en una asignatura.
 * Deberás pedir al usuario que ingrese la cantidad de estudiantes y luego ingresar el nombre  y la nota de cada estudiante. Luego, calcula el promedio de notas y 
 * muestra la situación de cada estudiante.
Las reglas son las siguientes:
Si el promedio es mayor o igual a 7, el estudiante aprueba.
Si el promedio es menor a 7, el estudiante reprueba. 

let cantidadAlum = prompt("Cuantos alumnos va ingresar? ");
let alumnos = [];

for (let i = 0; i < cantidadAlum; i++) {
         let nombre = prompt("Ingrese el nombre del alumno: ");
         let nota = parseFloat(prompt(`Ahora ingrese la nota de ${nombre}: `));
         alumnos.push([nombre, nota]); //empuja el elemento al final del array, modificando su length 
}

// Mostrar nombres y notas de los alumnos
for (let i = 0; i < alumnos.length; i++) {
         console.log(`Nombre: ${alumnos[i][0]}, Nota: ${alumnos[i][1]}`);
}

const promedios = () => {
         let sumaNotas = 0;
     
         for (let i = 0; i < alumnos.length; i++) {
         //console.log ( alumnos[i][1]); muestro que accedo al elemento 1 de la i , con él estoy operando. 
             sumaNotas += alumnos[i][1];  //ahora suma va ser suma + el elemento 1 del array i 
         }
         
         let promedioTotalFinal = sumaNotas / alumnos.length;  // Calcular el promedio total
         console.log(`El promedio total final es: ${promedioTotalFinal}`);
         return promedioTotalFinal;  // Devolver el promedio total
     };
     
     console.log(promedios());
     console.log(alumnos)
     
     */


/***
 * Problema: Estadísticas de una lista de números

Escribe un programa que permita ingresar una lista de números y calcule algunas estadísticas simples sobre esa lista. El programa debe realizar lo siguiente:
Pedir al usuario que ingrese la cantidad de números que va a ingresar.
Luego, solicitar al usuario que ingrese cada número.
Calcular y mostrar la suma, el promedio y el número más grande de la lista.
 */

/*

let cantNros =parseInt(prompt("Ingrese la cantidad de numeros que quiere ingresar: "));
let nrosIngresados = []; 
let sumaTotal =0;
let promedio = 0;
let maximo = 0; 


for (let i = 0; i < cantNros ; i++ ) {
         let nroAcumular = parseFloat(prompt("Ingrese el numero: ")); 
         nrosIngresados.push(nroAcumular);
         sumaTotal += nroAcumular;
}

promedio = parseInt (sumaTotal / nrosIngresados.length); 
maximo = parseFloat(Math.max(...nrosIngresados));
console.log (nrosIngresados)
console.log(` La suma es:  ${sumaTotal}, el promedio es ${promedio} y el numero mas grande ingresado en ${maximo}`);
*/



/**Problema: Números Primos

Escribe un programa que determine si un número ingresado por el usuario es un número primo o no. Puedes seguir los siguientes pasos:

Pedir al usuario que ingrese un número entero positivo.
Verificar si el número es mayor que 1.
Comprobar si el número es divisible por algún número entre 2 y la raíz cuadrada del número. Si es divisible por algún número en ese rango, no es primo; de lo contrario, es primo.
Mostrar un mensaje indicando si el número es primo o no.



let nros = parseInt ( prompt("Ingrese un numero entero positivo ")); 


if (nros >=0 ) {
    console.log (`Ingreso  ${nros} ` )
    if  (nros %2 == 0  ){
        let raiz = Math.sqrt (nros);
        console.log ( ` La raiz cuadrada es: ${raiz}`)  
    } else {
        console.log ("El numero es impar. ")
    }
} else {
    console.log ("El numero debe ser mayor a 0 ")
}
 */

/** Materias  */

/**Crear una funcion que al pasarle como parámetro la materia nos devuelva el profesor asignado 
 * y el nombre de todos los alumnos  
 * crear función que nos diga En cuántas clases está el alumno 
Nombrar las clases en las que está y los profesores de cada una

let alumnosalgebra = ["Juan", "Carlos", "Laura", "Pedro", "Ana"];
let alumnospensamientoCientifico = ["María", "Carlos", "Luis", "Marta"];
let alumnosmatematica = ["Juan", "María", "Carlos", "Laura", "Pedro"];

*/

// Arrays de materias con alumnos asignados
let fisica = [
    { nombre: "Juan", tipo: "alumno" },
    { nombre: "María", tipo: "alumno" },
    { nombre: "Carlos", tipo: "alumno" },
    { nombre: "Laura", tipo: "alumno" },
    { nombre: "Pedro", tipo: "alumno" },
    { nombre: "Ana", tipo: "alumno" },
    { nombre: "David", tipo: "alumno" },
    { nombre: "Elena", tipo: "alumno" },
    { nombre: "Luis", tipo: "alumno" },
    { nombre: "Marta", tipo: "alumno" },
    { nombre: "Profe Matias", tipo: "profesor" }
];

let matematica = [
    { nombre: "María", tipo: "alumno" },
    { nombre: "Carlos", tipo: "alumno" },
    { nombre: "Pedro", tipo: "alumno" },
    { nombre: "Ana", tipo: "alumno" },
    { nombre: "Elena", tipo: "alumno" },
    { nombre: "Luis", tipo: "alumno" },
    { nombre: "Marta", tipo: "alumno" },
    { nombre: "Profe Diego", tipo: "profesor" }
];
let algebra = [
    { nombre: "Juan", tipo: "alumno" },
    { nombre: "María", tipo: "alumno" },
    { nombre: "Carlos", tipo: "alumno" },
    { nombre: "Elena", tipo: "alumno" },
    { nombre: "Luis", tipo: "alumno" },
    { nombre: "Marta", tipo: "alumno" },
    { nombre: "Profe Martin", tipo: "profesor" }
];
let quimica = [
    { nombre: "Juan", tipo: "alumno" },
    { nombre: "Carlos", tipo: "alumno" },
    { nombre: "Laura", tipo: "alumno" },
    { nombre: "Pedro", tipo: "alumno" },
    { nombre: "Ana", tipo: "alumno" },
    { nombre: "Elena", tipo: "alumno" },
    { nombre: "Profe Marcos", tipo: "profesor" }
];

function obtenerProfesorAsignado(materia) {
    // Filtra el array para obtener al profesor
    let profesor = materia.find(i => i.tipo === "profesor");
    if (profesor) {
        console.log("El profesor asignado es: " + profesor.nombre + "<br>");

    } else {
        console.log("No se encontró un profesor asignado para la materia.");
    }
    console.log("Los alumnos de la clase son: ");
    // Itera sobre los alumnos
    for (let i = 0; i < materia.length; i++) {
        if (materia[i].tipo === "alumno") {
            console.log(materia[i].nombre + ", ");
        }
    }
    console.log("<br><br>");
}

obtenerProfesorAsignado(fisica);
console.table (quimica)
console.table (algebra)


console.log('%c ', 'color: red; font-weight: bold; padding: 0px 100px; background: LightSteelBlue; font-size: 15px;');


let alumnos = [
    { nombre: "T", fisica: 9, quimica: 9, Algebra: 7 },
    { nombre: "J", fisica: 2, quimica: 7, Algebra: 5 },
    { nombre: "A", fisica: 2, quimica: 3, Algebra: 8 },
    { nombre: "P", fisica: 9, quimica: 7, Algebra: 8 },
];

 const ApruebaoNo = (al) => {
    for (let i = 0; i < al.length; i++) {
        let aprobadoF = 0;
        let aprobadoQ = 0;
        let aprobadoA = 0;

        if (al[i].fisica >= 7) {
            aprobadoF += al[i].fisica;
            console.log(al[i].nombre + ": su nota de fisica: " + al[i].fisica);
        } else {
            console.log(al[i].nombre + '%c Fisica desprobada. ' , 'color: red; font-size: 11px' );
        }
        if (al[i].quimica >= 7) {
            aprobadoQ += al[i].quimica;
            console.log(al[i].nombre + ": su nota de quimica: " + al[i].quimica );
        } else {
            console.log(al[i].nombre + '%c Quimica desaprobada. ' , 'color: red; font-size: 11px' );
        }
        if (al[i].Algebra >= 7) {
            aprobadoA += al[i].Algebra;
            console.log(al[i].nombre + ": su nota de Algebra: " + al[i].Algebra);
        } else {
            console.log(al[i].nombre + '%c Algebra desaprobada. ' , 'color: red; font-size: 11px' );
        }

        let promedio = (aprobadoA + aprobadoF + aprobadoQ) / 3; // Promedio de las tres materias
        promedio = Math.round(promedio);
        console.log("El promedio de " + al[i].nombre + " es: " + promedio);
    }
}

ApruebaoNo(alumnos);

const datos = [
    { nombre: "Mary", edad: 25, ciudad: "Málaga" },
    { nombre: "Stephanie", edad: 30, ciudad: "Madrid" },
    { nombre: "", edad: 22, ciudad: "Mallorca" }
];

console.table(datos);

console.group("Grupo 1");
console.log("Mensaje 1");
console.log("Mensaje 2");
console.groupEnd();

console.group("Grupo 2");
console.log("Mensaje 3");
console.log("Mensaje 4");
console.groupEnd();


console.group("Operaciones matematicas");
console.log (5+3);
console.groupEnd(); 

console.group("Información Personal");
let p =  [
    { nombre: "Jesica" , edad : 30},
    { nombre: "Diego" , edad: 38}
]
console.table (p);
console.groupEnd(); 

console.groupCollapsed ("Colapsado")
console.log ("a");
console.groupEnd(); 