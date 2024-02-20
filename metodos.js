let espacio = "<br><br>"


/**Metodos de cadena  */

/**Buscan y devuelven un valor  */
let cadena = "Cadenas prueba";
let cadena2 = "Cadena de prueba"

/**StarsWith */
stars = console.log (cadena.startsWith("Cad"))

ends = console.log (cadena.endsWith("eba"))

inclu = console.log (cadena.includes("denas "));

inde =console.log (cadena.indexOf("")) //Primera posicion en la que se encuentra

ind = console.log (cadena.lastIndexOf ("a")) //recorre de atras para adelante
console.log (cadena) 

cadena.padStart (100, 1)
console.log (cadena) 


/* Rellena con valores o los repite */
const str1 = '0';
console.log("PadStar ", str1.padStart(20, ' 1 ')); //cant de caracteres total y cual va ser el relleno, lo que se va repetir hasta llenar el espacio

const str2 = '2';
console.log("PadEnd ", str2.padEnd(10, ' 1 ')); //cant de caracteres total y cual va ser el relleno, lo que se va repetir hasta llenar el espacio

const str3 = '3';
console.log("repeat ", str3.repeat(10)); //cant de caracteres total y cual va ser el relleno, lo que se va repetir hasta llenar el espacio



/* Lo convierte a array, separando los elementos del array pr lo que le pasemos como valor en split */

let nombre ="Jesica Daiana"; 
let apellido = "Acosta";

res = nombre.split("a"); //se divide cada que encuentra esto 
console.log (res)


res = apellido.substring(1,4) //Muestra del indice x al indice y, siolo lo muestra no lo modifica (el indice y no lo incluye )
console.log (res)

console.log ( "Queda igualmente: ",apellido)


let a = "AA";
let b = "uuu";

a = a.toLowerCase(); //minusc
b = b.toUpperCase(); //mayus

console.log(a, b);

let nro = 104 ; 
let resu = nro.toString(); //convierto a numero 
console.log (resu + 2 ); //lo concatena, no lo toma como numero 


let array = " aaaa aa";
document.write(array.length , espacio)
array = array.trim() ;  //lo convierto a string 
document.write(array, espacio)
document.write(array.length)
 












