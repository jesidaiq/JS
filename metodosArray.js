let esp = "<br><br> "

document.write("<h2>Pop : elimina el ultimo el </h2>");

let nombres = ["Mariana", "Anne", "Oscar"];
document.write(nombres + esp)
let resu = nombres.pop(); //elimina el ultim elemento
document.write(nombres, esp)

document.write("<h2> Shift  elimina el primer elemento </h2>");

let array1 = [1, 2, 3, 4, 5];
document.write("Array original: ", array1, esp);
let array1R = array1.shift(); //elimina el primer elemento
document.write("Array con shift: ", array1, esp)



/** METODOS TRANSFORMADORES, MODIFICAN, CAMBIAN  */
document.write("<h2> Push agrega elemento al final del array  </h2>");

let array2 = ['a', 'b', 'c', 'd', 'e'];
document.write("Array original: ", array2, esp);
let array2R = array2.push("push"); //
document.write(array2, esp) //me muestra la cant de elementos del array, para recorrerlo tengo que usar un for 

document.write("<h2>Unshift agrega elemento al principio del array</h2>");

let array5 = [10, 20, 30, 40, 50];
document.write("Array original: ", array5, esp);
let array5R = array5.unshift("A", 2, 3, 5, "d"); // 
document.write("Array final: ", array5, esp)

document.write("<h2>Reverse  invierte el orden de los elementos</h2>");

let array4 = ['apple', 'banana', 'orange', 'grape', 'watermelon'];
document.write(array4, esp)
let array4R = array4.reverse(); //
document.write(array4, esp);

document.write("<h2>Sort ordena lexicograficamente</h2>");

let array6 = ['red', 'blue', 'green', 'yellow', 'purple'];
document.write(array6, esp)
let array6R = array6.sort(); //
document.write(array6, esp);

document.write("<h2>Splice: elimina y/o reemplaza</h2>");
//array.splice(start, deleteCount, item1, item2, ...);

let array8 = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
document.write(array8, esp)
let array8R = array8.splice(0, 5, 'orange', 'grape', 'watermelon'); /*(start) representa el índice en el que se inicia la 
modificación del array y deleteCount indica cuántos  elementos se deben eliminar desde el índice de inicio. */
document.write(array8, esp);
array8R = array8.splice(-1, 0, "FIN"); // -1 indica el final del array, saca al ultimo y agrega este.  NO USAR 
document.write(array8, esp);


/**Metodos Accesores */

document.write("<h2>Join onvierte a string, y separa con lo que le pasemos como parametro</h2>");

let autoresClasicos = [
         "William Shakespeare",
         "Jane Austen",
         "Homer",
         "Leo Tolstoy",
         "Charles Dickens",
         "H.P. Lovecraft"
];
document.write("Variable original: ", autoresClasicos, esp);
document.write(`Elemento 1: ${autoresClasicos[1]} ${esp}`);

let autoresNuevo = autoresClasicos.join("<br> • "); //c 
document.write("La variable original no se modifica: ", autoresClasicos, esp);

document.write(`Nueva variable convertida a texto: <br> • ${autoresNuevo} ${esp}`);
document.write(`Elemento 1: ${autoresNuevo[1]} ${esp}`);


document.write("<h2>Slice devuelve los elementos que pasemos por parametros </h2>");

let autoresArgentinos = [
         "Jorge Luis Borges",
         "Julio Cortázar",
         "Alejandra Pizarnik",
         "Julio Cortázar",
         "Adolfo Bioy Casares",
         "Silvina Ocampo",
];

document.write("Variable original: ", autoresArgentinos, esp);
document.write(`Elemento 1: ${autoresArgentinos[1]} ${esp}`);

let autoresArgentinosNuevo1 = autoresArgentinos.slice(0,3);
document.write("Otros seleccionados: ", autoresArgentinosNuevo1, esp);

let autoresArgentinosNuevo = autoresArgentinos.slice(0,autoresArgentinos.length) 
document.write("Todos seleccionados:  ", autoresArgentinosNuevo, esp);

let autoresArgentinosNuevoVacio = autoresArgentinos.slice(0) 
document.write("Todos seleccionados vacio:  ", autoresArgentinosNuevoVacio, esp);


let autoresArgentinosNuevoVacioMenos = autoresArgentinos.slice(0, -2) 
document.write("Todos seleccionados con negativo:  ", autoresArgentinosNuevoVacioMenos, esp);

//metodos que devuelven, no modifican 

document.write(autoresArgentinos.includes("Silvina Ocampo",),esp) //esta incluido?
document.write(autoresArgentinos.includes("Silvina ",),esp) // false 
document.write(autoresArgentinos.lastIndexOf("Julio Cortázar",),esp) // ultimo indice donde sta
document.write(autoresArgentinos.indexOf("Julio Cortázar",),esp) // primer indice donde sta
document.write(autoresArgentinos.toString(),esp)  //convierte el array en string 


/** De repeticion */
document.write("<h2> ForEach: itera sobre los elementos y realiza alguna acción, como escribir en el documento.  </h2>");

let poetas = [
         "William Shakespeare",
         "Emily Dickinson",
         "Pablo Neruda",
         "Maya Angelou",
         "Federico García Lorca",
         "Langston Hughes",
         "Sylvia Plath",
         "Robert Frost",
         "Rumi",
         "Walt Whitman"
       ];
       
poetas.forEach ( p => document.write( "• ", p + "<br>") );  

document.write("<h2> Filter se utiliza para filtrar elementos y crear un nuevo array basado en una condición dada mientras ésta de true </h2>");

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar solo los números pares
let numerosPares = numeros.filter(numero => numero % 2 === 0 );

document.write( "• " + numerosPares); 

