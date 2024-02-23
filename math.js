
let espacio = "<br><br>"


document.write("<h1>METODOS MATH</h1>");

/**Metodo math  */

document.write("<h2>SQRT Devuelve la raiz cuadrada positiva de un numero </h2>");

let nro = Math.sqrt(25); 
document.write(nro) 

document.write("<h2>SQRT Devuelve la raiz cubica positiva de un numero </h2>");

let nroCubo = Math.cbrt(25); 
document.write(nroCubo);


document.write("<h2>MAX devuelve el mayor de cero o mas nros </h2>");

let maximo = Math.max(2, 100, 5756, 2, 4387, 33, 3342, 1, 0, 232);
document.write(maximo);

document.write("<h2>MIN </h2>");
let  min= Math.min(2, 100, 5756, 2, 4387, 33, 3342, 1, 232);
document.write(min);


document.write("<h2>RANDOM numeros entre cero y uno </h2>");

let alea = Math.random() 
document.write(alea, espacio);
alea = alea*10;  //  Lo hago entero 
document.write(alea, espacio);
document.write("<h2>ROUND </h2>");
alea = Math.round(alea); // Lo redondeo 
document.write(alea)


document.write("<h2>TRUNC: saca la parte decimal </h2>");
let number = Math.trunc (9.8)
document.write(number);

document.write("<h2> Fround devuelve la representación flotante de precisión simple más cercana de un número, representa un nro con menos decimales reduciendolo para que use menos memoria devolviendo la versión más cercana del número con precisión simple. </h2>")

let fround = Math.fround (9.13452342535456)
document.write(fround)


document.write("<h1>PROPIEDADES </h1>");

document.write("<h2>PI:  relación entre la circunferencia de un círculo y su diámetro</h2>");
let nroPi = Math.PI; 
document.write(nroPi);

document.write( " <h2> SQRT1_2 constante que representa la raíz cuadrada de 1/2 </h2>")
let nroSQRT1_2 = Math.SQRT1_2; 
document.write(nroSQRT1_2);

document.write( " <h2> SQRT2  constante que representa la raíz cuadrada de 2 </h2>")
let SQRT2 = Math.SQRT2; 
document.write(SQRT2);


document.write("<h2>Número de Euler: constante matem. aprox igual a 2.71828.</h2>");
let eulerNumber = Math.E;
document.write("Número de Euler:", eulerNumber);


document.write("<h2>Logaritmo natural de 2: constante matem. aprox igual a 0.69315.</h2>");
let naturalLogOf2 = Math.LN2;
document.write("Logaritmo natural de 2:", naturalLogOf2);


document.write("<h2>Logaritmo natural de 10: constante matem. aprox igual a 2.30259.</h2>");
let naturalLogOf10 = Math.LN10;
document.write("Logaritmo natural de 10:", naturalLogOf10);


document.write("<h2>Logaritmo base-2 de E: constante matem. proporcionando log₂(e).</h2>");
let logBase2OfE = Math.LOG2E;
document.write("Logaritmo base-2 de E:", logBase2OfE);


document.write("<h2>Logaritmo base-10 de E: constante matem. proporcionando log₁₀(e).</h2>");
let logBase10OfE = Math.LOG10E;
document.write("Logaritmo base-10 de E:", logBase10OfE);











