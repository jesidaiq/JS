/** console.clear (); // limpia la consola
console.log ("Console log: mensaje de depuracion  ") //se muestra en consola mensaje de depuracion 
let a = 10; 
let b= 20; 
console.assert( a > b );  //afirma esto. si es true no dice nada, si es false causa error 
console.error("D"); //lanza error 
console.info ("Console menaje de informacion  ") //se muestra en consola mensaje de depuracion 

console.table( [  //muestra una tabla de un array u objeto en consola ]) 

console.warn ("CUIDADO")
 console.dir () Muestra com,o un directorio un array o un objeto, con su nombre bien ordenado 


 console.count () // Me dice cuantas veces s uso una funcion
 function greet(user) {
  console.count("mensaje  contabilizador "); //se va "guardando" y mostrando en consola como default: i
  return "hi " + user;
}

document.write(greet("alice"));
document.write(greet("alice"));
document.write(greet("alice"));
document.write(greet("alice"));

FUNCIONES DE AGRUPACION 

//console.group(label): Comienza un grupo en la consola con un nombre o etiqueta especificada por el parámetro label. Todos los mensajes de consola que se envíen después de esta llamada aparecerán dentro de este grupo hasta que se llame a console.groupEnd(). Puedes anidar grupos llamando console.group() dentro de otro grupo.


console.group('Grupo Principal');
console.log('Mensaje dentro del grupo');
console.groupEnd();


// console.groupCollapsed(label): Similar a console.group(), pero inicia el grupo en un estado colapsado por defecto. El contenido del grupo no se mostrará automáticamente en la consola hasta que el usuario lo expanda. Esto puede ser útil para grupos que contienen mucha información.


console.groupCollapsed('Grupo Colapsado');
console.log('Mensaje dentro del grupo colapsado');
console.groupEnd();


// console.groupEnd(): Finaliza el grupo actual en la consola.

console.group('Grupo Principal');
console.log('Mensaje 1');
console.groupEnd();
console.log('Mensaje 2 fuera del grupo');


*/

//ESTILOS PARA textos EN CONSOLA 

console.log('%cPROHIBIDO', 'color: red; font-weight: bold; padding: 5px 100px; background: yellow; font-size: 15px;');

