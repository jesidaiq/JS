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

